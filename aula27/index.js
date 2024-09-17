// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Normal';

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)