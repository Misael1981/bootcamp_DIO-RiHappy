/**
 * # 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let heroName = 'Dom Drags';
let heroXp = 5005;
let nivel;

if (heroXp < 1000) {
    nivel = 'Ferro';
} else if (heroXp >= 1001 && heroXp <= 2000) {
    nivel = 'Bronze';
} else if (heroXp >= 2001 && heroXp <= 5000) {
    nivel = 'Prata';
} else if (heroXp >= 5001 && heroXp <= 7000) {
    nivel = 'Ouro';
} else if (heroXp >= 7001 && heroXp <= 8000) {
    nivel = 'Platina';
} else if (heroXp >= 8001 && heroXp <= 9000) {
    nivel = 'Ascendente';
} else if (heroXp >= 9001 && heroXp <= 10000) {
    nivel = 'Imortal';
} else {
    nivel = 'Radiante';
}

console.log(`O Herói de nome: ${heroName}, está no nível de: ${nivel}`);

// Logica-Programacao/Desafio-Projeto_NivelHeroi/index.js
