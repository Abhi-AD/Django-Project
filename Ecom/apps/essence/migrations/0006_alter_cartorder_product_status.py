# Generated by Django 5.1.1 on 2024-12-12 04:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('essence', '0005_remove_cartorderitem_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartorder',
            name='product_status',
            field=models.CharField(blank=True, choices=[('processing', 'Processing'), ('shipped', 'Shipped'), ('delivered', 'Delivered')], default='processing', max_length=10, null=True),
        ),
    ]
