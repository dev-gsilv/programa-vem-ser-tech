// TAREFA 01
let resultado;
let pedidosRestaurante= [
    {
        nomeCliente: "Maria",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "dinheiro",
        tempoEntrega: 60,
        distancia: 60,
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "4"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "2"}
        ]
    },
    {
        nomeCliente: "João",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "pix",
        tempoEntrega: 33,
        distancia: 15,
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "2"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "4"}
        ]
    },
    {
        nomeCliente: "Rafa",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "cartaoDebito",
        tempoEntrega: 40,
        distancia: 80,
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "1"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "1"}
        ]
    },
    {
        nomeCliente: "Fernanda",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "cartaoCredito",
        tempoEntrega: 15,
        distancia: 30,
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "5"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "1"}
        ]
    }
]

function calcularTempoMedioEntrega(pedidosArray){
    const somaTempo = pedidosArray.reduce((soma, pedido) => soma + pedido.tempoEntrega, 0);
    const media = somaTempo / pedidosArray.length;
    return media;
}

resultado = calcularTempoMedioEntrega(pedidosRestaurante);
console.log("\nTarefa #1. Tempo médio de entrega (minutos):",resultado,"\n\n## ## ## ##");

// TAREFA 02
function calcularVelocidadeMedia(pedidosArray){
    let velocidadeMediaPedido = 0;
    let somaDasMedias = 0;
    pedidosArray.map(pedido => {
        velocidadeMediaPedido=(pedido.distancia)/pedido.tempoEntrega;
        somaDasMedias += velocidadeMediaPedido;
    })
    return somaDasMedias/pedidosArray.length;
}

function calcularVelocidadeMedia2(pedidosArray){
    let somaDistancia = 0;
    let somaTempo = 0;
    pedidosArray.forEach(pedido => {
        somaDistancia += pedido.distancia;
        somaTempo += pedido.tempoEntrega;
    })
    return somaDistancia/somaTempo;
}

resultado = calcularVelocidadeMedia(pedidosRestaurante).toFixed(2);
console.log("\nMédia incorreta!\nTarefa #2.1. Velocidade média de entrega (km/min):",resultado);
console.log("Tarefa #2.1. Velocidade média de entrega (km/h):",((resultado*60).toFixed(0)),"\n\n## ## ## ##");

resultado = calcularVelocidadeMedia2(pedidosRestaurante).toFixed(2);
console.log("\nTarefa #2.2. Velocidade média de entrega (km/min):",resultado);
console.log("Tarefa #2.2. Velocidade média de entrega (km/h):",((resultado*60).toFixed(0)),"\n\n## ## ## ##");
