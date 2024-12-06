from django.shortcuts import render, get_object_or_404, redirect
from django.db.models import Avg, Count
from django.http import HttpResponse, JsonResponse
from apps.essence.context_processors import cart_context, main_processor

from apps.essence.models import (
    Product,
    Category,
    Vendor,
    CartOrder,
    CartOrderItem,
    ProductImages,
    ProductReview,
    Wishlist,
    Address,
)
from apps.userauth.models import Profile
from django.core.paginator import Paginator
from taggit.models import Tag
from django.core.exceptions import FieldDoesNotExist
from apps.essence.forms import ProductReviewForm
from django.template.loader import render_to_string
from django.contrib import messages
from django.urls import reverse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from paypal.standard.forms import PayPalPaymentsForm
import calendar
from django.db.models.functions import ExtractMonth


# Create your views here.
def index(request):
    day_products = Product.objects.filter(
        product_status="published", featured=True
    ).order_by("?")[:5]
    new_products = Product.objects.filter(
        product_status="published", featured=True
    ).order_by("?")[:10]
    context = {
        "day_products": day_products,
        "new_products": new_products,
    }
    return render(request, "essence/index.html", context)


def product_list_view(request):
    product = Product.objects.filter(product_status="published").order_by("?")
    paginator = Paginator(product, 4)
    page_number = request.GET.get("page", 1)
    products = paginator.get_page(page_number)
    context = {
        "products": products,
    }
    return render(request, "essence/product-list.html", context)


def product_detail_view(request, pid):
    product = Product.objects.get(pid=pid)
    product_image = product.product_images.all()
    products = Product.objects.filter(category=product.category).exclude(pid=pid)
    product_review = ProductReview.objects.filter(product=product).order_by("-date")
    average_review = ProductReview.objects.filter(product=product).aggregate(
        rating=Avg("rating")
    )
    review_form = ProductReviewForm()
    make_review = True

    if request.user.is_authenticated:
        user_review_count = ProductReview.objects.filter(
            user=request.user, product=product
        ).count()
        if user_review_count > 0:
            make_review = False

    context = {
        "product": product,
        "make_review": make_review,
        "product_image": product_image,
        "products": products,
        "product_review": product_review,
        "average_review": average_review,
        "review_form": review_form,
    }
    return render(request, "essence/product/product-detail.html", context)


def category_list_view(request):
    categories = Category.objects.all()
    context = {"categories": categories}
    return render(request, "essence/category-list.html", context)


def category_product_list(request, cid):
    category = Category.objects.get(cid=cid)
    products = Product.objects.filter(category=category, product_status="published")
    context = {"category": category, "products": products}
    return render(request, "essence/category-product-list.html", context)


def vendor_list_view(request):
    vendors = Vendor.objects.all()
    context = {"vendors": vendors}
    return render(request, "essence/vendor-list.html", context)


def vendor_details_view(request, vid):
    vendor = Vendor.objects.get(vid=vid)
    products = Product.objects.filter(
        vendor=vendor,
        product_status="published",
    )
    context = {"vendor": vendor, "products": products}
    return render(request, "essence/vendor/vendor-detail.html", context)


def tag_list(request, tag_slug=None):
    products = Product.objects.filter(product_status="published").order_by("-id")
    tag = None

    # Filter by tag if provided
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        products = products.filter(tag__in=[tag])

    context = {
        "products": products,
        "tag": tag,
    }
    return render(request, "essence/tag-list.html", context)


def ajax_add_review(request, pid):
    if request.method == "POST":
        product = Product.objects.get(pk=pid)
        user = request.user

        review_text = request.POST.get("review")
        rating_value = request.POST.get("rating")

        review = ProductReview.objects.create(
            user=user, product=product, review=review_text, rating=rating_value
        )

        average_review = ProductReview.objects.filter(product=product).aggregate(
            rating=Avg("rating")
        )

        context = {
            "user": user.username,
            "review": review_text,
            "rating": rating_value,
        }

        return JsonResponse(
            {"bool": True, "context": context, "average_review": average_review}
        )
    return JsonResponse({"bool": False, "error": "Invalid request method"})


def search_products_view(request):
    query = request.GET.get("q")
    products = Product.objects.filter(title__icontains=query).order_by("-date")
    context = {"products": products, "query": query}
    return render(request, "essence/search-results.html", context)


