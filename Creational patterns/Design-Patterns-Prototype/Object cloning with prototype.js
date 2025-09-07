const car = {
    wheeles: 4, // Typo here: should be "wheels"
    drive() { console.log("Vrum!"); } // Method to simulate driving
};

const carClone = Object.create(car); // Create a new object with 'car' as its prototype
carClone.drive(); // Calls the 'drive' method inherited from the prototype, outputs: Vrum!
console.log(carClone.wheels); // Typo alert! 'wheels' is misspelled as 'wheeles' in the original object
