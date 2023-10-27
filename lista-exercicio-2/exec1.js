const tempo = [16,3,13,24,3,7,16];
const tempo2 = [67,67,10,8,8,67,12];

function tempoGastoPelosUsuarios(tempoGasto) {
    let contador;
    let numeroAtual;
    let resultado = [];
    let numerosVerificados = new Set(tempoGasto);

    for(const valor of numerosVerificados){
        contador = 0;
        numeroAtual = valor;

        for(let i=0; i<tempoGasto.length; i++) {
            if(tempoGasto[i] === numeroAtual){
                contador++;
            }
        }
        resultado.push([numeroAtual, contador]);
    }
    return resultado;
}

console.log(tempoGastoPelosUsuarios(tempo));