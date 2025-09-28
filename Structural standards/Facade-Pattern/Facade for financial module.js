// Function that calculates the tax based on a given value
function calcularImposto(valor) {
    return valor * 0.2; // Returns 20% of the value (applies a 20% tax rate)
}

// Function that issues an "invoice", which is an object containing name, value, and calculated tax
function emitirNota(nome, valor) {
    return {
        nome,                          // Name of the product or service
        valor,                         // Value of the product or service
        imposto: calcularImposto(valor) // Calls the tax calculation function and includes it in the object
    }
}

// Main function of the tax system that receives a name and value, and returns the invoice
function sistemaFiscal(nome, valor) {
    return emitirNota(nome, valor); // Just passes the parameters to the emitirNota function
}

// Logs the result of the tax system function with given parameters
console.log(sistemaFiscal("Produto A", 100));
// Expected output:
// {
//   nome: "Produto A",
//   valor: 100,
//   imposto: 20
// }
