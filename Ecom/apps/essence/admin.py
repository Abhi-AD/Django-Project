from django.contrib import admin
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
    Tags,
)

# Register your models here.


class ProductImagesAdmin(admin.TabularInline):
    model = ProductImages


class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImagesAdmin]

    list_display = [
        "user",
        "title",
        "display_product_images",  # Custom method to show images
        "price",
        "vendor",
        "featured",
        "product_status",
        "pid",
    ]

    def display_product_images(self, obj):
        # Using the correct related_name to access related images
        return ", ".join([img.image.url for img in obj.product_images.all()[:3]])

    display_product_images.short_description = "Product Images"  # Set column header


class CategoryAdmin(admin.ModelAdmin):
    list_display = ["title", "category_images", "product_count"]


class VendorAdmin(admin.ModelAdmin):
    list_display = ["title", "vendor_images"]


class CartOrderAdmin(admin.ModelAdmin):
    list_display = ["user", "price", "paid_status", "order_date", "product_status"]


class CartOrderItemAdmin(admin.ModelAdmin):
    list_display = [
        "order_user",
        "invoice_no",
        "item",
        "image",
        "qty",
        "price",
        "total",
    ]


class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ["user", "product", "review", "rating", "date"]


class WishlistAdmin(admin.ModelAdmin):
    list_display = ["user", "product", "date"]


class AddressAdmin(admin.ModelAdmin):
    list_display = ["user", "address", "status"]


# model register

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Vendor, VendorAdmin)
admin.site.register(CartOrder, CartOrderAdmin)
admin.site.register(CartOrderItem, CartOrderItemAdmin)
admin.site.register(ProductReview, ProductReviewAdmin)
admin.site.register(Wishlist, WishlistAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Tags)
