# Generated by Django 5.1.1 on 2024-11-06 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('essence', '0007_alter_productimages_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='life',
            field=models.CharField(blank=True, default='100 days', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='mfd',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
