////////////////////////////  CONVERSION RATIOS  ///////////////////////////////////

let feetToMeters = 0.3048 
let metersToFeet = 3.2808399
let litersToGallons = 0.264172
let gallonsToLiters = 3.785412
let kilosToPounds = 2.20462262
let poundsToKilos = 0.45359237

////////////////////////////  INPUT  ///////////////////////////////////

let inputField = document.getElementById("input") // Select input field and store in inputField
let input = document.getElementById("input").value // Select the value of the input field and store in input

////////////////////////////  FUNCTIONS  ///////////////////////////////////

// Invoke updateUnitValues() when the the "input" of inputField is updated
function inputListener() {
  inputField.addEventListener("input", updateUnitValues)
}

function updateUnitValues() {
  input = document.getElementById("input").value // Select the value of the input field and store in input
  inputNumOnly = input.replace(/\D/g, "") // Only allow numbers for input
  document.getElementById("input").value = inputNumOnly // Set the id="input" to equal inputNumOnly
  
  displayUpdatedUnitValues("length-para", input) // Invoke displayUpdatedUnitValues passing "length-para" as the sectionId parameter 1, and input as the second parameter
  displayUpdatedUnitValues("volume-para", input) // Invoke displayUpdatedUnitValues passing "volume-para" as the sectionId parameter 1, and input as the second parameter
  displayUpdatedUnitValues("mass-para", input) // Invoke displayUpdatedUnitValues passing "mass-para" as the sectionId parameter 1, and input as the second parameter
}

function displayUpdatedUnitValues(sectionId, input) {

  // Initialize variables to empty strings
  let unit1 = "" 
  let unit2 = ""
  let conversion1 = ""
  let conversion2 = ""
    
    // Check if the sectionId is "length-para"
    if(sectionId === "length-para"){
        unit1 = "meters" // Set unit1 to "meters"
        unit2 = "feet" // Set unit2 to "feet"
        conversion1 = metersToFeet // Set conversion1 to the value of metersToFeet
        conversion2 = feetToMeters // Set conversion2 to the value of feetToMeters

    }
    // Check if the sectionId is "volume-para"
    if(sectionId === "volume-para"){
        unit1 = "liters"
        unit2 = "gallons"
        conversion1 = litersToGallons
        conversion2 = gallonsToLiters
    }
    // Check if the sectionId is "mass-para"
    if(sectionId === "mass-para"){
        unit1 = "kilograms"
        unit2 = "pounds"
        conversion1 = kilosToPounds
        conversion2 = poundsToKilos
    }
    
    // Display the updated unit values
    document.getElementById(sectionId).textContent = `${input} ${unit1} = ${convert(input, conversion1)} ${unit2} | ${input} ${unit2} = ${convert(input, conversion2)} ${unit1}`
}

// multiply the input by the conversion ratio
function convert(input, conversion){
  return (input * conversion).toFixed(3)
}

////////////////////////////  INITIAL INVOCATIONS  ///////////////////////////////////

updateUnitValues(); // invoke updateUnitValues() when page is loaded
inputListener(); // invoke inputListener() when page is loaded