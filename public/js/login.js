async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();


  if (username) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/dashboard');

    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

