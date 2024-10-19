from django.urls import path
from apps.essence import views

app_name = "essence"

urlpatterns = [
    path("", views.index, name="index"),
    path("products/", views.product_list_view, name="product-list"),
]
