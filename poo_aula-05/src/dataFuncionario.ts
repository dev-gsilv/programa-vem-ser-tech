import { Funcionario } from './funcionario';
import { Service } from './serviceFuncionario';
import fs from 'fs';

export class Data {
    constructor() {}

    static save(funcionario: Funcionario) {
        try {
            // USA O CPF COMO CHAVE DO OBJETO FUNCIONARIO NOVO
            const cpf = funcionario.getCpf();
            const _funcionario = { [cpf as string]: funcionario };

            // RECUPERA O JSON ORIGINAL
            let arquivoOriginal: string = fs.readFileSync(
                './src/data_persistence.json',
                'utf-8',
            );

            // VERIFICA SE O JSON ORIGINAL ESTÁ VAZIO, E O PARSEIA
            if (!arquivoOriginal) {
                arquivoOriginal = '{}';
            }
            const _arquivoOriginal = JSON.parse(arquivoOriginal);

            // AGREGA O NOVO FUNCIONARIO AO JSON ORIGINAL
            const update = { ..._arquivoOriginal, ..._funcionario };
            const _update = JSON.stringify(update, null, 2);

            // ESCREVE O JSON FINAL
            fs.writeFileSync('./src/data_persistence.json', _update);
            return 'Operação realizada com sucesso!';
        } catch (error) {
            console.log(error);
            return 'Erro ao salvar usuário.';
        }
    }

    static search(cpf: string): Funcionario | string {
        // RECUPERA O JSON ORIGINAL
        let arquivoOriginal: string = fs.readFileSync(
            './src/data_persistence.json',
            'utf-8',
        );

        // VERIFICA SE O JSON ORIGINAL ESTÁ VAZIO, E O PARSEIA
        if (!arquivoOriginal) {
            return 'Não existem usuários cadastrados!';
        }
        const _arquivoOriginal = JSON.parse(arquivoOriginal);

        let response: string | Funcionario = '';
        for (const chave in _arquivoOriginal) {
            if (chave === cpf) {
                response = _arquivoOriginal[chave];
            } else response = 'Usuário não existe!';
        }
        return response;
    }

    static update() {}

    static delete() {}
}
