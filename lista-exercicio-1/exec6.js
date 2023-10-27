const descontos = [
  { valorOriginal: 1500, porcentagemDoDesconto: 50 },
  { valorOriginal: 89, porcentagemDoDesconto: 20 },
  { valorOriginal: 100, porcentagemDoDesconto: 75},
];

function obterValorComDesconto(descontos) {
    let descontosTratados = [];
    let valorOriginal;
    let valor;
    descontos.map(oferta => {
        for(const propriedade in oferta){
            if(propriedade == "valorOriginal"){
                valorOriginal = oferta[propriedade]
            }
            if(propriedade == "porcentagemDoDesconto"){
                valor = valorOriginal-(valorOriginal * (oferta[propriedade]/100));
            }
        }
        let o = {"valorOriginal": valorOriginal, "valorComDesconto": valor}
        descontosTratados.push(o);
    })
    return descontosTratados;
}

console.log(obterValorComDesconto(descontos));