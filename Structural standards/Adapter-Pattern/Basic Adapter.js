// Classe antiga que queremos adaptar
class OldPrinter {
    // Método da classe antiga
    printText(text) {
        console.log('Imprimindo:', text);
    }
}

// Classe adaptadora que converte a interface antiga para a nova
class PrinterAdapter {
    constructor() {
        // Cria uma instância da classe antiga
        this.oldPrinter = new OldPrinter();
    }

    // Novo método que os clientes modernos usarão
    print(message) {
        // Internamente, ainda usa o método antigo
        this.oldPrinter.printText(message);
    }
}

// Cliente usando a nova interface
const printer = new PrinterAdapter();

// Chamada feita com a nova interface, mas que usa a lógica antiga por trás
printer.print('Olá mundo');
