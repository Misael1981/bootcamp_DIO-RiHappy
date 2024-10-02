# Propriedade CSSbackground-attachment

## O que faz a propriedade background-attachment?

A propriedade background-attachmentem CSS controla como uma imagem de fundo se comporta em relação ao rolamento da página. Ela determina se a imagem deve se fixar na posição inicial (fixa) ou rolar junto com o conteúdo (scroll).

## Os valores principais da propriedadebackground-attachment

- **scroll**: (valor padrão)
    - A imagem rola junto com o restante do conteúdo da página.
- **fixed**:
    - A imagem permanece fixa em sua posição inicial, enquanto o restante do conteúdo rola.

Quando usar cada valor

- **scroll**: Ideal para a maioria das imagens de fundo, especialmente quando você deseja que a imagem se mova junto com o conteúdo da página.
- **fixed**: Perfeito para criar elementos de design que permanecem visíveis enquanto o usuário rola pela página, como menus de navegação fixos ou cabeçalhos.

### Exemplos práticos

### Exemplo 1: Imagem rolando com o conteúdo

```
.section {
  background-image: url('imagem-de-fundo.jpg');
  background-attachment: scroll;
}
```

### Exemplo 2: Imagem fixada na posição inicial

```
.header {
  background-image: url('logo.png');
  background-attachment: fixed;
  background-position: center;
}
```

### Combinando com outras propriedades

A propriedade `background-attachment`funciona em conjunto com outras propriedades de fundo, como `background-position`, `background-size`e `background-repeat`, para criar efeitos mais complexos.

### Exemplo:

```
.parallax {
  background-image: url('parallax-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

Neste exemplo, uma imagem de fundo é inserida, centralizada e redimensionada para cobrir toda a área do elemento, criando um efeito de paralaxe.

### Dicas adicionais

- **Utilize as ferramentas de desenvolvimento**: Use as ferramentas de desenvolvimento do seu navegador para visualizar e ajustar as propriedades de fundo em tempo real.
- **Considere a experiência do usuário**: Use propriedade `background-attachment: fixed` com moderação, pois imagens fixas podem distrair o usuário e dificultar a leitura do conteúdo.
- **Combine com outras técnicas**: Combine `background-attachment` com outras técnicas CSS, como transições e animações, para criar efeitos mais dinâmicos.

### Conclusão

A propriedade `background-attachment` é uma ferramenta útil para controlar o comportamento de imagens de fundo em relação ao rolamento da página. Ao entender como usar essa propriedade, você poderá criar designs mais envolventes e personalizados.

### [Menu Estilização CSS](../menu_estilizacao.md)

