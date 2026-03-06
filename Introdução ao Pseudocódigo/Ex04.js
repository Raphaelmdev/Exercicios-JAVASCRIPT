let nome = prompt("Digite o nome:");
let anoNascimento = Number(prompt("Digite o ano de nascimento:"));
let anoAtual = Number(prompt("Digite o ano atual:"));

let idade = anoAtual - anoNascimento;

console.log(nome + " tem " + idade + " anos.");