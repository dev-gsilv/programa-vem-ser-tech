class Programador {
    private _nome: string;
    private _cpf: string;
    private _linguagem: string;
    private _nivel: string;
    private _salario: number;

    constructor(
        nome: string,
        cpf: string,
        linguagem: string,
        nivel: string,
        salario: number,
    ) {
        (this._nome = nome),
            (this._cpf = cpf),
            (this._linguagem = linguagem),
            (this._nivel = nivel),
            (this._salario = salario);
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }

    public get linguagem(): string {
        return this._linguagem;
    }
    public set linguagem(value: string) {
        this._linguagem = value;
    }

    public get nivel(): string {
        return this._nivel;
    }
    public set nivel(value: string) {
        this._nivel = value;
    }

    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }
}

class Junior extends Programador {
    private _promoverParaPleno: boolean;

    constructor(
        nome: string,
        cpf: string,
        linguagem: string,
        nivel: string,
        salario: number,
        promoverParaPleno: boolean,
    ) {
        super(nome, cpf, linguagem, nivel, salario),
            (this._promoverParaPleno = promoverParaPleno);
    }

    public get promoverParaPleno(): boolean {
        return this._promoverParaPleno;
    }
    public set promoverParaPleno(value: boolean) {
        this._promoverParaPleno = value;
    }
}

class Pleno extends Programador {
    private _promoverParaSenior: boolean;

    constructor(
        nome: string,
        cpf: string,
        linguagem: string,
        nivel: string,
        salario: number,
        promoverParaSenior: boolean,
    ) {
        super(nome, cpf, linguagem, nivel, salario),
            (this._promoverParaSenior = promoverParaSenior);
    }

    public get promoverParaPleno(): boolean {
        return this._promoverParaSenior;
    }
    public set promoverParaPleno(value: boolean) {
        this._promoverParaSenior = value;
    }
}

class Senior extends Programador {
    constructor(
        nome: string,
        cpf: string,
        linguagem: string,
        nivel: string,
        salario: number,
    ) {
        super(nome, cpf, linguagem, nivel, salario);
    }
}

function main() {
    const empregados: Programador[] = [];
    const devJunior = new Junior(
        'Guilherme',
        '12345678900',
        'Javascript',
        'junior',
        5000,
        false,
    );
    empregados.push(devJunior);

    const devPleno = new Pleno(
        'Maria',
        '12345678901',
        'C++',
        'pleno',
        15000,
        false,
    );
    empregados.push(devPleno);

    const devSenior = new Senior(
        'Linus',
        '12345678902',
        'Cobol',
        'senior',
        50000,
    );
    empregados.push(devSenior);
    empregados.forEach(e => {
        console.log(
            '\nNome:',
            e.nome,
            '\nCPF:',
            e.cpf,
            '\nLinguagem:',
            e.linguagem,
            '\nNível:',
            e.nivel,
            '\nSalário:',
            e.salario,
        );
    });
}

main();
