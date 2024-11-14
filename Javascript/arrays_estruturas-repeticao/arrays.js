/**
 * 1) Crie um programa que dado um número imprima a sua tabuada.
 * Javascript/arrays_estruturas-repeticao/arrays.js
 */

const n = 5
for(let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`)
}

/**
 * 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
 */

const list = [1, 20, 300, 4000, 50000]
for(let i = 0; i < list.length; i++) {
    console.log(list[i])
}


/**
 * 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
 */

const wordRandom = ['casa', 'celular', 'vez', 'vitoria', 'garrafa', 'pote', 'relógio','varrer', 'bisnaga', 'desodorante']
let wordForV = []
for(let i = 0; i < wordRandom.length; i++) {
    if(wordRandom[i][0] === 'v') {
        wordForV.push(wordRandom[i])
    }
}
console.log(wordForV)



/**
 * 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
 */

let evenNumbers = []
for(let i = 10; i <= 50; i++) {
    if(i % 2 === 0) {
        evenNumbers.push(i)
    }
}
console.log(evenNumbers)


/**
 * 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
 */

const listOfMedia = [2, 7, 3, 8, 10, 4]
let recuperacao = []
for(let i = 0; i < listOfMedia.length; i++) {
    if(listOfMedia[i] < 5) {
        recuperacao.push(listOfMedia[i])
    }
}
console.log(recuperacao)

/**
 * 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
 */

   function verificarPromocoes() {
    // TODO: Defina uma constante taxaDesconto com valor 0.10, que representa uma taxa de desconto de 10%:
        
        const taxaDesconto = 0.10
        const entrada = gets(); 
        const produtos = entrada.split(' - '); 
        const resultado = [];
    
        produtos.forEach(produto => {
            const [nome, quantidadePreco] = produto.split(': '); 
            const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 
    
            let precoFinal;
    
            // TODO: Verifique se a quantidade é maior ou igual a 5 e aplicar o desconto se necessário
            if (quantidade > 5) {
              precoUnitario - taxaDesconto
            }
                precoFinal = precoUnitario * (1 - taxaDesconto);
            
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
        });
    
        print(resultado.join(' - '));
    }
    
    // TODO: Chame a função:
    verificarPromocoes()


    //Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Classe que calcula o frete com base na taxa fixa e taxa por produto
class CalculadoraFrete {
    constructor(taxaFixa, taxaPorProduto) {
      this.taxaFixa = taxaFixa;
      this.taxaPorProduto = taxaPorProduto;
    }
  
    calcularFrete(listaProdutos) {
      // Separa os produtos e calcula a quantidade total
      const quantidades = listaProdutos.split(', ').map(produto => {
        const [, quantidade] = produto.split(':');
        return parseInt(quantidade, 10);
      });
      const quantidadeTotal = quantidades.reduce((total, quantidade) => total + quantidade, 0);
  
      // Calcula o frete total
      const freteTotal = this.taxaFixa + (this.taxaPorProduto * quantidadeTotal);
  
      // Retorna o frete formatado com duas casas decimais
      return freteTotal.toFixed(2);
    }
  }
  
  // Função principal para obter os dados de entrada e imprimir o resultado
  function main() {
    const listaProdutos = gets();
    const taxaFixa = parseFloat(gets());
    const taxaPorProduto = parseFloat(gets());
  
    const calculadora = new CalculadoraFrete(taxaFixa, taxaPorProduto);
    const freteTotal = calculadora.calcularFrete(listaProdutos);
  
    print(freteTotal);
  }
  
  main();