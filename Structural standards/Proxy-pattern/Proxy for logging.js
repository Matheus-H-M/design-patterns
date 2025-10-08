// Define an object 'obj' with a method 'greet'
const obj = {
    // 'greet' is a method that takes a 'name' argument and returns a greeting string
    greet(name){
        return `Hello, ${name}`;
    }
};

// Create a Proxy 'logProxy' that wraps the 'obj' object
const logProxy = new Proxy(obj, {
    // Intercept the 'get' operation (when accessing a property)
    get(target, prop){
        // Check if the property accessed is a function
        if(typeof target[prop] === "function"){
            // Return a new function that logs the call and then calls the original function
            return function (...args){
                console.log(`Calling ${prop} with arguments: ${args}`);
                // Call the original method with the provided arguments
                return target[prop](...args);
            };
        }
        // If the property is not a function, return it as is
        return target[prop];
    }
});

// Call the 'greet' method via the proxy object
logProxy.greet("Lucas"); // Logs: "Calling greet with arguments: Lucas" and returns "Hello, Lucas"
