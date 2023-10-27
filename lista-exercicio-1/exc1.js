const clientes = [ 
    { nome: 'David', comSaldoDevedor: true},
    { nome: 'Vinoth', comSaldoDevedor: true},
    { nome: 'Divya', comSaldoDevedor: false},
    { nome: 'Ishitha', comSaldoDevedor: false},
    { nome: 'Thomas', comSaldoDevedor: true}
];

function clientesComSaldoDevedor(clientes) {
    const clientesComSaldoDevedor = [];
    let index = 0;
    while(index < clientes.length){
        if(clientes[index].comSaldoDevedor){
            clientesComSaldoDevedor.push(clientes[index]);
        }
        index++;
    }    
    return clientesComSaldoDevedor;    
}

console.log(clientesComSaldoDevedor(clientes));