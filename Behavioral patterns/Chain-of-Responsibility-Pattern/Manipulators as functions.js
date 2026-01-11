// Creates a handler function that can delegate to the next handler
function criarHandler(func, next) {

    // Returns a new function that receives some data
    return function(data) {

        // Executes the current handler function with the data
        // If it returns false (or undefined) and there is a next handler,
        // then the next handler is called
        if (!func(data) && next) {
            next(data);
        }
    };
}

// Creates the first handler in the chain
const handler1 = criarHandler(

    // First handler: checks if the value is less than 10
    d => {
        if (d < 10) {
            console.log("Menor que 10"); // "Less than 10"
            return true; // Stops the chain
        }
    },

    // Second handler, used if the first one does not handle the data
    criarHandler(

        // Checks if the value is less than 100
        d => {
            if (d < 100) {
                console.log("Menor que 100"); // "Less than 100"
                return true; // Stops the chain
            }
        },

        // Final handler, used if none of the previous conditions matched
        d => console.log("Maior ou igual a 100") // "Greater than or equal to 100"
    )
);

// Test cases:

// 5 is handled by the first handler
handler1(5);

// 50 is handled by the second handler
handler1(50);

// 150 is handled by the final handler
handler1(150);

