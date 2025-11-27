// Function that creates a custom iterator for an array
function criarIterator(lista) {
    // Variable to keep track of the current position in the array
    let i = 0;

    // The function returns an object that follows the iterator pattern
    return {
        // The "next" method returns the next element of the array
        next: () =>
            // If we still have elements to return...
            i < lista.length
                ? { value: lista[i++], done: false } // Return the current value and mark "done" as false
                : { done: true } // If no more elements, return an object indicating completion
    };
}

// Example array
const nomes = ["Ana", "João", "Carlos"];

// Create an iterator for the array
const it = criarIterator(nomes);

// Retrieve and print values using the iterator
console.log(it.next().value); // Outputs: "Ana"
console.log(it.next().value); // Outputs: "João"
