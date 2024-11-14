# Classes e Instâncias em JavaScript

## O que são Classes?

**Imagine uma classe como um blueprint ou molde para criar objetos**. Ela define um conjunto de propriedades (atributos) e métodos (comportamentos) que todos os objetos criados a partir de seu compartilhamento. É como uma receita: a classe define os ingredientes e os passos, e cada objeto criado a partir dessa classe é um bolo assado seguindo essa receita.

Em JavaScript, uma classe é uma estrutura que define um novo tipo de objeto. Ela serve como um modelo para criar objetos múltiplos com as mesmas características básicas.

### Exemplo:

```
JavaScript
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  ligar() {
    console.log("O carro está ligado!");
  }
}
```

- **`class Carro`**: Declara uma nova classe de chamada `Carro`.
- **`constructor`**: É um método especial que inicializa um novo objeto da classe. Ele recebe as configurações `marca`e `modelo`para `ano`definir as propriedades do carro.
- **`this`**: Referência ao objeto que está sendo criado.
- **`ligar()`**: É um método que define o comportamento de ligar o carro.

## O que é uma Instância?

Uma instância é um objeto específico criado a partir de uma classe. É como uma cópia do molde, mas com valores específicos para as propriedades.

### Voltando ao exemplo do carro:

```
const meuCarro = new Carro("Honda", "Civic", 2023);
```

- **`new Carro()`**: Cria uma nova instância da classe `Carro`.
- **`meuCarro`**: É uma variável que armazena essa nova instância.

**Agora, `meuCarro`é um objeto do tipo `Carro`com as seguintes propriedades**:

- **`marca`**: "Honda"
- **`modelo`**: "Cívico"
- **`ano`**: 2023

### Podemos acessar as propriedades e métodos da instância:

```
console.log(meuCarro.marca); // Saída: Honda
meuCarro.ligar(); // Saída: O carro está ligado!
```

### Resumindo:

- **As classes** definem a estrutura de um objeto.
- **Instâncias** são objetos concretos criados a partir de uma classe.
- **`new`**é a palavra-chave usada para criar uma nova instância.

### Por que usar Classes?

- **Reutilização de código**: Crie uma classe e use-a para criar objetos múltiplos com as mesmas características.
- **Organização**: Agrupa dados e comportamentos relacionados em um único lugar.
- **Herança**: Crie novas classes baseadas em classes existentes, reutilizando código e adicionando novas funcionalidades.
- **Facilita a manutenção**: Ao modificar uma classe, todas as instâncias criadas a partir dela são atualizadas automaticamente.

### Em resumo:

As classes em JavaScript protegem uma forma mais estruturada e organizada de trabalho com objetos. Ao entender o conceito de classes e instâncias, você estará melhor preparado para criar aplicações JavaScript mais complexas e robustas.

### [Menu JavaScript](../menu_javascript.md)
