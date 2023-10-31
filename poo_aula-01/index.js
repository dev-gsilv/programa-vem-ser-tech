function cadastrarCarro(carro){
    carro.mostrarVeiculo = function imprimir(){
        console.log(this);
    }
    frota.push(carro);
};
let frota = [];
let carro1 = {
    marca: "vw",
    nome: "gol",
    ano: 2020,
    km: 50000,
    combustivel: "flex"
};
let carro2 = {
    marca: "fiat",
    nome: "mobi",
    ano: 2022,
    km: 45000,
    combustivel: "flex"
};

carro2.marca = "fiat";
carro2.nome = "palio";


cadastrarCarro(carro1);
cadastrarCarro(carro2);

frota.forEach(carro => {
    carro.mostrarVeiculo();
})