function createUser(name, role){
    return{
        name, role, active: true
    };
}
const user = createUser("Ana","admin");
console.log(user);
