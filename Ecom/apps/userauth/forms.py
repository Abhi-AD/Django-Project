from django import forms
from django.contrib.auth.forms import UserCreationForm
from apps.userauth.models import User


class UserRegisterForm(UserCreationForm):
    full_name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={
                "placeholder": "Full Name",
                "class": "w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-none rounded-[5px] h-[50px]",
            }
        ),
    )
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-none rounded-[5px] h-[50px]",
            }
        )
    )
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={
                "placeholder": "Email",
                "class": "w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-none rounded-[5px] h-[50px]",
            }
        )
    )
    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-none rounded-[5px] h-[50px]",
            }
        )
    )
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Confirm Password",
                "class": "w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-none rounded-[5px] h-[50px]",
            }
        )
    )

    class Meta:
        model = User
        fields = ["full_name", "username", "email", "password1", "password2"]
