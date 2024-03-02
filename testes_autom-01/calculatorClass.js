// 1) Função de soma:
// Cenário: Quando dois números são somados
// Dado que tenho dois números, por exemplo, 2 e 3
// Quando eu somo esses dois números
// Então o resultado deve ser 5
// 3) Fatorial:
// Cenário: Quando o fatorial de um número é calculado
// Dado um número inteiro positivo, por exemplo, 5
// Quando eu calculo o fatorial desse número
// Então o resultado deve ser 120

const math = require('mathjs');

class Calculator {
    static sumFn(a, b) {
        return a + b;
    }

    static factorial(num) {
        return math.factorial(num);
    }
}

module.exports = { Calculator };
