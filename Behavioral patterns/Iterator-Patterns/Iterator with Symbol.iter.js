// Create an object named "colecao"
const colecao = {
    // The object has an array called "items"
    items: ["a", "b", "c"],

    // Implement the built-in iterator protocol using Symbol.iterator
    [Symbol.iterator]() {
        // Start the index at 0
        let i = 0;

        // Return an iterator object
        return {
            // The "next" method is called every time the loop needs a new value
            next: () =>
                // If the current index is still inside the array...
                i < this.items.length
                    // ...return the item and mark the iteration as not done
                    ? { value: this.items[i++], done: false }
                    // Otherwise, mark iteration as done
                    : { done: true }
        };
    }
};

// Use a for...of loop to iterate over the object
for (const item of colecao) {
    // Print each item to the console
    console.log(item);
}
