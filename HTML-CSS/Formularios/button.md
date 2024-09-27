# Button e seus Tipos

## O que é a tag `<button>`?

A tag `<button>`em HTML é usada para criar botões interativos em uma página web. Esses botões são clicados pelo usuário para executar ações específicas, como enviar dados de formulário, abrir uma janela modal ou realizar qualquer outra função.

## Tipos de botões

A tag `<button>`possui dois tipos principais:

1. **Tipo "submit"** : Este tipo de botão é geralmente usado dentro de um formulário para enviar os dados do formulário para um servidor. Quando o botão é clicado, o evento `submit` do formulário é acionado.

2. **Tipo "reset"** : Este tipo de botão é usado dentro de um formulário para redefinir todos os campos do formulário para seus valores iniciais. Quando o botão é clicado, o evento `reset` do formulário é acionado.

3. **Tipo "botão"** : Este é o tipo padrão do botão. Ele não tem nenhuma função específica associada e pode ser usado para executar qualquer ação personalizada, geralmente com a ajuda de JavaScript.

### Atributos da tag `<button>`

- **type** : Define o tipo do botão (submit, reset ou button).
- **value** : Define o texto que será exibido dentro do botão.
- **disabled** : Desabilita o botão, tornando-o não clicável.
- **onclick** : Define uma função JavaScript que será executada quando o botão for clicado.

### Exemplo básico

```
<button type="submit">Enviar</button>
<button type="reset">Limpar</button>
<button type="button" onclick="alert('Você clicou no botão!')">Clique aqui</button>
```

### [Menu HTML/CSS](../menu_html-css.md)