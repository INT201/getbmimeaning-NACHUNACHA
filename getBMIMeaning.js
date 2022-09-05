const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight/(height**2)
}

function getBMIMeaning(weight, height) {
  //code here
  let BMI = calculateBMI(weight, height)
  
  if (BMI < 18.5 ) {
    return "Underweight"
  } else if (BMI >= 18.5 && BMI <= 24.9 ) { 
    return "Normal weight"
  } else if (BMI > 25.0)
  return "Overweight" 
}
module.exports = getBMIMeaning


console.log(getBMIMeaning(65, 1.8))
console.log(getBMIMeaning(80, 1.7))
console.log(getBMIMeaning(44, 1.6))
