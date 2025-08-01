let created = 0; // Variable to keep track of how many times the singleton instance is created.

const counterSingleton = (() => { // This is an IIFE (Immediately Invoked Function Expression) that returns an object with two methods.
    let instance; // Private variable to hold the singleton instance.

    return {
        get: () => { // Method to get the singleton instance.
            if (!instance) { // If the instance doesn't exist yet,
                instance = { id: Math.random() }; // create a new one with a random ID.
                created++; // Increment the creation counter.
            }
            return instance; // Return the existing or newly created instance.
        },
        createdCount: () => created // Method to return how many times the instance was created.
    };
})();

counterSingleton.get(); // Call `get`, which creates the instance for the first time.
console.log(counterSingleton.createdCount()); // Logs how many times the instance was created (should be 1).
