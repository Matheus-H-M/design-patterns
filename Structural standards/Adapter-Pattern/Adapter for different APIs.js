const baseObject = {
    created: new Date(),
    getTime() { return this.created.getTime(); }
};
const obj1 = Object.create(baseObject);
console.log(obj1.getTime());