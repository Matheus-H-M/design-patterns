// Function to validate if the email contains "@"
function validar(email) {
  return email.includes("@");
}

// Function to simulate saving the email and return a success message
function salvar(email) {
  return `Email ${email} salvo com sucesso`; // "Email saved successfully"
}

// Function to register an email:
// - First validates the email
// - If invalid, returns "Invalid email"
// - If valid, saves the email
function registrarEmail(email) {
  if (!validar(email)) return "Email inválido"; // "Invalid email"
  return salvar(email);
}

// Test the function with a sample email
console.log(registrarEmail("test@email.com"));
