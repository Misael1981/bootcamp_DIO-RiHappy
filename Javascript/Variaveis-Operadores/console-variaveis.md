# Variáveis em JavaScript

## O que são variáveis?

<p>Variáveis são ferramentas indispensáveis na programação, são nelas que colocamos valores para podermos trabalhar com eles posteriormente, similar à álgebra da matemática. As variáveis são um dos fatores para mantermos o código dinâmico, fácil de ser lido, compreendido e escalável.</p>

## Variáveis no JavaScript

<p>Diferentemente de outras linguagens, como Java, no JavaScript não há necessidade de declarar o tipo da variável, mas isso não significa que ela não tem tipo, na verdade o JS faz a tipagem dinamicamente, similar ao PHP.
</p>

### Pontos importantes sobre variáveis em JavaScript

- São utilizadas para armezenar dados como números, textos, booleanos, objetos, entre outros...
- São essenciais para a manipulação e processamento de informações dentro de um programa
- Ao utilizar variáveis, é possível guardar valores em memória e referencia-los por meio de num nome simbólico.
- Isso facilita a manipulação e reutilização desses valores ao longo do código.
- As variáveis também permitem que os programas sejam mais dinâmicos, pois seus valores podem ser alterados durante a execução do código.
- Além disso, as variáveis em JavaScript seguem regras de escopo, podendo ser globais ou locais. Elas também podem ser declaradas usando palavras-chave como `var`, `let` e `const`. Cada uma com suas particularidades em relação ao escopo e à mutabilidade de um valor.
- Em resumo, as variáveis são fundamentais para armezenar e manipular dados e forma dinâmica e eficiente, tornando possível a criação de programas mais interativos e eficientes. 

## Declaração de variáveis

Para declarar uma variável em JavaScript, utlizamos uma palavra-chave `var`, `let` ou `const` seguido de um nome intuivo que atribu~imos à variavel:

- `var`: A palavra-chave mais antiga, com escopo de função. Significa que a variável pode ser acessada em qualquer lugar dentro da função em que foi declarada, mesmo em blocos de código aninhados.

- `let`: Introduzida no ES6, possui escopo de bloco. Isso significa que uma variável só pode ser acessada dentro do bloco de código em que foi declarada.

- `const`:  Introduzida no ES6, cria uma constante, ou seja, um valor imutável que não pode ser alterado após a inicialização.

### Exemplo de Declaração de Variáveis:

```
var nome = "Pedro"; // Declaração com var e atribuição de valor
let idade = 25;    // Declaração com let e atribuição de valor
const pi = 3.1415; // Declaração com const e definição de constante

```

### Escolhendo a Palavra-chave Correta:

- Use `var` quando precisar de compatibilidade com código antigo.

- Use `let` para declarar variáveis ​​que só serão usadas em um determinado bloco de código.

- Use `const` para declarar valores que não devem ser alterados durante a execução do programa.

## Objeto Console

O console é efetivamente um objeto com diversos métodos associados.

O objeto console fornece acesso à consola de depuração do navegador. O funcionamento deste objeto varia de navegador para navegador mas existem determinados métodos que são vistos como um standard. Um desses métodos é o `log()`.

## Método log

O método `log()` existe essencialmente para permitir o envio de dados para a consola de depuração do navegador. Pode ser enviada qualquer informação, normalmente com o intuito de depurar código.

### [Menu JavaScript](../menu_javascript.md)