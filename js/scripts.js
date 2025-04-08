//traer variables css
const rootStyles = document.documentElement.style;

// FORM
const formElement=document.getElementById('form')
// INPUTS
const nameInputElement = document.getElementById("card-name");
const numberInputElement = document.getElementById("card-number");
const monthInputElement = document.getElementById("exp-month");
const yearInputElement = document.getElementById("exp-year"); //aun no lo usaré
const cvcInputElement = document.getElementById("cvc");

// DISPLAYS
const nameDisplayElement = document.getElementById("card-name-display");
const numberDisplayElement = document.getElementById("card-number-display");
const monthDisplayElement = document.getElementById("card-month-display");
const yearDisplayElement = document.getElementById("card-year-display");
const cvcDisplayElement = document.getElementById("card-cvc-display");


// ERRORES
const nameErrorElement = document.getElementById("name-error");
const numberErrorElement = document.getElementById("number-error");
const dateErrorElement = document.getElementById("date-error");
const cvcErrorElement = document.getElementById("cvc-error");

//VARIABLES

//FUNCIONES
//hacer funciones de validacion con las exp reg? 

const validateForm= event =>{
    event.preventDeFault();
}

const getCardName=()=>{
    const name=nameInputElement.value.slice(0,20); //tuve que limitar los caracteres en html igual
    nameDisplayElement.textContent= name;
}

const getCardNumber=()=>{
    const number=numberInputElement.value.slice(0,16); //tuve que limitar los caracteres en html igual
    numberDisplayElement.textContent= number;
}

const getCardMonth=()=>{
    const month=monthInputElement.value.slice(0,2);
    monthDisplayElement.textContent=month;
}
const getCardYear=()=>{
    const year=yearInputElement.value.slice(0,2);
    yearDisplayElement.textContent=year;
}
const getCardCvc=()=>{
    const cvc=cvcInputElement.value.slice(0,3);
    cvcDisplayElement.textContent=cvc;
}

//EVENTOS
formElement.addEventListener('submit',validateForm);
nameInputElement.addEventListener('input',getCardName);
numberInputElement.addEventListener('input',getCardNumber);
monthInputElement.addEventListener('input',getCardMonth);
yearInputElement.addEventListener('input',getCardYear);
cvcInputElement.addEventListener('input',getCardCvc);
