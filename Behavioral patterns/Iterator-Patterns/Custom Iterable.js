// Define an object named "letras"
const letras = {
    // Property "data": an array containing lowercase letters
    data: ["l", "m", "n"],

    // Define a custom iterator using a generator function
    [Symbol.iterator]: function* () {
        // Loop through each letter inside "data"
        for (const letra of this.data) {
            // Yield the uppercase version of each letter
            yield letra.toUpperCase();
        }
    }
};

// Use a for...of loop to iterate over the "letras" object
for (const letra of letras) {
    // Log each yielded uppercase letter to the console
    console.log(letra);
}
