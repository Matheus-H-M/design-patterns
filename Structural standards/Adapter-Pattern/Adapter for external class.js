// Define uma classe chamada PaymentProvider que simula um provedor de pagamento
class PaymentProvider {
    // Método que envia dinheiro, recebendo um valor como parâmetro
    sendMoney(amount) {
        // Exibe no console a mensagem indicando o valor enviado
        console.log(`Enviando R$${amount}`);
    }
}

// Define uma classe chamada PaymentAdapter que atua como um adaptador para o PaymentProvider
class PaymentAdapter {
    // O construtor é chamado quando uma nova instância de PaymentAdapter é criada
    constructor() {
        // Cria uma nova instância de PaymentProvider e armazena na propriedade 'provider'
        this.provider = new PaymentProvider();
    }

    // Método 'pay' que recebe um valor e usa o método 'sendMoney' do provider
    pay(value) {
        // Chama o método 'sendMoney' do PaymentProvider, passando o valor recebido
        this.provider.sendMoney(value);
    }
}

// Cria uma nova instância de PaymentAdapter e chama o método 'pay' passando 50 como valor
new PaymentAdapter().pay(50);
// Isso imprimirá no console: "Enviando R$50"
