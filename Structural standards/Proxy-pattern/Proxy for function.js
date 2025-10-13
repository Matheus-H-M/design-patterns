// Define a function that multiplies two numbers
function multiply(x, y) {
    return x * y;
}

// Create a Proxy for the multiply function
const multiplayProxy = new Proxy(multiply, {
    // The 'apply' trap intercepts function calls
    apply(target, thisArg, args) {
        // Log the arguments with which the function was called
        console.log(`Calling with: ${args}`);
        // Call the original function with the provided arguments
        return target(...args);
    }
});

// Call the proxy function with arguments 2 and 3, and log the result
console.log(multiplayProxy(2, 3));
