// Add click event listener
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});

// Keyboard event listener
document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
});
