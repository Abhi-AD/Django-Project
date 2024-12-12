from django.shortcuts import render, redirect, get_object_or_404
from apps.essence.models import CartOrder, Product, Category, CartOrderItem
from django.db.models import Sum
from apps.userauth.models import User
import datetime
from apps.useradmin.forms import AddProductForm
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt


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


def product(request):
    all_products = Product.objects.all().order_by("-id")
    all_categories = Category.objects.all()
    context = {"all_products": all_products, "all_categories": all_categories}
    return render(request, "useradmin/product/product.html", context)


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


def delete_product(request, pid):
    product = Product.objects.get(pid=pid)
    product.delete()
    return redirect("useradmin:product")


def orders(request):
    orders = CartOrder.objects.all()
    context = {"orders": orders}
    return render(request, "useradmin/order/orders.html", context)


def order_detail(request, id):
    order = get_object_or_404(CartOrder, id=id)
    order_items = CartOrderItem.objects.filter(order_user=order)
    context = {"order": order, "order_items": order_items}
    return render(request, "useradmin/order/order_detail.html", context)


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
