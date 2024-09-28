# As tags `<figure>`e `<figcaption>`: Um par perfeito para suas imagens e diagramas

Vamos agora explorar as tags `<figure>`e `<figcaption>`, que juntas formam uma dupla dinâmica para apresentar imagens, diagramas e outros elementos visuais em suas páginas web.

## `<figure>`: O quadro geral

Uma tag `<figure>`serve para delimitar uma unidade autocontida de conteúdo, como uma imagem, um diagrama, um bloco de código ou qualquer outro elemento que seja separado do fluxo principal do texto. Ela cria um "quadro" para esse conteúdo, permitindo que você adicione legendas, títulos e outras informações relevantes.

## `<figcaption>`: A lenda da figura

Uma tag `<figcaption>`é usada na `<figure>`para fornecer uma legenda ou um título para a figura. Essa legenda pode ser colocada antes ou depois da figura, dependendo de sua preferência e do layout da página.

### Exemplo:

```
<figure>
  <img src="minha-imagem.jpg" alt="Uma bela paisagem">
  <figcaption>Uma vista deslumbrante da montanha</figcaption>
</figure>
```

## Por que usar <figure>e <figcaption>?

- **Semântica**: Essas tags fornecem uma estrutura semântica clara para o conteúdo visual, facilitando a compreensão tanto para os navegadores quanto para os usuários.
- **Acessibilidade**: Leitores de tela podem usar essas tags para descrever as imagens para usuários com deficiência visual.
- **SEO**: Os mecanismos de busca podem entender melhor o contexto das imagens e utilizá-los para melhorar a classificação de sua página.
- **Flexibilidade**: Uma tag <figure>pode conter outros elementos além de imagens, como diagramas, gráficos e até mesmo blocos de código.

## `<picture>`: Escolhendo a imagem ideal

A tag `<picture>`é uma adição mais recente ao HTML5, e ela oferece uma maneira mais flexível de fornecer imagens para diferentes dispositivos e tamanhos de tela. Dentro de `<picture>`, você pode usar elementos `<source>`para especificar diferentes versões da mesma imagem, com tamanhos e formatos variados. O navegador escolherá a imagem mais adequada com base nas capacidades do dispositivo do usuário.

### Exemplo:

```
<picture>
  <source media="(min-width: 768px)" srcset="imagem-grande.jpg">
  <source media="(min-width: 480px)" srcset="imagem-media.jpg">
  <img src="imagem-pequena.jpg" alt="Minha imagem">
</picture>
```
### Neste exemplo:

- Se o dispositivo tiver uma largura de tela mínima de 768 pixels, o navegador carregará a imagem `imagem-grande.jpg`.
- Se o dispositivo tiver uma largura de tela mínima de 480 pixels, mas menos de 768 pixels, o navegador carregará a imagem `imagem-media.jpg`.
- Se o dispositivo tiver uma largura de tela menor que 480 pixels, o navegador carregará a imagem `imagem-pequena.jpg`.

### Em resumo:

As tags `<figure>`, `<figcaption>` e `<picture>`são ferramentas poderosas para trabalhar com imagens e outros elementos visuais em suas páginas web. Ao utilizá-las corretamente, você garante que suas imagens sejam exibidas da melhor forma possível em diferentes dispositivos, melhorando a experiência do usuário e a acessibilidade do seu site. 

### [Menu HTML/CSS](../menu_html-css.md)