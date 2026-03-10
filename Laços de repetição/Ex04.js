let inicio = Number(prompt("Digite o número inicial:"));
let fim = Number(prompt("Digite o número final:"));

let contador = inicio + 1;
let quantidade = 0;

while (contador < fim) {
    quantidade++;
    contador++;
}

console.log("Quantidade de números entre eles:", quantidade);