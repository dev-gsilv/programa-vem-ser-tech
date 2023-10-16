// TAREFA 01
const pedidoOriginal = {
    nomeCliente: "Maria",
    nomeRestaurante: "Tacotitlan",
    produtos: [
        {nomeProduto: "ceviche", valorUnitario: "39.90", quantidade: "4"},
        {nomeProduto: "taco al pastor", valorUnitario: "12.90", quantidade: "2"}
    ]
}

// TAREFA 02
function calcularTotalPedido(pedido){
    let somaTotal = 0;
    pedido.produtos.forEach(p => {
        somaTotal += p.valorUnitario * p.quantidade;
    });
    pedido.total = somaTotal;
    return pedido;
}

let resultado = calcularTotalPedido(pedidoOriginal);
console.log("Tarefa #2:",resultado);

// TAREFA 03:
let pedidosDoDia = [
    {
        nomeCliente: "Maria",
        nomeRestaurante: "Tacotitlan",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "4"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "2"}
        ]
    },
    {
        nomeCliente: "João",
        nomeRestaurante: "Tacotitlan",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "2"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "4"}
        ]
    },
    {
        nomeCliente: "Rafa",
        nomeRestaurante: "Tacotitlan",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "1"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "1"}
        ]
    }
]

function calcularTotalDiario(pedidosArray){
    let totalDiario = 0;
    pedidosArray.forEach(p => {     
        calcularTotalPedido(p);   
        totalDiario += p.total;
    })
    return totalDiario;
}

resultado = calcularTotalDiario(pedidosDoDia).toFixed(2);
console.log("Tarefa #3:",resultado);