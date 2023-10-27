const livros = [
    {
      autor: "Machado de Assis",
      titulo: "Memórias Póstumas de Brás Cubas",
      livroID: 1254
    },
    {
      autor: "Paulo Coelho",
      titulo: "O Alquimista",
      livroID: 4264
    },
    {
      autor: "Clarice Lispector",
      titulo: "A Hora da Estrela",
      livroID: 3245
    }
  ]

function ordenarLivros(livros){
    let livrosOrdenados = [];
    let i = 0;
    let letraMenor = "z";
    let letraAtual;

    livros.map(l => {
        for(const propriedade in l){
            if(propriedade == "titulo"){
                letraAtual = l[propriedade][0];
                console.log(letraAtual, letraMenor)
                if(letraAtual < letraMenor){
                    letraMenor = letraAtual;
                    livrosOrdenados.unshift(l);
                } else {
                    livrosOrdenados.push(l);
                }
            }
            i++;
        }
    })
    return livrosOrdenados;
}

console.log(ordenarLivros(livros));