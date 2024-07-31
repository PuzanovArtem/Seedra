const cards = document.querySelectorAll(".payment__card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));

    card.classList.add("active");
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const phone = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^[0-9\-\+]{9,15}$/;
  if (!phoneRegex.test(phone.value.trim())) {
    phoneError.textContent = "Please enter a valid phone number";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  const state = document.getElementById("state");
  const stateError = document.getElementById("stateError");
  if (state.value.trim() === "") {
    stateError.textContent = "State is required";
    isValid = false;
  } else {
    stateError.textContent = "";
  }

  const city = document.getElementById("city");
  const cityError = document.getElementById("cityError");
  if (city.value.trim() === "") {
    cityError.textContent = "City is required";
    isValid = false;
  } else {
    cityError.textContent = "";
  }

  const address = document.getElementById("address");
  const addressError = document.getElementById("addressError");
  if (address.value.trim() === "") {
    addressError.textContent = "Address is required";
    isValid = false;
  } else {
    addressError.textContent = "";
  }

  const zip = document.getElementById("zip");
  const zipError = document.getElementById("zipError");
  const zipRegex = /^[0-9]{5}$/;
  if (!zipRegex.test(zip.value.trim())) {
    zipError.textContent = "Please enter a valid ZIP code";
    isValid = false;
  } else {
    zipError.textContent = "";
  }

  if (isValid) {
    form.submit();
  }
});

const paymentButton = document.getElementById("submitPayment");
const cardImages = document.querySelectorAll(".payment__card");
let selectedCardType = null;

cardImages.forEach((card) => {
  card.addEventListener("click", () => {
    cardImages.forEach((img) => img.classList.remove("active"));
    card.classList.add("active");
    selectedCardType = card.getAttribute("data-type");
  });
});

paymentButton.addEventListener("click", (event) => {
  event.preventDefault();

  let isValid = true;

  const cardTypeError = document.getElementById("cardTypeError");
  if (!selectedCardType) {
    cardTypeError.textContent = "Please select a card type";
    isValid = false;
  } else {
    cardTypeError.textContent = "";
  }

  const cardNumber = document.getElementById("card-number");
  const cardNumberError = document.getElementById("cardNumberError");
  const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/; // Simple regex for card number format
  if (!cardNumberRegex.test(cardNumber.value.trim())) {
    cardNumberError.textContent = "Please enter a valid card number";
    isValid = false;
  } else {
    cardNumberError.textContent = "";
  }

  const expiryDate = document.getElementById("expiry-date");
  const expiryDateError = document.getElementById("expiryDateError");
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
  if (!expiryDateRegex.test(expiryDate.value.trim())) {
    expiryDateError.textContent = "Please enter a valid expiry date (MM/YY)";
    isValid = false;
  } else {
    expiryDateError.textContent = "";
  }

  const ccv = document.getElementById("ccv");
  const ccvError = document.getElementById("ccvError");
  const ccvRegex = /^[0-9]{3,4}$/;
  if (!ccvRegex.test(ccv.value.trim())) {
    ccvError.textContent = "Please enter a valid CCV";
    isValid = false;
  } else {
    ccvError.textContent = "";
  }

  if (isValid) {
    alert("Payment details are valid! Proceeding to the next step.");

    cardNumber.value = "";
    expiryDate.value = "";
    ccv.value = "";
    selectedCardType = null;
    cardImages.forEach((img) => img.classList.remove("active"));
  }
});
