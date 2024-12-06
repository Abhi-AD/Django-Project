from django.contrib import admin
from apps.userauth.models import User, Profile, ContactUser


# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email", "bio"]


class ContactAdmin(admin.ModelAdmin):
    list_display = ["full_name", "email", "subject"]


class ProfileAdmin(admin.ModelAdmin):
    list_display = ["full_name", "bio", "phone"]


admin.site.register(User, UserAdmin)
admin.site.register(ContactUser, ContactAdmin)
admin.site.register(Profile, ProfileAdmin)
