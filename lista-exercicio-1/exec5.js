const caixas = [
    [4, 2, 4],
    [3, 3, 3],
    [1, 1, 2],
    [2, 1, 1],
  ];

function calcularVolumeDeconstiasCaixas(caixas) {
    let total = 0;
    caixas.map(medidas => {
        console.log(medidas)
        total += medidas.reduce((acc, caixa) => acc * caixa, 1)
        console.log(total)
    })
    return total;
}

console.log(calcularVolumeDeconstiasCaixas(caixas));