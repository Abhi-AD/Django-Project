document.addEventListener("DOMContentLoaded", () => {
  showTab(document.getElementById("default-active"), "dashboard");
});

function showTab(button, tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.add("hidden"));

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.classList.remove(
      "bg-[#5caf90]",
      "text-white",
      "border-b-4",
      "border-[#5caf90]"
    );
    btn.classList.add("bg-white", "text-black", "border", "border-[#5caf90]");
    const icon = btn.querySelector("i");
    icon.classList.remove("text-white");
    icon.classList.add("text-black");
  });

  document.getElementById(tabId).classList.remove("hidden");

  button.classList.remove(
    "bg-white",
    "text-black",
    "border",
    "border-[#5caf90]"
  );
  button.classList.add(
    "bg-[#5caf90]",
    "text-white",
    "border-b-4",
    "border-[#5caf90]"
  );

  const icon = button.querySelector("i");
  icon.classList.remove("text-black");
  icon.classList.add("text-white");
}
