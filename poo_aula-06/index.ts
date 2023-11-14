import fs from 'fs';

interface Usuario {
    nome: string;
    estado: string;
    cpf: string;
}

function lerArquivo(caminho: string) {
    let arquivoOriginal: string = fs.readFileSync(caminho, 'utf-8');
    const _arquivoOriginal: [] = JSON.parse(arquivoOriginal);
    return _arquivoOriginal;
}

function classificarUsuariosPorEstado(caminho: string) {
    const usuarios: Usuario[] = lerArquivo(caminho);

    usuarios.forEach(u => {
        if (!fs.existsSync(`./usuarios-por-estado/usuarios-${u.estado}.json`)) {
            fs.writeFileSync(
                `./usuarios-por-estado/usuarios-${u.estado}.json`,
                '[]',
            );
        }
        const usuariosPorEstado = fs.readFileSync(
            `./usuarios-por-estado/usuarios-${u.estado}.json`,
            'utf-8',
        );
        const _usuariosPorEstado: Set<Usuario> = JSON.parse(usuariosPorEstado);
        console.log(_usuariosPorEstado.size);

        _usuariosPorEstado.forEach(p => {
            console.log('usuarios por estado');

            if (p.cpf == u.cpf ) {
                console.log('cpf igual! ', p.cpf, u.cpf);
                return;
            } else if ( _usuariosPorEstado.size == 0 ) {
                console.log('array vazio ');
                
                console.log('push ', p.cpf, u.cpf);

                _usuariosPorEstado.add(u);
                const _update = JSON.stringify(_usuariosPorEstado);

                fs.writeFileSync(
                    `./usuarios-por-estado/usuarios-${u.estado}.json`,
                    _update,
                );
            }
        });
    });
}

classificarUsuariosPorEstado('./usuarios.json');
