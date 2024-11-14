# Criando Métodos Para o Objeto

Os métodos são funções associadas a objetos em JavaScript, que permitem realizar ações específicas sobre os dados contidos nesse objeto. Eles são fundamentais para a programação orientada a objetos (POO) em JavaScript.

## Criando Métodos

Existem duas formas principais de criar métodos em JavaScript:

### 1. Dentro da declaração do objeto:

```
const pessoa = {
  nome: 'João',
  idade: 30,
  saudar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.saudar(); // Saída: Olá, meu nome é João e tenho 30 anos.
```

### 2. Usando uma função construtora:

```
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.saudar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
}

const outraPessoa = new Pessoa('Maria', 25);
outraPessoa.saudar(); // Saída: Olá, meu nome é Maria e tenho 25 anos.
```

## Acessando e Utilizando Métodos

Para acessar e utilizar um método, você utiliza a notação de ponto:

```
objeto.metodo();
```

Por exemplo, para chamar o método `saudar()` do objeto `pessoa`, você faria:

```
pessoa.saudar();
```

## `this` dentro de métodos

O `this` interior de um método refere-se ao objeto que está chamando o método. Isso permite que você acesse e modifique as propriedades do objeto dentro do método.

Exemplo Prático: Criando um Objeto Carro

```
function Carro(modelo, ano) {
  this.modelo = modelo;
  this.ano = ano;

  this.ligar = function() {
    console.log('O carro está ligado.');
  };

  this.acelerar = function() {
    console.log('O carro está acelerando.');
  };
}

const meuCarro = new Carro('Gol', 2010);
meuCarro.ligar();
meuCarro.acelerar();
```

### Conceitos Importantes

- **Encapsulamento**: Ocultar os detalhes internos de um objeto e expor apenas as funcionalidades permitidas através dos métodos.
- **Herança**: Crie novos objetos a partir de outros, herdando suas propriedades e métodos.
- **Polimorfismo**: Permite que objetos de diferentes tipos respondam de forma diferente ao mesmo método.

### [Menu JavaScript](../menu_javascript.md)