const bebidas = [
    {
        nome: 'suco de pessego',
        preco: 5,
    },
    {
        nome: 'suco de uva',
        preco: 6.5,
    },
    {
        nome: 'suco de manga',
        preco: 5.5,
    },
];

function ordernarPorPrecosMaisBaixos(bebidas) {
    return bebidas.sort((a, b) => a.preco - b.preco);
}

console.log(ordernarPorPrecosMaisBaixos(bebidas));
