// Define um objeto base com uma propriedade 'created' e um método 'getTime'
const baseObject = {
    // A propriedade 'created' armazena a data e hora atuais no momento da criação do objeto
    created: new Date(),
    // Método que retorna o timestamp da data armazenada em 'created'
    getTime() { return this.created.getTime(); }
};

// Cria um novo objeto 'obj1' que herda do 'baseObject'
const obj1 = Object.create(baseObject);

// Chama o método 'getTime' de 'obj1' e exibe o resultado no console
// Como 'obj1' herda de 'baseObject', ele acessa o método e a propriedade 'created'
console.log(obj1.getTime());
