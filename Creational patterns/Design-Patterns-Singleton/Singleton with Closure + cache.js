// Define a function 'createLogger'
function createLogger() {
    // Declare a private variable 'instance' inside the closure
    let instance;

    // Return an inner function (this is a singleton generator)
    return function() {
        // If 'instance' hasn't been created yet...
        if (!instance)
            // ...create it as an object with a 'log' method
            instance = { log: msg => console.log("Log:", msg) };

        // Always return the same instance
        return instance;
    };
}

// Call createLogger once, and store the returned function in getLogger
const getLogger = createLogger();

// Call getLogger twice to get two "instances"
const loggerA = getLogger();
const loggerB = getLogger();

// Check if both are the same object
console.log(loggerA === loggerB); // true