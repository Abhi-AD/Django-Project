from django.urls import path
from apps.essence import views

app_name = "essence"

urlpatterns = [
    path("essence/", views.index, name="index"),
]
