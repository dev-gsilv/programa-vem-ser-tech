const alunos = [
    {
      "nome": "Filipe Diogo",
      "nota": "59"
    },
    {
      "nome": "Enzo Miguel",
      "nota": "47"
    },
    {
      "nome": "Mateus Danilo",
      "nota": "99"
    },
    {
      "nome": "Olivia Stella",
      "nota": "70"
    },
    {
      "nome": "César Paulo",
      "nota": "88"
    }
  ]

function quantidadeAprovados(alunos) {
    let contador =0;
    alunos.forEach(aluno => {
        if(aluno.nota>=70) contador++;
        console.log(contador)

    })
    return contador;
}

console.log(quantidadeAprovados(alunos));