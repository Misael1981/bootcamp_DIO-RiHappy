# Loop for

O loop for, também conhecido como laço de repetição for, é uma estrutura de controle de fluxo utilizada em programação para executar um bloco de código repetidamente um certo número de vezes. Ele é ideal para situações onde você sabe exatamente quantas vezes o código precisa ser executado.

Imagine que você quer imprimir na tela os números de 1 a 5.   Sem um loop for, você teria que escrever cinco instruções separadas para imprimir. O loop for torna isso bem mais fácil e compacto.

Veja a estrutura básica de um loop para:

```
for (inicialização; condição; incremento) {
  // bloco de código a ser repetido
}
```

Vamos analisar cada parte da estrutura:

- **Inicialização**: É onde você define uma variável que será utilizada como um contador para as iterações do loop. Normalmente, essa variável é inicializada com um valor inicial, marcando o ponto de partida da reprodução.

- **Condição**: É uma expressão booleana (verdadeiro ou falso) que determina quantas vezes o loop será executado. O loop continua rodando enquanto a condição é verdadeira.

- **Incremento**: Defina como o contador será modificado após cada iteração do loop. Normalmente, ele é incrementado (somamos 1) para percorrer uma sequência de valores.

Por exemplo, para imprimir os números de 1 a 5, o loop para ficar assim:

```
for (int i = 1; i <= 5; i++) {
  console.log(i);
}
```

- A variável `i` é inicializada com o valor 1.
- O loop continua rodando enquanto `i` for menor ou igual a 5 (condição).
- Após cada iteração, é incrementado em 1. `i`

Dessa forma, o loop será executado 5 vezes, imprimindo na tela os números 1, 2, 3, 4 e 5.

## Aplicações do loop para:

O loop for é uma estrutura de controle de fluxo muito utilizada em programação para diversas tarefas que envolvem atividades, tais como:

- **Correr arrays e listas**: acessar e processar cada elemento de uma coleção de dados.

- **Iterar sobre strings**: Correr caractere por caractere de uma string para manipulação de texto.

- **Executar cálculos repetitivos**: Somar, subtrair, multiplicar ou dividir um determinado número de vezes.

- **Desenhar padrões**: Criar formas geométricas ou outros desenhos repetitivos na tela.

Loops for são uma ferramenta poderosa para automatizar tarefas repetitivas e tornar seu código mais completo e legível.

## Dicas para usar loop para:

- **Escolha bem a variável de inicialização e incremento**: Certifique-se de que esses valores estejam de acordo com a quantidade de iterações desejadas.
- **Defina uma condição de parada clara**: A condição do loop deve garantir que ele não seja executado infinitamente.
- **Cuidado com loops aninados**: Loops for dentro de outros loops for podem tornar o código difícil de ler. Use-os com moderação.
- **Nem sempre o loop for é a melhor opção**: Para situações em que o número de iterações não é conhecido anteriormente, considere usar um loop while.

### [Menu Javascript](../menu_javascript.md)