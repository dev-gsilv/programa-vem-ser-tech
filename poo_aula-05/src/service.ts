import { Funcionario } from './funcionario';

export class Service {
    public cadastrar(dados: string[]){
        const funcionarioNovo = new Funcionario(
            dados[0], 
            dados[1], 
            dados[2], 
            parseInt(dados[3]), 
            dados[4], 
            parseInt(dados[5])
        );


    }

    public buscar(cpf: string){
        
    }

    public listar(){
        
    }

    public alterar(cpf: string){
        
    }

    public excluir(cpf: string){
        
    }
}