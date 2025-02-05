# Generated by Django 5.1.1 on 2024-12-12 07:47

import apps.essence.models
import ckeditor_uploader.fields
import django.db.models.deletion
import shortuuid.django_fields
import taggit.managers
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0006_rename_taggeditem_content_type_object_id_taggit_tagg_content_8fc721_idx'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cid', shortuuid.django_fields.ShortUUIDField(alphabet='abc', length=10, max_length=30, prefix='cat', unique=True)),
                ('title', models.CharField(default='Category', max_length=100)),
                ('image', models.ImageField(default='category.jpg', upload_to='category')),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Coupon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=50)),
                ('discount', models.IntegerField(default=1)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='tag', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.CharField(max_length=100, null=True)),
                ('status', models.BooleanField(default=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Address',
            },
        ),
        migrations.CreateModel(
            name='CartOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.CharField(blank=True, max_length=100, null=True)),
                ('country', models.CharField(blank=True, max_length=100, null=True)),
                ('price', models.DecimalField(decimal_places=2, default='0.00', max_digits=10)),
                ('saved', models.DecimalField(decimal_places=2, default='0.00', max_digits=10)),
                ('shopping_method', models.CharField(blank=True, max_length=100, null=True)),
                ('trakking_id', models.CharField(blank=True, max_length=100, null=True)),
                ('trakking_website_address', models.CharField(blank=True, max_length=100, null=True)),
                ('paid_status', models.BooleanField(default=False)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('product_status', models.CharField(blank=True, choices=[('processing', 'Processing'), ('shipped', 'Shipped'), ('delivered', 'Delivered')], default='processing', max_length=10, null=True)),
                ('sku', shortuuid.django_fields.ShortUUIDField(alphabet='1234567890', blank=True, length=5, max_length=20, null=True, prefix='SKU')),
                ('oid', shortuuid.django_fields.ShortUUIDField(alphabet='1234567890', blank=True, length=5, max_length=20, null=True, prefix='')),
                ('stripe_payment_intent', models.CharField(blank=True, max_length=100, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('coupons', models.ManyToManyField(blank=True, to='essence.coupon')),
            ],
            options={
                'verbose_name_plural': 'Cart Order',
            },
        ),
        migrations.CreateModel(
            name='CartOrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invoice_no', models.CharField(max_length=200)),
                ('product_status', models.CharField(max_length=200)),
                ('item', models.CharField(max_length=200)),
                ('image', models.CharField(max_length=200)),
                ('qty', models.IntegerField(default=0)),
                ('price', models.DecimalField(decimal_places=2, default='2.99', max_digits=10)),
                ('order_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.cartorder')),
            ],
            options={
                'verbose_name_plural': 'Cart Order Items',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pid', shortuuid.django_fields.ShortUUIDField(alphabet='abc', length=10, max_length=20, prefix='prd', unique=True)),
                ('title', models.CharField(default='Product', max_length=100)),
                ('status_type', models.CharField(choices=[('sale', 'Sale'), ('new', 'New'), ('old', 'Old')], default='new', max_length=10)),
                ('images', models.ImageField(default='product.jpg', upload_to=apps.essence.models.user_directory_path)),
                ('hover_images', models.ImageField(default='hover_images.jpg', upload_to=apps.essence.models.user_directory_path)),
                ('description', ckeditor_uploader.fields.RichTextUploadingField(blank=True, default='This is a product description', null=True)),
                ('price', models.DecimalField(decimal_places=2, default='1.99', max_digits=10)),
                ('old_price', models.DecimalField(decimal_places=2, default='2.99', max_digits=10)),
                ('specifications', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True)),
                ('type', models.CharField(blank=True, default='Oranic', max_length=100, null=True)),
                ('stock_count', models.CharField(blank=True, default='10', max_length=100, null=True)),
                ('mfd', models.DateTimeField(blank=True, null=True)),
                ('rating', models.IntegerField(blank=True, choices=[(1, '⭐'), (2, '⭐⭐'), (3, '⭐⭐⭐'), (4, '⭐⭐⭐⭐'), (5, '⭐⭐⭐⭐⭐')], null=True)),
                ('product_status', models.CharField(choices=[('draft', 'Draft'), ('disabled', 'Disabled'), ('rejected', 'Rejected'), ('in_review', 'In Review'), ('published', 'Published')], default='in_review', max_length=10)),
                ('status', models.BooleanField(default=True)),
                ('in_stock', models.BooleanField(default=True)),
                ('featured', models.BooleanField(default=False)),
                ('digital', models.BooleanField(default=False)),
                ('sku', shortuuid.django_fields.ShortUUIDField(alphabet='abc', length=4, max_length=10, prefix='sku', unique=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('update', models.DateTimeField(blank=True, null=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='essence.category')),
                ('tag', taggit.managers.TaggableManager(blank=True, help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Product',
            },
        ),
        migrations.CreateModel(
            name='ProductImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='product.jpg', upload_to=apps.essence.models.user_directory_path)),
                ('date', models.DateField(auto_now_add=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='product_images', to='essence.product')),
            ],
            options={
                'verbose_name_plural': 'Product Images',
            },
        ),
        migrations.CreateModel(
            name='ProductReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.TextField()),
                ('rating', models.IntegerField(blank=True, choices=[(1, '⭐'), (2, '⭐⭐'), (3, '⭐⭐⭐'), (4, '⭐⭐⭐⭐'), (5, '⭐⭐⭐⭐⭐')], null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='reviews', to='essence.product')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Product Review',
            },
        ),
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vid', shortuuid.django_fields.ShortUUIDField(alphabet='abc', length=10, max_length=20, prefix='ven', unique=True)),
                ('title', models.CharField(default='Vendor', max_length=100)),
                ('image', models.ImageField(default='vendor.jpg', upload_to=apps.essence.models.user_directory_path)),
                ('description', ckeditor_uploader.fields.RichTextUploadingField(blank=True, default='This is a vendor description', null=True)),
                ('address', models.CharField(default='Kathmandu, Nepal', max_length=100)),
                ('contact', models.CharField(default='1', max_length=100)),
                ('chat_resp_time', models.CharField(default='100', max_length=100)),
                ('shipping_on_time', models.CharField(default='100', max_length=100)),
                ('authentic_rating', models.CharField(default='100', max_length=100)),
                ('days_return', models.CharField(default='100', max_length=100)),
                ('warranty_period', models.CharField(default='100', max_length=100)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Vendors',
            },
        ),
        migrations.AddField(
            model_name='product',
            name='vendor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='product', to='essence.vendor'),
        ),
        migrations.CreateModel(
            name='Wishlist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='essence.product')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Wishlist',
            },
        ),
    ]
