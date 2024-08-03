// Não podemos criar constantes com palavras reservadas
// Exemplo: let let (let é uma palavra reservada para a linguagem)
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Nome das constantes não podem conter espaços ou traços
// Não podemos modificar o valor de uma constante
// Variáveis com palavras compostas usamos camelCase
// NÃO UTILIZE VAR, UTILIZE CONST

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);