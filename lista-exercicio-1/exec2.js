const usuarios = [ 
    {
      "primeiroNome": "Antonio",
      "segundoNome": "Freitas",
      "terceiroNome": "Oliveira",
      "age": 35
    },
    {
      "primeiroNome": "Manuel",
      "segundoNome": "Guedes",
      "terceiroNome": "Peixoto",
      "age": 23
    }        
];

function montarNomesCompletos(usuarios) {
    const nomesCompletos = [];
    let index = 0;

    usuarios.map(usuario => {
        let nomeTratado;
        let ageTratado;
        let arr = [];
        let i = 0
        for(const propriedade in usuario){
            arr[i] = usuario[propriedade]
            i++    
        }
        const usuarioTratado = {
            nome: arr[0] +" "+ arr[1] +" "+ arr[2],
            age: parseInt(arr[3])
        }        
        nomesCompletos.push(usuarioTratado);
    })
    return nomesCompletos;
}

console.log(montarNomesCompletos(usuarios));