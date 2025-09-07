// Create a custom object that inherits from Array.prototype
const customArray = Object.create(Array.prototype);

// Add a custom method 'first' that returns the first element of the array
customArray.first = function () {
    return this[0];
};

// Create another object that inherits from customArray
const list = Object.create(customArray);

// Use Array's push method to add elements to 'list'
list.push(10, 20, 30);

// Call the custom 'first' method and log the first element (10)
console.log(list.first()); // Output: 10
