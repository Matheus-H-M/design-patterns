function TarefaFabrica(name, priority = "normal"){
    return {name, priority};
}
console.log(TarefaFabrica("Comprar leite"));