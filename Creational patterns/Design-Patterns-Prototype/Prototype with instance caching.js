// Define an object 'baseObject' with a property and a method
const baseObject = {
    // Property 'created' stores the current date and time when the object is created
    created: new Date(),

    // Method 'getTime' returns the timestamp (milliseconds since Unix epoch) of the 'created' date
    getTime() {
        return this.created.getTime();
    }
};

// Create a new object 'obj1' whose prototype is 'baseObject'
// This means 'obj1' inherits properties and methods from 'baseObject'
const obj1 = Object.create(baseObject);

// Call the inherited 'getTime' method on 'obj1' and log the result
// It returns the timestamp of the 'created' date stored in 'baseObject'
console.log(obj1.getTime());
