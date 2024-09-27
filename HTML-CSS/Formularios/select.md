# Select e seus tipos

A tag `<select>` em HTML é utilizada para criar listas descendentes (também conhecidas como dropdowns ou combo boxes ), oferecendo ao usuário uma maneira conveniente de selecionar uma opção dentre várias. É ideal para situações em que você deseja apresentar um conjunto de opções predefinidas e permitir que o usuário escolha uma delas.

### Estrutura básica

```
<select>
  <option value="valor1">Opção 1</option>
  <option value="valor2">Opção 2</option>
  <option value="valor3">Opção 3</option>
</select>
```

- **`<select>`**: Define o início da lista.
- **`<option>`**: Cada elemento `<option>`representa uma opção dentro da lista.
- **value**: Atribui um valor à opção, que será enviado ao servidor quando o formulário for enviado.
- **Texto entre as tags `<option>`**: É o texto visível para o usuário.

### Atributos importantes

- **name**: Atribui um nome ao elemento, utilizado para identificar o campo no envio do formulário.
- **multiple**: Permite que o usuário selecione várias opções.
- **size**: Defina o número de opções visíveis na lista, sem a necessidade de rolar.
- **disabled**: Desabilita o elemento, tornando-o não selecionável.

### Tipos de listas `<select>`

- **Lista simples**: Permite que o usuário selecione apenas uma opção.
- **Lista múltipla**: Permite que o usuário selecione várias opções, geralmente com a ajuda da tecla Ctrl ou Cmd (dependendo do sistema operacional).
- **Lista com grupos de opções**: Permite agrupar opções relacionadas usando a tag `<optgroup>`.

### Exemplo de lista múltipla

```
<select name="frutas" multiple>
  <option value="maçã">Maçã</option>
  <option value="banana">Banana</option>
  <option value="laranja">Laranja</option>
</select>
```

### Exemplo com grupos de opções

```
<select name="continentes">
  <optgroup label="América">
    <option value="norte">América do Norte</option>
    <option value="sul">América do Sul</option>
  </optgroup>
  <optgroup label="Europa">
    <option value="europa">Europa</option>
  </optgroup>
</select>
```

### Usando JavaScript com `<select>`

Você pode usar JavaScript para manipular listas `<select>`, como:

- **Alterar o valor selecionado**: `document.getElementById("meuSelect").value = "valor2";`
- **Adicionar ou remover opções**: `var option = document.createElement("option");`
- **Acompanhar ou mostrar a lista**: `document.getElementById("meuSelect").style.display = "none";`

### Considerações adicionais

- **Acessibilidade**: Certifique-se de que suas listas sejam acessíveis a todos os usuários, incluindo aqueles que utilizam tecnologias assistivas. Use o atributo aria-labelpara fornecer uma descrição alternativa para a lista.
- **Estilização**: Você pode personalizar a aparência das listas usando CSS.
- **Formulários**: As listas `<select>` são frequentemente usadas dentro de formulários para obter informações do usuário.

### Em resumo:

A tag `<select>`é uma ferramenta poderosa para criar interfaces de usuário mais intuitivas e eficientes. Ao entender como usar essa tag e seus atributos, você pode criar formulários mais amigáveis ​​e personalizados.

### [Menu HTML/CSS](../menu_html-css.md)