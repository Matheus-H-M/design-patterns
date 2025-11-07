// Function to add two numbers
function somar(a, b) {
    return a + b;
}

// Function to subtract one number from another
function subtrair(a, b) {
    return a - b;
}

// Function that takes two numbers and a strategy function (like somar or subtrair)
// It calls the strategy function with the given numbers
function calcular(a, b, estrategia) {
    return estrategia(a, b);
}

// Calls calcular using the "somar" (add) function as the strategy
// This will output 8 (5 + 3)
console.log(calcular(5, 3, somar));

// Calls calcular using the "subtrair" (subtract) function as the strategy
// This will output 2 (5 - 3)
console.log(calcular(5, 3, subtrair));
