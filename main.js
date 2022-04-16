////////////////////////////  CONVERSION RATIO  ///////////////////////////////////

let feetToMeters = 0.3048 
let metersToFeet = 3.2808399
let litersToGallons = 0.264172
let gallonsToLiters = 3.785412
let kilosToPounds = 2.20462262
let poundsToKilos = 0.45359237


let inputField = document.getElementById("input") // Select input field and store in inputField
let input = document.getElementById("input").value // Select the value of the input field and store in input

// console.log(input)

// Invoke updateValues() when the the "input" of inputField is updated
function render() {
  inputField.addEventListener("input", updateValues)
}

function updateValues() {
    
  input = document.getElementById("input").value // Select the value of the input field and store in input
  inputNumOnly = input.replace(/\D/g, "") // Only allow numbers for input
  document.getElementById("input").value = inputNumOnly // Set the id="input" to equal inputNumOnly
  
  printConversion("length-para", input)
  printConversion("volume-para", input)
  printConversion("mass-para", input)
}

function printConversion(sectionId, input) {

  let unit1 = ""
  let unit2 = ""
  let conversion1 = ""
  let conversion2 = ""
    
    if(sectionId === "length-para"){
        unit1 = "meters"
        unit2 = "feet"
        conversion1 = metersToFeet
        conversion2 = feetToMeters

    }
    if(sectionId === "volume-para"){
        unit1 = "liters"
        unit2 = "gallons"
        conversion1 = litersToGallons
        conversion2 = gallonsToLiters
    }
    if(sectionId === "mass-para"){
        unit1 = "kilograms"
        unit2 = "pounds"
        conversion1 = kilosToPounds
        conversion2 = poundsToKilos
    }
     
    document.getElementById(sectionId).textContent = `${input} ${unit1} = ${convert(input, conversion1)} ${unit2} | ${input} ${unit2} = ${convert(input, conversion2)} ${unit1}`
}

// multiply the input by the conversion ratio
function convert(input, conversion){
  return (input * conversion).toFixed(3)
}

updateValues();
render();