const error = (): never => {
    throw new Error("Algo deu errado");
}

const validate = (value: any) => {
    if (typeof value === "string") {
        return console.log("É uma string");
    } else if (typeof value === "number") {
        return console.log("É um number");
    }
    console.log(error());
};

validate(123);