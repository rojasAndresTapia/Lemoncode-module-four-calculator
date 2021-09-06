'use strict';

// Global var

const inputElement = document.getElementById("num");

const sumButtonElement = document.getElementById("sum");
const restButtonElement = document.getElementById("rest");
const multiplyButtonElement = document.getElementById("multiply");
const divideButtonElement = document.getElementById("divide");
const calculateButtonElement = document.getElementById("calculate");
const resultElement = document.getElementById('calculation');

let resultValue = parseInt(resultElement.value);



if (resultValue = "NaN") {
  resultValue = parseInt(0);
} else {
  resultValue = parseInt(document.getElementById('calculation').value);
}


//Define handle functions
const handleInput = () => {
  const num = parseInt(inputElement.value);
  return num;
};

const handleButton = (ev) => {
  const handleUserInput = handleInput();
  const buttonName = ev.target.name;

  switch(true) {
      
      case (handleUserInput == ''):
          alert("Falta rellenar el campo");
        break;

      case (typeof handleUserInput == String):
          alert("Debes ingresar un número");
        break;

      case (buttonName === 'sum'):
          sum(resultValue, handleUserInput);
          resultElement.value = resultValue;
          reset(inputElement);
        break;

      case (buttonName === 'rest'):
          rest(resultValue, handleUserInput); 
          resultElement.value = resultValue;
          reset(inputElement);
        break;

        case (buttonName === 'multiply'):
          multiply(resultValue, handleUserInput);
          resultElement.value = resultValue;
          reset(inputElement); 
        break;

        case (buttonName === 'divide'):
          divide(resultValue, handleUserInput); 
          resultElement.value = resultValue;
          reset(inputElement);
        break;

        case (buttonName === 'calculate'):
          calculate(resultValue); 
        break;
  }
};

// Add events
inputElement.addEventListener("change", handleInput);


sumButtonElement.addEventListener('click', handleButton);
restButtonElement.addEventListener('click', handleButton);
multiplyButtonElement.addEventListener('click', handleButton);
divideButtonElement.addEventListener('click', handleButton);
calculateButtonElement.addEventListener('click', handleButton);


//Clear input after click operator
const reset = function(inputElement) {
 if (inputElement.value) {
  inputElement.value = "";
  }
};

// Define operator functions
const sum = (a, b) => {
  
  resultValue = parseInt(a) + parseInt(b);
  
  
};

const rest = (a, b) => { resultValue = parseInt(a) - parseInt(b);};

const multiply = (a, b) => { resultValue = parseInt(a) * parseInt(b);};

const divide = (a, b) => { resultValue = parseInt(a) / parseInt(b);};

const calculate = (response) => alert("El resultado de la operación es: " + resultValue);





