export class Funcionario {
    private nome: string | undefined;
    private email: string | undefined;
    private cpf: string | undefined;
    private idade: number | undefined;
    private cargo: string | undefined;
    private salario: number | undefined;

    constructor(
        nome: string,
        email: string,
        cpf: string,
        idade: number,
        cargo: string,
        salario: number,
    ) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    public getNome(): string | undefined {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getEmail(): string | undefined {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getCpf(): string | undefined {
        return this.cpf;
    }

    public setCPF(cpf: string) {
        this.cpf = cpf;
    }
    public getIdade(): number | undefined {
        return this.idade;
    }

    public setIdade(idade: number) {
        this.idade = idade;
    }

    public getCargo(): string | undefined {
        return this.cargo;
    }

    public setCargo(cargo: string) {
        this.cargo = cargo;
    }

    public getSalario(): number | undefined {
        return this.salario;
    }

    public setSalario(salario: number) {
        this.salario = salario;
    }
}
