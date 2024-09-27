# Textarea

Uma tag `<textarea>` em HTML é utilizada para criar áreas de texto multi-linha, permitindo que o usuário insira grandes quantidades de texto, como mensagens, comentários ou solicitações. É ideal para situações em que o campo de entrada `input` de uma única linha não é suficiente.

### Estrutura básica:

```
<textarea></textarea>
```

## Atributos importantes:

- **line**: Define o número de linhas visíveis na área de texto.
- **cols**: Define o número de caracteres por linha.
- **name**: Atribui um nome ao elemento, utilizado para identificar o campo no envio do formulário.
- **placeholder**: Exibe um texto de dica dentro da área de texto, que desaparece quando o usuário começa a digitar.
- **disabled**: Desativa a área de texto, tornando-a não editável.
- **readonly**: Torna a área de texto somente leitura, permitindo que o usuário visualize, mas não edite o conteúdo.

### Exemplos:

```
<textarea name="mensagem" rows="5" cols="30" placeholder="Digite sua mensagem aqui"></textarea>
```

### Diferença entre `<textarea>` e `<input>`:

|**Características**|**`<textarea>`**|**`<input>`**|
|---------|-------------|--------|
|Tamanho|	Multi-linha|	Uma linha|
|Conteúdo|	Texto plano|	Vários tipos de dados (texto, números, etc.)|
|Uso típico	|Comentários, descrições|	Campos curtos, como nome, email, etc.|

### Quando usar `<textarea>`?

- **Áreas de comentários**: Para permitir que os usuários deixem comentários em posts de blog, fóruns, etc.
- **Caixas de texto longas**: Para coleta de informações específicas, como específicas de produtos ou endereços.
- **Editores de código**: Para criar editores de código simples.

### Exemplo prático: formulário de contato

```
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="mensagem">Mensagem:</label>
  <textarea name="mensagem" rows="5"></textarea>

  <button type="submit">Enviar</button>
</form>
```

### Considerações adicionais:

- **Estilização**: Você pode personalizar a aparência da área de texto usando CSS.
- **JavaScript**: Você pode usar JavaScript para manipular o conteúdo da área de texto, como contar o número de caracteres ou adicionar formatação.
- **Acessibilidade**: Certifique-se de que a área de texto seja acessível a todos os usuários, incluindo aqueles que utilizam tecnologias assistivas.

### Em resumo:

A tag `<textarea>` é essencial para criar formulários que excluam a entrada de grandes quantidades de texto. Ao entender suas características e como usá-la em conjunto com outras tags, você poderá criar interfaces de usuário mais completas e funcionais.

### [Menu HTML/CSS](../menu_html-css.md)