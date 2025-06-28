// Create a CSS class dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .pulse {
    animation: pulseAnim 2s infinite;
  }
  @keyframes pulseAnim {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);

// Apply animation class
newDiv.classList.add('pulse');
