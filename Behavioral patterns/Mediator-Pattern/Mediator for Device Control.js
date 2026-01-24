// Mediator class that manages communication between devices
class DeviceMediator {
    constructor() {
        // Array to store all registered devices
        this.devices = [];
    }

    // Registers a device and assigns this mediator to it
    register(device) {
        this.devices.push(device);
        device.setMediator(this);
    }

    // Sends a command from one device to all other devices
    sendCommand(command, sender) {
        this.devices.forEach(d => {
            // Do not send the command back to the sender
            if (d !== sender) {
                d.receive(command);
            }
        });
    }
}

// Device class that communicates through the mediator
class Device {
    // Sets the mediator responsible for communication
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Sends a command via the mediator
    send(command) {
        console.log(`Sending command: ${command}`);
        this.mediator.sendCommand(command, this);
    }

    // Receives a command from the mediator
    receive(command) {
        console.log(`Command received: ${command}`);
    }
}

// Create the mediator (hub)
const hub = new DeviceMediator();

// Create devices
const lamp = new Device();
const tv = new Device();

// Register devices with the mediator
hub.register(lamp);
hub.register(tv);

// Lamp sends a command to other devices through the mediator
lamp.send("Turn on TV");
