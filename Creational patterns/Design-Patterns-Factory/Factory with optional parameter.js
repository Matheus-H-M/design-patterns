// Defines a function called TaskFactory that takes two parameters:
// name (required) and priority (optional, with a default value of "normal")
function TaskFactory(name, priority = "normal") {
    // Returns an object with the properties name and priority
    return { name, priority };
}

// Calls the TaskFactory function with only the task name
// Since no priority is provided, it uses the default value "normal"
console.log(TaskFactory("Comprar leite"));

// Expected output:
// { name: 'Comprar leite', priority: 'normal' }