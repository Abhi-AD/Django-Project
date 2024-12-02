from django.shortcuts import render, get_object_or_404, redirect
from django.db.models import Avg
from django.http import HttpResponse, JsonResponse
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
from django.core.paginator import Paginator
from taggit.models import Tag
from apps.essence.forms import ProductReviewForm
from django.template.loader import render_to_string
from django.contrib import messages


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


def checkout_view(request):
    return render(request, "essence/checkout.html")
