// Javascript/Objetos/objetos.js

/**
 * 1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Car {
    constructor (mark, color, averageExpense) {
        this.mark = mark
        this.color = color
        this.averageExpense = averageExpense
    }
    averageReal (km, price) {
        let average = km * (price * this.averageExpense) 
        return `O gasto dessa viagem foi de: ${average} reais`
    }
}

const corolla = new Car('Toyota', 'black', 1/10)

console.log(corolla, corolla.averageReal(73, 5))

/**
 * 2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
*/

class Pessoa {
    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC () {
        let imc = this.peso / (this.altura * this.altura)
        return imc
    }
    classificarIMC () {
        let imc = this.calcularIMC()

        if(imc < 17) {
            return `Muito abaixo do peso ideal`
        } else if (imc >= 17 && imc < 18.49) {
            return `Abaixo do peso`
        } else if (imc > 18.5 && imc < 24.99) {
            return `Peso ideal`
        } else if (imc > 25 && imc < 29.99) {
            return `Acima do peso`
        } else {
            return `Obesidade`
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose, jose.calcularIMC(), jose.classificarIMC())