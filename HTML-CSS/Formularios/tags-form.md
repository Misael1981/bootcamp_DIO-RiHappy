# Tag `<form>`

## O que é a tag <form>?

A tag `<form>`em HTML serve para criar formulários interativos em páginas web. Dentro de um formulário, você pode inserir tipos de campos de entrada, `input`, `checkbox`, `textarea`, etc. Esses campos permitem que o usuário insira dados que podem ser enviados vários para um servidor de processamento.

**Em resumo, a tag `<form>`é o container que agrupa todos os elementos de um formulário e define como os dados serão enviados.**

## Como a tag `<form>` se comunica com os servidores?

Quando um usuário preenche um formulário e clica em um botão de envio (geralmente um botão com o tipo "submit"), os dados inseridos nos campos são enviados para um servidor web. O endereço do servidor para onde os dados serão enviados é especificado no atributo `action` da tag `<form>`.

O método HTTP utilizado para enviar os dados é definido pelo atributo `method`. Os métodos mais comuns são:

- `GET`: Os dados são enviados na URL, após o símbolo de interrogação (?). Não é recomendado enviar grandes quantidades de dados ou dados sensíveis.
- `POST`: Os dados são enviados no corpo da requisição HTTP, o que é mais seguro e permite enviar maiores volumes de dados.

## Atributos importantes da tag `<form>`

- **name**: Atribui um nome ao formulário, que pode ser usado para identificá-lo em JavaScript.
- **action**: Especifique a URL do script ou página que irá processar os dados do formulário.
- **method**: Define o método HTTP utilizado para enviar os dados (GET ou POST).
- **target**: Especifica onde o resultado do envio do formulário será digitado. Os valores mais comuns são "`_self`" (mesma janela), "`_blank`" (nova janela), um nome de iframe, etc.
- **autocomplete**: Permite ativar ou desativar o preenchimento automático de campos pelo navegador.
- **Atributos "on"** : Esses atributos são usados ​​para executar scripts JavaScript quando um determinado evento ocorre no formulário. Alguns exemplos incluem:
    - **onsubmit**: Executado antes do formulário ser enviado.
    - **onreset**: Executado quando o botão de reset é clicado.
    - **oninput**: Executado quando o valor de um campo é alterado.

### Exemplo básico de um formulário HTML

```
<form action="processa_formulario.php" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Enviar</button>
</form>
```

### Neste exemplo:

- O formulário será enviado para o script `processa_formulario.php` usando o método `POST`.
- Os campos "nome" e "email" são obrigatórios (atributo `required`).
- Ao clicar no botão "Enviar", os dados do formulário serão enviados para o servidor.

### Considerações adicionais

- **Validação de dados**: É importante validar os dados do formulário antes de enviá-los para o servidor, para garantir que os dados sejam consistentes e seguros.
- **Segurança**: Ao trabalhar com formulários, é fundamental tomar medidas de segurança para evitar ataques como XSS (Cross-Site Scripting) e CSRF (Cross-Site Request Forgery).
- **Acessibilidade**: Ao criar formulários, é importante seguir as diretrizes de acessibilidade para garantir que pessoas com deficiência possam utilizar o formulário.

### [Menu HTML/CSS](../menu_html-css.md)