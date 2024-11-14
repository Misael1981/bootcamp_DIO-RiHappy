# Acessando Dinamicamente Valores de um Objeto

## O que significa acessar dinamicamente?

Quando falamos em acessar dinamicamente os valores de um objeto em JavaScript, estamos nos referindo à capacidade de determinar o nome da propriedade que queremos acessar em tempo de execução, ao invés de definir isso de forma estática no código.

### Por que isso é útil?

- **Flexibilidade**: Permite criar códigos mais genéricos e adaptáveis ​​a diferentes situações.
- **Interação com dados externos**: Quando não sabemos previamente quais propriedades um objeto terá, como ao trabalhar com APIs ou dados de um banco de dados.
- **Construção de estruturas de dados dinâmicas**: Permite criar objetos complexos e hierárquicos de forma mais flexível.

### Como fazer isso?

Existem diversas formas de acessar dinamicamente os valores de um objeto em JavaScript:

## 1. Notação de colchetes:

A forma mais comum e versátil de acessar propriedades de forma dinâmica é utilizar a notação de colchetes. Dentro dos colchetes, você coloca uma string que representa o nome da propriedade que deseja acessar.

```
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

const propriedade = 'idade';
console.log(pessoa[propriedade]); // Saída: 30

// Acessando uma propriedade dinamicamente a partir de uma variável
let atributo = 'cidade';
console.log(pessoa[atributo]); // Saída: São Paulo
```

## 2. Operador `in`:

O operador `in` verifica se existe uma propriedade em um objeto.

```
if ('nome' in pessoa) {
  console.log('A propriedade nome existe');
}
```

## 3. Laços de reprodução (`for...in`):

Para iterar sobre todas as propriedades de um objeto, podemos usar o laço `for...in`.

```
for (let propriedade in pessoa) {
  console.log(propriedade + ': ' + pessoa[propriedade]);
}
```

## 4. Método `Object.keys()`:

Retorna um array com as chaves (nomes das propriedades) de um objeto

```
const chaves = Object.keys(pessoa);
console.log(chaves); // Saída: ['nome', 'idade', 'cidade']
```

## 5. Desestruturação:

Podemos desestruturar objetos para definir valores de propriedades variáveis.

```
const { nome, idade } = pessoa;
console.log(nome, idade);
```

### Exemplo prático: Construindo uma função genérica para acessar propriedades:

```
function acessarPropriedade(objeto, propriedade) {
  if (propriedade in objeto) {
    return objeto[propriedade];
  } else {
    return 'Propriedade não encontrada';
  }
}

const resultado = acessarPropriedade(pessoa, 'idade');
console.log(resultado);
```

### [Menu JavaScript](../menu_javascript.md)