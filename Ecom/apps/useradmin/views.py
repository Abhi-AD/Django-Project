from django.shortcuts import render, redirect, get_object_or_404
from apps.essence.models import (
    CartOrder,
    Product,
    Category,
    CartOrderItem,
    ProductReview,
)
from django.db.models import Sum
from apps.userauth.models import User, Profile
import datetime
from apps.useradmin.forms import AddProductForm
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from apps.useradmin.decorators import admin_required


@admin_required
def dashboard(request):
    revenue = CartOrder.objects.aggregate(price=Sum("price"))
    total_order_count = CartOrder.objects.all()
    all_products = Product.objects.all()
    all_categories = Category.objects.all()
    new_customer = User.objects.all().order_by("-id")
    latest_order = CartOrder.objects.all()

    this_month = datetime.datetime.now().month

    monthly_revenue = CartOrder.objects.filter(order_date__month=this_month).aggregate(
        price=Sum("price")
    )

    if monthly_revenue["price"] is None:
        monthly_revenue["price"] = revenue["price"]

    context = {
        "revenue": revenue,
        "total_order_count": total_order_count,
        "all_products": all_products,
        "all_categories": all_categories,
        "new_customer": new_customer,
        "latest_order": latest_order,
        "monthly_revenue": monthly_revenue,
    }
    return render(request, "useradmin/dashboard.html", context)


@admin_required
def product(request):
    all_products = Product.objects.all().order_by("-id")
    all_categories = Category.objects.all()
    context = {"all_products": all_products, "all_categories": all_categories}
    return render(request, "useradmin/product/product.html", context)


@admin_required
def add_product(request):
    if request.method == "POST":
        form = AddProductForm(request.POST, request.FILES)
        if form.is_valid():
            new_form = form.save(commit=False)
            new_form.user = request.user
            new_form.save()
            form.save_m2m()
            return redirect("useradmin:product")
        else:
            print(form.errors)
    else:
        form = AddProductForm()

    context = {"form": form}
    return render(request, "useradmin/product/add_product.html", context)


@admin_required
def update_product(request, pid):
    product = Product.objects.get(pid=pid)
    if request.method == "POST":
        form = AddProductForm(request.POST, request.FILES, instance=product)
        if form.is_valid():
            new_form = form.save(commit=False)
            new_form.user = request.user
            new_form.save()
            form.save_m2m()
            return redirect("useradmin:product")
        else:
            print(form.errors)
    else:
        form = AddProductForm(instance=product)

    context = {"form": form, "product": product}
    return render(request, "useradmin/product/edit_product.html", context)


@admin_required
def delete_product(request, pid):
    product = Product.objects.get(pid=pid)
    product.delete()
    return redirect("useradmin:product")


@admin_required
def orders(request):
    orders = CartOrder.objects.all()
    context = {"orders": orders}
    return render(request, "useradmin/order/orders.html", context)


@admin_required
def order_detail(request, id):
    order = get_object_or_404(CartOrder, id=id)
    order_items = CartOrderItem.objects.filter(order_user=order)
    context = {"order": order, "order_items": order_items}
    return render(request, "useradmin/order/order_detail.html", context)


@admin_required
@csrf_exempt
def change_order_status(request, oid):
    order = get_object_or_404(CartOrder, oid=oid)
    if request.method == "POST":
        status = request.POST.get("status")
        print(status)
        order.product_status = status
        order.save()
        messages.success(request, f"Order status Change  to {status}")
    return redirect("useradmin:order_detail", order.id)


@admin_required
def shop_page(request):
    products = Product.objects.all()
    revenue = CartOrder.objects.aggregate(price=Sum("price"))
    total_sales = CartOrderItem.objects.filter(order_user__paid_status=True).aggregate(
        qty=Sum("qty")
    )
    context = {"products": products, "revenue": revenue, "total_sales": total_sales}
    return render(request, "useradmin/shop_page.html", context)


@admin_required
def reviews(request):
    reviews = ProductReview.objects.all()
    context = {
        "reviews": reviews,
    }
    return render(request, "useradmin/reviews.html", context)


@admin_required
def settings(request):
    profile = Profile.objects.get(user=request.user)
    if request.method == "POST":
        image = request.FILES.get("image")
        full_name = request.POST.get("full_name")
        phone = request.POST.get("phone")
        bio = request.POST.get("bio")
        address = request.POST.get("address")
        country = request.POST.get("country")
        if image != None:
            profile.image = image
        profile.full_name = full_name
        profile.phone = phone
        profile.bio = bio
        profile.address = address
        profile.country = country
        profile.save()
        messages.success(request, "Profile updated successfully")
        return redirect("useradmin:settings")
    context = {"profile": profile}
    return render(request, "useradmin/settings.html", context)


@admin_required
def change_password(request):
    user = request.user
    if request.method == "POST":
        old_password = request.POST.get("old_password")
        new_password = request.POST.get("new_password")
        confirm_new_password = request.POST.get("confirm_new_password")

        if confirm_new_password != new_password:
            messages.error(request, "Password does not match")
            return redirect("useradmin:change_password")

        if check_password(old_password, user.password):
            user.set_password(new_password)
            user.save()
            messages.success(request, "Password updated successfully")
            return redirect("useradmin:change_password")
        else:
            messages.error(request, "Old password does not match")
            return redirect("useradmin:change_password")
    return render(request, "useradmin/change_password.html")
