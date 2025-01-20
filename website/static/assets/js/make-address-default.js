$(document).ready(function () {
  $(document).on("click", ".make-default-address", function () {
    let id = $(this).attr("data-address-id");
    let this_val = $(this);
    $.ajax({
      url: "/essence/make_address_default",
      data: {
        id: id,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Making default address");
      },
      success: function (response) {
        console.log("Default address changed");
        if (response.boolean == true) {
          $(".check").hide();
          $(".action_btn").show();

          $(".check" + id).show();
          $(".button" + id).hide();
        }
      },
    });
  });
});
