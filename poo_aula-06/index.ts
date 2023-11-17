import fs from 'fs';

interface Usuario {
    nome: string;
    estado: string;
    cpf: string;
}

function lerArquivo(caminho: string) {
    let arquivoString: string = fs.readFileSync(caminho, 'utf-8');
    const arquivoArray: Usuario[] = JSON.parse(arquivoString);
    return arquivoArray;
}

function classificarUsuariosPorEstado(caminho: string) {
    const usuarios = lerArquivo(caminho);

    usuarios.forEach(u => {
        console.log('Lendo usuario:', u.nome);

        // Verifica se não existe o arquivo JSON do estado desse usuário. Ler um arquivo inexistente gera um erro
        if (!fs.existsSync(`./usuarios-por-estado/usuarios-${u.estado}.json`)) {
            fs.writeFileSync(
                `./usuarios-por-estado/usuarios-${u.estado}.json`,
                '[]',
            );
        }
        // Lê os dados do arquivo JSON
        const arquivoPorEstadoString = fs.readFileSync(
            `./usuarios-por-estado/usuarios-${u.estado}.json`,
            'utf-8',
        );
        // Converte arquivoPorEstadoString em um array de usuarios
        const usuarioPorEstadoArray: Usuario[] = JSON.parse(
            arquivoPorEstadoString,
        );

        // Validação para evitar usuarios duplicados
        const usuariosCpfArray: string[] = [];
        usuarioPorEstadoArray.forEach(pessoa => {
            usuariosCpfArray.push(pessoa.cpf);
        });

        if (usuariosCpfArray.includes(u.cpf)) {
            return;
        }

        // Adiciona o usuario atual ao array de usuarioPorEstadoArray
        usuarioPorEstadoArray.push(u);

        // Transforma o array em string e salva no arquivo json
        const _update = JSON.stringify(usuarioPorEstadoArray);

        fs.writeFileSync(
            `./usuarios-por-estado/usuarios-${u.estado}.json`,
            _update,
        );
        console.log('Adicionado ao arquivo usuarios-'+u.estado+'.json');
    });
}

classificarUsuariosPorEstado('./usuarios.json');
