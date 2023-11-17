import { Funcionario } from './funcionario';
import { Data } from './dataFuncionario';
import { DadosFuncionario } from './funcionarioInterface';
import { solicitarDados, confirmarFuncionario } from './index';

export class Service {
    static cadastrar(dados: DadosFuncionario) {
        try {
            for (const prop in dados) {
                if (!dados[prop]) {
                    throw new Error(
                        `Verifique o campo ${prop} e tente novamente.`,
                    );
                }
            }
            const response = Data.save(
                new Funcionario(
                    dados.nome,
                    dados.email,
                    dados.cpf as string,
                    parseInt(dados.idade),
                    dados.cargo,
                    parseInt(dados.salario),
                ),
            );
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    static buscar(cpfString: string) {
        return Data.search(cpfString);
    }

    static listar() {}

    static alterar(cpf: string) {
        const funcionario: Funcionario | string = Service.buscar(cpf);
        if (funcionario === 'Usuário não existe!') {
            return funcionario;
        }
        let update: DadosFuncionario = {
            nome: '',
            email: '',
            cpf: '',
            idade: '',
            cargo: '',
            salario: '',
        };
        if (confirmarFuncionario(funcionario as Funcionario) === "cancelar") {
            return "Alteração de funcionário cancelada.";
        }
        
        update = solicitarDados(funcionario as Funcionario);

        const response = Data.save(
            new Funcionario(
                update.nome,
                update.email,
                cpf,
                parseInt(update.idade),
                update.cargo,
                parseInt(update.salario),
            ),
        );
        return response;
    }

    static remover(cpf: string) {}
}
