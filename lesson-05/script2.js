function calculateBMI(weight, height) {
  const bmi = weight / (height * height)
  return bmi.toFixed(2)
}

console.log("BMI for someone with 70kg and 1.75m:", calculateBMI(70, 1.75))
