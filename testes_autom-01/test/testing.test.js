const { Calculator } = require('../calculatorClass');
const { Temperature } = require('../conversionClass');
const { Password } = require('../passwordClass');
const { StringManipulation } = require('../stringClass')

describe('Math operations', () => {
    test('SUM: 2 + 3 = 5.', () => {
        expect(Calculator.sumFn(2, 3)).toBe(5);
    });

    test('FACTORIAL: 5! = 120', () => {
        expect(Calculator.factorial(5)).toBe(120)
    })
});

describe('String validations', () => {
    test('Password have >= 8 (letter, number and symbol)?', () => {
        expect(Password.stringValidation('Passw0rd!')).toBe(true);
    });

    const word = 'arara'
    test(`Is ${word} a palindrome?`, () => {
        expect(StringManipulation.palindrome(word)).toBe(word);
    });

    const email = 'test@example.com'
    test(`Email ${email} is well formated?`, () => {
        expect(StringManipulation.emailFormat(email)).toBe(true);
    });
});

describe('Number convertions', () => {
    test('Converting Celsius to Fahrenheit', () => {
        expect(Temperature.celsiusToFahrenheit(0)).toBe(32);
    });
});
