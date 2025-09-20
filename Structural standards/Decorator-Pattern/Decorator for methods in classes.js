// This is a decorator function that will be used to log method calls
function logMethod(target, key, descriptor) {
    // Save the original method so we can call it later
    const original = descriptor.value;

    // Modify the method to add logging before calling the original
    descriptor.value = function (...args) {
        // Log the method name and arguments
        console.log(`Chamando ${key} com`, args);

        // Call the original method with the same arguments and return the result
        return original.apply(this, args);
    };

    // Return the updated descriptor
    return descriptor;
}

// Define a class named MathTool (Note: "classs" should be "class")
class MathTool {
    // Apply the logMethod decorator to the multiply method
    @logMethod
    multiply(a, b) {
        // Return the result of multiplying a and b
        return a * b;
    }
}
