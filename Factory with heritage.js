//Defines a class named Animal
class Animal {
    //The constructor takes one parameter "name"
    constructor(name){this.name = name;}
}

//A Factory function that creates Animal objects based on the type
function AnimalFabrica(type){
    // if the type is "dog", return a new Animal named "Dog"
    if(type === "dog") return new Animal("Dog");

    //if the type is "cat", return a new Animal named "cat"
    if(type === "cat") return new Animal ("Cat");
}

//Cals the factory with the type "cat" and prints the returned object
console.log(AnimalFabrica("cat"));

