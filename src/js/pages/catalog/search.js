document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector('.select_form[data-id="1"]');
  if (!customSelect) return;

  const selectElement = customSelect.querySelector("select");
  const selectTitle = customSelect.querySelector(".select__title");
  const selectOptionsContainer = customSelect.querySelector(".select__options");
  const selectOptions = customSelect.querySelectorAll(".select__option");
  const selectContent = selectTitle.querySelector(".select__content");

  selectTitle.addEventListener("click", (event) => {
    event.stopPropagation();
    selectOptionsContainer.hidden = !selectOptionsContainer.hidden;
    selectOptionsContainer.classList.toggle("show");
  });

  selectOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      const selectedValue = option.getAttribute("data-value");
      const selectedText = option.textContent;

      selectElement.value = selectedValue;

      selectContent.textContent = selectedText;

      selectOptionsContainer.hidden = true;
      selectOptionsContainer.classList.remove("show");
    });
  });

  document.addEventListener("click", (event) => {
    if (!customSelect.contains(event.target)) {
      selectOptionsContainer.hidden = true;
      selectOptionsContainer.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to disable scroll
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  // Function to enable scroll
  function enableScroll() {
    document.body.style.overflow = "";
  }

  // Herbs Popup
  document.getElementById("popupButton").onclick = function () {
    document.getElementById("herbsPopup").style.display = "block";
    disableScroll();
  };

  document.getElementsByClassName("popup-close")[0].onclick = function () {
    document.getElementById("herbsPopup").style.display = "none";
    enableScroll();
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById("herbsPopup")) {
      document.getElementById("herbsPopup").style.display = "none";
      enableScroll();
    }
  };

  // Filter Popup
  const filterBtn = document.querySelector(".search-form__filter");
  const popup = document.getElementById("filter-popup");
  const closeBtn = document.querySelector(".filter-popup__close");

  filterBtn.addEventListener("click", () => {
    popup.style.display = "block";
    disableScroll();
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    enableScroll();
  });

  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
      enableScroll();
    }
  });
});

// popup-filter
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".popup-accordion");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const panel = accordion.nextElementSibling;
      const arrow = accordion.querySelector(".popup-arrow");
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
  const rangeInput = document.getElementById("popup-styled-range");

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
