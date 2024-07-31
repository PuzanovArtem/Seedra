document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const panel = accordion.nextElementSibling;
      const arrow = accordion.querySelector(".arrow");
      if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.classList.remove("rotate");
      } else {
        panel.style.display = "block";
        arrow.classList.add("rotate");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("styled-range");

  function updateRangeBackground() {
    const value =
      ((rangeInput.value - rangeInput.min) /
        (rangeInput.max - rangeInput.min)) *
      100;
    rangeInput.style.background = `linear-gradient(to right, #4CAF50 ${value}%, #e1e1e1 ${value}%)`;
  }

  rangeInput.addEventListener("input", updateRangeBackground);

  updateRangeBackground();
});
