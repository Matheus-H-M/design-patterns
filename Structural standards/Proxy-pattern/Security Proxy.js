// Create an object with sensitive data
const secureData = {
    secret: "42" // A key named "secret" with the value "42"
};

// Create a Proxy to intercept access to secureData
const secureProxy = new Proxy(secureData, {
    // Define a 'get' trap to intercept property access
    get(target, prop){
        // If someone tries to access the "secret" property
        if(prop === "secret"){
            return "Access denied"; // Block access by returning a custom message
        }
        // Otherwise, allow normal access to other properties
        return target[prop];
    }
});

// Try to access the "secret" property through the proxy
console.log(secureProxy.secret); // Output will be: "Access denied"
