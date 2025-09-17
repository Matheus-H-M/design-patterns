// Define a function named runTask
function runTask() {
    // Log a message to the console indicating the task is running
    console.log("Executando tarefa...");
}

// Define a higher-order function named timed that takes another function (fn) as a parameter
function timed(fn) {
    // Return a new function (a wrapper around fn)
    return function() {
        // Start a timer labeled "tempo"
        console.time("tempo");

        // Call the original function (fn)
        fn();

        // End the timer and log the time elapsed since console.time("tempo") was called
        console.timeEnd("tempo");
    };
}

// Create a new function called timedTask by passing runTask into timed
const timedTask = timed(runTask);

// Call the timedTask function, which will:
// 1. Start the timer
// 2. Execute runTask (log "Executando tarefa...")
// 3. Stop the timer and log the duration
timedTask();
