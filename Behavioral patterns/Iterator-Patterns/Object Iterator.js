// Defines a generator function named "iteratorObjeto" that receives an object as argument
function* iteratorObjeto(obj){
    // Loops through each key inside the object
    for(const chave in obj){
        // Yields (returns one by one) the value associated with the current key
        yield obj[chave];
    }
}

// Creates an object named "pessoa" with two properties
const pessoa = {nome: "joão", idade: 30};

// Uses a for...of loop to iterate over each yielded value from the generator function
for(let valor of iteratorObjeto(pessoa)){
    // Prints each value to the console
    console.log(valor);
}
