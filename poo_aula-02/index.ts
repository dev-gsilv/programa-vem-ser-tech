import { Livro } from './Livro';
import { Autor } from './Autor';

const livro1 = new Livro('livro1', 2000, 'ficção');
const livro2 = new Livro('livro2', 2010, 'fantasia');
const livro3 = new Livro('livro3', 2020, 'ficção');
const livro4 = new Livro('livro4', 2023, 'técnico');

const autor1 = new Autor('fulano', new Date('01/01/1980'));
const autor2 = new Autor('sicrano', new Date('01/01/2001'));

autor1.livros.push(livro1, livro2);
autor2.livros.push(livro3, livro4);

function mostrarDados(autor: Autor){
    autor.livros.forEach(l => {
        console.log(`Livro: ${l.nome}, ano: ${l.ano}. Autor: ${autor.nome}`)
    })
}

mostrarDados(autor1);
mostrarDados(autor2);