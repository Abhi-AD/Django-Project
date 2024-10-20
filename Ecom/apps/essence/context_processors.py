from apps.essence.models import Category, Product
from django.db.models import Count


def main_processor(request):
    categories = Category.objects.all().annotate(product_count=Count("product"))
    active_category_id = categories.first().id if categories.exists() else None
    productes = Product.objects.all()
    context = {
        "categories": categories,
        "active_category_id": active_category_id,
        "productes": productes,
    }
    return context
