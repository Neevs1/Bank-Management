document.getElementById('bankForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const data = {  // Getting the data for the form
      fullName: document.getElementById('fullName').value,
      accountNumber: document.getElementById('accountNumber').value,
      email: document.getElementById('email').value,
      balance: parseFloat(document.getElementById('balance').value)
    };
  
    try {    // try-catch block to identify any exception which might occur
      const res = await fetch('http://localhost:3000/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const messageEl = document.getElementById('message');
      if (res.ok) {
        messageEl.textContent = 'Account submitted successfully!';
        messageEl.style.color = 'green';
        document.getElementById('bankForm').reset();
      } else {
        messageEl.textContent = 'Submission failed.';
        messageEl.style.color = 'red';
      }
    } catch (error) { // this will show error for now since we do not have any database
      console.error(error);
      document.getElementById('message').textContent = 'Error submitting form.';
    }
  });
  