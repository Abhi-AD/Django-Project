document.addEventListener("DOMContentLoaded", () => {
  const subtotalElement = document.getElementById("subtotal");
  const subtotal = parseFloat(subtotalElement.dataset.value || 0);
  const taxCharge = (subtotal * 0.05).toFixed(2);
  const totalAmount = (subtotal + parseFloat(taxCharge)).toFixed(2);
  document.getElementById("tax-charge").textContent = `$${taxCharge}`;
  document.getElementById("total-amount").textContent = `$${totalAmount}`;
  document.getElementById(
    "display-total-amount"
  ).textContent = `$${totalAmount}`;
});
