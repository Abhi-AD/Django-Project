from django.urls import path
from apps.useradmin import views

app_name = "useradmin"

urlpatterns = [
    path("dashboard/", views.dashboard, name="dashboard"),
    path("product/", views.product, name="product"),
    path("add-product/", views.add_product, name="add_product"),
    path("update-product/<pid>/", views.update_product, name="update_product"),
    path("delete-product/<pid>/", views.delete_product, name="delete_product"),
    path("orders/", views.orders, name="orders"),
    path("order-detail/<id>/", views.order_detail, name="order_detail"),
    path(
        "change-order-status/<oid>/",
        views.change_order_status,
        name="change_order_status",
    ),
    path("shop-page/", views.shop_page, name="shop_page"),
    path("reviews/", views.reviews, name="reviews"),
    path("settings/", views.settings, name="settings"),
    path("change-password/", views.change_password, name="change_password"),
]
