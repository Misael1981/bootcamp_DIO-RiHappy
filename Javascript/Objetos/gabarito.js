//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


function verificarPromocoes() {
    // TODO: Defina uma constante taxaDesconto com valor 0.10, que representa uma taxa de desconto de 10%:
        const taxaDesconto = 0.10;
        
        const entrada = gets(); 
        const produtos = entrada.split(' - '); 
        const resultado = [];
    
        produtos.forEach(produto => {
            const [nome, quantidadePreco] = produto.split(': '); 
            const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 
    
            let precoFinal;
    
            // TODO: Verifique se a quantidade é maior ou igual a 5 e aplicar o desconto se necessário
            
            
            if (quantidade >=5) {
              precoFinal = precoUnitario * (1 - taxaDesconto);
            } else {
              precoFinal = precoUnitario;
            }
            
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
            
        });
    
        print(resultado.join(' - '));
    
    }
    
    // TODO: Chame a função:
    
    console.log(resultado);