// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.
// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.


// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.


let celsBtn = document.getElementById("celsBtn");
let fahrBtn = document.getElementById("fahrBtn");
let input = document.getElementById("input");

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("converter").click();
    }
});




function toCelsius () {
	document.getElementById("fahrBtn");
	var celsius = ((input - 32) / 1.8);
	console.log(celsius);
}

function toFahrenheit () {
	document.getElementById("celsBtn");
	var fahrenheit = ((input * 1.8) + 32);
	console.log(fahrenheit);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");


// EXAMPLE var tempResult = document.getElementsById("convertedTemp");
// console.log("second div, oh boy", tempResult);

// EXAMPLE tempResult.innerHTML = "Is it too late to take up basketweaving instead of code?"


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
	