document.addEventListener('DOMContentLoaded', () => {
    const contactUsElement = document.querySelector('.contact-us');
    const popupNav = document.getElementById('popupnav');
    const cancelButton = document.querySelector('.cancel-button');
    const liveChatElement = document.querySelector('.live-chat');

    contactUsElement.addEventListener('click', () => {
        popupNav.style.bottom = '10px';
    });

    cancelButton.addEventListener('click', () => {
        popupNav.style.bottom = '-100%';
    });

    liveChatElement.addEventListener('click', () => {
        window.location.href = 'live-chat.html';
    });
});