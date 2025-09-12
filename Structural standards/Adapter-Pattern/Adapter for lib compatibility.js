// Define a library constructor function called LibA
function LibA() {
    // LibA has a method called `execute` which logs "Lib A" to the console
    this.execute = () => console.log("Lib A");
}

// Define another library constructor function called Lib
function Lib() {
    // Lib has a method called `run` which logs "Lib B" to the console
    this.run = () => console.log("Lib B");
}

// Create an adapter function that converts a Lib instance into a LibA-compatible interface
function LibAdapter(lib) {
    // Return an object that mimics the interface of LibA (i.e., has an `execute` method)
    return {
        // The `execute` method internally calls the `run` method of the Lib instance
        execute: () => lib.run()
    };
}

// Create an adapted version of Lib using the adapter so it conforms to LibA's interface
const adapted = LibAdapter(new Lib()); // ⚠️ Fixed typo here: should be `Lib`, not `LibB`

// Call the `execute` method on the adapted object
// This will actually invoke the `run` method of the original Lib object, logging "Lib B"
adapted.execute();
