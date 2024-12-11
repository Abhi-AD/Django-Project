from django.urls import path
from apps.useradmin import views

app_name = "useradmin"

urlpatterns = [
    path("dashboard/", views.dashboard, name="dashboard"),
    path("product/", views.product, name="product"),
    path("add-product/", views.add_product, name="add_product"),
]
