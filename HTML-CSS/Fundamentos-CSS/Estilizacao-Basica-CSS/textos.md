# Propriedades CSS para Estilização de Texto

As propriedades CSS relacionadas ao texto permitem controlar diversos aspectos da aparência dos caracteres, como transformação, alinhamento, decoração, recuo, overflow e espaçamento. Vamos explorar cada uma delas:

## `text-transform`

- **none**: Nenhuma transformação é aplicada.
- **capitalize**: A primeira letra de cada palavra é convertida para guardas.
- **uppercase**: Todas as letras são convertidas para guardas.
- **owercase**: Todas as letras são convertidas para minúsculas.
- **initial**: O valor inicial da propriedade (normalmente none).
- **inherit**: O valor da propriedade é herdado do elemento pai.

## `text-align`

- **left**: Alinha o texto à esquerda.
- **rigth**: Alinha o texto à direita.
- **center**: Centraliza o texto.
- **justify**: Justifica o texto, distribuindo uniformemente o espaço entre as palavras.

## `text-decoration`

- **underline**: Sublinha o texto.
- **none**: Nenhuma decoração é aplicada.
- **line-through**: Risca o texto horizontalmente.
- **overline**: Risca o texto horizontalmente na parte superior.

## `text-indent`

Indenta o primeiro parágrafo ou linha de um elemento.

## `text-overflow`

- **clip**: O texto é cortado se exceder o tamanho do contêiner.
- **ellipsis**: Insere reticências (...) se o texto exceder o tamanho do contêiner.

## `letter-spacing`

Defina o espaço entre as letras.

## `word-spacing`

Defina o espaço entre as palavras.

## `white-space`

- **normal**: Espaços em branco são colapsados ​​em um único espaço.
- **nowrap**: O texto não quebra em uma nova linha.
- **pre: Preserva todos os espaços em branco, incluindo quebras de linha.
- **pre-linha**: Preserva quebras de linha, mas colapsa espaços em branco.
- **pre-embrulho**: Permite quebras de linha automáticas, mas preserva espaços em branco.
- **break-spacing**: Controla o espaçamento entre linhas quando o texto é quebrado.

## `word-wrap`

- **normal**: Permite quebras de linha automáticas.
- **break-word**: Permite que palavras sejam quebradas se necessário para caber no contêiner.

## **word-break**

- **normal**: Quebra de palavras padrão.
- **break-all**: Permite quebrar palavras em qualquer ponto.
- **keep-all**: Evita quebrar palavras.

## `writing-mode`

- horizontal-tb: Modo de escrita horizontal, de cima para baixo.
- vertical-rl: Modo de escrita vertical, da direita para a esquerda.
- vertical-lr: Modo de escrita vertical, da esquerda para a direita.

### Exemplo:

```
<p style="text-transform: uppercase; text-align: center; text-decoration: underline;">Este é um exemplo de estilo de texto</p>
```

### Este código será aplicado:

- Letras guardadas a todo o texto.
- Centralizará o texto.
- Sublinhará o texto.


### [Menu Estilização CSS](../menu_estilizacao.md)



    




