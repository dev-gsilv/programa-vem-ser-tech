// TAREFA 01
const pedidoDinheiro = {
    nomeCliente: "Maria",
    nomeRestaurante: "Tacotitlan",
    formaPagamento: "dinheiro",
    produtos: [
        {nomeProduto: "ceviche", valorUnitario: "39.90", quantidade: "4"},
        {nomeProduto: "taco al pastor", valorUnitario: "12.90", quantidade: "2"}
    ]
}

function calcularTotalComDesconto(pedido){
    let somaTotal = 0;
    pedido.produtos.forEach(p => {
        somaTotal += p.valorUnitario * p.quantidade;
    });

    switch(pedido.formaPagamento){
        case "pix":
            somaTotal *= 0.8;
            break;
        case "dinheiro":
            somaTotal *= 0.85;
            break;
        case "cartaoDebito":
            somaTotal *= 0.95;
            break;
        case "cartaoCredito":
            somaTotal *= 0.99;
            break;
        default:
            break;
    }

    pedido.subtotal = somaTotal;
    return pedido;
}

let resultado = calcularTotalComDesconto(pedidoDinheiro);
console.log("Tarefa #1, subtotal do pedido com desconto",resultado,"\n## ## ## ##");

// TAREFA 02:
let pedidosDoDia = [
    {
        nomeCliente: "Maria",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "dinheiro",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "4"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "2"}
        ]
    },
    {
        nomeCliente: "João",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "pix",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "2"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "4"}
        ]
    },
    {
        nomeCliente: "Rafa",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "cartaoDebito",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "1"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "1"}
        ]
    },
    {
        nomeCliente: "Fernanda",
        nomeRestaurante: "Tacotitlan",
        formaPagamento: "cartaoCredito",
        produtos: [
            {nomeProduto: "ceviche",valorUnitario: "39.90",quantidade: "5"},
            {nomeProduto: "taco al pastor",valorUnitario: "12.90",quantidade: "1"}
        ]
    }
]

function calcularTotalDiario(pedidosArray){
    let totalDiario = 0;
    pedidosArray.forEach(p => {     
        calcularTotalComDesconto(p);   
        totalDiario += p.subtotal;
        console.log(p)
    })
    return totalDiario;
}

resultado = calcularTotalDiario(pedidosDoDia).toFixed(2);
console.log("Tarefa #2, total geral diário R$",resultado);