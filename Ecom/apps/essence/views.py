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
from django.core.paginator import Paginator


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
    context = {
        "product": product,
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
