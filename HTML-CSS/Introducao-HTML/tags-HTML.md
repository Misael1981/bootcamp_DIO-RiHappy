# O que são tags HTML?

HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web. As tags HTML são os elementos que estruturam o conteúdo na web. Cada tag tem uma função específica e geralmente vem em pares: uma tag de abertura e uma tag de fechamento.

## Tipos de tag

As tags podem ser categorizadas inicialmente em dois tipos: em “nível de bloco” (block-level) e “em linha” (inline).

Um elemento ao nível de bloco ocupa toda a largura de seu elemento pai, que também chamamos de elemento container, criando assim um “bloco”.

Já os elementos inline, geralmente usamos para demarcação de conteúdos de texto.

## Estrutura Básica de uma Tag

- ***Tag de Abertura:*** Indica o início de um elemento. Exemplo: `<p>`
- ***Conteúdo:*** O que está dentro da tag. Exemplo: Olá, mundo!
- ***Tag de Fechamento:*** Indica o fim do elemento. Exemplo: `</p>`

## Exemplos Comuns de Tags HTML

1. ***Cabeçalhos:*** Usados para títulos e subtítulos.

   - `<h1>` até `<h6>` (sendo `<h1>` o mais importante).
```
html
<h1>Meu Título Principal</h1>
```

2. ***Parágrafos:*** Para textos comuns.
```
html
<p>Este é um parágrafo.</p>
```

3. ***Links:*** Para criar hyperlinks.
```
html
<a href="https://www.exemplo.com">Visite o Exemplo!</a>
```

4. ***Imagens:*** Para inserir imagens.
```
html
<img src="imagem.jpg" alt="Descrição da Imagem">
```

5. ***Listas:*** Para criar listas ordenadas ou não ordenadas.
   - Não ordenada:
```
html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
   - Ordenada:
```
html
<ol>
    <li>Primeiro Item</li>
    <li>Segundo Item</li>
</ol>
```

6. ***Divisão e Estilo:*** A tag <div> é usada para agrupar outros elementos.
```
html
<div>
    <h2>Subtítulo</h2>
    <p>Texto dentro da divisão.</p>
</div>
```

### Dicas Finais

- As tags HTML são "case-insensitive", ou seja, você pode usar letras maiúsculas ou minúsculas.
- Sempre use a tag de fechamento, exceto para tags auto-fechadas como `<img>` ou `<br>`.

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)
