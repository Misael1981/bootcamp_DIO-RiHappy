# Seletores de Atributo no CSS

Os seletores de atributo permitem que você selecione elementos HTML com base nos atributos que eles possuem. Isso é muito útil para estilizar elementos sem precisar adicionar classes ou IDs extras. Vamos explorar os diferentes tipos de seletores de atributo:

## 1. Selecionando pelo valor do atributo

Você pode selecionar um elemento com base em um atributo específico e seu valor exato. Por exemplo:

```
css
input[type="text"] {
    border: 1px solid blue;
}
```

Esse seletor aplica um estilo a todos os elementos `<input>` que têm o atributo type igual a "text".

## 2. `seletor [atributo~="valor"]`

O acento til (`~`) é usado para selecionar elementos cujo atributo contém uma lista de palavras, e a palavra especificada deve ser uma das palavras da lista. Por exemplo:

```
css
[class~="highlight"] {
    background-color: yellow;
}
```


Esse seletor aplica um estilo a todos os elementos que têm uma classe que contém a palavra "highlight", mesmo que faça parte de outras classes.

## 3. `seletor [atributo|="valor"]`

O pipe (`|`) é utilizado para selecionar elementos cujo atributo começa com um valor específico seguido por um hífen (`-`). Isso é particularmente útil para lidar com atributos que seguem a convenção de nomenclatura, como idiomas. Por exemplo:

```
css
[lang|="en"] {
    color: green;
}
```


Esse seletor aplica o estilo a todos os elementos cujo atributo lang seja "en" ou comece com "en-", como "en-US" ou "en-GB".

## 4. Selecionando prefixos e sufixos de valores

Para selecionar elementos cujo atributo começa ou termina com um valor específico, você pode usar o símbolo de circunflexo (`^`) e o símbolo de cifrão (`$`).

- **Prefixo** (começa com):

```
css
[src^="https://"] {
    border: 2px solid green;
}
```


Esse seletor aplica o estilo a todos os elementos cujo atributo src começa com "https://".

- **Sufixo** (termina com):

```
css
[href$=".pdf"] {
    color: red;
}
```

Esse seletor aplica o estilo a todos os links cujo atributo href termina com ".pdf".

## 5. Selecionando qualquer parte do valor

O símbolo de asterisco (`*`) também pode ser usado para selecionar elementos cujo atributo contém uma determinada substring. Por exemplo:

```
css
[href*="example"] {
    font-weight: bold;
}
```


Esse seletor aplica um estilo a todos os links que contêm "example" em qualquer parte do seu href.

### Conclusão

Os seletores de atributo no CSS oferecem uma maneira poderosa e flexível de estilizar elementos baseados em atributos específicos, sem depender exclusivamente de classes ou IDs. Compreender como usar esses seletores pode tornar seu CSS mais eficiente e organizado.


### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)
