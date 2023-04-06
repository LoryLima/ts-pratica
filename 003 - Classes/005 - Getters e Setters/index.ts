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
    private _profissao: string = "Programador";
    constructor() {
        super("Lorena", 28);
    }

    get profissao() {
        return this._profissao;
    }
    set profissao(value: string) {
        this._profissao = value;
    }

    public Dados() {
        return `${this.nome} tem ${this.idade} anos e é  ${this.profissao.toLowerCase()}.`
    }
}

const pessoa = new Gay();


console.log(pessoa.profissao);
console.log(pessoa.Dados());
pessoa.profissao = "Bombeiro";
console.log(pessoa.Dados());
