class OldPrinter{
    printText(text){
        console.log('Imprimindo:', text);
    }
}

class PrinterAdapter{
    constructor(){
        this.oldPrinter = new OldPrinter();
    }

    print(message){
        this.oldPrinter.printText(message);
    }
}
const printer = new PrinterAdapter();
printer.print('Olá mundo');