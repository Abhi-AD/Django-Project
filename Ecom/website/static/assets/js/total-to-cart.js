const subtotal = parseFloat("{{ cart_data.all_total_amount }}");
const deliveryCharge = (subtotal * 0.05).toFixed(2);
const totalAmount = (subtotal + parseFloat(deliveryCharge)).toFixed(2);

document.getElementById("delivery-charge").textContent = `$${deliveryCharge}`;
document.getElementById("total-amount").textContent = `$${totalAmount}`;
