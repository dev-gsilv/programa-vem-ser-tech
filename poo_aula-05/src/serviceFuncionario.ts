import { Funcionario } from './funcionario';
import { Data } from './dataFuncionario';
import { DadosFuncionario } from './funcionarioInterface';

export class Service {
    static data = new Data();

    static async cadastrar(dados: DadosFuncionario) {
        try {
            for (const prop in dados) {
                if (!(dados[prop])) {
                    throw new Error(
                        `Verifique o campo ${prop} e tente novamente.`,
                    );
                }
            }
            const response = await Service.data.save(
                new Funcionario(
                    dados.nome,
                    dados.email,
                    dados.cpf,
                    parseInt(dados.idade),
                    dados.cargo,
                    parseInt(dados.salario),
                ),
            );

            console.log('Service Log: ', response);
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    public buscar(cpf: string) {}

    public listar() {}

    public alterar(cpf: string) {}

    public remover(cpf: string) {}
}
