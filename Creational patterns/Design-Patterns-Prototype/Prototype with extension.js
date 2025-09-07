// Define a prototype object with two methods: init and speak
const prototype = {
    // The init method assigns the name to the object
    init(name) { this.name = name; },
    
    // The speak method logs a message including the object's name
    speak() { console.log(`Hi, I am ${this.name}`); }
};

// Create a new object 'user' that inherits from the 'prototype' object
const user = Object.create(prototype);

// Initialize the 'user' object with the name "Matheus"
user.init("Matheus");

// Call the 'speak' method, which will print the greeting with the name
user.speak();  // Output: Hi, I am Matheus
