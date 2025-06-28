function measurePerformance(operationName, callback) {
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`${operationName} took ${(end - start).toFixed(2)} ms`);
}

// Example usage:
measurePerformance('Create 100 divs', () => {
  for(let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    document.body.appendChild(div);
  }
});
