from apps.essence.models import Category
from django.db.models import Count


def categories_processor(request):
    categories = Category.objects.all().annotate(product_count=Count("product"))
    return {"categories": categories}
