document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    console.log('New Username:', newUsername);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        document.getElementById('signup-error-message').textContent = 'Passwords do not match';
        return; // Stop execution if passwords do not match
    }

    // Save the new user's credentials in local storage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    console.log('User signed up successfully');
    
    // Redirect to the login page after successful signup
    window.location.href = 'index.html';
});
