# Conceitos básicos sobre Funções

No mundo da programação, as funções são como blocos de construção essenciais, permitindo organizar seu código em módulos reutilizáveis ​​e eficientes. No JavaScript, elas desempenham um papel fundamental na criação de interfaces interativas, animações dinâmicas e aplicações complexas.

## Desvendando o Conceito de Funções em JavaScript:

Imagine um cozinheiro experiente preparando um banquete delicioso. Ele divide as tarefas em etapas menores, como picar legumes, temperar a carne e assar o bolo. Cada etapa é como uma função, com um objetivo específico e um conjunto de instruções precisas. Ao combinar essas funções, o cozinheiro cria um banquete completo e saboroso.

No JavaScript, as funções funcionam de maneira semelhante. Você define um bloco de código reutilizável para realizar uma tarefa específica. Esse bloco pode receber dados de entrada (chamados de "parâmetros") e retornar um resultado. As funções permitem:

- **Modularidade**: Dividir seu código em partes menores e bem definidas, facilitando a leitura, o entendimento e a manutenção.
- **Reutilização**: Usar o mesmo código em diferentes partes do seu programa, evitando redundância e economizando tempo.
- **Organização**: Mantenha seu código organizado e estruturado, tornando-o mais fácil de depurar e modificar.
- **Abstração**: Ocultar detalhes complexos da implementação, expondo apenas a funcionalidade necessária para outras partes do programa.

## Declarações de Função: A Forma Clássica de Criar Funções

A maneira tradicional de criar funções em JavaScript é através da declaração de função. Essa abordagem utiliza a palavra-chave `function` seguida do nome da função, parênteses para os parâmetros e chaves para o corpo da função. Veja um exemplo:

```
function somar(numero1, numero2) {
  const resultado = numero1 + numero2;
  return resultado;
}
```

Nesse exemplo, a função `somar` recebe dois parâmetros, e , e retorna a soma desses números. `numero1` `numero2`

**Importante**

```
`Hoisting`: As declarações de função são "içadas" para o topo do arquivo. Não importando onde ela foi declarada. Ela pode ser chamada de qualquer ponto do código.
```

## Expressões de Função: Funções Mais Compactas e Flexíveis

As expressões de função oferecem uma sintaxe mais concisa para criar funções. Eles utilizam uma palavra-chave `function` ou uma seta (`=>`) para definir a função, sem a necessidade de chaves. Veja um exemplo:

```
const somar = (numero1, numero2) => numero1 + numero2;
```

Essa expressão de função faz o mesmo que a declaração de função anterior, mas com menos código.

### Funções como Cidadãos de Primeira Classe: Recursos Avançados

Em JavaScript, as funções são consideradas "cidadãos de primeira classe". Isso significa que elas podem ser usadas como qualquer outro tipo de dado, permitindo:

- `Atribuição a variáveis`: Armazenar funções em variáveis ​​para serem reutilizadas posteriormente.
- `Passagem como argumentos`: Passar funções como argumentos para outras funções.
- `Retorno de funções`: Retornar funções de outras funções.
Essa flexibilidade torna as funções ainda mais poderosas e úteis na programação JavaScript.

# Return 

## Retornando Valores: A Essência dos Retornos de Função

Em JavaScript, o retorno de função permite que a função envie um valor de volta para o local de onde foi chamada. Esse valor pode ser utilizado para:

- **Armazenar em variáveis**: O resultado da função pode ser armazenado em uma variável para uso posterior no programa.
- **Passar como argumentos**: O valor retornado pode ser utilizado como argumento para outras funções.
- **Controlar o fluxo do programa**: O retorno da função pode ser usado para determinar o que deve acontecer a seguir no programa.

## Sintaxe do Retorno de Função: Simples e Eficaz

Para retornar um valor de uma função, utilize a palavra-chave `return` seguida da expressão que contém o valor desejado. Veja um exemplo:

