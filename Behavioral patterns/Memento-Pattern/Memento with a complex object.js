class Sessao {
    constructor() {
        // Stores the current session data:
        // user: the logged-in user (initially null)
        // ativo: whether the session is active (initially false)
        this.dados = { user: null, ativo: false };

        // Array that will store backups of the session data
        this.backups = [];
    }

    salvar() {
        // Saves a deep copy of the current session data into the backups array.
        // JSON.parse(JSON.stringify(...)) is used to clone the object.
        this.backups.push(JSON.parse(JSON.stringify(this.dados)));
    }

    restaurar() {
        // Removes the last saved backup.
        // NOTE: As written, this does not restore anything;
        // it only removes the last backup.
        // Probably intended: this.dados = this.backups.pop() || this.dados;
        this.backups.pop() || this.dados;
    }
}
