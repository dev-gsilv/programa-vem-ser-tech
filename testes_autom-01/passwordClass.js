// 2) Validação de senha:
// Cenário: Quando uma senha é validada
// Dado uma senha que atende aos critérios, por exemplo, "Passw0rd"
// Quando eu valido a senha
// Então o resultado deve ser verdadeiro

class Password {
    static stringValidation(password) {
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=]).{8,}$/;
        const result = regex.test(password);
        return result;
    }
}

module.exports = { Password };
