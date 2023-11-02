import { Livro } from './Livro';

export class Autor {
    nome: string;
    dataNascimento: Date;
    livros: Livro[];

    constructor(nome: string, dataNascimento: Date) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.livros = [];
    }
}
