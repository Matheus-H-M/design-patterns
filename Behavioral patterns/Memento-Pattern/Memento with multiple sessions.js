// Defines a class called Sistema (System)
class Sistema {
    // The constructor is called when a new instance of the class is created
    constructor() {
        // Stores all sessions in an object, using the session name as the key
        this.sessoes = {};
    }

    // Creates a new session with the given name
    criarSessao(nome) {
        // Each session has:
        // - historico: an array to store previous values (for undo functionality)
        // - valor: the current value of the session
        this.sessoes[nome] = { historico: [], valor: null };
    }

    // Saves a new value in the specified session
    salvar(nome, valor) {
        // Retrieves the session by its name
        const sessao = this.sessoes[nome];

        // Stores the current value in the history before overwriting it
        sessao.historico.push(sessao.valor);

        // Updates the session with the new value
        sessao.valor = valor;
    }

    // Undoes the last change made to the specified session
    desfazer(nome) {
        // Retrieves the session by its name
        const sessao = this.sessoes[nome];

        // Restores the most recent value from the history
        sessao.valor = sessao.historico.pop();
    }
}
