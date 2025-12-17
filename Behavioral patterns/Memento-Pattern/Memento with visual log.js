// Defines a Logger class
class Logger {

  // Constructor method, runs when a new Logger is created
  constructor() {
    // Array used to store previous states of "valor" (history)
    this.log = [];

    // String that holds the current value being built
    this.valor = "";
  }

  // Method to write (append) text
  escrever(t) {
    // Save the current value before modifying it (for undo)
    this.log.push(this.valor);

    // Append the new text to the current value
    this.valor += t;

    // Output the updated value to the console
    console.log(this.valor);
  }

  // Method to undo the last change
  desfazer() {
    // Restore the last saved value from the log
    // If the log is empty, fallback to an empty string
    this.valor = this.log.pop() || "";

    // Output the restored value to the console
    console.log("↩️", this.valor);
  }
}
