// This function simulates fetching user data from an old system or API.
// It returns an object with Portuguese property names.
function fetchUserDataOld() {
    return { nome: 'Lucas', idade: 30 }; // 'nome' means 'name' and 'idade' means 'age'
}

// This function represents a newer version that transforms the data
// into a more modern or English-compatible format.
function fetchUserDataNew() {
    const data = fetchUserDataOld(); // Calls the old function and stores the result in 'data'

    // Returns a new object with English property names,
    // mapping the old keys ('nome', 'idade') to new ones ('name', 'age')
    return { name: data.nome, age: data.idade };
}

// Calls the new function and prints the result to the console.
// Expected output: { name: 'Lucas', age: 30 }
console.log(fetchUserDataNew());
