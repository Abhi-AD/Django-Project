$(document).ready(function () {
  $(".remove").on("click", function () {
    let this_val = $(this);
    let product_id = this_val.attr("data-product");
    console.log({
      id: product_id,
    });

    $.ajax({
      url: "/essence/remove-from-cart",
      data: {
        id: product_id,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Removing item from cart...");
      },
      success: function (response) {
        this_val.closest("li").remove();
        $(".card-item-count").text(response.totalcarditems);

        if (response.totalcarditems === 0) {
          $(".cart-empty-message").text("Your cart is empty.");
        }

        console.log("Item removed from cart.");
      },
    });
  });
});
