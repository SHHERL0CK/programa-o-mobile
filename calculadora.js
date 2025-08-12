const prompt = require('prompt-sync')();
let n1 = Number (prompt ("Digite um número 1: "));
let n2 = Number (prompt ("Digite um número 2: "));
let op = prompt("Digite o operador: ");
if (op == "+"){
    console.log(n1+n2);
}else if (op == "-"){
    console.log(n1-n2);
}else if (op == "*"){
    console.log(n1*n2);
}else if (op == "/"){   
    console.log(n1/n2);
}else{
    console.log("Operador inválido");
}
