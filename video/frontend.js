document.getElementById('bookingForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    vehicle: document.getElementById('vehicle').value,
    time: document.getElementById('time').value
  };

  const response = await fetch('http://localhost:3000/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById('message').innerText = result.message;
});
