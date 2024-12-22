document.getElementById('chatbot-send').addEventListener('click', function() {
    let userInput = document.getElementById('chatbot-input').value;
    if (userInput) {
        // Display user's message
        let userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = 'You: ' + userInput;
        document.getElementById('chatbot-messages').appendChild(userMessage);

        // Simulate AI's response
        let aiResponse = document.createElement('div');
        aiResponse.classList.add('ai-message');
        aiResponse.textContent = 'AI: ' + generateAIResponse(userInput);
        document.getElementById('chatbot-messages').appendChild(aiResponse);

        // Scroll to the bottom
        document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;

        // Clear input
        document.getElementById('chatbot-input').value = '';
    }
});

// Simulate AI response based on user input
function generateAIResponse(input) {
    const responses = [
        "That's interesting! Tell me more.",
        "Can you clarify that?",
        "I'm still learning, but I'll try my best!",
        "That sounds cool! How can I help with that?",
        "I don't have an answer for that yet, but I'm working on it!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
