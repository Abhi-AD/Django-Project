from django.shortcuts import render, redirect
from apps.essence.models import CartOrder, Product, Category
from django.db.models import Sum
from apps.userauth.models import User
import datetime
from apps.useradmin.forms import AddProductForm


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
    return render(request, "useradmin/product.html", context)


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
    return render(request, "useradmin/add_product.html", context)


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
    return render(request, "useradmin/edit_product.html", context)


def delete_product(request, pid):
    product = Product.objects.get(pid=pid)
    product.delete()
    return redirect("useradmin:product")
