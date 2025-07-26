// Define a function named LoggerFactory that takes a 'level' parameter
function LoggerFactory(level){
    
    // Check if the log level is "debug"
    if(level === "debug"){
        
        // If it is "debug", return an object with a 'log' method
        // This method prints the message to the console with the "[DEBUG]" prefix
        return {
            log: msg => console.log("[DEBUG]", msg)
        };
    }

    // If the level is not "debug", the function returns undefined by default
}

// Call the LoggerFactory function with the "debug" level
// Then call the 'log' method with the message "Testando"
// This will print: [DEBUG] Testando
LoggerFactory("debug").log("Testando");