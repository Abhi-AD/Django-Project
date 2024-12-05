from apps.essence.models import Category, Product, Vendor, Address, Wishlist
from django.db.models import Count, Min, Max, Avg
from django.contrib import messages


def main_processor(request):
    categories = Category.objects.all().annotate(product_count=Count("product"))
    vendors = Vendor.objects.all()
    active_category_id = categories.first().id if categories.exists() else None
    productes = Product.objects.all()
    min_max_price = Product.objects.aggregate(Min("price"), Max("price"), Avg("price"))
    try:
        wishlist_count = Wishlist.objects.filter(user=request.user).count()
    except:
        messages.warning(
            request,
            "You have not added any items to your cart. Please add some items to proceed.",
        )
        wishlist_count = None

    try:
        address = Address.objects.get(user=request.user)
    except:
        address = None
    context = {
        "categories": categories,
        "active_category_id": active_category_id,
        "productes": productes,
        "vendors": vendors,
        "wishlist_count": wishlist_count,
        "address": address,
        "min_max_price": min_max_price,
    }
    return context


import re


def cart_context(request):
    cart_data_obj = request.session.get("cart_data_obj", {})

    if cart_data_obj:
        all_total_amount = 0
        product_details = []
        for product_id, item in cart_data_obj.items():
            try:
                price_str = item["price"].replace(",", "")
                price_str = re.sub(r"(\.\d*)\.", r"\1", price_str)
                price = float(price_str)
                qty = int(item["qty"])
                product_by_amount = price * qty
                all_total_amount += product_by_amount
                product_details.append(
                    {
                        "product_id": product_id,
                        "title": item["title"],
                        "price": item["price"],
                        "qty": qty,
                        "product_by_amount": product_by_amount,
                        "images": item["images"],
                        "pid": item["pid"],
                    }
                )

            except ValueError as e:
                print(f"Error processing product {item['title']}: {e}")
                return {
                    "cart_data": {
                        "error": f"Invalid price or quantity format for product {item['title']}.",
                        "status": 400,
                    }
                }

        return {
            "cart_data": {
                "cart_data_obj": cart_data_obj,
                "product_details": product_details,
                "all_total_amount": all_total_amount,
                "total_items": len(cart_data_obj),
                "status": 200,
            }
        }
    else:
        return {"cart_data": {"message": "Your cart is empty.", "status": 404}}
