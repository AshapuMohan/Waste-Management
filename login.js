document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === storedUsername && password === storedPassword) {
        // Redirect to the data page if credentials are correct
        window.location.href = 'main.html';
    } else {
        // Display an error message if credentials are incorrect
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
