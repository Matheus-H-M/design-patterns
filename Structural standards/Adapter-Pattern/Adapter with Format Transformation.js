// Define an object called `oldData` with a property `nomeCompleto` (Portuguese for "full name")
const oldData = {
    nomeCompleto: "joão Silva"  // This is the original format of the data
}

// Define a function called `adaptData` that takes in a `data` object
function adaptData(data){
    // Return a new object with a property `fullName` that takes the value of `nomeCompleto` from the input
    return { fullName: data.nomeCompleto };
}

// Call the `adaptData` function with `oldData` and log the result to the console
console.log(adaptData(oldData));
// Expected output: { fullName: 'joão Silva' }
