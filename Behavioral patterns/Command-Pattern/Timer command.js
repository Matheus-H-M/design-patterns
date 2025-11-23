class ComandoAtrasado{
    constructor(mensagem, delay){
        this.mensagem = mensagem;
        this.delay = delay;
    }
    executar(){
        setTimeout(() => {
            console.log(this.mensagem);
        }, this.delay);
    }
}
new ComandoAtrasado("Executando depois de 2s",
     2000).executar();