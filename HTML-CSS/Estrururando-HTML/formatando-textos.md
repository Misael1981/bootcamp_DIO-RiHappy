# Formatando Textos

## Introdução

A estrutura HTML para textos nos permite formatar e organizar o conteúdo de uma página web de forma clara e semântica. As tags HTML fornecem informações sobre a função e o significado do texto, auxiliando tanto os navegadores quanto os mecanismos de busca para entender melhor o conteúdo da página.

Tags Semânticas para Textos
- `<i>`: Indica texto com ênfase, como palavras em itálico.
- `<b>`: Indica texto em negrito, para destacar palavras ou frases importantes.
- `<u>`: Sublinha o texto, mas seu uso é desencorajado por não ser semântico.
- `<marca>`: Marca um texto como importante, geralmente com destaque visual.
- `<sup>`: Coloca texto em sobrescrito (acima da linha).
- `<sub>`: Coloca texto em subscrito (abaixo da linha).
- `<blockquote>`: Cria uma citação longa.

### Exemplo:

```
<p>Este é um parágrafo normal. <i>Este texto está em itálico</i> e <b>este em negrito</b>. A fórmula H<sub>2</sub>O é fundamental para a vida.</p>
<p><blockquote>Um sábio disse: "A vida é bela."</blockquote></p>
```

## Semântica em HTML
A semântica em HTML refere-se ao uso de elementos que descrevem o significado do conteúdo, em vez de apenas sua aparência. Ao utilizar tags semânticas, você facilita a compreensão do conteúdo por navegadores, mecanismos de busca e outros softwares que processam páginas HTML.

### Por que a semântica é importante?

- **Acessibilidade**: Ajuda pessoas com deficiência visual a entender o conteúdo da página.
- **SEO**: Melhora o posicionamento da página nos resultados de busca.
- **Manutenção**: Torna o código mais fácil de entender e manter.

## A Tag `<font>` e Seus Atributos

A tag `<font>`era usada para definir a fonte, cor e tamanho do texto, mas está obsoleta e não deve mais ser utilizada. A razão é que ela não é semântica e prejudica a acessibilidade.

### Atributos obsoletos:

- **color**: Defina a cor do texto.
- **face**: Defina a fonte do texto.

### Exemplo (não recomendado):

```
<font color="blue" face="Arial">Este texto está em azul e na fonte Arial.</font>
```

### Tipos de Fontes e Melhores Práticas

Ao invés de usar uma tag `<font>`, é recomendado usar **CSS** para estilizar o texto. O CSS oferece mais flexibilidade e controle sobre a aparência do texto.

### Tipos de fontes:

- **Fontes serifadas**: Possuem pequenos traços nas extremidades das letras (ex: Times New Roman, Georgia).
- **Fontes sem serifa**: Não possuem traços nas extremidades das letras (ex: Arial, Helvetica).
- **Fontes monoespaçadas**: Todos os caracteres ocupam a mesma largura (ex: Courier New).

### Exemplo com CSS:

```
<p style="color: blue; font-family: Arial;">Este texto está em azul e na fonte Arial.</p>
```

### Conclusão

A estrutura HTML para textos é fundamental para criar páginas web acessíveis, semânticas e bem formatadas. Ao utilizar as tags corretas e evitar o uso de elementos obsoletos, você garante que seu conteúdo seja compreendido por todos os usuários.

**Lembre-se: A semântica é a chave para um HTML de qualidade!**

### [Menu HTML/CSS](../menu_html-css.md)