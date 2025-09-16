// Define a function called sayHello that takes a parameter 'name'
function sayHello(name){
    // It returns a greeting string using template literals
    return `Hello, ${name}`;
}

// Define a higher-order function called excitedDecorator
// It takes a function 'fn' as an argument and returns a new function
function excitedDecorator(fn){
    // Return a new function that takes 'name' as its argument
    return function(name){
        // Call the original function 'fn' with 'name', convert the result to uppercase, and add "!!!" at the end
        return fn(name).toUpperCase() + "!!!";
    };
}

// Use excitedDecorator to create a new function based on sayHello
const excitedHello = excitedDecorator(sayHello);

// Call the decorated function with "Lucas" and print the result
console.log(excitedHello("Lucas")); // Output: "HELLO, LUCAS!!!"
