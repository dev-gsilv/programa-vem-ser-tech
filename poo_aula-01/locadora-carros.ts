const frota: Carro[] = [];

interface Carro {
    marca: string;
    nome: string;
    ano: number;
    km: number;
    combustivel: string;
    mostrarVeiculo: Function;
}

function cadastrarCarro(carro: Carro) {
    frota.push(carro);
}

cadastrarCarro({
    marca: 'vw',
    nome: 'gol',
    ano: 2020,
    km: 50000,
    combustivel: 'flex',
    mostrarVeiculo: function imprimir() {
        console.log(this);
    },
});

cadastrarCarro({
    marca: 'fiat',
    nome: 'mobi',
    ano: 2022,
    km: 45000,
    combustivel: 'flex',
    mostrarVeiculo: function imprimir() {
        console.log(this);
    },
});

frota[1].nome = 'palio';
frota[1].combustivel = 'gasolina';

frota.forEach(carro => {
    carro.mostrarVeiculo();
});
