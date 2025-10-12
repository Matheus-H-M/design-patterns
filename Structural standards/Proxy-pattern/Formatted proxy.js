// Create an object named 'user' with a single property 'name'
const user = {
    name: "Ana"
};

// Create a Proxy object named 'formatter' that wraps around the 'user' object
const formatter = new Proxy(user, {
    // Define a 'get' trap that intercepts property access on the proxy
    get(target, prop){
        // Get the actual value of the property from the target object
        const value = target[prop];

        // If the value is a string, return it in uppercase
        // Otherwise, return the original value
        return typeof value === "string" ? value.toUpperCase() : value;
    }
});

// Log the 'name' property of the formatter proxy to the console
console.log(formatter.name); // Output: "ANA"
