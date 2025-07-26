//Defines a function called createUser that takes two parameters: name and role.
function createUser(name, role){
    /*The function returns an object with three properties:
      name: parameter value name
      role: parameter value role
      avtive: will always be true, indicating that the user is active
    */
    return{
        name, //same as name: name
        role, //same as role: role
        active: true
    };
}
/*
Create a new user by calling the createUser function with the values "Ana" and "admin"

The result (an object with name, role, and status) is stored in the user constant.
*/
const user = createUser("Ana","admin");
//Displays the contents of the user object on the console
console.log(user);
