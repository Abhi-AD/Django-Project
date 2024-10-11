from django.db import models
from shortuuid.django_fields import ShortUUIDField
from django.utils.html import mark_safe
from apps.userauth.models import User

STATUS_CHOICE = (
    ("processing", "Processing"),
    ("shipped", "Shipped"),
    ("delivered", "Delivered"),
)

STATUS = (
    ("draft", "Draft"),
    ("disabled", "Disabled"),
    ("rejected", "Rejected"),
    ("in_review", "In Review"),
    ("published", "Published"),
)
RATING_CHOICES = [
    (1, "⭐"),
    (2, "⭐⭐"),
    (3, "⭐⭐⭐"),
    (4, "⭐⭐⭐⭐"),
    (5, "⭐⭐⭐⭐⭐"),
]


def user_directory_path(instance, filename):
    return f"user_{0}/{1}".format(instance.user.id, filename)


# Create your models here.
class Category(models.Model):
    cid = ShortUUIDField(
        unique=True, length=10, max_length=30, prefix="cat", alphabet="abc"
    )
    title = models.CharField(max_length=100, default="Category")
    image = models.ImageField(upload_to="category", default="category.jpg")

    class Meta:
        verbose_name_plural = "Categories"

    def category_images(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def __str__(self):
        return self.title


class Vendor(models.Model):
    vid = ShortUUIDField(
        unique=True, length=10, max_length=20, prefix="ven", alphabet="abc"
    )
    title = models.CharField(max_length=100, default="Vendor")
    image = models.ImageField(upload_to=user_directory_path, default="vendor.jpg")
    description = models.TextField(
        null=True, blank=True, default="This is a vendor description"
    )
    address = models.CharField(max_length=100, default="Kathmandu, Nepal")
    contact = models.CharField(max_length=100, default="1")
    chat_resp_time = models.CharField(max_length=100, default="100")
    shipping_on_time = models.CharField(max_length=100, default="100")
    authentic_rating = models.CharField(max_length=100, default="100")
    days_return = models.CharField(max_length=100, default="100")
    warranty_period = models.CharField(max_length=100, default="100")
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name_plural = "Vendors"

    def vendor_images(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def __str__(self):
        return self.title


class Product(models.Model):
    pid = ShortUUIDField(
        unique=True, length=10, max_length=20, prefix="prd", alphabet="abc"
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, default="Product")
    image = models.ImageField(upload_to=user_directory_path, default="product.jpg")
    description = models.TextField(
        null=True, blank=True, default="This is a product description"
    )
    price = models.DecimalField(max_digits=10, decimal_places=2, default="2.99")
    tag = models.ForeignKey(Tags, on_delete=models.SET_NULL, null=True)
    product_status = models.CharField(
        choices=STATUS, max_length=10, default="in_review"
    )
    status = models.BooleanField(default=True)
    in_stock = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
    digital = models.BooleanField(default=False)
    sku = ShortUUIDField(
        unique=True, length=4, max_length=10, prefix="sku", alphabet="abc"
    )
    date = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Product"

    def product_images(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def __str__(self):
        return self.title

    def get_percentage(self):
        new_price = (self.price / self.old_price) * 100
        return new_price


class ProductImage(models.Model):
    image = models.ImageField(upload_to=user_directory_path, default="product.jpg")
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Product Images"


class CartOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, default="2.99")
    paid_track = models.BooleanField(default=False)
    product_status = models.CharField(
        choices=STATUS_CHOICE, max_length=10, default="processing"
    )

    class Meta:
        verbose_name_plural = "Cart Order"


class CartOrderItem(models.Model):
    user = models.ForeignKey(CartOrder, on_delete=models.CASCADE)
    product_status = models.CharField(choices=STATUS_CHOICE, max_length=200)
    item = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    qty = models.IntegerField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2, default="2.99")

    class Meta:
        verbose_name_plural = "Cart Order"
