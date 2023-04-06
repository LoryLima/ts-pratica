enum EMes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    ABR = "Abril",
    MAI = "Maio",
    JUN = "Junho",
    JUL = "Julho",
    AGO = "Agosto",
    SET = "Setembro",
    OUT = "Outubro",
    NOV = "Novembro",
    DEZ = "Dezembro"
}

const pessoa: { nome: string, mesAniversario: string } = {
    nome: "Lorena",
    mesAniversario: EMes.ABR,
};

if (pessoa.mesAniversario === EMes.ABR) {
    console.log(pessoa);
}