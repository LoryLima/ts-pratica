let array1: [string, string, number, boolean] = ["Lorena Lima", "Teste", 123, true];
let array2: Array<string | number | boolean > = ["Lorena", "Beatriz", "Momo", true, false];

console.log(array1);
console.log(array2);

let obj1: {nome: string, sobrenome: string, pedidoConcluido: boolean} = {nome: "Lorena", sobrenome: "Lima", pedidoConcluido: true};

let obj2: Array<{nome: string, sobrenome: string, pedidoConcluido: boolean}> = [{nome: "Lorena", sobrenome: "Lima", pedidoConcluido: true}]


console.log(obj1);
console.log(obj2);