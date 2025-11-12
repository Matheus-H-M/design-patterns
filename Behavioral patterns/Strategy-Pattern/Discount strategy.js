// Create an object that stores different discount strategies
const descontos = {
    // 'blackFriday' discount: applies 30% off (multiplies by 0.7)
    blackFriday: (valor) => valor * 0.7,

    // 'natal' (Christmas) discount: applies 15% off (multiplies by 0.85)
    natal: (valor) => valor * 0.85
};

// Define a function that applies a given discount strategy to a value
function aplicarDesconto(valor, estrategia) {
    // Call the discount function (estrategia) with the value (valor)
    return estrategia(valor);
}

// Test the function: apply the 'blackFriday' discount to 100
console.log(aplicarDesconto(100, descontos.blackFriday));
// Expected output: 70
