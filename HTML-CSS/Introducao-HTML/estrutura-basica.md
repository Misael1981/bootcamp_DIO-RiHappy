# Estrutura Básica do HTML

HTML (HyperText Markup Language) é a linguagem padrão para a criação de páginas da web. Ela define a estrutura e o conteúdo de uma página,utilizando tags para indicar diferentes elementos, como títulos, parágrafos, imagens e links.

## Nome do arquivo HTML: Por que "index.html"?

- **Convenção**: "index.html" é o nome mais comum para o arquivo principal de um site.
- **Padrão**: Quando um usuário digita um endereço de um site sem especificar um arquivo específico, o servidor procura automaticamente pelo arquivo "index.html" na pasta raiz.
- **Flexibilidade**: Você pode usar outros nomes, mas "index.html" facilita a organização e é reconhecido por todos os navegadores.

## As duas partes principais de um documento HTML: `<head>` e `<body>`

### `<head>`:

- **Metadados**: Contém informações sobre uma página que não são exibidas diretamente no navegador, como o título da página, o charset (codificação de caracteres), palavras-chave para SEO, links para arquivos CSS e JavaScript.
- **Não visível**: O conteúdo da tag `<head>` não é exibido na página, mas é essencial para o funcionamento e indexação do site.

### `<body>`:

- **Conteúdo visível**: É aqui que você coloca todo o conteúdo que o usuário verá na página, como textos, imagens, vídeos, formulários, etc.
- **Estrutura**: Utilize tags HTML para definir a estrutura do conteúdo, como parágrafos (`<p>`), títulos (`<h1>`, `<h2>`, etc.), listas (`<ul>`, `<ol>`), tabelas (`<table>` ), etc.

### Exemplo de uma estrutura básica HTML:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Meu primeiro site</title>
</head>
<body>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um exemplo de parágrafo.</p>
</body>
</html>
```

### Resumindo:

- `<html>`: Raiz do documento HTML.
- `<head>`: Informações sobre uma página.
- `<body>`: Conteúdo visível da página.

**Em resumo**, o HTML é como um esqueleto para sua página web. O `<head>` fornece as informações essenciais e o `<body>` define o conteúdo que será exibido para o usuário.


### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)