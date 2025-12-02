// Function that creates a manual iterator for an array
function iteradorManual(lista) {
    // Internal counter to track the current position in the array
    let i = 0;

    return {
        // Method that returns the next element in the array
        proximo() {
            // If there are still elements available, return the current one and increment the counter
            if (i < lista.length) return lista[i++];

            // If the end of the array is reached, return null
            return null;
        }
    };
}

// Create an iterator for the array ["a", "b"]
const it = iteradorManual(["a", "b"]);

let valor;

// Use a loop to get each element from the iterator until it returns null
while ((valor = it.proximo()) !== null) {
    console.log(valor); // Print each value
}
