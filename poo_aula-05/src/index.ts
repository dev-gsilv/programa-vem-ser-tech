import { question } from 'readline-sync';
import { Service } from './serviceFuncionario';
import { DadosFuncionario } from './funcionarioInterface';
import { Funcionario } from './funcionario';

class Main {
    promptUsuario() {
        console.log(
            'Bem-vindo ao sistema de gerenciamento de funcionários!\nEscolha uma opção para continuar.',
        );

        let opcao: number = 0;
        while (opcao != 5) {
            let cpf: string = '-1';

            console.log(
                '\n1: Cadastrar novo funcionário.\n2: Buscar um funcionário.\n3: Alterar um funcionário.\n4: Remover um funcionário.\n5: Sair do sistema.',
            );
            opcao = parseInt(question('\nO que você deseja fazer? '));

            switch (opcao) {
                case 1:
                    console.log('\nCadastro de funcionário.');
                    cpf = question('Digite o CPF para iniciar o cadastro: ');
                    
                    


                 /*    const dados: DadosFuncionario = {
                        nome: question('nome: '),
                        email: question('email: '),
                        idade: question('idade: '),
                        cargo: question('cargo: '),
                        salario: question('salário: '),
                    }; */
                    console.log(Service.cadastrar(cpf));
                    break;
                case 2:
                    console.log('\nBusca de funcionário.');
                    cpf = question('Digite o CPF: ');
                    console.log('Resultado:', Service.buscar(cpf));
                    break;
                case 3:
                    console.log('\nAlteração de funcionário.');
                    cpf = question('Digite o CPF do funcionário: ');
                    console.log(Service.alterar(cpf));

                    break;
                case 4:
                    break;
                case 5:
                    console.log('Encerrando sistema. Até breve!');
                    break;
                default:
                    console.log('Opção inválida. Tente novamente!');
                    break;
            }
        }
    }
}
export function confirmarFuncionario(funcionario: Funcionario) {
    console.log('Confirme o funcionário a ser alterado:', funcionario);
    const confirmação: string = question(
        "Digite 'S' para confirmar, ou 'N' para recomeçar: ",
    ).toUpperCase();
    if (confirmação === 'N') {
        return 'cancelar';
    } else return 'continuar';
}

export function solicitarDados() {
    let update: DadosFuncionario = {
        nome: '',
        email: '',
        idade: '',
        cargo: '',
        salario: '',
    };

    for(const chave in update){
        do {
            console.log(`Informe um valor para o campo`)
            update[chave] = question(`${chave}: `)
        } while (update[chave] === "");
    }
    return update;
}

const main = new Main();
main.promptUsuario();
