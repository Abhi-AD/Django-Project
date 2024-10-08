from django.shortcuts import render, redirect
from apps.userauth.forms import UserRegisterForm
from django.contrib.auth import login, authenticate,get_user_model
from django.contrib import messages
from django.conf import settings

User = get_user_model()

# Create your views here.
def register_view(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST or None)
        if form.is_valid():
            new_user = form.save()
            username = form.cleaned_data.get("username")
            messages.success(request, f"Hey {username}, your account was created successfully.")
            # Authenticate the user
            new_user = authenticate(username=form.cleaned_data.get('email'), password=form.cleaned_data['password1'])
            login(request, new_user)
            return redirect("essence:index")
    else:
        form = UserRegisterForm()

    context = {
        'form': form
    }
    return render(request, 'userauth/sign-up.html', context)


def login_view(request):
    if request.user.is_authenticated:
        messages.warning(request, "Hey, you are already logged in.")
        return redirect("essence:index")

    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, f"User with email {email} does not exist.")
            return redirect("userauth:sign-in")  # Update to use 'sign-in'

        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("essence:index")
        else:
            messages.error(request, "Incorrect email or password. Please try again or create an account.")
            return redirect("userauth:sign-in")  # Update to use 'sign-in'

    return render(request, 'userauth/login.html')