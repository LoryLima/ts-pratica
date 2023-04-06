class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `${this.nome} comeu ${comida}`;
    }
    public fezAniversario() {
        return `${this.nome} fez ${this.idade} anos.`;
    }

}

class Gay extends Pessoa {

}

class Sapatao extends Pessoa {

}

const pessoa1 = new Gay("Jônatas", 28);
const pessoa2 = new Sapatao("Beatriz", 25)
console.log(`${pessoa1.nome}, ${pessoa1.idade} anos.`);
console.log(pessoa1.comer("arroz"));
console.log(`${pessoa2.nome}, ${pessoa2.idade} anos.`);
