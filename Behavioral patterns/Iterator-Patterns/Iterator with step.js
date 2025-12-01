// A generator function that returns elements from the array
// using a fixed step size (default step = 2).
function* stepIterator(lista, step = 2) {

    // Start at index 0, loop while i is still inside the array,
    // and increase i by the given step each time.
    for (let i = 0; i < lista.length; i += step) {

        // Yield the current element. The generator pauses here
        // and resumes when the next value is requested.
        yield lista[i];
    }
}

// Iterate through all values produced by stepIterator.
// It will return the array elements with the given step.
for (let item of stepIterator([1, 2, 3, 4, 5])) {

    // Print each yielded value to the console.
    console.log(item);
}
