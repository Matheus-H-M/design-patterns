// Define uma classe chamada "Conta" que representa uma conta bancária
class Conta {
   // O construtor recebe o saldo inicial e o atribui ao objeto
   constructor(saldo) {
      this.saldo = saldo;
   }

   // Método para sacar um valor da conta
   sacar(valor) {
      // Verifica se o valor a ser sacado é maior que o saldo disponível
      if (valor > this.saldo) return "Saldo insuficiente";

      // Se houver saldo suficiente, subtrai o valor do saldo
      this.saldo -= valor;

      // Retorna uma mensagem com o novo saldo
      return `Nova saldo: ${this.saldo}`;
   }
}

// Função que atua como uma *fachada* (facade) para simplificar o uso da classe Conta
function contaFacade(saldoInicial) {
   // Cria uma nova instância da Conta com o saldo inicial fornecido
   const conta = new Conta(saldoInicial);

   // Retorna um objeto com uma interface simplificada (apenas o método sacarDinheiro)
   return {
      // O método sacarDinheiro chama internamente o método sacar da instância de Conta
      sacarDinheiro: (v) => conta.sacar(v)
   };
}

// Exemplo de uso:
// Cria uma "conta fachada" com saldo inicial de 100
// Tenta sacar 50 reais da conta e imprime o resultado no console
console.log(contaFacade(100).sacarDinheiro(50)); // Saída: "Nova saldo: 50"
