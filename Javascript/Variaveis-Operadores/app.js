/**
 * - Desafio 01
- Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoCombustivel = 6.08
let gastoMedioPorKm = 12
let distanciaEmKm = 1165

let litrosConsumidos = distanciaEmKm / gastoMedioPorKm
let gastoTotal = precoCombustivel * litrosConsumidos

console.log(`O valor total gasto na viagem é de: ${gastoTotal.toFixed(2)}`);


// Javascript/Variaveis-Operadores/app.js

/**
 * - Desafio 02
 * Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 4.04
let precoGasolina = 6.08
let tipoCombustivel = ['etanol', 'gasolina']
let gastoMedioKm
let distanciaKM = 1165
let combustivelUsado
let precoCombustivelUsado

const limiteEtanol = precoGasolina * 0.7

if (precoEtanol <= limiteEtanol) {
    combustivelUsado = tipoCombustivel[0]
} else {
    combustivelUsado = tipoCombustivel[1]
}

if (combustivelUsado === 'etanol') {
    gastoMedioKm = 8
    precoCombustivelUsado = precoEtanol
} else {
    gastoMedioKm = 12
    precoCombustivelUsado = precoGasolina
}

let combustivelConsumido = distanciaKM / gastoMedioKm
let custoViagem = precoCombustivelUsado *
    combustivelConsumido



console.log(`O combustível usado foi o ${combustivelUsado}. E o custo total da viagem foi de: ${custoViagem.toFixed(2)}`)


// Exercícios


/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
let notas = [6 , 8, 1]
let media = (notas[0] + notas[1] + notas[2]) / 3;

let statusDoAluno

if (media < 5) {
    statusDoAluno = 'Reprovado'
} else if (media >= 5 && media < 7) {
    statusDoAluno = 'Em recuperação'
} else {
    statusDoAluno = 'Aprovado'
}

console.log(`O Aluno está: ${statusDoAluno}`);

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let peso = 60
let altura = 1.67

let imc = peso / (Math.pow(altura, 2))
let statusCorporal

if (imc < 18.5) {
    statusCorporal = 'Abaixo do peso'
} else if (imc >= 18.5 && imc < 25) {
    statusCorporal = 'Peso normal'
} else if (imc >= 25 && imc < 30) {
    statusCorporal = 'Acima do peso'
} else if (imc >= 30 && imc < 40) {
    statusCorporal = 'Obeso'
} else {
    statusCorporal = 'Obesidade Grave'
}

console.log(`O IMC da pessoa é de: ${imc.toFixed(1)} e ela está com: ${statusCorporal}`);

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoProduto = 100
let condicaoPagamento = 'dinheiroPix'
let precoConformeCondicaoPagamento

if (condicaoPagamento === 'debito') {
    precoConformeCondicaoPagamento = precoProduto - (precoProduto * 0.10)
} else if (condicaoPagamento === 'dinheiroPix') {
    precoConformeCondicaoPagamento = precoProduto - (precoProduto * 0.15)
} else if (condicaoPagamento === 'divididoDuasVezes') {
    precoConformeCondicaoPagamento = precoProduto
} else {
    precoConformeCondicaoPagamento = precoProduto + (precoProduto * 0.10)
}

console.log(`O preço do produto é: ${precoConformeCondicaoPagamento}`);




