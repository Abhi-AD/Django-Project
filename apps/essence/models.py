from django.db import models
from shortuuid.django_fields import ShortUUIDField
from django.utils.html import mark_safe
from apps.userauth.models import User
from taggit.managers import TaggableManager
from ckeditor_uploader.fields import RichTextUploadingField


STATUS_TYPES = (
    ("sale", "Sale"),
    ("new", "New"),
    ("old", "Old"),
)

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
    if hasattr(instance, "user") and instance.user:
        return f"user_{instance.user.id}/{filename}"
    return f"unknown_user/{filename}"


class Coupon(models.Model):
    code = models.CharField(max_length=50)
    discount = models.IntegerField(default=1)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.code


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

    def product_count(self):
        return self.product_set.count()

    def __str__(self):
        return self.title


class Tags(models.Model):
    title = models.CharField(max_length=100, default="tag")

    def __str__(self):
        return self.title


class Vendor(models.Model):
    vid = ShortUUIDField(
        unique=True, length=10, max_length=20, prefix="ven", alphabet="abc"
    )
    title = models.CharField(max_length=100, default="Vendor")
    image = models.ImageField(upload_to=user_directory_path, default="vendor.jpg")
    description = RichTextUploadingField(
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
    date = models.DateTimeField(auto_now_add=True, null=True, blank=True)

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
    vendor = models.ForeignKey(
        Vendor, on_delete=models.SET_NULL, null=True, related_name="product"
    )
    title = models.CharField(max_length=100, default="Product")
    status_type = models.CharField(choices=STATUS_TYPES, max_length=10, default="new")
    images = models.ImageField(upload_to=user_directory_path, default="product.jpg")
    hover_images = models.ImageField(
        upload_to=user_directory_path, default="hover_images.jpg"
    )
    description = RichTextUploadingField(
        null=True, blank=True, default="This is a product description"
    )
    price = models.DecimalField(max_digits=10, decimal_places=2, default="1.99")
    old_price = models.DecimalField(max_digits=10, decimal_places=2, default="2.99")
    specifications = RichTextUploadingField(null=True, blank=True)
    type = models.CharField(max_length=100, default="Oranic", null=True, blank=True)
    stock_count = models.CharField(max_length=100, default="10", null=True, blank=True)
    mfd = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    rating = models.IntegerField(choices=RATING_CHOICES, null=True, blank=True)
    tag = TaggableManager(blank=True)
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
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.images.url))

    def __str__(self):
        return self.title

    def get_percentage(self):
        new_price = (self.price / self.old_price) * 100
        return new_price

    def get_discount_percentage(self):
        if self.old_price > 0:
            discount = ((self.old_price - self.price) / self.old_price) * 100
            if discount < 0:
                return 0
            return round(discount, 2)
        return 0


class ProductImages(models.Model):
    image = models.ImageField(upload_to=user_directory_path, default="product.jpg")
    product = models.ForeignKey(
        Product, related_name="product_images", on_delete=models.SET_NULL, null=True
    )
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Product Images"


# ######### Card, order, ordrItems and address


class CartOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)

    address = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)

    price = models.DecimalField(max_digits=10, decimal_places=2, default="0.00")
    saved = models.DecimalField(max_digits=10, decimal_places=2, default="0.00")
    coupons = models.ManyToManyField(Coupon, blank=True)

    shopping_method = models.CharField(max_length=100, null=True, blank=True)
    trakking_id = models.CharField(max_length=100, null=True, blank=True)
    trakking_website_address = models.CharField(max_length=100, null=True, blank=True)

    paid_status = models.BooleanField(default=False)
    order_date = models.DateTimeField(auto_now_add=True)
    product_status = models.CharField(
        choices=STATUS_CHOICE,
        max_length=10,
        default="processing",
        null=True,
        blank=True,
    )
    sku = ShortUUIDField(
        null=True,
        blank=True,
        length=5,
        prefix="SKU",
        max_length=20,
        alphabet="1234567890",
    )
    oid = ShortUUIDField(
        null=True,
        blank=True,
        length=5,
        max_length=20,
        alphabet="1234567890",
    )

    stripe_payment_intent = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Cart Order"


class CartOrderItem(models.Model):
    order_user = models.ForeignKey(CartOrder, on_delete=models.CASCADE)
    invoice_no = models.CharField(max_length=200)
    product_status = models.CharField(max_length=200)
    item = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    qty = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2, default="2.99")

    class Meta:
        verbose_name_plural = "Cart Order Items"

    def category_images(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def order_img(self):
        return mark_safe('<img src="/media/%s" width="50" />' % (self.image.url))

    @property
    def total(self):
        return self.price * self.qty


# ######### product revew, wishlists, address


class ProductReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(
        Product, on_delete=models.SET_NULL, null=True, related_name="reviews"
    )
    review = models.TextField()
    rating = models.IntegerField(choices=RATING_CHOICES, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Product Review"

    def __str__(self):
        return self.product.title

    def get_rating(self):
        return self.rating


class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Wishlist"

    def __str__(self):
        return self.product.title

    def get_rating(self):
        return self.rating


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    mobile = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=100, null=True)
    status = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Address"
