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
    products = Product.objects.all()
    context = {
        "products": products,
    }
    return render(request, "essence/index.html", context)
