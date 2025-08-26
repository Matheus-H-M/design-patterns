// Define an object 'baseObject' with a 'created' date and a 'getTime' method
const baseObject = {
    created: new Date(),  // Stores the current date and time
    getTime() {
        // ❌ Incorrect use of comma operator: only 'getTime' (a reference) is returned, not the actual time
        return this.created, getTime(); 
        // It likely throws an error or returns undefined, depending on context
    }
};

// Create a new object 'obj1' that inherits from 'baseObject'
const obj1 = Object.create(baseObject);

// ❌ Syntax Error: Missing dot between 'obj1' and 'getTime'
// This should be: obj1.getTime()
console.log(obj1getTime());