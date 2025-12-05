// A generator function named "entradas" that receives an object
function* entradas(obj) {
    // Loop through all enumerable properties (keys) of the object
    for (const chave in obj) {
        // Yield an array containing the key and its corresponding value
        // "yield" pauses the generator and returns this pair
        yield [chave, obj[chave]];
    }
}

// An object with two properties
const dados = { x: 10, y: 20 };

// Use a for...of loop to iterate through the values yielded by the generator
for (const [k, v] of entradas(dados)) {
    // Log each key and value to the console
    console.log(k, v);
}
