# Cores RGB e RGBA no CSS

## O que são RGB e RGBA?

**RGB (Red, Green, Blue)** é um modelo de aditivo de cor utilizado em dispositivos eletrônicos para criar uma ampla gama de núcleos. Ele combina diferentes intensidades de vermelho, verde e azul para formar a cor desejada. Cada cor primária pode variar de 0 a 255, onde 0 representa a ausência de cor e 255 a intensidade máxima.

**RGBA (Red, Green, Blue, Alpha)** é uma extensão do RGB, adicionando um canal alfa para controlar a opacidade da cor. O valor alfa varia de 0 a 1, onde 0 é totalmente transparente e 1 é totalmente opaco.

## Como usar RGB e RGBA no CSS?

Para definir um cor usando RGB ou RGBA em CSS, você utiliza a função `rgb()` ou `rgba()`, respectivamente.

Sintaxe:

- **RGB**: `rgb(vermelho, verde, azul)`
- **RGBA**: `rgba(vermelho, verde, azul, alpha)`

### Exemplo:

```
/* Cor vermelha pura */
color: rgb(255, 0, 0);

/* Cor azul com 50% de opacidade */
background-color: rgba(0, 0, 255, 0.5);
```

### Valores:

- **Vermelho, Verde, Azul**: Números inteiros entre 0 e 255, ou porcentagens entre 0% e 100%.
- **Alfa**: Número decimal entre 0 e 1.

### Exemplos práticos:

```
/* Cor verde claro */
div {
  background-color: rgb(153, 255, 153);
}

/* Texto branco com sombra azul transparente */
p {
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 4px rgba(0, 0, 255, 0.7);
}

/* Botão com fundo degradê */
button {
  background: linear-gradient(to right, rgba(255, 0, 0, 0.8), rgba(0, 0, 255, 0.8));
}
```

### Quando usar RGB e RGBA?

- **RGB**: Ideal para cores sólidas e opacas.
- **RGBA**: Perfeito para criar efeitos de transparência, sombras, gradientes e sobreposições.

### Vantagens de usar RGB e RGBA:

- **Precisão**: Permite definir cores com exatidão.
- **Flexibilidade**: Facilita a criação de uma ampla gama de cores e efeitos.
- **Compatibilidade**: Suportado por todos os navegadores modernos.

**Em resumo**, RGB e RGBA são ferramentas poderosas para controlar os núcleos em suas páginas da web. Ao entender como utilizá-los, você poderá criar designs mais personalizados e visuais mais atraentes.

### [Menu Estilização CSS](../menu_estilizacao.md)
