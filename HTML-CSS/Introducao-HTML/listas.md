# Listas Ordenadas e Não Ordenadas

As listas são elementos essenciais para apresentar informações de forma organizada e hierarquizada em uma página web. O HTML oferece duas tags principais para criar listas: para listas ordenadas e para listas não ordenadas. `<ol>` `<ul>`

## Listas ordenadas (`<ol>`)

- **Função**: Criar listas onde os itens são numerados sequencialmente.
- **Uso**: Ideal para instruções, etapas de um processo ou qualquer lista onde a ordem dos itens é importante.

- **Exemplo**:

```
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

```
Resultado:

1. Primeiro item
2. Segundo item
3. Terceiro item
```

## Listas Não Ordenadas (`<ul>`)

- **Função**: Criar listas onde os itens não possuem uma ordem específica.
- **Uso**: Ideal para listas de itens relacionados, mas sem uma sequência definida.

- **Exemplo**:

```
<ul>
    <li>Maçã</li>
    <li>Banana</li>
    <li>Laranja</li>
</ul>
```

```
Resultado:

. Maçã
. Banana
. Laranja
```

## Uma etiqueta `<li>` 

- **Função**: Definir cada item dentro de uma lista.
- **Uso**: Sempre utilizado dentro das tags `<ol>` ou `<ul>`.

## Personalizando Listas com CSS
Você pode personalizar a aparência das listas utilizando CSS. Algumas propriedades CSS comuns para listas incluem:

- `list-style-type`: Defina o tipo de marcador para listas não ordenadas (disco, círculo, quadrado) e o estilo de numeração para listas ordenadas (decimal, romano inferior, romano superior, etc. ).
- `list-style-position`: Define a posição dos marcadores (dentro, fora).
- `margin` e `padding`: Ajusta os espaços entre os itens e os marcadores.

### Exemplo com CSS:

```
ul {
  list-style-type: square;
}

ol {
  list-style-position: inside;
}
```

## Listas Aninhadas

Você pode criar listas aninadas, ou seja, uma lista dentro de outra lista. Isso é útil para organizar informações em diferentes níveis.

```
<ul>
  <li>Frutas</li>
  <ul>
    <li>Maçã</li>
    <li>Banana</li>
  </ul>
  <li>Legumes</li>
  <ul>
    <li>Cenoura</li>
    <li>Beterraba</li>
  </ul>
</ul>
```

## Outros Atributos

- **start**: Define o número inicial para uma lista ordenada.
- **reversed**: Inverte a ordem de uma lista ordenada.

### Exemplo:

### Em resumo:

As listas são ferramentas poderosas para organizar o conteúdo de uma página web. Ao dominar as tags `<ol>`, e , você poderá criar listas claras, concisas e bem formatadas para melhorar a experiência do usuário. `<ul>` `<li>` 

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)