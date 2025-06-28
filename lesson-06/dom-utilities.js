const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.style.border = '1px solid #ccc';
  item.textContent += ' - Updated';
});

function updateStatus(message) {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = message;
  statusDiv.style.color = message.includes('error') ? 'red' : 'green';
}
