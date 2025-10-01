// Function to authenticate a user by comparing username and password
function autenticar(usuario, senha) {
  // Returns true if the username is 'admin' and the password is '1234'
  return usuario === 'admin' && senha === "1234";
}

// Facade function to simplify login process
function loginFacade(entrada) {
  // Destructure the input object to get 'user' and 'pass'
  const { user, pass } = entrada;

  // Call the authenticate function with extracted values
  // If authentication is successful, return "Access granted"
  // Otherwise, return "Denied"
  return autenticar(user, pass) ? "Acesso concedido" : "Negado";
}

// Call the loginFacade function with credentials and print the result
console.log(loginFacade({ user: "admin", pass: "1234" }));
