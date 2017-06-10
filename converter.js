
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.


// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
let celsBtn = document.getElementById("celsBtn");
let fahrBtn = document.getElementById("fahrBtn");
let input = document.getElementById("input");
var button = document.getElementById("converter");
var clicked = false;


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
var fahrenheit = ((parseInt(input.value) * 1.8) + 32);
var celsius = ((parseInt(input.value) - 32) / 1.8);
  if (celsBtn.checked) {
  	var div = document.getElementById("convertedTemp");
	div.innerHTML += `The temperature converts to ${fahrenheit} fahrenheit! `;
} else if (fahrBtn.checked) {
	var div = document.getElementById("convertedTemp");
	div.innerHTML += `The temperature converts to ${celsius} celsius! `;
} else {
	alert("Please select starting temperature measurement.")
}};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

//Trying to get button to work when the enter key is pressed.
  document.getElementById('converter').addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });