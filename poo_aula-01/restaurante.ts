const inventario: Item[] = [];

interface Item {
    valor: number;
    nome: string;
    restaurante: string;
    descricao: string;
    quantidade: number;
    tipo: string;
    cupons: string[];
    opcao: {
        nome: string;
        valor: number;
    };
    mostrarItem: Function;
}

function cadastrarItem(item: Item) {
    inventario.push(item);
}

cadastrarItem({
    valor: 20,
    nome: 'x-bacon',
    restaurante: '7 Irmãos',
    descricao: 'Pão, carne, queijo, bacon, tomate e alface',
    quantidade: 10,
    tipo: 'Lanche',
    cupons: ['PRIMEIRACOMPRA5', 'CLIENTEFREQUENTE3'],
    opcao: {
        nome: 'Adicional de bacon',
        valor: 5,
    },
    mostrarItem: function imprimir() {
        console.log(this);
    },
});

cadastrarItem({
    valor: 10,
    nome: 'suco de laranja',
    restaurante: '7 Irmãos',
    descricao: 'Suco natural, 300 ml',
    quantidade: 1,
    tipo: 'Bebida',
    cupons: [],
    opcao: {
        nome: 'Tamanho 500 ml',
        valor: 16,
    },
    mostrarItem: function imprimir() {
        console.log(this);
    },
});

inventario.forEach(item => {
    item.mostrarItem();
});
