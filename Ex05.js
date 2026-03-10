let contador = 0;
let dentro = 0;
let fora = 0;

do {
    let numero = Number(prompt("Digite um valor:"));

    if (numero >= 10 && numero <= 20) {
        dentro++;
    } else {
        fora++;
    }

    contador++;

} while (contador < 10);

console.log("Dentro do intervalo:", dentro);
console.log("Fora do intervalo:", fora);