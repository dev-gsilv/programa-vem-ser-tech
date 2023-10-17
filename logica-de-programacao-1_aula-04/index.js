// TAREFA 01

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
console.log("Tarefa #1. Total geral diário R$",resultado,"\n## ## ## ##");

// TAREFA 02:
function gerarClassificacaoAleatoria(){
    return Math.floor(Math.random() * 5) + 1;
};
pedidosDoDia.forEach(p => {
    p.classificacaoCliente = gerarClassificacaoAleatoria();
});

const pedidosAte3Estrelas = [];
const pedidos4Estrelas = [];
const pedidos5Estrelas = [];

function categorizarPedidosPorEstrelas(pedidosArray){
    pedidosArray.forEach(p => {
        if(p.classificacaoCliente < 4){
            pedidosAte3Estrelas.push(p);
        } else if (p.classificacaoCliente === 4){
            pedidos4Estrelas.push(p);
        } else pedidos5Estrelas.push(p)

        /* INSTRUTOR LEONARDO INDICOU QUE O SWITCH É COMPUTACIONALMENTE MAIS DISPENDIOSO, PQ GERA MAIS CONDICIONAIS SE COMPARADO AO IF/ELSE
        switch(p.classificacaoCliente){
            case 1:
            case 2:
            case 3:
                pedidosAte3Estrelas.push(p);
                break;
            case 4:
                pedidos4Estrelas.push(p);
                break;
            case 5:
                pedidos5Estrelas.push(p);
                break;
            default:
                break;  
        } */
    })
}

categorizarPedidosPorEstrelas(pedidosDoDia);

console.log("Tarefa 2 \n 1 a 3 *");
pedidosAte3Estrelas.forEach(p=>{console.log(p)});
console.log("4 *");
pedidos4Estrelas.forEach(p=>{console.log(p)});
console.log("5 *");
pedidos5Estrelas.forEach(p=>{console.log(p)});