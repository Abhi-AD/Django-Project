$(document).ready(function () {
  $("#add-to-cart-btn").on("click", function () {
    let quantity = $("#product-quantity").val();
    let product_id = $(".product-id").val();
    let product_title = $(".product-title").val();
    let product_price = $(".current-product-price").text();
    let this_val = $(this);
    console.log("Quantity: ", quantity);
    console.log("product_id: ", product_id);
    console.log("product_title: ", product_title);
    console.log("product_price: ", product_price);
    console.log("this_val: ", this_val);

    $.ajax({
      url: "/essence/add-to-cart",
      data: {
        id: product_id,
        qty: quantity,
        title: product_title,
        price: product_price,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Add to card");
      },
      success: function (response) {
        this_val.html("Itmes add to card");
        console.log("Add to card......");
      },
    });
  });
});
