document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        document.getElementById('signup-error-message').textContent = 'Passwords do not match';
        return;
    }

    // Save the new user's credentials in local storage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    // Redirect to the login page after successful signup
    window.location.href = 'login.html';
});
