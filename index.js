"use strict";
const form = document.querySelector("form");
const cardNumberInput = document.querySelector("#cardNumberInput");
const cardNameInput = document.querySelector("#cardHolderNameInput");
const cardNumberDisplay = document.querySelector("#cardNumberDisplay");
const expDateMM = document.querySelector("#expDateMM");
const expDateYY = document.querySelector("#expDateYY");
const cvvNumber = document.querySelector(".CVV");
const cardNameDisplay = document.querySelector("#cardHolderNameDisplay");
const cardNumberErrorMsg = document.querySelector(".Card-Number-Error-Msg");
const cardDateErrorMsg = document.querySelector(".Date-error-msg");
const cardCvvErrorMsg = document.querySelector(".CVV-error-msg");
const cardCvvDisplay = document.querySelector("#cardCvvDisplay");
const expDateYYDisplay = document.querySelector("#expDateYYDisplay");
const expDateMMDisplay = document.querySelector("#expDateMMDisplay");
const thanksBox = document.querySelector(".thanks-box");
let errorCheckingOnExpMM = false,
  errorCheckingOnExpYY = false,
  errorCheckingOnCvv = false,
  errorCheckingOnCardName = false,
  errorCheckingOnCardNumberb = false;

// Exp Date Validation

const validationOnExpMM = function () {
  const eventLength = this.getAttribute("maxlength");
  expDateMMDisplay.innerHTML = this.value;

  if (
    this.value === "" ||
    this.value.length < eventLength ||
    this.value > 12 ||
    this.value === 0
  ) {
    console.log("please fill something");
    cardDateErrorMsg.style.display = "block";
    this.classList.add("input-border");
    errorCheckingOnExpMM = false;
  } else {
    console.log("vadiya");
    cardDateErrorMsg.style.display = "none";
    this.classList.remove("input-border");
    errorCheckingOnExpMM = true;
  }
};

const validationOnExpYY = function () {
  const eventLength = this.getAttribute("maxlength");

  expDateYYDisplay.innerHTML = this.value;
  if (this.value === "" || this.value.length < eventLength) {
    console.log("please fill something");
    cardDateErrorMsg.style.display = "block";
    this.classList.add("input-border");
    errorCheckingOnExpYY = false;
  } else {
    console.log("vadiya");
    cardDateErrorMsg.style.display = "none";
    this.classList.remove("input-border");
    errorCheckingOnExpYY = true;
  }
};

expDateMM.addEventListener("blur", validationOnExpMM);
expDateMM.addEventListener("input", validationOnExpMM);
expDateYY.addEventListener("blur", validationOnExpYY);
expDateYY.addEventListener("input", validationOnExpYY);

// CVV number Validation

const validationOnCvv = function () {
  const eventLength = this.getAttribute("maxlength");
  cardCvvDisplay.innerText = this.value;

  if (this.value === "" || this.value.length < eventLength) {
    console.log("please fill something");
    cardCvvErrorMsg.style.display = "block";
    this.classList.add("input-border");
    errorCheckingOnCvv = false;
  } else {
    console.log("vadiya");
    cardCvvErrorMsg.style.display = "none";
    this.classList.remove("input-border");
    errorCheckingOnCvv = true;
  }
};

cvvNumber.addEventListener("blur", validationOnCvv);
cvvNumber.addEventListener("input", validationOnCvv);

// Card Name Validation

const validationOnCardName = function () {
  if (this.value == "") {
    cardNameDisplay.innerText = "JANE APPLESEED";
    console.log("can't leave empty");
    this.classList.add("input-border");
    errorCheckingOnCardName = false;
  } else {
    cardNameDisplay.innerText = this.value;
    this.classList.remove("input-border");
    console.log("vadiya");
    errorCheckingOnCardName = true;
  }
};

cardNameInput.addEventListener("blur", validationOnCardName);
cardNameInput.addEventListener("input", validationOnCardName);

// Card Number Validation

function validationOnCardNumber() {
  const regex = /\D/gi;

  cardNumberDisplay.innerText = this.value.replace(/(.{4})/g, "$1 ").trim();

  // e.target.value = cardNumber .innerText;
  //solve the caught error

  if (this.value == "") {
    cardNumberDisplay.innerText = "0000 0000 0000 0000";
    cardNumberErrorMsg.style.display = "block";
    this.classList.add("input-border");
    errorCheckingOnCardNumberb = false;
  } else {
    if (regex.test(this.value)) {
      console.log("error");
      cardNumberErrorMsg.style.display = "block";
      this.classList.add("input-border");
      errorCheckingOnCardNumberb = false;
    } else {
      console.log("vadiya");
      cardNumberErrorMsg.style.display = "none";
      this.classList.remove("input-border");

      errorCheckingOnCardNumberb = true;
    }
  }
}

function validationOnCardNumberb() {
  const eventLength = this.getAttribute("maxlength");
  if (this.value.length < eventLength) {
    console.log("error");
    cardNumberErrorMsg.style.display = "block";
    this.classList.add("input-border");

    errorCheckingOnCardNumberb = false;
  } else {
    console.log("vadiya");
    cardNumberErrorMsg.style.display = "none";
    this.classList.remove("input-border");
    errorCheckingOnCardNumberb = true;
  }
}
cardNumberInput.addEventListener("blur", validationOnCardNumberb);
cardNumberInput.addEventListener("input", validationOnCardNumber);

// form subimmison

const submitFrm = (e) => {
  e.preventDefault();

  if (
    !errorCheckingOnCardNumberb &&
    !errorCheckingOnExpMM &&
    !errorCheckingOnExpYY &&
    !errorCheckingOnCvv
  ) {
    cardDateErrorMsg.style.display = "block";
    cardCvvErrorMsg.style.display = "block";
    cardNumberErrorMsg.style.display = "block";
    return;
  }

  if (!errorCheckingOnCardNumberb) {
    console.log("Please enter all the details");
    cardNumberErrorMsg.style.display = "block";
    return;
  } else if (!errorCheckingOnExpMM || !errorCheckingOnExpYY) {
    cardDateErrorMsg.style.display = "block";
    return;
  } else if (!errorCheckingOnCvv) {
    cardCvvErrorMsg.style.display = "block";
    return;
  } else {
    form.style.display = "none";
    thanksBox.style.display = "block";
    console.log("passed");
    form.submit();
  }
};
form.addEventListener("submit", submitFrm);


