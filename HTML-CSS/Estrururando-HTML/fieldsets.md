# Tags `<fieldset>` e `<legend>`: Agrupando e Rotulando Campos

As tags `<fieldset>` e `<legend>`
são elementos HTML usados ​​para agrupar e rotular campos relacionados em um formulário.

## `<fieldset>` 

- **Agrupamento**: Uma tag `<fieldset>` cria um grupo de elementos relacionados a um formulário. Isso ajuda a organizar visualmente os campos e a melhorar a acessibilidade, especialmente para usuários com deficiência.
- **Contorno**: Por padrão, `<fieldset>` cria um contorno visual em torno dos elementos agrupados, mas você pode personalizar esse contorno usando CSS.

## `<legend>`

- **Título**: Uma tag `<legend>`é usada dentro de um `<fieldset>` para fornecer um título ou rótulo descritivo para o grupo de campos. Esse título está listado acima do grupo.
- **Acessibilidade**: O título do `<legend>` é importante para a acessibilidade, pois ajuda os usuários de leitores de tela a entender o propósito do grupo de campos.

### Exemplo:

```
<form>
  <fieldset>
    <legend>Informações Pessoais</legend>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>
</form>
```

### Neste exemplo:

- Crie `<fieldset>`um grupo de campos relacionados às informações pessoais.
- O `<legend>`fornece o título "Informações Pessoais" para esse grupo.
- Os campos de nome e email estão agrupados dentro do `<fieldset>`.

### Usos comuns das tags `<fieldset>`são `<legend>`:

- **Agrupamento de campos relacionados**: Por exemplo, informações de contato, endereços, ocorrências.
Melhora da acessibilidade: Ajuda os usuários de leitores de tela a entender a estrutura do formulário.
- **Organização visual**: Cria uma divisão clara entre diferentes grupos de campos.

**Observação**: Embora não seja obrigatório, é recomendado usar uma tag `<legend>`dentro de um `<fieldset>`para fornecer um título claro e descritivo para o grupo de campos.

### [Menu HTML/CSS](../menu_html-css.md)