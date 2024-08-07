document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Predefined correct password for demonstration
    const correctPassword = 'password7777'; // Replace 'password7777' with the actual correct password

    // Perform validation
    if (password === correctPassword) {
        console.log('Username:', username);
        console.log('Password:', password);

        // Check if the values are being logged
        alert('Form submitted! Unlocking...');

        // Change padlock image to unlocked
        const padlock = document.getElementById('padlock');
        padlock.src = '../images/unlocked-padlock.png'; // Make sure this image path is correct

        // Redirect after a short delay to show the unlocked padlock
        setTimeout(() => {
            window.location.href = 'page7.html';
        }, 1000); // 1 second delay
    } else {
        alert('Wrong password. Please try again.');
    }
});