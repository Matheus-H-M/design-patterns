class TokenService {
    static #instance;  // Private static field to store the singleton instance

    constructor(token) {
        // If an instance already exists, return it (singleton pattern)
        if (TokenService.#instance) return TokenService.#instance;

        // Otherwise, initialize the token and store the instance
        this.token = token;
        TokenService.#instance = this;
    }
}

const t1 = new TokenService("abc");  // Creates a new instance with token "abc"
const t2 = new TokenService("xyz");  // Returns the existing instance (ignores "xyz")

console.log(t1.token);  // Outputs: "abc"
