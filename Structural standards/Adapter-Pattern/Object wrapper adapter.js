// Define a legacy logging function
function legacyLogger(msg) {
    // Log the message with a prefix indicating it's from the old logger
    console.log("LOG antigo:", msg);
}

// Create an adapter object to provide a modern interface
const loggerAdapter = {
    // Define a 'log' method that internally calls the legacy logger
    log: (msg) => legacyLogger(msg)
};

// Use the adapter's log method to log a message
loggerAdapter.log("Usando adapter");
