// Function named “saudacao” (greeting) that takes:
//  - a required parameter “nome” of type string
//  - an optional parameter “saudacao” of type string (note the `?`)
// The function returns a string.
function saudacao(nome: string, saudacao?: string): string {
    // If the “saudacao” argument is provided (not undefined), use it;
    // otherwise use the default greeting "Olá". Then add ", " + nome + "!".
    return `${saudacao || "Olá"}, ${nome}!`;
}

// Call the function with only the “nome” argument.
// Since “saudacao” was omitted, the default "Olá" is used.
console.log(saudacao("Maria"));        // Prints: "Olá, Maria!"

// Call the function with both arguments: “nome” = "João", “saudacao” = "Bem‑vindo"
// So the greeting uses the provided value.
console.log(saudacao("João", "Bem‑vindo"));  // Prints: "Bem‑vindo, João!"
