$(".filter-checkbox").on("click", function () {
  let filter_objects = {};

  // Collect checked filter values for both categories and vendors
  $(".filter-checkbox:checked").each(function () {
    let filter_value = $(this).val();
    let filter_key = $(this).data("filter");

    // If filter_key does not exist in filter_objects, initialize as an array
    if (!filter_objects[filter_key]) {
      filter_objects[filter_key] = [];
    }
    filter_objects[filter_key].push(filter_value);
  });

  console.log("Sending filter data:", filter_objects);

  $.ajax({
    url: "/essence/filter-products",
    data: filter_objects, // Send the selected filter data
    dataType: "json",
    success: function (response) {
      console.log("Filtered data received:", response);
      $("#filtered-product").html(response.data); // Update the filtered product list
    },
  });
});
