from django.shortcuts import render
from django.http import HttpResponse
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


# Create your views here.
def index(request):
    products = Product.objects.filter(product_status="published", featured=True)
    context = {
        "products": products,
    }
    return render(request, "essence/index.html", context)


def product_list_view(request):
    products = Product.objects.filter(product_status="published")
    context = {
        "products": products,
    }
    return render(request, "essence/product-list.html", context)
