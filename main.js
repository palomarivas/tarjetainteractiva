const cardholderNameInput = document.getElementById("cardholderName");
const cardNumberInput = document.getElementById("cardNumber");
const expMonthInput = document.getElementById("expMonth");
const expYearInput = document.getElementById("expYear");
const cvcInput = document.getElementById("cvc");
const cardFlipBox = document.getElementById("cardFlipBox");

const cardholderNamePreview = document.getElementById("cardholderNamePreview");
cardholderNamePreview.innerText = "NOMBRE APELLIDO";
const cardNumberPreview = document.getElementById("cardNumberPreview");
cardNumberPreview.innerText = "0000 0000 0000 0000";
const expPreview = document.getElementById("expPreview");
expPreview.innerText = "00/00";
const cvcPreview = document.getElementById("cvcPreview");
cvcPreview.innerText = "000";

function showOnCard() {
  const cardholderName =
    cardholderNameInput.value
      .trim()
      .toUpperCase()
      .replace(/[^a-zA-Z\s]/g, "") || "NOMBRE APELLIDO";
  const cardNumber =
    cardNumberInput.value
      .trim()
      .replace(/ /g, "")
      .replace(/\D/g, "")
      .replace(/(....)(?=.)/g, "$1 ") || "0000 0000 0000 0000";
  const expMonth = expMonthInput.value.trim().replace(/[^-?\d]/, "") || "00";
  const expYear = expYearInput.value.trim().replace(/[^-?\d]/, "") || "00";
  const cvc = cvcInput.value.trim().replace(/[^-?\d]/, "") || "000";

  // Update all preview elements
  cardholderNamePreview.innerText = cardholderName;
  cardNumberPreview.innerText = cardNumber;
  expPreview.innerText = `${expMonth}/${expYear}`;
  cvcPreview.innerText = cvc;
}

cardholderNameInput.addEventListener("input", showOnCard);
cardNumberInput.addEventListener("input", showOnCard);
expMonthInput.addEventListener("input", showOnCard);
expYearInput.addEventListener("input", showOnCard);
cvcInput.addEventListener("input", showOnCard);

cvcInput.addEventListener("focus", () => flipCard(true));
cvcInput.addEventListener("blur", () => flipCard(false));

function flipCard(flip) {
  const cardFlipBox = document.getElementById("cardFlipBox");
  if (flip) {
    cardFlipBox.classList.add("flip-box-flipped");
  } else {
    cardFlipBox.classList.remove("flip-box-flipped");
  }
}

var integerInputs = document.querySelectorAll(".integerInput");
integerInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    // Remove any non-digit characters from the input value
    this.value = this.value.replace(/[^-?\d]/, "");
  });
});

var alphaInputs = document.querySelectorAll(".alphaInput");
alphaInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    // Remove any non-alphabetic characters from the input value
    this.value = this.value.toUpperCase().replace(/[^a-zA-Z\s]/g, "");
  });
});

// Function to handle keypress event
function handleKeypress(event) {
  // Check if Enter key is pressed
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent form submission
    // Get the index of the current input field
    var currentIndex = Array.from(formControlInputs).indexOf(event.target);
    // Calculate the index of the next input field
    var nextIndex = currentIndex + 1;
    // If nextIndex is valid, focus on the next input field
    if (nextIndex < formControlInputs.length) {
      formControlInputs[nextIndex].focus();
    }
  }
}

// Select all input fields with the class 'form-control'
var formControlInputs = document.querySelectorAll(".form-control");

// Add keypress event listener to each input field with class 'form-control'
formControlInputs.forEach(function (input) {
  input.addEventListener("keypress", handleKeypress);
});

// JavaScript for custom validation
var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add("was-validated");
});
