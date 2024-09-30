# O que são Combinadores Irmãos?

Os combinadores irmãos em CSS são usados ​​para selecionar elementos que possuem o mesmo pai, ou seja, estão no mesmo nível hierárquico. Eles são ferramentas poderosas para aplicar estilos a elementos que estão relacionados, mas não diretamente aninhados.

## Combinador Irmão Adjacente (`+`)

O combinador irmão adjacente, representado pelo sinal de mais (`+`), seleciona o elemento imediatamente seguinte ao elemento anterior, ambos sendo filhos do mesmo pai.

### Sintaxe:

```
elemento1 + elemento2 {
  /* Estilos a serem aplicados ao elemento2 */
}
```

### Exemplo:

```
<p>Parágrafo 1.</p>
<p>Parágrafo 2.</p>
<div>Div com um conteúdo.</div>
```
```
p + p {
  color: green;
}
```

Nesse exemplo, o segundo parágrafo fica verde, pois ele é o irmão adjacente ao primeiro parágrafo. O `div` não será afetado, pois não é um parágrafo.

## Combinador Irmão Geral (`~`)

O combinador irmão geral, representado pelo til (`~`)
, seleciona todos os elementos que são irmãos do elemento anterior, independentemente da posição.

### Sintaxe:

```
elemento1 ~ elemento2 {
  /* Estilos a serem aplicados a todos os elementos2 que são irmãos de elemento1 */
}
```

### Exemplo:

```
<p>Parágrafo 1.</p>
<div>Div com um conteúdo.</div>
<p>Parágrafo 3.</p>
<p>Parágrafo 4.</p>
```
```
p ~ p {
  font-weight: bold;
}
```

Nesse exemplo, todos os parágrafos após o primeiro se tornarão negrito, pois são irmãos do primeiro parágrafo.

### Quando usar os Combinadores Irmãos?

- **Estilos para elementos consecutivos**: O combinador adjacente é ideal para aplicar estilos a elementos que se seguem imediatamente.
- **Estilos para grupos de elementos**: O combinador geral é útil para aplicar estilos a todos os elementos de um determinado tipo que são irmãos de um elemento específico.
- **Layouts complexos**: Ambos os combinados podem ser usados ​​para criar layouts mais complexos e personalizados.

### Exemplos Adicionais

```
h2 + p {
  margin-top: 0;
}
```

- Remova a margem superior do primeiro parágrafo após cada título `h2`.

```
.error ~ .message {
  color: red;
}
```

- Tornam-se todas as mensagens de erro vermelhas, se elas seguirem um elemento com a classe `error`.

### Combinando com Outros Seletores

Assim como o combinador filho, os combinadores irmãos também podem ser combinados com outros seletores para criar regras de estilo mais específicas.

### Conclusão

Os irmãos combinadores são ferramentas poderosas para criar relações entre elementos que não estão diretamente aninhados. Ao usar esses combinadores, você poderá criar layouts mais flexíveis e personalizados.

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)

