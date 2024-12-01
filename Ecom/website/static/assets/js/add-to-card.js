$(document).ready(function () {
  $(".add-to-cart").on("click", function () {
    let this_val = $(this);
    let index = this_val.attr("data-index");

    let quantity = $("#product-quantity-" + index).val();
    quantity = parseInt(quantity, 10) || 1;
    let product_title = $(".product-title-" + index).val();
    let product_id = $(".product-id-" + index).val();
    let product_price = $(".current-product-price-" + index).text();
    let product_pid = $(".product-pid-" + index).val();
    let product_images = $(".product-image-" + index).val();

    // Log data to the console
    console.log({
      id: product_id,
      pid: product_pid,
      images: product_images,
      qty: quantity,
      title: product_title,
      price: product_price,
    });

    $.ajax({
      url: "/essence/add-to-cart",
      data: {
        id: product_id,
        pid: product_pid,
        images: product_images,
        qty: quantity,
        title: product_title,
        price: product_price,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Add to card");
      },
      success: function (response) {
        this_val.html('<i class="gicon gi-check fill text-[48spx]  " ></i>');
        console.log("Add to card......");
        $(".card-item-count").text(response.totalcarditems);
      },
    });
  });
});

// $(document).ready(function () {
//   $("#add-to-cart-btn").on("click", function () {
//     let quantity = $("#product-quantity").val();
//     let product_id = $(".product-id").val();
//     let product_title = $(".product-title").val();
//     let product_price = $(".current-product-price").text();
//     let this_val = $(this);
//     console.log("Quantity: ", quantity);
//     console.log("product_id: ", product_id);
//     console.log("product_title: ", product_title);
//     console.log("product_price: ", product_price);
//     console.log("this_val: ", this_val);

//     $.ajax({
//       url: "/essence/add-to-cart",
//       data: {
//         id: product_id,
//         qty: quantity,
//         title: product_title,
//         price: product_price,
//       },
//       dataType: "json",
//       beforeSend: function () {
//         console.log("Add to card");
//       },
//       success: function (response) {
//         this_val.html("Itmes add to card");
//         console.log("Add to card......");
//         $(".card-item-count").text(response.totalcarditems);
//       },
//     });
//   });
// });
