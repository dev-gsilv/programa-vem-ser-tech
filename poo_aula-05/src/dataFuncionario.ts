import { Funcionario } from './funcionario';
import { Service } from './serviceFuncionario';
import fs from 'fs/promises';

export class Data {
    constructor() {}

    async save(funcionario: Funcionario) {
        try {
            // USA O CPF COMO CHAVE DO OBJETO FUNCIONARIO NOVO
            const cpf = funcionario.getCpf();
            const _funcionario = { [cpf as string]: funcionario };

            // RECUPERA O JSON ORIGINAL
            let arquivoOriginal: string = await fs.readFile(
                './src/data_persistence.json',
                'utf-8',
            );

            // VERIFICA SE O JSON ORIGINAL ESTÁ VAZIO, E O PARSEIA
            if(!arquivoOriginal){
                arquivoOriginal = "{}";
            }
            const _arquivoOriginal = JSON.parse(arquivoOriginal);

            // AGREGA O NOVO FUNCIONARIO AO JSON ORIGINAL
            const update = { ..._arquivoOriginal, ..._funcionario };
            const _update = JSON.stringify(update, null, 2);

            // ESCREVE O JSON FINAL
            fs.writeFile('./src/data_persistence.json', _update);
            return { status: 200 };
        } catch (error) {
            console.log(error);
            return { status: 500 };
        }
    }

    search() {}

    update() {}

    delete() {}
}
