// Define an object called 'shapes' that contains functions to create different shapes
const shapes = {
    // The 'circle' function returns an object representing a circle with radius 5
    circle: () => ({ type: "circle", radius: 5 }),

    // The 'square' function returns an object representing a square with size 10
    square: () => ({ type: "square", size: 10 })
};

// Define a factory function that creates shapes based on the provided type
function ShapeFactory(type) {
    // Accesses and executes the function corresponding to the type inside the 'shapes' object
    return shapes[type]();
}

// Calls the ShapeFactory with the type 'circle' and logs the result to the console
console.log(ShapeFactory("circle")); // Expected output: { type: "circle", radius: 5 }