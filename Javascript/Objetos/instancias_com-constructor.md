# O que é um Constructor em JavaScript?

Em JavaScript, o **constructor** é um método especial dentro de uma classe que é executado automaticamente quando um novo objeto é criado a partir dessa classe (ou seja, quando a classe é instanciada). Ele serve para inicializar as propriedades do objeto com valores iniciais, definindo assim o estado inicial do objeto.

**Imagine o constructor como um "construtor de objetos"**. Ele define como um novo objeto deve ser montado e quais serão suas características iniciais.

## Como criar instâncias com o constructor?

Para criar uma instância de uma classe (ou seja, um novo objeto), você utiliza a palavra-chave **`new`** seguida do nome da classe e dos argumentos que serão passados para o constructor.

### Exemplo:

```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Outros métodos da classe
}

// Criando uma nova instância da classe Pessoa
const pessoa1 = new Pessoa("João", 30);
```

### Explicando o código:

1. **`class Pessoa`**: Define uma nova classe chamada `Pessoa`.
2. **`constructor(nome, idade)`**: Define o constructor da classe. Ele recebe dois parâmetros: `nome` e `idade`.
3. **`this.nome = nome;` e `this.idade = idade;`**: Atribui os valores dos parâmetros `nome` e `idade` às propriedades do objeto que está sendo criado. `this` se refere ao objeto atual.
4. **`const pessoa1 = new Pessoa("João", 30);`**: Cria uma nova instância da classe `Pessoa` e atribui essa instância à variável `pessoa1`. Os valores "João" e 30 são passados como argumentos para o constructor.

### Após a criação da instância, você pode acessar as propriedades do objeto:

```
console.log(pessoa1.nome); // Saída: João
console.log(pessoa1.idade); // Saída: 30
```

### Por que usar o constructor?

- **Inicialização**: Garante que todos os objetos criados a partir da classe tenham um estado inicial consistente.
- **Flexibilidade**: Permite personalizar a criação de objetos com base em diferentes parâmetros.
- **Reutilização de código**: O mesmo código do constructor é utilizado para criar múltiplas instâncias.

### Exemplo mais completo:

```
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log("O carro está ligado!");
  }
}

const meuCarro = new Carro("Honda", "Civic", 2023);
meuCarro.ligar();
```

### Em resumo:

O constructor é uma ferramenta fundamental em JavaScript para criar e inicializar objetos. Ele define o ponto de partida para a criação de novas instâncias de uma classe e garante que todos os objetos tenham as propriedades e valores iniciais definidos.

### [Menu JavaScript](../menu_javascript.md)