// Define a factory function for creating medieval-themed enemies and weapons
function MedievalFactory() {
    return {
        // Method to create a medieval enemy
        createEnemy: () => "Orc",

        // Method to create a medieval weapon
        createWeapon: () => "Espada"  // "Espada" is Spanish/Portuguese for "Sword"
    };
}

// Define a factory function for creating futuristic-themed enemies and weapons
function FuturisticFactory() {
    return {
        // Method to create a futuristic enemy
        createEnemy: () => "Drone",

        // Method to create a futuristic weapon
        createWeapon: () => "Laser"
    };
}

// Call the FuturisticFactory to create a futuristic enemy and print it to the console
console.log(FuturisticFactory().createEnemy());  // Output: "Drone"
