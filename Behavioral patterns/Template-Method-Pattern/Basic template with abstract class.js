// Base class representing a generic recipe
class Receita {

    // Template method that defines the steps to prepare a recipe
    preparar() {
        // Calls the method to prepare ingredients (to be implemented by subclasses)
        this.prepararInfredientes(); // Note: method name has a typo compared to the one below
        // Calls the method to cook the recipe
        this.cozinhar();
        // Calls the method to serve the dish
        this.servir();
    }

    // Method intended to be overridden by subclasses
    prepararIngredientes() {}

    // Method intended to be overridden by subclasses
    cozinhar() {}

    // Default implementation for serving the dish
    servir() {
        console.log("Serving dish...");
    }
}

// Subclass representing a specific recipe: Lasagna
class Lasanha extends Receita {

    // Implementation of ingredient preparation for lasagna
    prepararIngredientes() {
        console.log("Preparing pasta and sauce");
    }

    // Implementation of cooking process for lasagna
    cozinhar() {
        console.log("Baking in the oven");
    }
}

// Create a Lasanha object and start the preparation process
new Lasanha().preparar();
