// Define an object named 'book' with a single property 'title'
const book = {
    title: "JS Avançado"  // Book title is "JS Avançado"
};

// Initialize a counter to track how many times a property is accessed
let counter = 0;

// Create a Proxy to wrap the 'book' object
// The Proxy allows us to intercept and customize operations on the object
const trackedBook = new Proxy(book, {
    // Define a 'get' trap to intercept property access
    get(target, prop) {
        counter++; // Increment the counter each time a property is accessed
        return target[prop]; // Return the actual property value from the target object
    }
});

// Access the 'title' property of the proxy object twice
trackedBook.title;  // First access - counter becomes 1
trackedBook.title;  // Second access - counter becomes 2

// Log the number of times a property was accessed
console.log("Acessos:", counter);  // Output: "Acessos: 2" (Portuguese for "Accesses")
