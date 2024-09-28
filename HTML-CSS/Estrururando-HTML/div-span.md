# Div e Span: Quais são as diferenças?

As tags `<div>` e `<span>` são elementos genéricos em HTML que servem para agrupar e formatar conteúdo, mas possuem características e aplicações específicas. Vamos entender cada uma delas:

## Marcação`<div>` 

- **Divisão**: A principal função da tag `<div>` é dividir o documento HTML em divisões ou divisões. Ela é um elemento de nível de bloco , o que significa que ocupa toda a largura disponível e quebra a linha após seu conteúdo.
- **Estrutura**: É comumente usada para criar a estrutura básica de uma página, como cabeçalho, rodapé, seção principal, barra lateral, etc.
- **Semântica**: Embora seja genérica, pode `<div>` ser utilizada para criar elementos semânticos customizados com a ajuda de classes e IDs.

### Exemplo:

```
<div class="header">
  <h1>Meu Site</h1>
  <nav>
    </nav>
</div>
<div class="content">
  </div>
<div class="footer">
  </div>
```

## Marcação`<span>` 

- **Span**: A tag `<span>` é um elemento de nível inline , ou seja, não quebra a linha e se adapta ao espaço disponível.
- **Agrupamento**: Serve para agrupar um trecho de texto ou outros elementos inline para aplicar estilos ou manipular o conteúdo com JavaScript.
- **Semântica fraca**: Por ser genérica, a `<span>` não possui um significado semântico intrínseco.

### Exemplo:

```
<p>Este é um parágrafo com uma palavra <span class="destaque">importante</span>.</p>
```

## Diferenças entre `<div>` e `<span>`

|**Caracteristica**|	**`<div>`**| **`<span>`**|
|---------|----------|----------|
|Nível|	Bloco	|Em linha|
|Função principal|	Dividir o documento em pedaços|	Agrupar elementos inline|
|Semântica|	Pode ser personalizado|	Fraca|
|Uso comum	|Estrutura da página, títulos|	Formatação de texto, pequenos grupos de elementos|

## Quando usar cada uma?

- `<div>`: Utilize quando precisar criar tópicos separados em sua página, como cabeçalho, rodapé, colunas, etc.
- `<span>`: Utilize para aplicar estilos às partes específicas de um texto, marcar elementos para manipulação por JavaScript ou para criar pequenos espaços contidos dentro de um elemento de nível de bloco.

### Resumo

A escolha entre `<div>`e `<span>`depende da estrutura e do objetivo que você deseja alcançar em sua página. A `<div>`é ideal para criar a estrutura geral da página, enquanto a `<span>`é mais adequada para formatar e manipular elementos inline.

**Lembre-se**: A semântica é fundamental para a acessibilidade e o SEO de sua página. Utilize as tags de forma correta e evite abusar da `<span>`para criar estruturas complexas.

### [Menu HTML/CSS](../menu_html-css.md)