```
function somar(numero1, numero2) {
  const resultado = numero1 + numero2;
  return resultado;
}

const soma = somar(5, 3);
console.log(soma); // Resultado: 8
```

Nesse exemplo, a função `somar` retorna o valor da soma de `numero1` e `numero2`. Esse valor retornado é armazenado na variável `soma` e impresso no console.

## Retornando Vários Valores: Abrindo um Banquete de Possibilidades

Embora o retorno de um único valor seja comum, o JavaScript permite retornar vários valores de uma função. Isso pode ser feito utilizando um array ou um objeto. Veja um exemplo com array:

```
function calcularMediaEArea(base, altura) {
  const area = base * altura;
  const perimetro = 2 * (base + altura);
  return [area, perimetro];
}

const resultados = calcularMediaEArea(5, 4);
const area = resultados[0];
const perimetro = resultados[1];
console.log(`Área: ${area}, Perímetro: ${perimetro}`);
```

Nesse caso, a função `calcularMediaEArea` retorna um array contendo a área e o perímetro de um retângulo. Os valores retornados são armazenados nas variáveis `area` ​​e `perímetro` impressos no console.

## Retornando Objetos: Estruturando Dados com Elegância

Retornar objetos é uma maneira organizada e eficiente de enviar vários dados relacionados a uma função. Veja um exemplo:

```
function criarPessoa(nome, idade, profissao) {
  return {
    nome: nome,
    idade: idade,
    profissao: profissao
  };
}

const pessoa = criarPessoa("João", 30, "Desenvolvedor");
console.log(pessoa.nome, pessoa.idade, pessoa.profissao);
```

Na função `criarPessoa`, um objeto é criado com as propriedades `nome`, e preenchido pelos argumentos recebidos. Esse objeto é retornado e armazenado em variável , permitindo o acesso a cada propriedade individualmente. `idade` `profissao` `pessoa`

## Funções Sem Retorno: Cenários Específicos

Nem todas as funções precisam retornar um valor. Em alguns casos, a função tem como objetivo realizar uma ação e não precisa enviar um resultado específico. Veja um exemplo:

```
function exibirMensagem(mensagem) {
  console.log(mensagem);
}

exibirMensagem("Olá, mundo!"); // A função exibe a mensagem, mas não retorna nenhum valor
```

Nesse caso, a função `exibirMensagem` apenas exibe a mensagem recebida no console, sem retornar nenhum valor.

# Argumentos, Parâmetros e Parâmetros Padrão em Funções 

No mundo das funções JavaScript, três termos são essenciais para dominar a arte da programação: argumentos, parâmetros e configurações padrão. Vamos desvendar cada um deles:

## Argumentos:

Imagine um garçom anotando seu pedido no restaurante. Os pratos que você escolhe são como os argumentos , que são os valores passados ​​para a função quando ela é chamada.

## Parâmetros:

Agora, visualize a cozinha do restaurante. Lá, o cozinheiro recebe seu pedido (argumentos) e utiliza os ingredientes ( intervalos ) para preparar uma refeição. As parâmetros são as variáveis ​​definidas na declaração da função para receber os argumentos.

## Parâmetros Padrão:

Em alguns casos, o cozinheiro pode ter ingredientes pré-definidos para um prato, caso você não os especifique. No JavaScript, as configurações padrão definem valores predefinidos para as configurações da função, caso nenhum argumento seja fornecido.

## Exemplo Prático: Degustando Funções com Argumentos, Parâmetros e Parâmetros Padrão

Considere a seguinte função que calcula a soma de dois números:

```
function somar(numero1, numero2 = 10) {
  const resultado = numero1 + numero2;
  return resultado;
}
```

- **Argumento**: Ao chamar a função, você informa os valores que serão usados ​​na soma. Por exemplo, . Aqui, 5 e 3 são os argumentos. `somar(5, 3)`

- **Parâmetros**: Na declaração da função, e são as configurações que confirmam os valores dos argumentos. `numero1` `numero2`

