document
  .getElementById("download-button")
  .addEventListener("click", function () {
    const element = document.getElementById("invoice-content");
    const userTitle = element.getAttribute("data-username");
    html2pdf().from(element).save(`${userTitle}.pdf`);
  });
