$(document).ready(function () {
  $(document).on("click", ".add-to-whishlist", function () {
    let product_id = $(this).attr("data-product-item");
    let this_val = $(this);
    console.log("Product", product_id);
    $.ajax({
      url: "/essence/wishview",
      data: {
        id: product_id,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Add to Whishlist");
      },
      success: function (response) {
        this_val.html('<i class="gicon gi-check fill text-[48spx]  " ></i>');
        if (response.boolean === true) {
          console.log("Add to card......");
          $(".card-item-count").text(response.totalcarditems);
        }
      },
    });
  });
});
