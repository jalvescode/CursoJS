/*
Joaquim Júnior Alves tem 25 anos, pesa 73kg
tem 1.8 de altura e seu IMC é de 22.530864197530864
Joaquim nasceu em 1999
*/

const nome = 'Joaquim Júnior';
const sobrenome = 'Alves';
const idade = 25;
const peso=73;
const altura=1.80;
let imc;
imc = peso / (altura*altura);
console.log(imc)
let anoNascimento;
anoNascimento = 2024 - idade;
console.log(anoNascimento)

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso+'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
// template strings
console.log(`${nome} nasceu em ${anoNascimento}`);