let isAmountVisible = false;

function toggleAmount() {
    const amountElement = document.querySelector('.amount');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (isAmountVisible) {
        amountElement.textContent = '$******';
        toggleBtn.innerHTML = '&#8635;'; // Circular arrows
    } else {
        amountElement.textContent = '$40,000.00';
        toggleBtn.innerHTML = '&#8593;&#8593;'; // Up arrows
    }

    isAmountVisible = !isAmountVisible;
    toggleBtn.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const signOutLink = document.getElementById('signOutLink');
    const modal = document.getElementById('myModal');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Show the modal when the link is clicked
    signOutLink.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Handle the Yes button click
    yesButton.addEventListener('click', function () {
        // Redirect to the desired page
        window.location.href = 'page2.html'; // Replace with your desired page URL
    });

    // Handle the No button click
    noButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});