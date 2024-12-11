from django import forms
from apps.essence.models import Product


class AddProductForm(forms.ModelForm):
    title = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Enter product title...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    description = forms.CharField(
        widget=forms.Textarea(
            attrs={
                "placeholder": "Product Description...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    specifications = forms.CharField(
        widget=forms.Textarea(
            attrs={
                "placeholder": "Specifications...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    price = forms.DecimalField(
        widget=forms.NumberInput(
            attrs={
                "placeholder": "Sales Price...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    old_price = forms.DecimalField(
        widget=forms.NumberInput(
            attrs={
                "placeholder": "Old Price...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    type = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Type of Product...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    stock_count = forms.IntegerField(
        widget=forms.NumberInput(
            attrs={
                "placeholder": "Stock count...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    mfd = forms.DateTimeField(
        widget=forms.DateTimeInput(
            attrs={
                "placeholder": "e.g. 24-12-2022",
                "type": "date",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    tag = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Tags...",
                "class": "w-full bg-none placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black",
            }
        )
    )
    images = forms.ImageField(
        widget=forms.ClearableFileInput(attrs={"class": "hidden"})
    )

    class Meta:
        model = Product
        fields = [
            "title",
            "description",
            "price",
            "old_price",
            "specifications",
            "type",
            "stock_count",
            "mfd",
            "tag",
            "digital",
            "category",
            "images",
        ]
