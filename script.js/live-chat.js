document.addEventListener('DOMContentLoaded', () => {
    const sendChatButton = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    sendChatButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const time = new Date().toLocaleTimeString();
            appendMessage(message, 'user-message', time);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate a responder message after a short delay
            setTimeout(() => {
                const response = getResponse(message);
                const responseTime = new Date().toLocaleTimeString();
                appendMessage(response, 'responder-message', responseTime);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    function appendMessage(message, className, time) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);

        const messageContent = document.createElement('span');
        messageContent.textContent = message;

        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        messageTime.textContent = ` ${time}`;

        messageElement.appendChild(messageContent);
        messageElement.appendChild(messageTime);
        chatMessages.appendChild(messageElement);
    }

    function getResponse(userMessage) {
        // Simple simulated responses
        if (userMessage.toLowerCase().includes('hello')) {
            return "Hi there! How can I assist you today?";
        } else if (userMessage.toLowerCase().includes('help')) {
            return "Sure, I'm here to help. What do you need assistance with?";
        } else {
            return "I'm not sure how to respond to that. Can you please provide more details?";
        }
    }
});