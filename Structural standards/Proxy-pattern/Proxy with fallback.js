// Define a constant object called 'settings' with one property: theme set to "dark"
const settings = {
    theme: "dark"
};

// Create a Proxy for the 'settings' object
// A Proxy allows you to define custom behavior for fundamental operations (like getting a property)
const setttingsProxy = new Proxy(settings, {
    // Define a 'get' trap – this function is called whenever a property is accessed
    get(target, prop) {
        // If the property exists in the target object, return its value
        // Otherwise, return "Not defined" (in Portuguese: "Não definido")
        return prop in target ? target[prop] : "Não definido";
    }
});

// Try to access the 'language' property on the proxy object
// Since 'language' does not exist in 'settings', the Proxy returns "Não definido"
console.log(setttingsProxy.language); // Output: "Não definido"
