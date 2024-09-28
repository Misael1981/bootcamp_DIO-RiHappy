# Entendendo e Utilizando as Tags `main`, `header`e `footer`no HTML5

## Introdução

As tags `main`, `header`e `footer`são elementos semânticos do HTML5 que ajudam a definir a estrutura de uma página web de forma clara e concisa, tanto para os navegadores quanto para os mecanismos de busca. Eles fornecem informações sobre a função de cada seção da página, melhorando a acessibilidade e a otimização para SEO.

## A Tag `<main>`: O Conteúdo Principal

A tag `<main>`representa o conteúdo principal de uma página, ou seja, a parte que contém a informação mais relevante para o usuário. Para usar a tag `<main>`, siga estas regras:

- **Conteúdo único**: Uma página deve ter apenas uma tag `<main>`.
- **Hierarquia**: Uma tag `<main>` não pode ser filha de outras tags como `<footer>`, `<article>` ou`<header>`. Ela deve ser um descendente direto do elemento `<body>`.
- **Conteúdo principal**: Dentro da tag `<main>`, coloque todo o conteúdo que é essencial para uma página, como o corpo de um artigo, a lista de produtos em uma loja virtual, etc.
- **Exemplo**:

```
<body>
  <header>
    </header>

  <main>
    <h1>Título da Página</h1>
    <p>Este é o conteúdo principal da página.</p>
    <section>
      </section>
  </main>

  <footer>
    </footer>
</body>
```
## A Tag `<header>`: O Cabeçalho da Página

A tag `<header>`representa o cabeçalho da página, que geralmente contém o logotipo, o título da página, a barra de navegação e outras informações introdutórias. Você pode ter vários elementos `<header>`em uma página, por exemplo,um para cada seção.

## A Tag `<footer>`: O Rodapé da Página

A tag `<footer>`representa o rodapé da página, que geralmente contém informações como direitos autorais, links para políticas de privacidade, informações de contato, etc. Assim como o `<header>`, você também pode ter vários elementos `<footer>`em uma página.

## Por que usar as Tags `main`, `header`é `footer`?

- **Semântica**: Essas tags fornecem informações semânticas sobre a estrutura da página, o que ajuda os navegadores e os mecanismos de busca para entender melhor o conteúdo.
- **Acessibilidade**: Ao usar essas tags, você torna sua página mais acessível para pessoas com deficiência, pois os leitores de tela podem interpretar melhor a estrutura da página.
- **SEO**: Uma estrutura semântica bem definida pode melhorar o SEO de sua página, pois ajuda os mecanismos de busca a indexar o conteúdo de forma mais eficiente.

### Resumo:

As tags `main`,`header` e `footer` são ferramentas essenciais para criar páginas web bem estruturadas e semânticas. Ao seguir as regras básicas para o uso dessas tags, você estará contribuindo para a criação de sites mais acessíveis e otimizados para SEO. 

**Lembre-se**: A utilização correta dessas tags é apenas uma parte da construção de um site de alta qualidade. É importante combinar o uso de tags semânticas com um bom design visual e uma experiência do usuário intuitiva.

### [Menu HTML/CSS](../menu_html-css.md)


