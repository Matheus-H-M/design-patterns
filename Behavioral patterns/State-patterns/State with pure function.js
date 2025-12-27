// Function that creates a simple state machine
function criarEstado(inicial) {

    // Internal variable that stores the current state
    let estado = inicial;

    // Return an object with methods to interact with the state
    return {

        // Returns the current state
        get: () => estado,

        // Updates the state with a new value
        set: (novo) => estado = novo,

        // Changes the state based on a transition map
        transicao: (mapa) => {
            // If there is a transition defined for the current state,
            // update the state to the new value
            if (mapa[estado]) estado = mapa[estado];
        }
    };
}
// Create a state machine starting in state "A"
const fsm = criarEstado("A");
// Apply a transition map:
// A → B
// B → C
fsm.transicao({ A: "B", B: "C" });
// Print the current state to the console
console.log(fsm.get()); // Output: "B"
