function initializeUserInteraction() {
  try {
    const userName = window.prompt("Please enter your name to personalize your experience:")
    if (userName !== null && userName.trim() !== "") {
      displayPersonalizedGreeting(userName.trim())
    } else {
      displayDefaultMessage()
    }
  } catch (error) {
    console.error("Error during user interaction:", error)
    displayErrorMessage()
  }
}

function displayPersonalizedGreeting(name) {
  const greetingContainer = document.getElementById("user-greeting-container")
  const sanitizedName = sanitizeInput(name)
  greetingContainer.innerHTML = `
    <p>It's a great pleasure to meet you, <strong>${sanitizedName}</strong>!</p>
    <p>Thank you for trying our interactive web application.</p>
  `
  greetingContainer.style.display = "block"
}

function displayDefaultMessage() {
  const greetingContainer = document.getElementById("user-greeting-container")
  greetingContainer.innerHTML = "<p>Welcome to our interactive web application!</p>"
  greetingContainer.style.display = "block"
}

function displayErrorMessage() {
  const greetingContainer = document.getElementById("user-greeting-container")
  greetingContainer.innerHTML = "<p>Welcome! Thank you for visiting our application.</p>"
  greetingContainer.style.display = "block"
}
