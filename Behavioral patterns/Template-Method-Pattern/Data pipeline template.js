// Base Pipeline class that defines a generic data processing flow
class Pipeline {
    // Main method that runs the pipeline steps in order
    processar() {
        this.coletar();     // Step 1: collect data
        this.transformar(); // Step 2: transform data
        this.salvar();      // Step 3: save data
    }

    // Method responsible for collecting data
    // Intended to be overridden by subclasses
    coletar() {}

    // Method responsible for transforming data
    // Intended to be overridden by subclasses
    transformar() {}

    // Method responsible for saving data
    salvar() {
        console.log("Data saved");
    }
}

// Specialized pipeline for processing CSV files
class PipelineCSV extends Pipeline {
    // Collects data from a CSV file
    coletar() {
        console.log("Reading CSV file");
    }

    // Transforms CSV data into JSON format
    transformar() {
        console.log("Converting to JSON");
    }
}

// Creates an instance of the base Pipeline class
// and runs the processing flow
new Pipeline().processar();
