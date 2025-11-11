// Function to send an SMS message
function enviarSMS(msg) {
    console.log("SMS:", msg); // Logs the message with the "SMS:" prefix
}

// Function to send an Email message
function enviarEmail(msg) {
    console.log("Email:", msg); // Logs the message with the "Email:" prefix
}

// Function to send a message using a given strategy (either SMS or Email)
function enviarMensagem(msg, estrategia) {
    estrategia(msg); // Executes the strategy function passed as a parameter
}

// Calls enviarMensagem to send the message "Olá!" using the enviarEmail strategy
enviarMensagem("Olá!", enviarEmail);
