// Create an object called "validators" that contains validation functions
const validators = {
    // "isEmail" checks if a string contains the "@" symbol — a basic way to verify an email format
    isEmail: (str) => str.includes("@"),

    // "isNumber" checks if a string is a number using isNaN (is Not a Number)
    // The "!" negates the result, so it returns true if the string *is* a number
    isNumber: (str) => !isNaN(str)
};

// Define a function called "validar" (means "validate" in Portuguese)
// It takes two parameters:
//  - input: the value to be validated
//  - estrategia: the validation function (strategy) to use
function validar(input, estrategia) {
    // Call the validation function (estrategia) with the input and return the result
    return estrategia(input);
}

// Test the validation function
// Calls validar() with "teste@email.com" using the "isEmail" strategy
// The console will print "true" if the email contains "@"
console.log(validar("teste@email.com", validators.isEmail));
