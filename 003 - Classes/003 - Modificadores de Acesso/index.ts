/* 
public - Pode ser acessado tanto pela mesma classe, como pelas classes filhas e outras classes.

protected - Pode ser acessado pela mesma classe e classes filhas. Não pode ser acessado por outras classes.

private - Pode ser acessada somente pela própria classe.


*/



class Pessoa {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


    public comer(comida: string) {
        return `${this.nome} comeu ${comida}`
    }

    public fezAniversario() {
        return `${this.nome} fez ${this.idade} anos.`
    }
}

const pessoa1 = new Pessoa("Lorena", 28);
console.log(pessoa1.comer("pizza"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Beatriz", 25);
console.log(pessoa2.comer("mato"));
console.log(pessoa2.fezAniversario());
