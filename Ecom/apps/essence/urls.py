from django.urls import path
from apps.essence import views

app_name = "essence"

urlpatterns = [
    path("", views.index, name="index"),
    path("products/", views.product_list_view, name="product-list"),
    path("category/<cid>/", views.category_product_list, name="category-product-list"),
    path("vendors/", views.vendor_list_view, name="vendor-list"),
    path("vendors/<vid>", views.vendor_details_view, name="vendor-detail"),
]
