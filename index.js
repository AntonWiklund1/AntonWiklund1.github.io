const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the username and password from the form
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // Send a POST request to the authentication endpoint
  const response = await fetch('https://01.gritlab.ax/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${username}:${password}`)}` // Basic authentication with encoded username and password
    }
  });

  if (response.ok) {
    const data = await response.json();
    const token = data; // Extract the token from the response

    // Store username, password, and token in the local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('token', token);

    // Redirect to the profile page
    window.location.href = './profile.html';
  } else {
    errorMessage.textContent = 'Invalid username or password'; // Display error message for invalid credentials
  }
});
