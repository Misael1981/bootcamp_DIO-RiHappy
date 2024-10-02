# Propriedade CSS `background-position`

O que faz a propriedade `background-position`?
A propriedade `background-position` em CSS define a posição inicial de uma imagem de fundo dentro de um elemento. Ela permite que você controle onde a imagem será posicionada, seja no topo, no fundo, à esquerda, à direita ou em qualquer ponto intermediário. Essa propriedade é fundamental para criar layouts personalizados e ajustar a aparência visual de seus elementos.

## Como usar a propriedade`background-position`

A propriedade background-positionaceita dois valores: um para a posição horizontal e outro para a posição vertical. Esses valores podem ser expressos em pixels, porcentagens, palavras-chave ou codificação desses.

### Sintaxe:

```
background-position: valor-horizontal valor-vertical;
```

## Valores possíveis:

- **Pixels (px)**: Define a posição em pixels a partir da borda superior esquerda do elemento.
- **Porcentagens (%)**: Define a posição em relação ao tamanho do elemento.
- **Palavras-chave**:
    - **left**: Alinha a imagem à esquerda.
    - **right**: Alinha a imagem à direita.
    - **top**: Alinha a imagem ao topo.
    - **bottom**: Alinha a imagem ao fundo.
    - **center**: Centraliza a imagem horizontalmente ou verticalmente.

### Exemplos:

```
.element {
  background-image: url('minha-imagem.jpg');
  /* Posiciona a imagem a 20 pixels da esquerda e 50 pixels do topo */
  background-position: 20px 50px;
}

.element {
  background-image: url('minha-imagem.jpg');
  /* Centraliza a imagem horizontalmente e verticalmente */
  background-position: center;
}

.element {
  background-image: url('minha-imagem.jpg');
  /* Alinha a imagem à direita e ao fundo */
  background-position: right bottom;
}
```

### Combinando com outras propriedades

A propriedade `background-position` funciona em conjunto com outras propriedades de fundo, como `background-size` e `background-repeat`, para criar efeitos mais complexos.

- **`background-size`**: Define o tamanho da imagem de fundo.
- **`background-repeat`**: Define como a imagem de fundo é repetida.

### Exemplo:

```
.element {
  background-image: url('pattern.png');
  background-size: cover;
  background-position: center;
}
```

Neste exemplo, a imagem é redimensionada para cobrir toda a área do elemento e centralizada.

### Dicas adicionais

- **Utilize as ferramentas de desenvolvimento**: Use as ferramentas de desenvolvimento do seu navegador para visualizar e ajustar as propriedades de fundo em tempo real.
- **Experimente com valores diferentes**: Tente diferentes modificações de valores para encontrar a posição ideal para sua imagem.
- **Considere a responsividade**: Se você estiver criando um site responsivo, ajuste a posição da imagem para diferentes tamanhos de tela.

### Quando usar a propriedade `background-position` 

- **Centralizar imagens**: Posicione a imagem no centro do elemento.
- **Crie layouts personalizados**: Posicione a imagem em locais específicos para criar efeitos visuais únicos.
- **Alinhar elementos**: Use uma propriedade `background-position` em conjunto com outras propriedades para alinhar elementos dentro de um layout.

### Conclusão

A propriedade `background-position` é uma ferramenta poderosa para controlar a posição de imagens de fundo em seus projetos web. Ao essa propriedade, você poderá criar layouts mais personalizados e visuais mais atraentes.

### [Menu Estilização CSS](../menu_estilizacao.md)


