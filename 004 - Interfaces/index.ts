interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}

let pessoa: IPessoa = {
    nome: "Lorena",
    idade: 28,
    cpf: 1111111111,
    enabled: () => {
        return true;
    }
}

class Humano implements IPessoa {
    nome: string;
    idade: number;

    readonly cpf: number;

    constructor(nome: string, idade: number, cpf: number) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    enabled(): boolean {
        return true;
    }
}
