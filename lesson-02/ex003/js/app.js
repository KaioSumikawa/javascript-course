document.addEventListener('DOMContentLoaded', function () {
  console.log('🚀 JavaScript Calculator Application loaded')
  demonstrateTypeConversion()
  console.log('💡 Click "Start Calculator" to begin interactive calculation')
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && event.ctrlKey) {
    performCalculation()
  }
})
