class Pessoa {
    public readonly nome: string = "Lorena Lima";
}

let pessoa = new Pessoa();

console.log(pessoa.nome);
// pessoa.nome = "Beatriz"; < nao vai funcionar, pois é apenas de leitura