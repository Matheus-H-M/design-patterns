// A generator function that iterates through every element in a list
function* iteradorLista(lista) {
    // 'for...of' loops through each element in the array
    for (const item of lista) {
        // 'yield' returns the current item and pauses the generator
        yield item;
    }
}

// Create a generator by calling the function with an array
// Note: The array [ ,1,2.3] has an "empty" first element (undefined)
const gen = iteradorLista([, 1, 2.3]);

// 'next()' returns an object { value: ..., done: ... }
// 'value' gives the yielded element
console.log(gen.next().value); // First element (undefined)
console.log(gen.next().value); // Second element (1)
