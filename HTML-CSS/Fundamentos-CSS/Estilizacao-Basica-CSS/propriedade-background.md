# Propriedade `background` 

A propriedade `background` em CSS é uma propriedade de atalho que combina várias propriedades de fundo em uma única declaração. Ela permite que você defina a imagem de fundo, o cor de fundo, a posição da imagem, o tamanho da imagem, a reprodução da imagem, o modo de mistura da imagem e o recorte da imagem de uma só vez.

### Sintaxe:

```
background: <background-image> <background-position> <background-size> <background-repeat> <background-origin> <background-clip> <background-color>;
```

### Valores possíveis:

- **background-image**: Defina uma imagem de fundo.
- **background-position**: Define a posição da imagem de fundo.
- **background-size**: Define o tamanho da imagem de fundo.
- **background-repeat:Defina se a imagem de fundo deve ser repetida.   
- **background-origin**: Define a origem da imagem de fundo.
- **background-clip**: Defina uma área em que a imagem de fundo seja visível.
- **background-color**: Defina um cor de fundo.

### Exemplo:

```
.element {
  background: url('imagem.jpg') center no-repeat #f0f0f0;
}
```

Neste exemplo, a propriedade `background`define a imagem de fundo como "imagem.jpg", centraliza a imagem, define a reprodução como "no-repeat", define a cor de fundo como cinza claro (#f0f0f0) e omite os valores para `background-size`, `background-origin` e `background-clip`, usando os valores padrão.

### Observações:

Você pode omitir qualquer valor da propriedade `background` se quiser usar o valor padrão.
Se você quiser definir apenas um valor, poderá omitir os outros valores.
Você pode usar a propriedade `background` várias vezes em um elemento para criar efeitos de camadas.

### Exemplo com várias propriedades:

```
.element {
  background: url('imagem1.jpg') center no-repeat;
  background-blend-mode: multiply;
  background-color: #f0f0f0;
}
```

Neste exemplo, a propriedade `background` define a imagem de fundo como "imagem1.jpg", centraliza a imagem, define a reprodução como "no-repeat" e define o cor de fundo como cinza claro. Em seguida, a propriedade `background-blend-mode` é usada para definir o modo de mistura da imagem.

A propriedade `background` é uma ferramenta poderosa para criar designs de fundo personalizados e complexos em seus projetos web. Ao entender como usar essa propriedade, você poderá criar efeitos visuais únicos e interessantes.

### [Menu Estilização CSS](../menu_estilizacao.md)
