// Create an empty object
const base = {}; 

// Attempting to add a method `show` to the prototype chain
base.__proto.__.show = function(){     
    console.log("Método herdade!"); // This means "Inherited method!" in Portuguese
};

// Create another empty object
const x = {}; 

// Try to call the `show` method on x
x.show();
