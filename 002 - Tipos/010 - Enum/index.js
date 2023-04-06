var EMes;
(function (EMes) {
    EMes["JAN"] = "Janeiro";
    EMes["FEV"] = "Fevereiro";
    EMes["MAR"] = "Mar\u00E7o";
    EMes["ABR"] = "Abril";
    EMes["MAI"] = "Maio";
    EMes["JUN"] = "Junho";
    EMes["JUL"] = "Julho";
    EMes["AGO"] = "Agosto";
    EMes["SET"] = "Setembro";
    EMes["OUT"] = "Outubro";
    EMes["NOV"] = "Novembro";
    EMes["DEZ"] = "Dezembro";
})(EMes || (EMes = {}));
var pessoa = {
    nome: "Lorena",
    mesAniversario: EMes.ABR,
};
if (pessoa.mesAniversario === EMes.ABR) {
    console.log(pessoa);
}