def filter_products_view(request):
    categories = request.GET.getlist("category[]")
    vendors = request.GET.getlist("vendor[]")
    min_price = request.GET["min_price"]
    max_price = request.GET["max_price"]

    products = (
        Product.objects.filter(product_status="published").order_by("-id").distinct()
    )
    if min_price:
        products = products.filter(price__gte=min_price)
    if max_price:
        products = products.filter(price__lte=max_price)
    if len(categories) > 0:
        products = products.filter(category__id__in=categories).distinct()
    if len(vendors) > 0:
        products = products.filter(vendor__id__in=vendors).distinct()
    product_count = products.count()
    context = {
        "products": products,
    }
    data = render_to_string("essence/async/product-list.html", context)
    return JsonResponse({"data": data, "product_count": product_count})


def add_to_cart(request):
    try:
        product_id = str(request.GET["id"])
        qty = int(request.GET["qty"])
        title = request.GET["title"]
        price = request.GET["price"]
        images = request.GET["images"]
        pid = request.GET["pid"]
    except KeyError as e:
        return JsonResponse({"error": f"Missing parameter: {str(e)}"}, status=400)

    cart_data = request.session.get("cart_data_obj", {})
    if product_id in cart_data:
        cart_data[product_id]["qty"] += qty
    else:
        cart_data[product_id] = {
            "qty": qty,
            "title": title,
            "price": price,
            "images": images,
            "pid": pid,
        }

    request.session["cart_data_obj"] = cart_data
    request.session.modified = True
    print(f"Cart Data: {cart_data}")
    return JsonResponse(
        {
            "data": cart_data,
            "totalcarditems": len(cart_data),
        }
    )


def remove_from_cart(request):
    try:
        product_id = str(request.GET["id"])
    except KeyError as e:
        return JsonResponse({"error": f"Missing parameter: {str(e)}"}, status=400)

    cart_data = request.session.get("cart_data_obj", {})
    if product_id in cart_data:
        del cart_data[product_id]
        request.session["cart_data_obj"] = cart_data
        request.session.modified = True
        return JsonResponse(
            {
                "data": cart_data,
                "totalcarditems": len(cart_data),
            }
        )
    else:
        return JsonResponse({"error": "Product not found in cart"}, status=404)


def update_cart_quantity(request):
    try:
        product_id = str(request.GET["id"])
        qty = int(request.GET["qty"])
    except KeyError as e:
        return JsonResponse({"error": f"Missing parameter: {str(e)}"}, status=400)

    cart_data = request.session.get("cart_data_obj", {})
    if product_id in cart_data:
        if qty <= 0:
            del cart_data[product_id]
        else:
            cart_data[product_id]["qty"] = qty

        request.session["cart_data_obj"] = cart_data
        request.session.modified = True

        return JsonResponse(
            {
                "data": cart_data,
                "totalcarditems": len(cart_data),
            }
        )
    else:
        return JsonResponse({"error": "Product not found in cart"}, status=404)


from django.core.exceptions import FieldDoesNotExist


@login_required
def checkout_view(request):
    cart_data = cart_context(request)
    cart_data_details = cart_data.get("cart_data", {})
    all_total_amount = cart_data_details.get("all_total_amount", 0)

    if "cart_data_obj" in request.session:
        # Create the order
        order = CartOrder.objects.create(
            user=request.user,
            price=all_total_amount,
        )

        # Dynamically detect the ForeignKey field in CartOrderItem
        cart_order_fk_name = None
        for field in CartOrderItem._meta.fields:
            if hasattr(field, "related_model") and field.related_model == CartOrder:
                cart_order_fk_name = field.name
                break

        if not cart_order_fk_name:
            raise FieldDoesNotExist(
                "CartOrderItem does not have a ForeignKey to CartOrder."
            )

        # Add items to the order
        for product_id, item in request.session["cart_data_obj"].items():
            CartOrderItem.objects.create(
                **{
                    cart_order_fk_name: order,  # Use the dynamically detected FK
                    "invoice_no": f"INVOICE_NO{product_id}",
                    "item": item.get("title", "Unknown"),
                    "image": item.get("images", ""),
                    "qty": item.get("qty", 0),
                    "price": item.get("price", "0.00"),
                }
            )

        # Prepare PayPal data
        host = request.get_host()
        paypal_dictionary = {
            "business": settings.PAYPAL_RECEIVER_EMAIL,
            "amount": all_total_amount,
            "item_name": f"Order_Item-No-{order.id}",
            "invoice": f"InVoice_NO-{order.id}",
            "currency": "USD",
            "notify_url": f"http://{host}{reverse('essence:paypal-ipn')}",
            "return_url": f"http://{host}{reverse('essence:payment_complete')}",
            "cancel_url": f"http://{host}{reverse('essence:payment_failed')}",
        }
        paypal_payment_button = PayPalPaymentsForm(initial=paypal_dictionary)

        try:
            active_address = Address.objects.get(user=request.user, status=True)
        except:
            messages.warning(
                request,
                "There are multiple active address, only one should be ACTIVATED.",
            )
            active_address = None
        print(active_address)

        context = {
            "paypal_payment_button": paypal_payment_button,
            "active_address": active_address,
        }
        return render(request, "essence/checkout.html", context)

    # If no cart data exists
    return render(request, "essence/checkout.html", {"error": "No items in the cart."})


