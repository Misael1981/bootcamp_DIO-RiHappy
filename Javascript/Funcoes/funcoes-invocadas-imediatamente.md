# Funções Invocadas Imediatamente

## IIFE

Uma **IIFE** (*Immediately Invoked Function Expression*), cuja tradução literal para português é **Expressão de Função Imediatamente Invocada**, é uma função definida como uma expressão e é executada imediatamente após a sua criação.

### Sintaxe

No exemplo a seguir é mostrada a sintaxe da definição de uma expressão de função chamada imediatamente:

```
(function() {
    //...
})()
```

## Porque usar?

Quando você define uma função, o motor JavaScript adiciona a função ao objeto global. Veja o exemplo a seguir:

```
function add(a, b) {
    return a + b
}
```

Nos navegadores de internet, a função `add()` é adicionada ao objeto *window*.

```
console.log(window.add)
```

Da mesma forma, se você declarar uma variável fora de uma função, o motor JavaScript também adicionará a variável ao objeto global:

```
let counter = 10
console.log(window.counter); // 10
```

Se você tiver muitas variáveis e funções globais, o motor JavaScript liberará apenas a memória alocada para elas até quando o objeto global perder o escopo.

Como resultado, o script pode usar a memória de forma ineficiente. Além disso, ter variáveis e funções globais provavelmente causará colisões de nomes.

Uma maneira de impedir que as funções e variáveis poluam o objeto global é usar expressões de função invocadas imediatamente.

Em JavaScript você pode ter as seguintes expressões:


```
'This is a string'

(10 + 20)
```

Essa sintaxe está correta mesmo que as expressões não tenham nenhum efeito.

Uma função também pode ser declarada como uma expressão denominada expressão de função:

```
let add = function (a, b) {
    return a + b
}
```

Nesta sintaxe, a parte do lado direito do operador de atribuição `=` é uma expressão de função. Como uma função é uma expressão, você pode colocá-la entre parênteses.

```
let add = (function(a, b) {
    return a + b
})
```

Neste exemplo a variável `add` é referenciada como a função anônima que soma dois argumentos.

Além disso, você pode executar a função imediatamente após criá-la:

```
let add = (function(a, b) {
    return a + b
})(a + b)
console.log(add)
```
Neste exemplo a variável `add` retém o resultado da chamada de função.

A expressão a seguir é chamada de “expressão de função imediatamente invocada” (ou IIFE que é acrônimo de Immediately Invoked Function Expression) porque a função é criada como uma expressão e executada imediatamente:

```
(function(a, b) {
    return a + b
})(a + b)
```

Esta é a sintaxe geral para definir uma IIFE:

```
(function() {
    //...
})()
```

Observe que você pode usar arrow function para definir uma IIFE:

```
(() => {
    //...
})()
```

Ao colocar funções e variáveis dentro de uma expressão de função imediatamente invocada (IIFE), você pode evitar poluí-las no objeto global:

```
(function() {
    let counter = 0

    function add(a, b) {
        return a + b
    }
    console.log(add(10 , 20))  //30
}())
```

## Nomeando IIFE

Uma IIFE pode ter um nome, no entanto, não pode ser invocado novamente após a execução:

```
(function namedIIFE() {
    //...
})()
```

### IIFE começando com ponto e vírgula (`;`)

As vezes você pode ver uma IIFE que começa com um ponto e vírgula `;`:

```
;(function() {
    /* */
})()
```

Nessa sintaxe, o ponto e vírgula `;` é usado para finalizar a instrução caso dois ou mais arquivos JavaScript estejam cegamente concatenados em um único arquivo.

Por exemplo, você pode ter dois arquivos `lib1.js` e `lib2.js` que são IIFEs:

```
(function() {
    //...
})()

(function() {
    //...
})()
```

Se você usar uma ferramenta de empacotador de código para concatenar o código de ambos os arquivos em um único arquivo, sem o ponto e vírgula `;` o código JavaScript concatenado causará um erro de sintaxe.

### [Menu JavaScript](../menu_javascript.md)