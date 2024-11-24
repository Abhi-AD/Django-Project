$("#commentForm").submit(function (e) {
  e.preventDefault();
  $.ajax({
    data: $(this).serialize(),
    method: $(this).attr("method"),
    url: $(this).attr("action"),
    dataType: "json",
    success: function (response) {
      console.log("Comment accepted");
      if (response.bool == true) {
        $("#reviews-res").removeClass("hidden").addClass("block");
        setTimeout(function () {
          $("#reviews-res").removeClass("block").addClass("hidden");
        }, 3000);
      }
    },
  });
});
