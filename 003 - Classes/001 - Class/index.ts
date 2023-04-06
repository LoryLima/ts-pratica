class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Lorena", 28);

console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}`);