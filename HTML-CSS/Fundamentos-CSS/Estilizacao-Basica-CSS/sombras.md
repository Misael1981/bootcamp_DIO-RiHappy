# Sombras no CSS

## `box-shadow`

A propriedade `box-shadow` cria uma sombra em torno de um elemento. Ela permite personalizar a posição, tamanho, cor, opacidade e inserção da sombra.

Sintaxe:

```
box-shadow: inset? offset-x offset-y blur-radius spread-radius color;
```

### Exemplo:

```
div {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
```

Isso criará uma sombra externa de 5 pixels para a direita e para baixo, com um desfoque de 10 pixels, uma propagação de 5 pixels e uma cor preta com 50% de opacidade.

## `filter: drop-shadow()`

A propriedade `drop-shadow()` do `filter` CSS cria uma sombra de texto ou imagem. Ela permite personalizar a posição, tamanho, cor e opacidade da sombra.

### Sintaxe:

```
filter: drop-shadow(offset-x offset-y blur-radius color);
```

### Exemplo:

```
h1 {
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7));
}
```

Isso criará uma sombra de texto de 2 pixels para a direita e para baixo, com um desfoque de 4 pixels, uma cor preta com 70% de opacidade.

## `text-shadow`

A propriedade `text-shadow` cria uma sombra para o texto. Ela permite personalizar a posição, tamanho, cor e opacidade da sombra.

### Sintaxe:

```
text-shadow: offset-x offset-y blur-radius color;
```

### Exemplo:

```
p {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
```

Isso criará uma sombra de texto de 1 pixel para a direita e para baixo, com um desfoque de 2 pixels, uma cor preta com 30% de opacidade.

### Observações:

- Você pode combinar várias sombras usando espaços em branco entre elas.
- O valor `inset` na propriedade `box-shadow` cria uma sombra interna em vez de externa.
- A propriedade `filter: drop-shadow()` pode ser aplicada a qualquer elemento, não apenas a texto.
- A propriedade `text-shadow` só pode ser aplicada a texto.

### [Menu Estilização CSS](../menu_estilizacao.md)

