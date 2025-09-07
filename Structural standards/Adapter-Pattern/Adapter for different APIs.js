// Legacy class with an old method
class legacyAPI {
    // Old method that performs some action
    doAction() {
        return "Executing old action";
    }
}

// Adapter class that adapts the legacy API to a modern interface
class ModernAdapter {
    constructor() {
        // Creating an instance of the legacy API
        this.legacy = new legacyAPI();
    }

    // Modern method that delegates to the legacy method
    execute() {
        return this.legacy.doAction();
    }
}

// Testing the adapter: it will call the legacy method through the modern interface
console.log(new ModernAdapter().execute());
