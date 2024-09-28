# As tags `<aside>`, `<section>`e `<nav>`: Um mergulho mais profundo nas estruturas do HTML5

As tags estruturais `<aside>`, `<section>` e `<nav>`  ajudam a dar um significado mais claro à estrutura do seu código, facilitando tanto para os navegadores quanto para os usuários.

## `<aside>`: Conteúdo da parte

A tag `<aside>`serve para marcar o conteúdo que está relacionado, mas não essencial, ao conteúdo principal da página. Imagine como se fosse uma caixa com informações adicionais, como:

- **Barras laterais**: Com notícias relacionadas, propagandas ou menus secundários.
- **Citações**: Trechos de textos que complementam o conteúdo principal.
- **Informações extras**: Detalhes técnicos ou históricos sobre um assunto em questão.
- **Exemplo**:

```
<article>
  <h2>Meu Artigo Incrível</h2>
  <p>Este é o conteúdo principal do meu artigo.</p>
  <aside>
    <h3>Dica rápida</h3>
    <p>Para saber mais sobre este assunto, consulte este link:</p>
    <a href="https://exemplo.com">Link para mais informações</a>
  </aside>
</article>
```

## `<section>`: Seções dentro da página

Uma tag `<section>`define uma seção genérica dentro de uma página. Ela é útil para agrupar o conteúdo relacionado, como capítulos de um livro, produtos em uma loja virtual ou postagens em um blog.

Exemplo:

```
<article>
  <h2>Meu Livro Digital</h2>
  <section>
    <h3>Capítulo 1: Introdução</h3>
    <p>...</p>
  </section>
  <section>
    <h3>Capítulo 2: Desenvolvimento</h3>
    <p>...</p>
  </section>
</article>
```

## `<nav>`: Seção de navegação

A tag `<nav>`identifica os rótulos de navegação dentro de uma página. Ela é ideal para marcar menus, barras de navegação e outras estruturas que permitem aos usuários navegar entre as diferentes partes do site.

Exemplo:

```
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/sobre">Sobre</a></li>
    <li><a href="/contato">Contato</a></li>
  </ul>
</nav>
```

## A importância para acessibilidade e SEO

O uso correto dessas tags traz diversos benefícios para sua página:

- **Acessibilidade**: Ao definir claramente a estrutura da página, você facilita a vida de pessoas com deficiência visual que utilizam leitores de tela. Eles conseguem entender melhor a classificação do conteúdo e navegar pela página de forma mais eficiente.
- **SEO**: Os mecanismos de busca como o Google utilizam tags semânticas para entender o conteúdo de sua página. Ao usar as tags corretamente, você ajuda os buscadores a indexar seu site de forma mais precisa e relevante.
- **Manutenção**: Uma estrutura semântica bem definida torna seu código mais organizado e fácil de manter. Isso facilita a hora de fazer alterações e atualizações no seu site.

### Em resumo:

As tags `<aside>`, `<section>` e `<nav>`são ferramentas poderosas para criar páginas web mais organizadas, acessíveis e otimizadas para SEO. Ao utilizá-los corretamente, você dará um passo importante para construir sites de alta qualidade. 


### [Menu HTML/CSS](../menu_html-css.md)