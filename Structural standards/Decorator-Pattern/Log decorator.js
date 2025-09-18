// Defines a function that takes another function as input and returns a new, decorated version of it
function logDecorator(fn) {
    // Returns a new function that accepts any number of arguments
    return function (...args) {
        // Logs the arguments with which the function was called
        console.log("Called with:", args);
        // Calls the original function with the given arguments and returns its result
        return fn(...args);
    };
}

// Defines a simple function that adds two numbers
function add(a, b) {
    return a + b;
}

// Creates a new version of the 'add' function, now with logging added
const loggedAdd = logDecorator(add);

// Calls the decorated function and logs the result to the console
console.log(loggedAdd(2, 3)); // Output: Called with: [2, 3] \n 5
