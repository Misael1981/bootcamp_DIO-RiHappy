/**
 * Organizando um código em funções:
 * 
 * let peso = 60
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
 */

// Javascript/Funcoes/funcoes.js


function calcularImc (peso, altura) {
    return peso / (Math.pow(altura, 2))
}

function calculandoStatusCorporal (imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal'
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso'
    } else {
        return 'Obesidade Grave'
    }
}

(function () {
    let peso = 60
    let altura = 1.67
    let imc = calcularImc(peso, altura)

    console.log(calculandoStatusCorporal(imc))
})()

/**
 * Faça uma escrevaMeuNome()
 */

function escrevaMeuNome(nome) {
    return `O meu nome é: ${nome}`
}

console.log(escrevaMeuNome('Misael'));

/**
 * Faça uma que avalie se o usuário é maior de idade;
 */

function verificaMaioridade (idade) {
    if(idade < 18) {
        return `O usuário tem: ${idade} anos, é MENOR DE IDADE`
    } else {
        return  `O usuário tem: ${idade} anos, é MAIOR DE IDADE`
    }
}

console.log(verificaMaioridade(20));

/**
 * Função Calcular Preço
 * 
 *  Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 * 
 * let precoProduto = 100
let condicaoPagamento = 2
let precoConformeCondicaoPagamento

if (condicaoPagamento === 1) {
    precoConformeCondicaoPagamento = precoProduto - (precoProduto * 0.10)
} else if (condicaoPagamento === 2) {
    precoConformeCondicaoPagamento = precoProduto - (precoProduto * 0.15)
} else if (condicaoPagamento === 3) {
    precoConformeCondicaoPagamento = precoProduto
} else {
    precoConformeCondicaoPagamento = precoProduto + (precoProduto * 0.10)
}

console.log(`O preço do produto é: ${precoConformeCondicaoPagamento}`);
 */

let precoProduto = 100
let condicaoPagamento = 4

function calcularPreço() {
    if (condicaoPagamento === 1) {
        return precoProduto - (precoProduto * 0.10)
    } else if (condicaoPagamento === 2) {
        return precoProduto - (precoProduto * 0.15)
    } else if (condicaoPagamento === 3) {
        return precoProduto
    } else {
        return precoProduto + (precoProduto * 0.10)
    } 
}


console.log(calcularPreço())



