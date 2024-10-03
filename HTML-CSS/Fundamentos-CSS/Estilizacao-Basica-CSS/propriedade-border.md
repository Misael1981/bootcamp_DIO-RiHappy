# Propriedade CSS `border`

## O que faz a propriedade `border`?

A propriedade borderem CSS é uma propriedade de atalho que combina as propriedades `border-width`, `border-style` e `border-color` em uma única declaração. Ela permite que você defina a largura, o estilo e a cor da borda de um elemento de uma só vez.

### Sintaxe:

```
border: <border-width> <border-style> <border-color>;
```

## Valores possíveis:

- **border-width**: Define a largura da borda.
- **border-style**: Define o estilo da borda.
- **border-color**: Define um cor da borda.

Exemplo:

```
.element {
  border: 2px solid blue;
}
```

Neste exemplo, a propriedade borderdefine a largura da borda como 2 pixels, o estilo da borda como sólido e a cor da borda como azul.

## Propriedade `border-width`

A propriedade `border-width` define a largura da borda de um elemento. Ela pode ser aplicada em todos os lados da borda ou em cada lado individualmente.

### Sintaxe:

```
border-width: <top> <right> <bottom> <left>;
```

### Valores possíveis:

- **Valores numéricos**: Definem a largura da borda em pixels, porcentagens ou outras unidades de medida.
- **thin**: Define uma largura de borda fina.
- **medium**: Defina uma largura de borda média.
- **thick**: Defina uma largura de borda grossa.

### Exemplo:

```
.element {
  border-width: 2px 4px 6px 8px;
}
```

Neste exemplo, a borda superior tem 2 pixels, a borda direita tem 4 pixels, a borda inferior tem 6 pixels e a borda esquerda tem 8 pixels.

## Propriedade `border-style` 

A propriedade `border-style` define o estilo da borda de um elemento. Ela pode ser aplicada em todos os lados da borda ou em cada lado individualmente.

### Sintaxe:

```
border-style: <top> <right> <bottom> <left>;
```

### Valores possíveis:

- **none**: Remover uma borda.
- **solid**: Cria uma borda sólida.
- **dotted**: Cria uma borda pontilhada.
- **dashed**: Cria uma borda tracejada.
- **double**: Cria uma borda dupla.
- **groove**: Cria uma borda em relevo.
- **summit**: Cria uma bordaem depressão.   
- **detail**: Cria uma borda interna.
- **initial**: Cria uma borda externa.

### Exemplo:

```
.element {
  border-style: solid dotted dashed double;
}
```

Neste exemplo, a borda superior é sólida, a borda direita é pontilhada, a borda inferior é tracejada e a borda esquerda é dupla.

### Propriedade `border-color` 

Uma propriedade `border-color` define a cor da borda de um elemento. Ela pode ser aplicada em todos os lados da borda ou em cada lado individualmente.

### Sintaxe:

```
border-color: <top> <right> <bottom> <left>;
```

### Valores possíveis:

- **Nomes das cores**: Defina a cor da borda usando nomes de núcleos comuns.
- **Hexadecimal**: Defina a cor da borda usando códigos hexadecimais.
- **RGB**: Defina a cor da borda usando valores RGB.
- **RGBA**: Defina o cor da borda usando valores RGBA com transparência.
- **HSL**: Defina o cor da borda usando valores HSL.
- **HSLA**: Defina a cor da borda usando valores HSLA com transparência.

### Exemplo:

```
.element {
  border-color: blue green red yellow;
}
```

Neste exemplo, a borda superior é azul, a borda direita é verde, a borda inferior é vermelha e a borda esquerda é amarela.

### Observações:

- Você pode usar a propriedade bordervárias vezes em um elemento para criar efeitos de camadas.
- Você pode combinar a propriedade `border` com outras propriedades de borda, como `border-radius` e `border-spacing`, para criar designs mais complexos.

A propriedade `border` é uma ferramenta poderosa para controlar a aparência dos elementos em seus projetos web. Ao entender como usar essa propriedade, você poderá criar designs mais personalizados e visuais mais atraentes.

### [Menu Estilização CSS](../menu_estilizacao.md)