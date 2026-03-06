let nome = prompt("Digite o nome do cliente:");
let valorCompra = Number(prompt("Digite o valor da compra:"));

let desconto = 0;

if (valorCompra <= 200) {
    desconto = valorCompra * 0.10;
} 
else if (valorCompra <= 500) {
    desconto = valorCompra * 0.15;
} 
else {
    desconto = valorCompra * 0.20;
}

let totalPagar = valorCompra - desconto;

console.log("Cliente:", nome);
console.log("Valor da compra: R$", valorCompra);
console.log("Desconto: R$", desconto);
console.log("Total a pagar: R$", totalPagar);