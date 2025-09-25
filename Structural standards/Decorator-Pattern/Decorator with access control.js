// Define uma função chamada 'adminOnly' que recebe uma função 'fn' como argumento.
function adminOnly(fn) {
    // Retorna uma nova função que espera um parâmetro 'user'.
    return function(user) {
        // Verifica se o usuário não é 'admin'.
        if (user !== "admin") return "Acesso negado"; // Se não for, retorna uma mensagem de acesso negado.
        // Se o usuário for 'admin', chama a função original 'fn' com o usuário como argumento.
        return fn(user);
    };
}

// Cria uma função 'painel' usando 'adminOnly', passando uma função que retorna uma saudação personalizada.
const painel = adminOnly((user) => `Bem-vindo, ${user}`);

// Chama a função 'painel' com o usuário 'admin' e exibe o resultado no console.
// Como o usuário é 'admin', a função original será executada e mostrará "Bem-vindo, admin".
console.log(painel("admin"));

// Chama a função 'painel' com o usuário 'guest' e exibe o resultado no console.
// Como o usuário não é 'admin', será retornado "Acesso negado".
console.log(painel("guest"));
