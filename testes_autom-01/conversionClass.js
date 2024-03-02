// 5) Conversor de temperatura:
// Cenário: Quando uma temperatura em Celsius é convertida para Fahrenheit
// Dado uma temperatura em Celsius, por exemplo, 0 graus
// Quando eu converto essa temperatura para Fahrenheit
// Então o resultado deve ser 32 graus Fahrenheit

class Temperature {
    static celsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }
}

module.exports = { Temperature };
