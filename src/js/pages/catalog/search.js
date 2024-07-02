document.addEventListener('DOMContentLoaded', () => {
  const customSelect = document.querySelector('.select_form[data-id="1"]');
  if (!customSelect) return;

  const selectElement = customSelect.querySelector('select');
  const selectTitle = customSelect.querySelector('.select__title');
  const selectOptionsContainer = customSelect.querySelector('.select__options');
  const selectOptions = customSelect.querySelectorAll('.select__option');
  const selectContent = selectTitle.querySelector('.select__content');

  // Toggle the visibility of the options
  selectTitle.addEventListener('click', (event) => {
      event.stopPropagation();
      selectOptionsContainer.hidden = !selectOptionsContainer.hidden;
      selectOptionsContainer.classList.toggle('show');
  });

  // Handle option selection
  selectOptions.forEach(option => {
      option.addEventListener('click', (event) => {
          const selectedValue = option.getAttribute('data-value');
          const selectedText = option.textContent;

          // Update the hidden select element
          selectElement.value = selectedValue;

          // Update the displayed selected value
          selectContent.textContent = selectedText;

          // Hide the options
          selectOptionsContainer.hidden = true;
          selectOptionsContainer.classList.remove('show');
      });
  });

  // Close the select options if clicked outside
  document.addEventListener('click', (event) => {
      if (!customSelect.contains(event.target)) {
          selectOptionsContainer.hidden = true;
          selectOptionsContainer.classList.remove('show');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Herbs Popup
    document.getElementById('popupButton').onclick = function() {
        document.getElementById('herbsPopup').style.display = 'block';
    };

    document.getElementsByClassName('popup-close')[0].onclick = function() {
        document.getElementById('herbsPopup').style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == document.getElementById('herbsPopup')) {
            document.getElementById('herbsPopup').style.display = 'none';
        }
    };

    // Filter Popup
    const filterBtn = document.querySelector('.search-form__filter');
    const popup = document.getElementById('filter-popup');
    const closeBtn = document.querySelector('.filter-popup__close');

    filterBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});