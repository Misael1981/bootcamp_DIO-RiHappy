# Tag `input` e seus tipos

## O que é a tag `<input>`?

Uma tag `<input>`em HTML é um elemento fundamental para a criação de formulários interativos. Ela serve para criar diversos tipos de campos de entrada, nos quais os usuários podem inserir dados que serão enviados para um servidor ou usados ​​para interagir com a página.

## Os principais tipos de `<input>` e suas funcionalidades

A privacidade da tag `<input>`reside no atributo type, que define o tipo de campo de entrada a ser criado. Vejamos os principais tipos:

- **text**: Cria um campo de texto simples, onde o usuário pode inserir qualquer tipo de texto.
- **number**: Cria um campo numérico, permitindo a entrada apenas de números. Pode ser utilizado com os atributos `min`, `max`e `step` para definir o intervalo e o incremento dos valores permitidos.
- **button**: Cria um botão personalizado. O valor do atributo valueserá o texto exibido no botão.
- **range**: Cria um controle deslizante, permitindo ao usuário selecionar um valor dentro de um intervalo definido pelos atributos mine max.
- **color**: Cria um seletor de cores, permitindo ao usuário escolher uma cor.
- **email**: Crie um campo para inserir endereços de e-mail. O navegador geralmente valida o formato do endereço.
- **url**: Cria um campo para inserir URLs. O navegador geralmente valida o formato da URL.
- **date**: Cria um campo para selecionar um dado.
- **week**: Cria um campo para selecionar uma semana.
- **month**: Cria um campo para selecionar um mês.
- **checkbox**: Crie uma caixa de seleção. O usuário pode marcar ou desmarcar uma opção.
- **radio**: Crie um botão de rádio. Vários botões de rádio com o mesmo nome formam um grupo, onde apenas um pode ser selecionado por vez.
- **hidden**: Cria um campo que não é visível ao usuário, mas que pode ser usado para enviar dados ao servidor.
- **file**: Cria um campo para selecionar um arquivo do computador do usuário.
- **search**: Crie um campo de busca, com um ícone de lupa.

### Exemplos de uso

```
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="idade">Idade:</label>
  <input type="number" id="idade" name="idade" min="18">

  <label for="cor_favorita">Cor favorita:</label>
  <input type="color" id="cor_favorita" name="cor_favorita">

  <label for="termos">Aceitar termos:</label>
  <input type="checkbox" id="termos" name="termos">

  <button type="submit">Enviar</button>
</form>
```

## Outros atributos importantes

Além do atributo `type`, a tag `<input>` possui outros atributos úteis:

- **name**: Atribui um nome ao elemento, utilizado para identificar o campo no envio do formulário.
- **value**: Define o valor inicial do campo.
- **placeholder**: Exibe um texto de dica dentro do campo, que desaparece quando o usuário começa a digitar.
- **required**: Torna o campo obrigatório, ou seja, o usuário precisa preencher o campo para enviar o formulário.
- **disabled**: Desabilita o campo, tornando-o não editável.
- **readonly**: Torna o campo somente leitura, permitindo que o usuário visualize, mas não edite o valor.

### Considerações finais

A tag `<input>` é uma ferramenta poderosa para criar interfaces de usuário interativas. Ao combinar os diferentes tipos de entrada e seus atributos, você pode criar formulários personalizados e eficientes para coletar informações dos usuários.

### [Menu HTML/CSS](../menu_html-css.md)