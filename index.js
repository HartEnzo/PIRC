const prompt = require('prompt-sync')()
const par_impar = require("./par_impar")

const numero = prompt("Digite um numero: ");

let retorno = par_impar(numero)

console.log(retorno)