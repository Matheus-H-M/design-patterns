// Define a class named Colecao (Collection)
class Colecao {
    constructor(itens) {
        // Store the array of items passed to the constructor
        this.itens = itens;
    }

    // Make the class iterable by implementing the Symbol.iterator method
    [Symbol.iterator]() {
        let i = 0; // Iterator index

        // Return an object that follows the iterator protocol
        return {
            // next() will be called on each iteration (e.g., in a for...of loop)
            next: () =>
                i < this.itens.length
                    // If there are still items, return the current item and mark done as false
                    ? { value: this.itens[i++], done: false }
                    // If there are no more items, mark the iteration as done
                    : { done: true }
        };
    }
}

// Create an instance of Colecao with an array of strings
const c = new Colecao(["JS", "HTML", "CSS"]);

// Use a for...of loop to iterate through the collection
for (const tech of c) {
    console.log(tech); // Print each item to the console
}
