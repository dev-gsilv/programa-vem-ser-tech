// 4) Verificação de palíndromo:
// Cenário: Quando uma string é verificada como palíndromo
// Dado uma string que é um palíndromo, por exemplo, "radar"
// Quando eu verifico se é um palíndromo
// Então o resultado deve ser verdadeiro

class StringManipulation {
    static palindrome(word) {
        return word.split('').reverse().join('');
    }

    static emailFormat(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

module.exports = { StringManipulation };
