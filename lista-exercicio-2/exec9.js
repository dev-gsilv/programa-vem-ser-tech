const alunos = [
    { nome: 'Giovana', nota: '8.0' },
    { nome: 'Vanessa', nota: '5.0' },
    { nome: 'Sarah', nota: '4.0' },
    { nome: 'Rodrigo', nota: '9.0' },
    { nome: 'Bianca', nota: '7.5' },
];

function verificarQuaisAlunosEstaoAprovados(alunos) {
    let aprovados = []
    alunos.filter((aluno) => {
        if(aluno.nota>=7.0) {
            aprovados.push(aluno);
        }
    })
    return aprovados;
};

console.log(verificarQuaisAlunosEstaoAprovados(alunos));
