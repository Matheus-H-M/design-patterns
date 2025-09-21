// Define a function called `addCreatedAt` that takes an object `obj` as a parameter
function addCreatedAt(obj) {
    // Return a new object that contains all properties from the original `obj`,
    // and adds (or overrides) a `createdAt` property with the current date/time in ISO format
    return {
        ...obj,                        // Spread syntax: copies all properties from `obj`
        createdAt: new Date().toISOString() // Adds a new `createdAt` property with current time in ISO string format
    };
}

// Call the function `addCreatedAt`, passing in an object with a `name` property.
// The returned object is assigned to the constant `user`.
const user = addCreatedAt({ name: "Lucas" });

// Log the resulting object to the console.
// Example output: { name: "Lucas", createdAt: "2025-09-21T15:30:00.000Z" }
console.log(user);
