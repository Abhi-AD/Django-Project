document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("gi-sliderPrice");

  if (slider && slider.noUiSlider) {
    const fromInput = document.querySelector(
      'input[type="number"].filter__input'
    );
    let minPrice = parseFloat(slider.getAttribute("data-min"));
    let maxPrice = parseFloat(slider.getAttribute("data-max"));
    let currentPrice = minPrice;
    if (fromInput) {
      fromInput.value = currentPrice.toFixed(2);
    }
    slider.noUiSlider.set([currentPrice, null]);
    slider.noUiSlider.on("update", (values) => {
      currentPrice = parseFloat(values[0]).toFixed(2);
      if (fromInput) {
        fromInput.value = currentPrice;
      }
      console.log("Current price: " + currentPrice);
      if (currentPrice < minPrice || currentPrice > maxPrice) {
        minPrice = Math.round(minPrice * 100) / 100;
        maxPrice = Math.round(maxPrice * 100) / 100;
        alert("Price Must be between:" + minPrice + "-----" + maxPrice);
        $(this).val(minPrice);
        $("#range").val(minPrice);
        $(this).focus();
        return false;
      }
    });

    if (fromInput) {
      fromInput.addEventListener("change", () => {
        const inputPrice = parseFloat(fromInput.value);
        if (inputPrice >= minPrice && inputPrice <= maxPrice) {
          slider.noUiSlider.set([inputPrice, null]);
        } else {
          console.log("Input price out of range");
          console.log("######################################");
        }
      });
    }

    console.log("Min Price: " + minPrice);
    console.log("Max Price: " + maxPrice);
  }
});
