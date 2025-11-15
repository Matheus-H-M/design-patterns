// Defines a standard shipping cost function.
// It receives the package weight (peso) and multiplies it by 5.
const fretePadrao = (peso) => peso * 5;

// Defines an express shipping cost function.
// It receives the package weight (peso) and multiplies it by 8.
const freteExpressao = (peso) => peso * 8;

// This function calculates the shipping cost using a chosen strategy.
// It takes the weight (peso) and a strategy function (estrategia),
// then calls the strategy function with the given weight.
function calcularFrete(peso, estrategia) {
    return estrategia(peso);
}

// Calls calcularFrete with weight 10 using the express shipping strategy,
// and prints the result to the console.
console.log(calcularFrete(10, freteExpressao));
