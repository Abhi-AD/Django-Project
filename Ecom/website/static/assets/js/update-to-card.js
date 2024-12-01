$(document).ready(function () {
  $(".update-qty-btn").on("click", function () {
    let this_val = $(this);
    let product_id = this_val
      .closest("li")
      .find(".remove")
      .attr("data-product"); // Get product ID
    let quantity = this_val.closest("li").find(".qty-input").val(); // Get the updated quantity
    quantity = parseInt(quantity, 10) || 1; // Ensure quantity is a number, default to 1 if not

    $.ajax({
      url: "/essence/update-cart-quantity", // Your view for updating quantity
      data: {
        id: product_id,
        qty: quantity,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Updating cart quantity...");
      },
      success: function (response) {
        console.log("Cart updated successfully.");
        $(".card-item-count").text(response.totalcarditems); // Update total item count
        // Optionally, update the total price for this product
        this_val
          .closest("li")
          .find(".product-by-amount")
          .text(response.data[product_id].product_by_amount);
      },
      error: function () {
        console.log("Error updating cart.");
      },
    });
  });
});
