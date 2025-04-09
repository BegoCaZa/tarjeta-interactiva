//traer variables css
const rootStyles = document.documentElement.style;

// FORM
const formElement = document.getElementById('form');
// INPUTS
const nameInputElement = document.getElementById('card-name');
const numberInputElement = document.getElementById('card-number');
const monthInputElement = document.getElementById('exp-month');
const yearInputElement = document.getElementById('exp-year'); 
const cvcInputElement = document.getElementById('cvc');

// DISPLAYS
const nameDisplayElement = document.getElementById('card-name-display');
const numberDisplayElement = document.getElementById('card-number-display');
const monthDisplayElement = document.getElementById('card-month-display');
const yearDisplayElement = document.getElementById('card-year-display');
const cvcDisplayElement = document.getElementById('card-cvc-display');

// ERRORES

const nameErrorElement = document.getElementById('name-error');
const numberErrorElement = document.getElementById('number-error');
const monthErrorElement = document.getElementById('month-error');
const yearErrorElement = document.getElementById('year-error');
const cvcErrorElement = document.getElementById('cvc-error');


//VARIABLES

//FUNCIONES
//hacer funciones de validacion con las exp reg?

//VALIDACIONES
const validateForm = event => {
  event.preventDefault();
  onlyLetters();
  onlyNumbers();
  isMonthCorrect();
  isYearCorrect();
  isCvcCorrect();
};

const onlyLetters = () => {
  const onlyLetters = /^[a-zA-Z\s]+$/;
  let isNameValid = true;

  if (
    onlyLetters.test(nameInputElement.value) ||
    !nameInputElement.value === ''
  ) {
    nameInputElement.classList.remove('border-error');
    nameErrorElement.classList.add('hide');
    console.log('bien');
  } else if (nameInputElement.value === '') {
    nameErrorElement.classList.remove('hide');
    nameErrorElement.textContent = `Can´t be blank`;
    nameInputElement.classList.add('border-error');
    isNameValid = false;
    console.log('mal');
  } else if (!onlyLetters.test(nameInputElement.value)) {
    nameErrorElement.classList.remove('hide');
    nameErrorElement.textContent = `Can´t have numbers`;
    nameInputElement.classList.add('border-error');
    isNameValid = false;
    console.log('mal');
  }

  return isNameValid;
};

const onlyNumbers = () => {
  const onlyNumbers = /^\d+$/;
  let isNumberValid = true;

  if (
    onlyNumbers.test(numberInputElement.value) ||
    !numberInputElement.value === ''
  ) {
    numberInputElement.classList.remove('border-error');
    numberErrorElement.classList.add('hide');
    console.log('bien');
  } else if (numberInputElement.value === '') {
    numberErrorElement.classList.remove('hide');
    numberErrorElement.textContent = `Can´t be blank`;
    numberInputElement.classList.add('border-error');
    isNumberValid = false;
    console.log('mal');
  } else if (!onlyNumbers.test(numberInputElement.value)) {
    numberErrorElement.classList.remove('hide');
    numberErrorElement.textContent = `Can´t have letters`;
    numberInputElement.classList.add('border-error');
    isNumberValid = false;
    console.log('mal');
  }

  return isNumberValid;
};

const isMonthCorrect = () => {
  const onlyMonths = /^(0[1-9]|1[0-2])$/;
  let isMonthValid = true;

  if (
    onlyMonths.test(monthInputElement.value) ||
    !monthInputElement.value === ''
  ) {
    monthInputElement.classList.remove('border-error');
    monthErrorElement.classList.add('hide');
    console.log('bien');
  } else if (monthInputElement.value === '') {
    monthErrorElement.classList.remove('hide');
    monthErrorElement.textContent = `Can´t be blank`;
    monthInputElement.classList.add('border-error');
    isMonthValid = false;
    console.log('mal');
  } else if (!onlyMonths.test(monthInputElement.value)) {
    monthErrorElement.classList.remove('hide');
    monthErrorElement.textContent = `Invalid Month`;
    monthInputElement.classList.add('border-error');
    isMonthValid = false;
    console.log('mal');
  }

  return isMonthValid;
};

const isYearCorrect = () => {
  const onlyNumbers = /^\d+$/;
  let isYearValid = true;

  if (
    onlyNumbers.test(yearInputElement.value) ||
    !yearInputElement.value === ''
  ) {
    yearInputElement.classList.remove('border-error');
    yearErrorElement.classList.add('hide');
    console.log('bien');
  } else if (yearInputElement.value === '') {
    yearErrorElement.classList.remove('hide');
    yearErrorElement.textContent = `Can´t be blank`;
    yearInputElement.classList.add('border-error');
    isYearValid = false;
    console.log('mal');
  } else if (!onlyNumbers.test(yearInputElement.value)) {
    yearErrorElement.classList.remove('hide');
    yearErrorElement.textContent = `Can't have letters`;
    yearInputElement.classList.add('border-error');
    isYearValid = false;
    console.log('mal');
  }

  return isYearValid;
};

const isCvcCorrect = () => {
  const onlyNumbers = /^\d+$/;
  let isCvcValid = true;

  if (
    onlyNumbers.test(cvcInputElement.value) ||
    !cvcInputElement.value === ''
  ) {
    cvcInputElement.classList.remove('border-error');
    cvcErrorElement.classList.add('hide');
    console.log('bien');
  } else if (cvcInputElement.value === '') {
    cvcErrorElement.classList.remove('hide');
    cvcErrorElement.textContent = `Can´t be blank`;
    cvcInputElement.classList.add('border-error');
    isCvcValid = false;
    console.log('mal');
  } else if (!onlyNumbers.test(cvcInputElement.value)) {
    cvcErrorElement.classList.remove('hide');
    cvcErrorElement.textContent = `Can't have letters`;
    cvcInputElement.classList.add('border-error');
    isCvcValid = false;
    console.log('mal');
  }

  return isCvcValid;
};

const getCardName = () => {
  const name = nameInputElement.value.slice(0, 30); //tuve que limitar los caracteres en html igual
  nameDisplayElement.textContent = name;
};

const getCardNumber = () => {
  const number = numberInputElement.value.slice(0, 16); //tuve que limitar los caracteres en html igual
  numberDisplayElement.textContent = number;
};

const getCardMonth = () => {
  const month = monthInputElement.value.slice(0, 2);
  monthDisplayElement.textContent = month;
};
const getCardYear = () => {
  const year = yearInputElement.value.slice(0, 2);
  yearDisplayElement.textContent = `/${year}`;
};
const getCardCvc = () => {
  const cvc = cvcInputElement.value.slice(0, 3);
  cvcDisplayElement.textContent = cvc;
};

//EVENTOS
formElement.addEventListener('submit', validateForm);
nameInputElement.addEventListener('input', getCardName);
numberInputElement.addEventListener('input', getCardNumber);
monthInputElement.addEventListener('input', getCardMonth);
yearInputElement.addEventListener('input', getCardYear);
cvcInputElement.addEventListener('input', getCardCvc);
