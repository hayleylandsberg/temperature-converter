
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.


// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
let celsBtn = document.getElementById("celsBtn");
let fahrBtn = document.getElementById("fahrBtn");
let input = document.getElementById("input");
var button = document.getElementById("converter");
var clicked = false;
var clear = document.getElementById("clear");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {

var fahrenheit =((parseInt(input.value) * 1.8) + 32);
var celsius = ((parseInt(input.value) - 32) / 1.8);
  if (celsBtn.checked) {
  	color("F", fahrenheit);
  	var div = document.getElementById("convertedTemp");
	div.innerHTML += `The temperature converts to ${fahrenheit} fahrenheit! `;
} else if (fahrBtn.checked) {
	color("C", celsius);
	var div = document.getElementById("convertedTemp");
	div.innerHTML += `The temperature converts to ${celsius} celsius! `;
} else {
	alert("Please select starting temperature measurement.")
}
};

//Clear button function
function clearElement (clickEvent) {
	document.getElementById("celsBtn").checked = false;
	document.getElementById("fahrBtn").checked = false;
	input.value.innerHTML = "";
	document.getElementById("input").value = "";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clear.addEventListener("click", clearElement);


//Trying to add Color:

  function color(type, temp) {
	if ((type === "F" && temp > 90) || (type === "C" && temp > 32)) {
		convertedTemp.style.color= "red";
	} else if ((type === "F" && temp < 32) || (type === "C" && temp < 0)) {
		convertedTemp.style.color= "blue";
	} else {
		convertedTemp.style.color= "green";
	}
	console.log("temp", temp);
};


input.addEventListener("keypress", function(event) {
	console.log(event);
	if (event.which === 13) {
		event.preventDefault();
		console.log("enter press");
		determineConverter();
	} else {
		console.log("error");
	}
});