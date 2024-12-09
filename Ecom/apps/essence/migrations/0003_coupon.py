# Generated by Django 5.1.1 on 2024-12-08 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('essence', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coupon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=50)),
                ('discount', models.IntegerField(default=1)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
    ]