// Define a configuration object with a single property 'mode' set to "prod"
const config = {
    mode: "prod"
};

// Create a Proxy around the 'config' object to make it read-only
const readonly = new Proxy(config, {
    // The 'set' trap is triggered whenever someone tries to modify a property
    set() {
        // Throw an error to prevent any changes to the object
        throw "Este objeto é somente leitura"; // "This object is read-only" (in Portuguese)
    }
});