# A Propriedade CSS `object-position` 

A propriedade `object-position` em CSS funciona em conjunto com `object-fit` para definir a posição exata de um conteúdo substituído (como uma imagem, vídeo ou iframe) dentro de seu elemento pai. Enquanto `object-fit` determina como o conteúdo é dimensionado, `object-position` defina onde esse conteúdo será colocado no espaço disponível.

## O que faz a propriedade `object-position`?

A propriedade `object-position` especifica um deslocamento para o posicionamento do conteúdo substituível em relação aos cantos superior esquerdo e inferior direito da caixa do elemento.

## Valores de propriedade`object-position` 

Você pode definir a posição usando:

- **Palavras-chave**:
    - `center`: Centraliza o conteúdo tanto horizontalmente quanto verticalmente.
    - `top`, `bottom`, `left`, `right`: Posiciona o conteúdo nos respectivos lados.
    - `top left`, `top right`, `bottom left`, `bottom right`: Combina as posições acima.
- **Porcentagens**:
    - `50% 50%`: Centralize o conteúdo.
    - `25% 75%`: Posiciona o conteúdo a 25% da largura e 75% da altura a partir do canto superior esquerdo.
- **Coordenadas**:
    - `10px 20px`: Posiciona o conteúdo a 10 pixels da esquerda e 20 pixels do topo.

### Exemplos práticos

```
.imagem {
  width: 200px;
  height: 150px;
  object-fit: contain;
}

.imagem-centralizada {
  object-position: center;
}

.imagem-topo-direito {
  object-position: top right;
}

.imagem-porcentagem {
  object-position: 25% 75%;
}

.imagem-coordenadas {
  object-position: 10px 20px;
}
```

### Quando usar object-position?

- **Centralizar o conteúdo**: Utilize `center` para centralizar a imagem dentro do elemento pai.
- **Posicionar de forma precisa**: Use porcentagens ou coordenadas para posicionar a imagem exatamente onde você deseja.
- **Criar efeitos visuais**: Combine `object-position` com `object-fit` para criar efeitos interessantes, como recortes ou zoom.

### Combinação com `object-fit`

Como mencionado anteriormente, `object-position` funciona melhor em conjunto com `object-fit`. **Por exemplo**, se você definir `object-fit: contain` e `object-position: center`, a imagem será redimensionada para caber dentro do elemento pai e centralizada.

### Considerações importantes

- **Elementos substituíveis**: Assim como `object-fit`, `object-position` funcionam com elementos como `img`, `video`, `iframe` e outros elementos que podem exibir conteúdo externo.
- **Responsividade**: Combine `object-position` com media queries para criar layouts responsivos que se adaptem a diferentes tamanhos de tela.
- **Compatibilidade**: A propriedade `object-position` é amplamente suportada em navegadores modernos.
Exemplo prático: Criando um carrossel de imagens

### Em resumo:

A propriedade `object-position` é uma ferramenta essencial para controlar a posição de imagens e outros conteúdos substituíveis dentro de seus elementos pais. Combinada com `object-fit` ela permite criar layouts flexíveis e personalizados.

### [Menu Estilização CSS](../menu_estilizacao.md)

