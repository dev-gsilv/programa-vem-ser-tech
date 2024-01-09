import { Funcionario } from './funcionario';
import { Data } from './dataFuncionario';
import { DadosFuncionario } from './funcionarioInterface';
import { solicitarDados, confirmarFuncionario } from './index';

export class Service {
    static cadastrar(cpf: string) {
        const validarCpf = Service.buscar(cpf);
        console.log("instanceof Object L9", validarCpf instanceof Object)
        console.log("instanceof Funcionario L9", validarCpf instanceof Funcionario)
        console.log("typeof Funcionario L9", typeof validarCpf)
        console.log("Funcionario L9", validarCpf)
        
        if (validarCpf instanceof Object) {
            return 'Usuário já possui cadastro!';
        }

        /*         try {
            for (const prop in dados) {
                if (!dados[prop]) {
                    throw new Error(
                        `Verifique o campo ${prop} e tente novamente.`,
                    );
                }
            } */
        const novoFuncionario = solicitarDados();
        const response = Data.save(
            new Funcionario(
                novoFuncionario.nome,
                novoFuncionario.email,
                cpf as string,
                parseInt(novoFuncionario.idade),
                novoFuncionario.cargo,
                parseInt(novoFuncionario.salario),
            ),
        );
        return response;
        /*         } catch (error) {
            console.log(error);
            return error;
        } */
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
        if (confirmarFuncionario(funcionario as Funcionario) === 'cancelar') {
            return 'Alteração de funcionário cancelada.';
        }

        update = solicitarDados();

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
