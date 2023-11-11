import { question } from "readline-sync";
import { Service } from "./service";

const dados: string[] = [];

function promptUsuario(){
    dados[0] = question("nome: ");
    dados[1] = question("email: ");
    dados[2] = question("cpf: ");
    dados[3] = question("idade: ");
    dados[4] = question("cargo: ");
    dados[5] = question("salário: ");    

    return dados;
}