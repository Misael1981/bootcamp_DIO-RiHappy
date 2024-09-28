# Mergulhando mais fundo: `<article>`, `<blockquote>`e `<q>`e suas conexões

Que tal darmos uma aprofundada em mais algumas tags semânticas do HTML5 que complementam as que já vimos? Vamos falar sobre `<article>`, `<blockquote>` e `<q>`, e como elas se relacionam entre si e com outras tags. 

## `<article>`: O conteúdo compartilhado

A tag `<article>`serve para delimitar o conteúdo que pode ser distribuído independentemente, como:

- **Postagens de blog**: Cada postagem é um artigo completo.
- **Artigos de notícias**: Cada notícia é um artigo distinto.
- **Comentários**: Cada comentário pode ser considerado um artigo menor.

### Exemplo:

```
<article>
  <h2>Meu Post Incrível</h2>
  <p>Este é o conteúdo principal do meu post.</p>
</article>
```

## `<blockquote>`: A citação do bloco

A tag `<blockquote>`indica que o texto dentro dela é uma citação longa, geralmente com recuo visual. É comum usar o atributo citepara indicar a fonte da citação.

### Exemplo:

```
<blockquote>
  <p>A única coisa que nunca falha é a mudança.</p>
  <footer>– Heráclito</footer>
</blockquote>
```

## `<q>`: A citação curta

A tag `<q>`serve para indicar especificações dentro de um parágrafo. Os navegadores geralmente adicionam aspas ao texto nesta tag.

### Exemplo:

```
<p>Como disse Einstein, "A imaginação é mais importante que o conhecimento".</p>
```

## A relação entre as tags

- **Artigo e solicitações**: Um `<article>`pode conter múltiplos `<blockquote>`e `<q>`, representando as solicitações presentes no conteúdo.

- **Citações aninháveis**: Um `<blockquote>`pode conter outros `<blockquote>`ou `<q>`, para representar restrições dentro de tarifas.

## Outras tags e atributos relacionados

- **`<cite>`**: Indica o título de uma obra (livro, artigo, etc. ) ou o nome de um criador, geralmente usado dentro de `<blockquote>`.

- **`<footer>`dentro de `<blockquote>`**: Pode ser usado para fornecer informações adicionais sobre a citação, como o autor, os dados ou a fonte completa.

- **`<figure>`e `<figcaption>`**: Uma tag `<figure>`representa uma unidade autocontida de conteúdo, como uma imagem, um diagrama, uma tabela ou um bloco de código. Uma tag `<figcaption>`fornece uma legenda para a figura.

### Exemplo completo:

```
<article>
  <h2>O Pensamento dos Filósofos</h2>
  <p>A filosofia tem nos presenteado com diversas reflexões sobre a vida e o mundo. Algumas delas são atemporais, como:</p>
  <blockquote>
    <p>A única coisa que nunca falha é a mudança.</p>
    <footer>– Heráclito</footer>
  </blockquote>
  <p>Ou ainda:</p>
  <p>Como disse Einstein, "<q>A imaginação é mais importante que o conhecimento</q>".</p>
</article>
```

### A importância para acessibilidade e SEO
- **Acessibilidade**: Ao usar essas tags, você fornece informações semânticas que ajudam os leitores da tela a entender a estrutura do conteúdo e a distinguir entre o texto original e as restrições.
- **SEO**: Os mecanismos de busca utilizam essas tags para entender melhor o conteúdo de sua página e indexá-lo de forma mais precisa.

### Em resumo:

As tags `<article>`, `<blockquote>` e `<q>`são ferramentos essenciais para criar conteúdo estruturado e semântico. Ao utilizá-los corretamente, você melhora a acessibilidade, o SEO e a compreensão do seu conteúdo por parte dos usuários. 

### [Menu HTML/CSS](../menu_html-css.md)