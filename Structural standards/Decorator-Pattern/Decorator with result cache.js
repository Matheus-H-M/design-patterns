// Define a function called `cacheDecorator` that takes another function `fn` as its input
function cacheDecorator(fn) {
    // Create an empty object to store previously computed results
    const cache = {};

    // Return a new function that takes one argument `x`
    return function(x) {
        // If the result for input `x` is already in the cache, return it
        if (cache[x]) return cache[x];

        // Call the original function `fn` (note: currently it’s missing the argument `x`)
        const result = fn();

        // Store the result in the cache with key `x`
        cache[x] = result;

        // Return the computed result
        return result;
    };
}

// Define a function `square` that returns the square of a number
function square(n) {
    return n * n;
}

// Create a new function `cachedSquare` that wraps the `square` function with caching
const cachedSquare = cacheDecorator(square);

// Call the cached function with the argument 4 and print the result
console.log(cachedSquare(4)); // First time: calculates 4*4 = 16 and stores it

// Call the cached function again with the same argument 4
console.log(cachedSquare(4)); // Second time: returns the cached result without recalculating
