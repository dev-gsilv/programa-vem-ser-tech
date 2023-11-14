import { question } from 'readline-sync';
import { Service } from './serviceFuncionario';
import { DadosFuncionario } from './funcionarioInterface';

class Main {

    promptUsuario() {
        const dados: DadosFuncionario = {
            nome: question('nome: '),
            email: question('email: '),
            cpf: question('cpf: '),
            idade: question('idade: '),
            cargo: question('cargo: '),
            salario: question('salário: '),
        };

        const resposta: string | unknown = Service.cadastrar(dados);

        return resposta;
    }

    
}

const main = new Main();
main.promptUsuario();
