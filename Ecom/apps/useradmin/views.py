from django.shortcuts import render, redirect
from apps.essence.models import CartOrder, Product, Category
from django.db.models import Sum
from apps.userauth.models import User
import datetime


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


# Create your views here.
