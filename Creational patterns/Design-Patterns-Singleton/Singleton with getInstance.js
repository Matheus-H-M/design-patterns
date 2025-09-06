class Logger {
    // A static property that will hold the single instance of the Logger class.
    static instance;

    // A static method to get the singleton instance of Logger.
    static getInstance() {
        // If no instance exists yet, create one.
        if (!Logger.instance)
            Logger.instance = new Logger();

        // Return the existing (or newly created) instance.
        return Logger.instance;
    }

    // An instance method that logs a message to the console with a "[LOG]" prefix.
    log(msg) {
        console.log("[LOG]", msg);
    }
}

// Get the singleton Logger instance and use it to log the message "Hello".
Logger.getInstance().log("Hello");
