// Define a class to build task objects using the Builder pattern
class TaskBuilder {
    constructor() {
        // Initialize the task with a default 'completed' status of false
        this.task = { completed: false };
    }

    // Method to set the title of the task
    setTitle(t) {
        this.task.title = t;
        return this; // Return 'this' to allow method chaining
    }

    // Method to set the due date of the task
    setDueDate(d) {
        this.task.dueDate = d;
        return this; // Return 'this' to allow method chaining
    }

    // Finalize and return the built task object
    build() {
        return this.task;
    }
}

// Create a task using the builder, set the title, and log the result
console.log(new TaskBuilder().setTitle("Estudar JS").build());