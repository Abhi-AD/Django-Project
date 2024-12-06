from django.shortcuts import render, redirect
from apps.userauth.forms import UserRegisterForm
from django.contrib.auth import login, authenticate, logout, get_user_model
from django.contrib import messages
from django.conf import settings

User = get_user_model()


# Create your views here.
def register_view(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST or None)
        if form.is_valid():
            new_user = form.save()
            email = form.cleaned_data.get("email")
            password = form.cleaned_data["password1"]
            new_user = authenticate(request, email=email, password=password)
            if new_user is not None:
                login(request, new_user)
                messages.success(
                    request,
                    f"Hey {new_user.username}, your account was created successfully.",
                )
                return redirect("essence:index")
            else:
                messages.error(request, "Authentication failed. Please log in.")
    else:
        form = UserRegisterForm()

    context = {"form": form}
    return render(request, "userauth/sign-up.html", context)


# def register_view(request):
#     if request.method == "POST":
#         form = UserRegisterForm(request.POST or None)
#         if form.is_valid():
#             new_user = form.save()
#             username = form.cleaned_data.get("username")
#             messages.success(
#                 request, f"Hey {username}, your account was created successfully."
#             )
#             # Authenticate the user
#             new_user = authenticate(
#                 username=form.cleaned_data.get("username"),
#                 password=form.cleaned_data["password1"],
#             )
#             login(request, new_user)
#             return redirect("essence:index")
#     else:
#         form = UserRegisterForm()

#     context = {"form": form}
#     return render(request, "userauth/sign-up.html", context)


def login_view(request):
    if request.user.is_authenticated:
        messages.warning(request, "Hey, you are already logged in.")
        return redirect("essence:index")

    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user = User.objects.get(email=email)
            user = authenticate(request, email=email, password=password)

            if user is not None:
                login(request, user)
                messages.success(request, "You are now logged in!")
                return redirect("essence:index")
            else:
                messages.warning(request, "Incorrect email or password")
        except:
            messages.warning(request, f"User with email {email} does not exist.")
    return render(request, "userauth/login.html")


def logout_view(request):
    logout(request)
    messages.warning(request, "You logged out.")
    return redirect("userauth:sign-in")