- **Parâmetro Padrão**: O parâmetro `numero2` possui um valor padrão de 10. Se você chamar uma função sem especificar o segundo argumento, como em `somar(5)`, o valor 10 será utilizado.

```
function cumprimentar() {
  console.log("Olá, mundo!");
}
```

- **Função com Vários Argumentos**: Uma função pode receber vários argumentos, separados por vírgulas. Por exemplo:

```
function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}
```

## Abrindo o Apetite com Rest Parameters: Saboreando Argumentos Indefinidos

Em certos casos, você pode querer lidar com um número indefinido de argumentos. É aí que ambos os **parâmetros restantes**.

Imagine um banquete com vários pratos deliciosos. Os `rest parameters` permitem que você receba um número indefinido de argumentos e os armazene em um array. Veja um exemplo:

```
function calcularMedia(...notas) {
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  const media = soma / notas.length;
  return media;
}
```

Nesse exemplo, a função `calcularMedia` recebe um `rest parameter` chamado `notas`. Esse parâmetro armazena todos os argumentos passados ​​para a função em um array, que pode ser acessado dentro da função.

## Desvendando os Segredos dos Argumentos Objeto: Personalizando a Experiência

Os objetos permitem que você passe um objeto como argumento para uma função, fornecendo vários dados de forma organizada.

Imagine um pedido no restaurante com detalhes específicos. Os argumentos objetos são como pedidos detalhados, contendo propriedades e valores para personalizar a execução da função. Veja um exemplo:

```
function formatarNome(pessoa) {
  const nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`;
  return nomeCompleto.toUpperCase();
}

const cliente = {
  nome: "João",
  sobrenome: "Silva"
};

const nomeFormatado = formatarNome(cliente);
console.log(nomeFormatado); // Resultado: JOÃO SILVA
```

Nesse exemplo, uma função `formatarNome` recebe um argumento objeto pessoacom as propriedades `nome` e `sobrenome`. A função utiliza esses dados para formatar o nome completo em seus guardiões.

## Recapitulando: Dominando a Arte das Funções em JavaScript

Argumentos, parâmetros e configurações padrão são peças fundamentais no quebra-cabeça das funções em JavaScript. Agora que você já conhece, vamos revisar os pontos-chave:

## Argumentos:

- São os valores passados ​​para a função quando ela é chamada.
- Imaginados como os pratos que você pede em um restaurante.

## Parâmetros:

- São as variáveis ​​definidas na declaração da função para receber os argumentos.
- Visualizados como os ingredientes que o cozinheiro utiliza para preparar seu pedido.

## Parâmetros Padrão:

- Valores predefinidos para as configurações da função, caso nenhum argumento seja fornecido.
- Funcionam como os ingredientes que o cozinheiro já tem na cozinha para agilizar o preparo.

## Tipos de Funções por Número de Argumentos:

- **Sem Argumentos**: Não recebe nenhum valor quando chamadas.
- **Com Vários Argumentos**: Recebem diversos valores separados por vírgulas.
- **Com Rest Parameters**: Recebem um número indefinido de argumentos armazenados em um array.

## Passando Argumentos:

- **Por posição**: A ordem dos argumentos na chamada corresponde à ordem das cláusulas na declaração.
- **Por Nome**: Utilize nomes de parâmetros e valores entre chaves para maior clareza.

## Retornando Valores:

- Utilize uma palavra-chave `return` seguida do valor desejado.
- O valor retornado pode ser utilizado em outras partes do programa.

## Funcionalidades Extras:

- **Funções anônimas**: Criadas sem nome e armazenadas em variáveis ​​ou passados ​​como argumentos.
- **Funções de seta**: Sintaxe concisa para funções simples, utilizando a seta `=>`.
- **Funções autoinvocáveis**: Funções que se chamam automaticamente, encapsulando código e evitando variações globais.



### [Menu JavaScript](../menu_javascript.md)