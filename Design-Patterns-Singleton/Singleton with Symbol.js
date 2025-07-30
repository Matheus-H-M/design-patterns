const Singleton = Symbol(); // create a unique Symbol

class Config {
    constructor(key) {
        if (Config[Singleton]) return Config[Singleton]; // if instance exists, return it
        this.key = key;
        Config[Singleton] = this; // store the instance in a static Symbol property
    }
}

const c1 = new Config("abc"); // creates new instance, stores in Config[Singleton]
const c2 = new Config("xyz"); // returns existing instance from Config[Singleton]

console.log(c1 === c2);