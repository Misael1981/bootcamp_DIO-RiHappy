# Border-radius: Arredondando cantos com CSS, fácil e rápido!

## O que é border-radius?

É uma propriedade CSS que permite criar cantos arredondados em elementos HTML. Imagine que você está desenhando um quadrado e, em vez de cantos retos, deseja que eles sejam fechados como os de uma pílula. Essa é a função do border-radius.

## Por que usar border-radius?

- **Design mais suave e moderno**: Cria interfaces mais atraentes aos olhos.
- **Flexibilidade**: Permite criar diversos formatos, desde cantos levemente fechados até círculos completos.
- **Simplicidade**: É fácil de usar e entender.

### Como usar border-radius:

### A sintaxe básica é:

```
border-radius: valor;
```

O **valor** pode ser um número (em pixels ou outra unidade) que define o raio do canto arredondado.

### Exemplos:

- **Todos os cantos cruzados:**

```
div {
    border-radius: 10px;
}
```

- **Cantos superiores mais arredondados que os inferiores**:

```
div {
    border-radius: 10px 5px;
}
```

- **Cada canto com um raio diferente**:

```
div {
    border-radius: 10px 15px 5px 20px;
/*  top-left  top-right bottom-right bottom-left */
}
```

### Criando círculos:

Para transformar um elemento quadrado em um círculo, basta definir o border-radius com um valor igual à metade da largura ou altura do elemento:

```
div {
  width: 100px;
  height: 100px;
  border-radius: 50px; /* metade de 100px */
}
```

### Elipses:

Para criar elipses, você pode usar dois valores para cada canto: um para o raio horizontal e outro para o raio vertical:

```
div {
  border-radius: 10px / 20px; /* horizontal / vertical */
}
```

### Dicas extras:

- **Combine com outras propriedades**: Use border-radius junto com outras propriedades CSS, como `box-shadow` e `background-color`, para criar efeitos visuais incríveis.
- **Explorar as unidades**: Além de pixels, você pode usar porcentagens, em, rem e outras unidades para definir o raio dos cantos.
- **Use ferramentas de desenvolvimento**: Os navegadores modernos possuem ferramentas de desenvolvimento que permitem visualizar e ajustar o valor do raio da borda em tempo real.

### [Menu Estilização CSS](../menu_estilizacao.md)