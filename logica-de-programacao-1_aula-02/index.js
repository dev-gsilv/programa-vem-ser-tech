// TAREFA 01
const listaProdutos = []; 

function adicionarProduto(produto){listaProdutos.push(produto)};

function exibirProdutos(listaProdutos){
    listaProdutos.forEach(p => {console.log(p)});
};

function exibirProdutosHTML(listaProdutos){
    const aula = document.createElement("h3");
    aula.innerText = "Exercício #1";
    document.body.appendChild(aula);

    listaProdutos.forEach(e => {
        const produto = document.createElement("p");
        produto.innerText = e;
        document.body.appendChild(produto);
    });
};

adicionarProduto("node");
adicionarProduto("typescript");
adicionarProduto("java");
adicionarProduto("kotlin");
adicionarProduto("mongo");

exibirProdutos(listaProdutos);
exibirProdutosHTML(listaProdutos);

// TAREFA 02
let menu = ["pizza", "hamburguer", "batata frita", "coxinha", "pastel"];
let pedido = [];

function adicionarAoPedido(menu, produto){
    if(menu.includes(produto)){
        pedido.push(produto)

        const p = document.createElement("p");
        p.innerText = produto;
        document.body.appendChild(p);
    } else {console.log("Nosso menu não conta o produto "+produto);}
};

let aula = document.createElement("h3");
aula.innerText = "Exercício #2";
document.body.appendChild(aula);

adicionarAoPedido(menu, "pizza");
adicionarAoPedido(menu, "hamburguer");
adicionarAoPedido(menu, "coxinha");
adicionarAoPedido(menu, "café");

console.log(pedido);


// TAREFA 03
let menuMatriz = [
    ["pizza", "hamburguer", "batata frita", "coxinha", "pastel"],
    ["café", "água", "refrigerante"],
    ["brigadeiro", "mousse", "sorvete"]
];
let pedidoMatriz = [];

function adicionarAoPedidoMatriz(menu, produto){
    console.log("Checando se há",produto+"...");
    for(let i=0; i<menu.length; i++){
        console.log("menu_"+i+" tem "+produto+"? ", menu[i].includes(produto));
        if(menu[i].includes(produto)){   
            const p = document.createElement("p");
            p.innerText = produto;
            document.body.appendChild(p);

            pedidoMatriz.push(produto);  
            return; 
        };
    };
    console.log("Infelizmente, não há",produto,"em nosso menu.");
};

aula = document.createElement("h3");
aula.innerText = "Exercício #3";
document.body.appendChild(aula);

adicionarAoPedidoMatriz(menuMatriz, "chocolate");
adicionarAoPedidoMatriz(menuMatriz, "hamburguer");
adicionarAoPedidoMatriz(menuMatriz, "sorvete");
adicionarAoPedidoMatriz(menuMatriz, "café");
adicionarAoPedidoMatriz(menuMatriz, "pastel");

console.log("Seu pedido é: "+pedidoMatriz);
