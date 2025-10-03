// Function to simulate turning on the system
function ligar() {
  console.log('Ligando...'); // Logs "Turning on..." to the console
}

// Function to simulate loading the system
function carregar() {
  console.log('Carregando sistema...'); // Logs "Loading system..." to the console

  ligar(); // Calls the function to turn on the system
  carregar(); // Calls the function to load the system (⚠️ this causes an infinite recursion)

  console.log('Pronto para uso'); // Logs "Ready to use" to the console
}

// Attempt to start the application
iniciarApp() // This function is not defined – will throw an error if run
