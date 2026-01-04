// Function that runs a process made up of multiple steps
function executarProcesso(etapas) {
    // Calls the start step of the process
    etapas.inicio();

    // Calls the execution step of the process
    etapas.executar();

    // Calls the final step of the process
    etapas.fim();
}

// Calls the function and passes an object with the process steps
executarProcesso({
    // Function that runs at the beginning of the process
    inicio: () => console.log("Inicio"),

    // Function responsible for executing the main process logic
    execucao: () => console.log("Processando..."),

    // Function that runs at the end of the process
    fim: () => console.log("Fim do processo")
});
