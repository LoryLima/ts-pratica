const fun = (nome: string, idade?: number) => {
    if (!idade) {
        return `Nome: ${nome}, idade desconhecida`;
    } else {
        return `Nome: ${nome}, Idade:${idade}`;
    }

}

console.log(fun("Lorena", 30));
console.log(fun("Lorena"));


const pessoa: { nome: string, idade?: number } = { nome: "Lorena" };