//A factory function that creates car objects based on the given type
function CarroFabrica(type){
    // If the type is "sport", return a sport car object
    if(type === "sport") return {model:"Ferrari", speed: 300};

    // If the type is "SUV", return an SUV car object
    if(type === "SUV") return {model: "Jeep", speed: 180};

    // If the type doesn´t match, nothing is returned (undefined)
}

// Call the factory function with "sport" type
console.log(CarroFabrica("sport"));
// Output: {model:"Ferrari", speed: 300}
console.log(CarroFabrica("SUV"));
// Output: {model:"Jeep", speed: 180}
console.log(CarroFabrica("CiberTruck"));
// Undefined;