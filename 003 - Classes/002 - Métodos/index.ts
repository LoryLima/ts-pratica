class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


    comer(comida: string) {
        return `${this.nome} comeu ${comida}`
    }

    fezAniversario() {
        return `${this.nome} fez ${this.idade} anos.`
    }
}

const pessoa1 = new Pessoa("Lorena", 28);
console.log(pessoa1.comer("pizza"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Beatriz", 25);
console.log(pessoa2.comer("mato"));
console.log(pessoa2.fezAniversario());


