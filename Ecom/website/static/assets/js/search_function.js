$(document).ready(function () {
  $(".filter-checkbox").on("click", function () {
    console.log("Checked:");
    let filter_objects = {};

    $(".filter-checkbox").each(function () {
      let filter_value = $(this).val();
      let filter_key = $(this).data("filter"); // vendor, category
      //  console.log("Filter value:", filter_value);
      //  console.log("Filter key:", filter_key);
      filter_objects[filter_key] = Array.from(
        document.querySelectorAll(
          "input[data-filter=" + filter_key + "]:checked"
        )
      ).map(function (element) {
        return element.value; // vendor, category
      });
    });
    console.log("Filter objects:", filter_objects);
  });
});
