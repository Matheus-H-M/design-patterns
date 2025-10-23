// Class representing a single Task
class Tarefa {
    // Constructor: initializes a task with a name
    constructor(nome) {
        this.nome = nome; // stores the name of the task
    }

    // Method to execute the task (prints a message)
    executar() {
        console.log(`Executando: ${this.nome}`); // logs "Executing: [task name]"
    }
}

// Class representing a Project that contains multiple tasks
class Projeto {
    // Constructor: initializes a project with a name and an empty list of tasks
    constructor(nome) {
        this.nome = nome;     // stores the project name
        this.tarefas = [];    // initializes an empty array to hold tasks
    }

    // Method to add a task to the project
    adicionar(tarefa) {
        this.tarefas.push(tarefa); // adds the task object to the array
    }

    // Method to execute the entire project (and all its tasks)
    executar() {
        console.log(`Projeto: ${this.nome}`); // logs "Project: [project name]"
        // for each task in the project, call its executar() method
        this.tarefas.forEach(t => t.executar());
    }
}

// --- Example usage ---

// Create two tasks
const tarefa1 = new Tarefa("Login");
const tarefa2 = new Tarefa("Dashboard");

// Create a new project
const projeto = new Projeto("App Web");

// Add the tasks to the project
projeto.adicionar(tarefa1);
projeto.adicionar(tarefa2);

// Execute the project (which runs all tasks)
projeto.executar();
