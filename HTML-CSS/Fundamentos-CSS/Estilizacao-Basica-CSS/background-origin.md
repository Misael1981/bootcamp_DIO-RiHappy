# `background-origin`

## O que faz a propriedade `background-origin`?

A propriedade `background-origin` em CSS define a origem de uma imagem de fundo em relação a um elemento. Ela determina se a imagem deve ser posicionada a partir da borda do elemento, do conteúdo do elemento ou da borda interna do elemento (incluindo o preenchimento).

## Os valores principais da propriedade `background-origin`

- **padding-box**: (valor padrão)
    - A imagem é posicionada a partir da borda interna do elemento, incluindo a preenchimento.
- **border-box**:
    - A imagem é posicionada a partir da borda externa do elemento, incluindo a borda e o preenchimento.
- **content-box**:
    - A imagem é posicionada a partir da borda interna do conteúdo do elemento, excluindo o preenchimento e a borda.

## Quando usar cada valor

- **padding-box**: Ideal para quando você deseja que a imagem se estenda até a borda interna do elemento, incluindo o preenchimento.
- **border-box**: Útil para quando você quer que uma imagem se estenda até a borda externa do elemento, incluindo a borda e o preenchimento.
- **content-box**: Adequado para quando você deseja que a imagem não se estenda além do conteúdo do elemento, excluindo o preenchimento e a borda.

### Exemplos práticos

### Exemplo 1: Imagem posicionada a partir da borda interna do elemento (padding-box)

```
.element {
  background-image: url('imagem.jpg');
  background-origin: padding-box;
}
```

### Exemplo 2: Imagem posicionada a partir da borda externa do elemento (border-box)

```
.element {
  background-image: url('imagem.jpg');
  background-origin: border-box;
}
```

### Exemplo 3: Imagem posicionada a partir da borda interna do conteúdo (content-box)

```
.element {
  background-image: url('imagem.jpg');
  background-origin: content-box;
}
```

### Combinando com outras propriedades

A propriedade `background-origin`funciona em conjunto com outras propriedades de fundo, como `background-position`, `background-size` e `background-repeat`, para criar efeitos mais complexos.

### Exemplo:

```
.element {
  background-image: url('pattern.png');
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

Neste exemplo, uma imagem de fundo é posicionada a partir da borda externa do elemento, centralizada, não repetida e redimensionada para cobrir toda a área do elemento.

### Dicas adicionais

**Utilize as ferramentas de desenvolvimento**: Use as ferramentas de desenvolvimento do seu navegador para visualizar e ajustar as propriedades de fundo em tempo real.
**Considere o layout**: A escolha do valor para `background-origin` poder afetar o layout geral do elemento. Experimente diferentes valores para encontrar o que melhor se adapta ao seu design.

### Conclusão

A propriedade `background-origin` é uma ferramenta útil para controlar a posição inicial de imagens de fundo em relação a um elemento. Ao saber como usar essa propriedade, você poderá criar designs mais personalizados e precisos.

### [Menu Estilização CSS](../menu_estilizacao.md)
