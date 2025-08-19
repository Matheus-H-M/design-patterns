function User(name){
    this.name = name;
}
User.prototype.sayHi = function () {
    console.log(`Oi, eu sou ${this.name}`);
};
const u = new User("Ana");
u.sayHi();