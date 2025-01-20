$(document).ready(function () {
  $(".filter-checkbox").on("click", function () {
    let filter_objects = {};

    // Get values from price slider
    const slider = $("#gi-sliderPrice");
    let minPrice = parseFloat(slider.attr("data-min"));
    let maxPrice = parseFloat(slider.attr("data-max"));
    let currentPrice = minPrice;

    // Store slider values in filter_objects
    filter_objects.min_price = minPrice;
    filter_objects.max_price = maxPrice;
    filter_objects.current_price = currentPrice;

    // Get values from the filter checkboxes
    $(".filter-checkbox:checked").each(function () {
      let filter_value = $(this).val();
      let filter_key = $(this).data("filter");
      if (!filter_objects[filter_key]) {
        filter_objects[filter_key] = [];
      }
      filter_objects[filter_key].push(filter_value);
    });

    // Log the filter objects for debugging
    console.log("Sending filter data:", filter_objects);

    // Send AJAX request with the filter data
    $.ajax({
      url: "/essence/filter-products",
      data: filter_objects,
      dataType: "json",
      success: function (response) {
        console.log("Filtered data received:", response.product_count);
        $("#filtered-product").html(response.data);
      },
    });
  });

  // Initialize slider and handle price updates
  const slider = $("#gi-sliderPrice");
  if (slider.length && slider[0].noUiSlider) {
    const fromInput = $('input[type="number"].filter__input');
    let minPrice = parseFloat(slider.attr("data-min"));
    let maxPrice = parseFloat(slider.attr("data-max"));
    let currentPrice = minPrice;

    if (fromInput.length) {
      fromInput.val(currentPrice.toFixed(2));
    }

    slider[0].noUiSlider.set([currentPrice, null]);

    slider[0].noUiSlider.on("update", function (values) {
      currentPrice = parseFloat(values[0]).toFixed(2);
      if (fromInput.length) {
        fromInput.val(currentPrice);
      }
      console.log("Current price: " + currentPrice);
      if (currentPrice < minPrice || currentPrice > maxPrice) {
        minPrice = Math.round(minPrice * 100) / 100;
        maxPrice = Math.round(maxPrice * 100) / 100;
        alert("Price must be between: " + minPrice + " ----- " + maxPrice);
        fromInput.val(minPrice);
        $("#range").val(minPrice);
        fromInput.focus();
        return false;
      }
    });

    if (fromInput.length) {
      fromInput.on("change", function () {
        const inputPrice = parseFloat(fromInput.val());
        if (inputPrice >= minPrice && inputPrice <= maxPrice) {
          slider[0].noUiSlider.set([inputPrice, null]);
        } else {
          console.log("Input price out of range");
        }
      });
    }

    console.log("Min Price: " + minPrice);
    console.log("Max Price: " + maxPrice);
  }
});
