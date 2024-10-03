# Propriedade `border-image`

## `border-image-source`

- **Finalidade**: Especifica a imagem que será usada para criar a borda.
- **Valores**:
    - **URL**: Uma URL apontando para o arquivo de imagem.
    - **Palavra-chave**: `none` : Nenhuma imagem será usada.

- **Exemplo**:

```
.element {
    border-image-source: url("image.png");
}
```

## `border-image-slice`

- **Finalidade**: Define a parte da imagem que será usada para a borda.
- **Valores**:
    - **Número**: Um único valor representa o mesmo valor de fatia para todos os quatro lados.
    - **Quatro números**: especifica os valores de fatia para os lados superior, direito, inferior e esquerdo, respectivamente.
    - **Palavra-chave**: `fill` : A imagem inteira será usada para a borda.

- **Exemplo**:

```
.element {
    border-image-slice: 10% 20% 30% 40%;
}
```

## `border-image-width`

- **Objetivo**: Define a largura da borda.
- **Valores**:
    - **Número**: Um único valor representa a mesma largura para todos os quatro lados.
    - **Quatro números**: especifica as larguras dos lados superior, direito, inferior e esquerdo, respectivamente.
    - **Palavra-chave**: `auto` : A largura será calculada com base nos valores da imagem e do corte.

- **Exemplo**:

```
.element {
    border-image-width: 10px;
}
```

## `border-image-repeat`

- **Finalidade**: Determina como a imagem é repetida ao longo da borda.
- **Valores**:
    - **Palavra-chave**: `stretch` : A imagem é esticada para se ajustar à largura da borda.
    - **Palavra-chave**: `repeat` : A imagem é repetida horizontalmente e verticalmente.
    - **Palavra-chave**: `round` : A imagem é repetida tantas vezes quanto possível sem esticar ou dividir.
    - **Palavra-chave**: `space` : A imagem é repetida com espaços iguais entre as instâncias.

- **Exemplo**:

```
.element {
    border-image-repeat: round;
}
```

## `border-image-outset`

- **Finalidade**: Especifica a distância entre a borda e a imagem.
- **Valores**:
    - **Número**: Um único valor representa o mesmo início para todos os quatro lados.
    - **Quatro números**: especifica os inícios para os lados superior, direito, inferior e esquerdo, respectivamente.

- **Exemplo**:

```
.element {
    border-image-outset: 5px;
}
```

## Combinando as Propriedades

Para criar uma borda usando uma imagem, você normalmente combinará estas propriedades:

```
.element {
    border: 10px solid transparent; /* Create a transparent border */
    border-image-source: url("image.png");
    border-image-slice: 10% 20% 30% 40%;
    border-image-repeat: round;
    border-image-width: 10px;
    border-image-outset: 5px;
}
```

Este exemplo cria uma borda com um contorno transparente e, em seguida, substitui o contorno pela imagem especificada, fatiada e repetida conforme definido.

### [Menu Estilização CSS](../menu_estilizacao.md)

