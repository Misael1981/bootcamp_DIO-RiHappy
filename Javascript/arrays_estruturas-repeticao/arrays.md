# Arrays

## O que são arrays?

São listas de valores(itens) ordenados com um nome e um índice.

Imagine que você precisa armazenar uma lista de compras. Em vez de criar uma variável para cada item, como banana, , , você pode usar um array . Matrizes são como caixas que guardam vários valores de uma vez, facilitando a organização e o acesso a esses dados. maçã laranja

## Criando um array:

### Existem duas maneiras principais de criar um array em JavaScript:

- 1-Usando colchetes:

```
const frutas = ["banana", "maçã", "laranja"];
```

- 2-Usando o construtor Array:

```
const legumes = new Array("batata", "cenoura", "abobrinha");
```

## Acessando um item:

Para acessar um item específico dentro do array, utilizamos colchetes e o índice do item desejado. O índice começa em 0 , então:

- `frutas[0]` retorna "banana".
- `frutas[1]` retorna "maçã".
- `frutas[2]` retorna "laranja".

## Subscrevendo um item:

Para alterar um valor existente no array, basta usar o mesmo índice e obter o novo valor:

```
frutas[1] = "pera";
console.log(frutas); // ["banana", "pera", "laranja"]
```

## Principais Propriedades e Métodos Utilitários:

- **length**: Retorna o número de elementos no array:

```
console.log(frutas.length); // 3
```

- **join()**: Une os elementos do array em uma string, usando um separador especificado:

```
const frase = frutas.join(", ");
console.log(frase); // banana, pera, laranja
```

- **indexOf()**: Retorna o índice da primeira ocorrência de um valor no array, ou -1 se não encontrado:

```
const indiceLaranja = frutas.indexOf("laranja");
console.log(indiceLaranja); // 2
```

- **push()**: Adiciona um ou mais elementos ao final do array:

```
frutas.push("uva", "kiwi");
console.log(frutas); // ["banana", "pera", "laranja", "uva", "kiwi"]
```

- **concat()**: Combina dois ou mais arrays em um novo array:

```
const legumesVerdes = legumes.concat(["brócolis", "couve"]);
console.log(legumesVerdes); // ["batata", "cenoura", "abobrinha", "brócolis", "couve"]
```

- **pop()**: Remove o último elemento do array e retorna esse elemento:

```
const ultimoItem = frutas.pop();
console.log(ultimoItem); // "kiwi"
console.log(frutas); // ["banana", "pera", "laranja", "uva"]
```

### [Menu JavaScript](../menu_javascript.md)