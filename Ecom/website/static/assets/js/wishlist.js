$(document).ready(function () {
  $(document).on("click", ".add-to-whishlist", function () {
    let product_id = $(this).attr("data-product-item");
    let this_val = $(this);
    console.log("Product", product_id);
    $.ajax({
      url: "/essence/add_wishlist_view",
      data: {
        id: product_id,
      },
      beforeSend: function () {},
      dataType: "json",
      success: function (response) {
        if (response.boolean === true) {
          console.log("Add to card......");
        }
      },
    });
  });
});
