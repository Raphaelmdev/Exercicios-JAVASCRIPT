let contador = 0;
let soma = 0;

while (contador < 10) {
    let numero = Number(prompt("Digite um número:"));

    if (numero < 40) {
        soma = soma + numero;
    }

    contador++;
}

console.log("Soma dos números menores que 40:", soma);