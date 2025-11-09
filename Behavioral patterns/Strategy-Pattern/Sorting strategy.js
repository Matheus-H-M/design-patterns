// Function to sort numbers in ascending order
const ordenarAsc = (a, b) => a - b;

// Function to sort numbers in descending order
const ordenarDesc = (a, b) => b - a;

// Function that sorts an array using a given sorting strategy (callback)
function ordenarArray(arr, estrategia) {
    // Use the JavaScript built-in sort method with the provided strategy
    return arr.sort(estrategia);
}

// Call ordenarArray with an array [5, 1, 3] and the ascending order function
// Then print the result to the console
console.log(ordenarArray([5, 1, 3], ordenarAsc));
