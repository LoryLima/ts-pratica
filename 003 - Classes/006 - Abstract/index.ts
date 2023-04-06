abstract class Pessoa {
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