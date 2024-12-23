from django.urls import path, include
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
    path("remove-from-cart/", views.remove_from_cart, name="remove_from_cart"),
    path(
        "update-cart-quantity/", views.update_cart_quantity, name="update_cart_quantity"
    ),
    path("checkout/<oid>/", views.checkout_view, name="checkout_view"),
    path("save_checkout_info/", views.save_checkout_info, name="save_checkout_info"),
    path("cart/", views.cart_view, name="cart"),
    # paypal url
    path("paypal/", include("paypal.standard.ipn.urls")),
    # stripe url
    path(
        "api/create_checkout_sessions/<oid>/",
        views.create_checkout_sessions,
        name="create_checkout_sessions",
    ),
    # payment status
    path(
        "payment_complete/<oid>/", views.payment_complete_view, name="payment_complete"
    ),
    path("payment_failed/", views.payment_failed_view, name="payment_failed"),
    path("customer_dashboard/", views.customer_dashboard, name="customer_dashboard"),
    path("customer_dashboard/<int:id>/", views.order_detail, name="order_detail"),
    path(
        "make_address_default/", views.make_address_default, name="make_address_default"
    ),
    path("wishlist/", views.wishlist_view, name="wishlist_view"),
    path("add_wishlist_view/", views.add_wishlist_view, name="add_wishlist_view"),
    path(
        "remove_from_wishlist_view/",
        views.remove_from_wishlist_view,
        name="remove_from_wishlist_view",
    ),
    path("contact/", views.contact, name="contact"),
    path("ajax_contact/", views.ajax_contact, name="ajax_contact"),
    path("privacy-policy/", views.privacy_policy, name="privacy-policy"),
    path("about-us/", views.about_us, name="about-us"),
]
