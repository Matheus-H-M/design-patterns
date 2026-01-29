// Class representing a Car
class Car {
    // Accepts a visitor and calls the visitor's method for Car
    accept(visitor) {
        visitor.visitCar(this);
    }
}

// Class representing a Bike
class Bike {
    // Accepts a visitor and calls the visitor's method for Bike
    accept(visitor) {
        visitor.visitBike(this);
    }
}

// Visitor class that defines operations for each vehicle type
class VehicleVisitor {
    // Method executed when visiting a Car
    visitCar(car) {
        console.log("Visiting a car");
    }

    // Method executed when visiting a Bike
    visitBike(bike) {
        console.log("Visiting a bike");
    }
}

// Create a list of vehicles (Car and Bike)
// For each vehicle, accept a new VehicleVisitor
[new Car(), new Bike()].forEach(v => v.accept(new VehicleVisitor()));
