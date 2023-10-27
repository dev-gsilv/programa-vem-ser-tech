const avaliacoes = [
    {
      "totalDeClientes": 2,
      "numeroDeEstrelas": 1
    },
    {
      "totalDeClientes": 15,
      "numeroDeEstrelas": 2
    },
    {
      "totalDeClientes": 18,
      "numeroDeEstrelas": 3
    },
    {
      "totalDeClientes": 25,
      "numeroDeEstrelas": 4
    },
    {
      "totalDeClientes": 40,
      "numeroDeEstrelas": 5
    }
  ]

function calcularMediaAvaliacao(avaliacoes) {
    const somaTotalClientesEstrelas = avaliacoes.reduce((acumulador, avaliacao) => {
        return acumulador + avaliacao.totalDeClientes * avaliacao.numeroDeEstrelas;
      }, 0);
    
      const totalClientes = avaliacoes.reduce((acumulador, avaliacao) => {
        return acumulador + avaliacao.totalDeClientes;
      }, 0);
    
      if (totalClientes === 0) {
        return 0; // Evita divisão por zero.
      }
    
      const media = somaTotalClientesEstrelas / totalClientes;
      return media;
}

console.log(calcularMediaAvaliacao(avaliacoes))