def cart_view(request):
    return render(request, "essence/cart.html")


@login_required
def payment_complete_view(request):
    cart_data = cart_context(request)
    all_total_amount = cart_data.get("cart_data", {}).get("all_total_amount", 0)
    return render(
        request,
        "essence/payment-complete.html",
        {
            "all_total_amount": all_total_amount,
            "cart_data": cart_data.get("cart_data", {}),
        },
    )


@login_required
def payment_failed_view(request):
    return render(request, "essence/payment-failed.html")


@login_required
@login_required
def customer_dashboard(request):
    orders_list = CartOrder.objects.filter(user=request.user).order_by("-id")
    address = Address.objects.filter(user=request.user)
    user_profile = Profile.objects.get(user=request.user)

    orders = (
        CartOrder.objects.annotate(month=ExtractMonth("order_date"))
        .values("month")
        .annotate(count=Count("id"))
        .values("month", "count")
    )
    month = []
    total_orders = []

    for order in orders:
        month.append(calendar.month_name[order["count"]])
        total_orders.append(order["count"])

    if request.method == "POST":
        address_value = request.POST.get("address")
        mobile_value = request.POST.get("mobile")
        if address_value and mobile_value:
            new_address = Address.objects.create(
                user=request.user,
                address=address_value,
                mobile=mobile_value,
            )
            messages.success(request, "Address added successfully")
        else:
            messages.error(request, "Please provide both address and mobile.")

        return redirect("essence:customer_dashboard")
    context = {
        "orders": orders,
        "month": month,
        "total_orders": total_orders,
        "orders_list": orders_list,
        "address": address,
        "user_profile": user_profile,
    }
    return render(request, "essence/customer/dashboard.html", context)


def order_detail(request, id):
    try:
        order = CartOrder.objects.get(user=request.user, id=id)
        cart_order_fk_name = None
        for field in CartOrderItem._meta.fields:
            if hasattr(field, "related_model") and field.related_model == CartOrder:
                cart_order_fk_name = field.name
                break

        if not cart_order_fk_name:
            raise FieldDoesNotExist(
                "CartOrderItem model does not have a ForeignKey to CartOrder."
            )

        order_items = CartOrderItem.objects.filter(**{cart_order_fk_name: order})
        context = {"order_items": order_items}
        return render(request, "essence/customer/order-deatil.html", context)
    except CartOrder.DoesNotExist:
        return render(
            request, "essence/customer/order-deatil.html", {"error": "Order not found."}
        )


def make_address_default(request):
    id = request.GET["id"]
    Address.objects.update(status=False)
    Address.objects.filter(id=id).update(status=True)
    return JsonResponse({"bolean": True})


@login_required
def wishlist_view(request):
    wishlist = Wishlist.objects.all()
    context = {"wishlist": wishlist}
    return render(request, "essence/customer/wishlist.html", context)


@login_required
def add_wishlist_view(request):
    product_id = request.GET.get("id")
    product = Product.objects.get(id=product_id)
    wishlist_count = Wishlist.objects.filter(product=product, user=request.user).count()
    if wishlist_count > 0:
        context = {"boolean": True}
    else:
        Wishlist.objects.create(user=request.user, product=product)
        context = {"boolean": True}
    return JsonResponse(context)


from django.core import serializers


@login_required
def remove_from_wishlist_view(request):
    product_id = request.GET.get("id")
    wishlist_item = Wishlist.objects.get(id=product_id, user=request.user)
    wishlist_item.delete()
    wishlist = Wishlist.objects.filter(user=request.user)
    context = {"bool": True, "wishlist": wishlist}
    data = render_to_string(
        "essence/async/wishlist-list.html", context, request=request
    )
    return JsonResponse(
        {"data": data, "wishlist": serializers.serialize("json", wishlist)}
    )
