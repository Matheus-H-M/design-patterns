// Define a class called "Termometro" (Thermometer)
class Termometro {
    // The "update" method receives the temperature as a parameter
    update(temp) {
        // Print the current temperature in the console
        console.log("Current temperature:", temp + "ºC");
    }
}

// Create a new instance of "Subject" (this class is assumed to be defined elsewhere)
const sensor = new Subject();

// Subscribe a new "Termometro" instance to the "sensor" (so it gets notified of updates)
sensor.subscribe(new Termometro());

// Notify all subscribers (in this case, the thermometer) with a temperature value of 25°C
sensor.notify(25);
