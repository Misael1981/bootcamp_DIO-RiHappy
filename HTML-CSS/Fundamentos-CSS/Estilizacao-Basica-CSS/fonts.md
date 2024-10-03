# Fontes no CSS

## Introdução aos Tipos Genéricos de Fontes

Os tipos genéricos de fontes, também conhecidos como grupos de fontes, são categorias que agrupam famílias de fontes com características visuais semelhantes. No CSS, os principais tipos genéricos são:

- **Serif**: Fontes com pequenos traços (serifas) nas extremidades dos caracteres, conferindo um aspecto mais formal e tradicional. Exemplos: Times New Roman, Geórgia.
- **Sans-Serif**: Fontes sem serifas, com um visual mais limpo e moderno. Exemplos: Arial, Helvética.
- **Display**: Fontes com design mais elaborado e chamativo, geralmente utilizadas em títulos e cabeçalhos.
- **Handwriting**: Fontes que imitam a escrita à mão, com um aspecto mais informal e pessoal.
- **Monospace**: Fontes onde todos os caracteres ocupam a mesma largura, como em fontes de máquina de escrever.

## Google Fonts e Fontes Personalizadas

**Google Fonts**: É uma biblioteca online gratuita com uma vasta coleção de fontes que podem ser facilmente incorporadas em seus projetos através do site ([https://fonts.google.com/])

**Fontes Personalizadas**: Para utilizar fontes personalizadas, você pode usar as disposições _@font-face_ e `@import`.   

- **@font-face**: Permite definir uma fonte personalizada, carregando seus arquivos de fonte (eot, woff, woff2, ttf, svg).

```
@font-face {
  font-family: 'MinhaFonte';
  src: url('minhafonte.woff2') format('woff2'),
       url('minhafonte.woff') format('woff'),
       url('minhafonte.ttf') format('truetype');
}
```

- **@import**: Importa um arquivo CSS externo que contém as regras `@font-face`.

```
@import url('fontes.css');
```

## Propriedades CSS para Estilização de Fontes

As principais propriedades CSS para estilizar fontes são:

- **font-family**: Define a família da fonte a ser utilizada.
- **font-size**: Define o tamanho da fonte.
- **font-style**: Define o estilo da fonte (normal, itálico, oblíquo).
- **font-weight**: Define a espessura da fonte (normal, negrito, etc.).
- **font-variant**: Defina as variantes da fonte (small-caps, etc.).
- **font-stretch**: Define o alongamento da fonte (normal, condensado, expandido).
- **line-height**: Define o espaço entre as linhas de texto.

### Exemplo:

```
p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
```

### Criando um Estilo Personalizado com Fontes

Para criar um estilo personalizado, você pode combinar diferentes propriedades de fonte e os tipos genéricos. Por exemplo:

```
h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}

p {
  font-family: 'Georgia', serif;
  font-size: 18px;
  line-height: 1.6;
  color: #666;
}
```

### Dicas Adicionais

- **Escolha fontes legíveis**: Priorize fontes que sejam simples de ler, especialmente para textos longos.
- **Combine fontes com harmonia**: Evite usar muitas fontes diferentes em um mesmo projeto.
- **Considere o contexto**: A escolha da fonte deve levar em contato com o público-alvo e o objetivo do seu projeto.
- **Teste diferentes combinações**: Experimente diferentes combinações de fontes, tamanhos e núcleos para encontrar o estilo ideal.

### [Menu Estilização CSS](../menu_estilizacao.md)

