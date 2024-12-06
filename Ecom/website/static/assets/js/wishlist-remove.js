$(document).ready(function () {
  $(document).on("click", ".delete-wishlist-product", function () {
    let wishlist_id = $(this).attr("data-wishlist-product");
    let this_val = $(this);
    console.log("wishlist_id", wishlist_id);
    $.ajax({
      url: "/essence/remove_from_wishlist_view",
      data: {
        id: wishlist_id,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Delete from wishlist");
      },
      success: function (response) {
        $("#wishlist-list").html(response.data);
      },
    });
  });
});
