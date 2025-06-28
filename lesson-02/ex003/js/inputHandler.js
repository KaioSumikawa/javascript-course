function getValidNumber(promptMessage) {
  let userInput
  let attempts = 0
  const maxAttempts = 3

  do {
    userInput = window.prompt(promptMessage)
    if (userInput === null) return null

    const convertedNumber = Number(userInput)
    if (!isNaN(convertedNumber) && isFinite(convertedNumber)) {
      return convertedNumber
    }

    attempts++
    if (attempts < maxAttempts) {
      window.alert(`Invalid input: "${userInput}" is not a valid number. Please enter a numeric value.`)
      promptMessage = 'Please enter a valid number:'
    } else {
      window.alert('Maximum attempts reached. Operation cancelled.')
      return null
    }
  } while (attempts < maxAttempts)

  return null
}
