const base = {
    log() { console.log("Executando..."); }
};

// Create an object 'task' with a 'title' property
const task = { title: "Estudar JS" };

// Set the prototype of 'task' to 'base', so 'task' inherits from 'base'
Object.setPrototypeOf(task, base);

// Call the inherited 'log' method from the 'base' object
task.log(); // Outputs: "Executando..."
