////////////////////////////  GLOBAL VARIABLES  ///////////////////////////////////

let num = 20;
let feet;
let meter;
let liter;
let gallon;
let pound;
let kilo;

////////////////////////////  LENGTH FUNCTIONS  ///////////////////////////////////

// Convert Meters to Feet with only 3 decimal places
function meterToFeet() {
  feet = num * 3.28084;
  feet = feet.toFixed(3);
}

// Convert Feet to Meters with only 3 decimal places
function feetToMeter() {
  meter = num / 3.28084;
  meter = meter.toFixed(3);
}

////////////////////////////  VOLUME FUNCTIONS   ///////////////////////////////////

// Convert Liters to Gallons with only 3 decimal places
function literToGallon() {
  gallon = num * 0.264172;
  gallon = gallon.toFixed(3);
}

// Convert Gallons to Liters with only 3 decimal places
function gallonToLiter() {
  liter = num / 0.2641722;
  liter = liter.toFixed(3);
}

////////////////////////////  MASS FUNCTIONS  ///////////////////////////////////

function kiloToPound() {
  pound = num / 0.45359237;
  pound = pound.toFixed(3);
}



function poundToKilo() {
  kilo = num * 0.45359237;
  kilo = kilo.toFixed(3);
}

////////////////////////////  CALL FUNCTIONS  ///////////////////////////////////
meterToFeet();
feetToMeter();
literToGallon();
gallonToLiter();
kiloToPound();
poundToKilo();

////////////////////////////  DISPLAY TEXT  ///////////////////////////////////

document.getElementById("num-text").textContent = num;
document.getElementById("length-para").textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`;
document.getElementById("volume-para").textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`;
document.getElementById("mass-para").textContent = `${num} kilograms = ${pound} pounds | ${num} pounds = ${kilo} kilograms`;