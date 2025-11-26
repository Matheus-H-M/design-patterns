// Class that represents a scheduled task
class ScheduledTask {
    // Constructor receives the task name and time (in milliseconds)
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }

    // Method responsible for executing the task after the specified time
    execute() {
        setTimeout(() => {
            console.log(`Executing task: ${this.name}`);
        }, this.time);  // Waits for "time" milliseconds before running
    }
}

// Creates a new scheduled task and executes it
new ScheduledTask("Backup", 1000).execute();  // Executes after 1 second
