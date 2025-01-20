const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

$("#commentForm").submit(function (e) {
  e.preventDefault();

  let dt = new Date();
  let time =
    dt.getDate() + " " + monthName[dt.getMonth()] + ", " + dt.getFullYear();

  $.ajax({
    data: $(this).serialize(),
    method: $(this).attr("method"),
    url: $(this).attr("action"),
    dataType: "json",
    success: function (response) {
      if (response.bool == true) {
        $("#reviews-res").removeClass("hidden").addClass("block");
        $(".hide-comment-form").hide();
        $(".add-review").hide();
        setTimeout(function () {
          $("#reviews-msg").removeClass("flex").addClass("hidden");
        }, 3000);

        let _html =
          '<div class="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">';
        _html +=
          '   <div class="gi-t-review-avtar basis-[50px] grow-0 shrink-0 mr-[15px]">';
        _html +=
          '     <img src=" /static/assets/img/user/default.jpg " class="max-w-full rounded-full" />';
        _html += "   </div>";
        _html += '   <div class="gi-t-review-content">';
        _html += '     <div class="gi-t-review-top flex flex-col mb-[10px]">';
        _html +=
          '       <div class="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">' +
          response.context.user +
          "</div>";
        _html += '       <div class="gi-t-review-rating mt-[5px]">';

        // Loop for rendering stars
        for (let i = 1; i <= 5; i++) {
          if (i <= response.context.rating) {
            _html +=
              '             <i class="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left"></i>';
          } else {
            _html +=
              '             <i class="gicon gi-star text-[14px] text-[#777] mr-[3px] float-left"></i>';
          }
        }

        _html += "       </div>";
        _html += "     </div>";
        _html +=
          '     <span class="my-[10px] text-[#777] text-[14px] list-circle">' +
          time +
          "</span>"; // Fixed date rendering
        _html += '     <div class="gi-t-review-bottom">';
        _html +=
          '       <p class="w-full text-[14px] text-[#777] font-normal">' +
          response.context.review +
          '          <a href="#">Reply</a>';
        _html += "       </p>";
        _html += "     </div>";
        _html += "   </div>";
        _html += " </div>";

        $("#reviews-res").append(_html);
      }
    },
  });
});
