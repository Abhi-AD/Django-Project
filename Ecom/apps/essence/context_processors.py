from apps.essence.models import Category, Product, Vendor, Address
from django.db.models import Count, Min, Max, Avg


def main_processor(request):
    categories = Category.objects.all().annotate(product_count=Count("product"))
    vendors = Vendor.objects.all()
    active_category_id = categories.first().id if categories.exists() else None
    productes = Product.objects.all()
    min_max_price = Product.objects.aggregate(Min("price"), Max("price"), Avg("price"))
    try:
        address = Address.objects.get(user=request.user)
    except:
        address = None
    context = {
        "categories": categories,
        "active_category_id": active_category_id,
        "productes": productes,
        "vendors": vendors,
        "address": address,
        "min_max_price": min_max_price,
    }
    return context
