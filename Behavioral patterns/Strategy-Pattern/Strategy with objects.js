// Create an object called "estrategias" (strategies)
// It stores two functions: "dobrar" (to double) and "quadrado" (to square)
const estrategias = {
    dobrar: (n) => n * 2,      // "dobrar": doubles the number
    quadrado: (n) => n * n     // "quadrado": squares the number
};

// Define a function called "executar" (execute)
// It takes a number "n" and the name of a strategy "estrategia"
function executar(n, estrategia) {
    // Access the correct function from the "estrategias" object
    // and call it with "n"
    return estrategias[estrategia](n);
}

// Call the "executar" function with the number 4
// and the strategy "dobrar" (double it)
console.log(executar(4, "dobrar"));  // Output: 8
