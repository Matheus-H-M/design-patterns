// Function that selects and returns a strategy based on the given type
function escolherEstrategia(tipo) {
    switch (tipo) {
        // If the type is "soma", return a function that adds two numbers
        case "soma":
            return (a, b) => a + b;

        // If the type is "sub", return a function that subtracts the second number from the first
        case "sub":
            return (a, b) => a - b;

        // If the type doesn't match any known case, return a function that always returns 0
        default:
            return () => 0;
    }
}

// Choose the strategy corresponding to "soma" (addition)
const estrategia = escolherEstrategia("soma");

// Execute the chosen strategy with the values 4 and 2, then print the result (which will be 6)
console.log(estrategia(4, 2));
