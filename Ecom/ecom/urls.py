from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("essence/", include("apps.essence.urls")),
    path("userauth/", include("apps.userauth.urls")),
    path("ckeditor/", include("ckeditor_uploader.urls")),
    path("useradmin/", include("apps.useradmin.urls")),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
