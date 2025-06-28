function performCalculation() {
  try {
    const firstNumber = getValidNumber('Please enter the first number:')
    if (firstNumber === null) return

    const secondNumber = getValidNumber('Please enter the second number:')
    if (secondNumber === null) return

    const sum = calculateSum(firstNumber, secondNumber)
    displayCalculationResult(firstNumber, secondNumber, sum)
    logCalculationDetails(firstNumber, secondNumber, sum)
  } catch (error) {
    console.error('Error during calculation:', error)
    displayErrorMessage('An error occurred during the calculation. Please try again.')
  }
}

function calculateSum(num1, num2) {
  return num1 + num2
}

function displayCalculationResult(firstNum, secondNum, result) {
  const container = document.getElementById('result-container')
  container.innerHTML = `
    <h3>Calculation Result</h3>
    <p><strong>Operation:</strong> ${firstNum} + ${secondNum}</p>
    <p><strong>Result:</strong> ${result}</p>
    <p><strong>Data Types:</strong></p>
    <ul style="text-align: left; display: inline-block;">
      <li>First number: ${firstNum} (${typeof firstNum})</li>
      <li>Second number: ${secondNum} (${typeof secondNum})</li>
      <li>Sum: ${result} (${typeof result})</li>
    </ul>
    <p><em>Note: Number + Number = Mathematical Addition</em></p>
  `
  container.style.display = 'block'
  window.alert(`The sum of ${firstNum} and ${secondNum} is ${result}`)
}

function displayErrorMessage(message) {
  const container = document.getElementById('result-container')
  container.innerHTML = `<p style="color: #ff6b6b;"><strong>Error:</strong> ${message}</p>`
  container.style.display = 'block'
}

function logCalculationDetails(num1, num2, sum) {
  console.group('🧮 Calculation Details')
  console.log('Input 1:', num1, `(Type: ${typeof num1})`)
  console.log('Input 2:', num2, `(Type: ${typeof num2})`)
  console.log('Operation: Addition (+)')
  console.log('Result:', sum, `(Type: ${typeof sum})`)
  console.log('Type Conversion Demo:')
  console.log(`  String + String: "${num1}" + "${num2}" = "${String(num1) + String(num2)}"`)
  console.log(`  Number + Number: ${num1} + ${num2} = ${sum}`)
  console.groupEnd()
}
