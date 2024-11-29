from django.urls import path
from apps.essence import views

app_name = "essence"

urlpatterns = [
    path("", views.index, name="index"),
    path("products/", views.product_list_view, name="product-list"),
    path("products/<pid>/", views.product_detail_view, name="product-detail"),
    path("category/<cid>/", views.category_product_list, name="category-product-list"),
    path("vendors/", views.vendor_list_view, name="vendor-list"),
    path("vendors/<vid>", views.vendor_details_view, name="vendor-detail"),
    path("products/tag/<slug:tag_slug>/", views.tag_list, name="tag-list"),
    path("ajax-add-review/<int:pid>", views.ajax_add_review, name="ajax_add_review"),
    path("search_products/", views.search_products_view, name="search_products"),
    path("filter-products/", views.filter_products_view, name="filter-product"),
    path("add-to-cart/", views.add_to_cart, name="add-to-cart"),
]
