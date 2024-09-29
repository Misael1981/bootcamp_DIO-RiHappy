# O que são Propriedades e Valores em CSS?

- **Propriedades CSS**: São as características que você pode modificar em um elemento HTML. Imagine que você está pintando uma parede: a cor, o tamanho e a textura são propriedades. Em CSS, as propriedades podem ser coisas como `color`, `font-size`, `background-image`,  etc. 

- **Valores CSS**: São os valores que você atribui às propriedades. Voltando ao exemplo da parede, o valor da propriedade "cor" poderia ser "vermelho", "azul" ou um código hexadecimal como "`#FF0000`".

## Formas de declarar CSS

### 1. CSS Inline
É quando você aplica estilos diretamente em um elemento HTML usando o atributo style. Exemplo:

```
html
<p style="color: blue;">Este texto é azul.</p>
```

*Por que não é muito indicado?*
- Dificulta a manutenção do código, pois os estilos ficam misturados com o HTML.
- Não permite reutilização, já que cada elemento precisa ter seus estilos definidos individualmente.

### 2. CSS Interno
É quando você coloca os estilos dentro da tag `<style>` no cabeçalho do documento HTML. Exemplo:

```
html
<head>
    <style>
        p {
            color: green;
        }
    </style>
</head>
```

### Vantagens e desvantagens:

- ***Vantagens:*** Bom para páginas pequenas ou testes rápidos; mantém o CSS separado do HTML.
- ***Desvantagens:*** Não é reutilizável em outras páginas; aumenta o tamanho do arquivo HTML.

### 3. CSS Externo

É quando você cria um arquivo separado com a extensão .css e linka ele ao seu HTML. Exemplo de como criar:
1. **Crie um arquivo chamado estilos.css**.
2. **Adicione seus estilos lá**:

```
   css
   body {
       background-color: lightgray;
   }
```
   
3. **Linke no seu HTML**:

```
html
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
```
   

### Por que é o mais indicado?

- Permite reutilização em várias páginas.
- Melhora a organização do código, separando conteúdo e estilo.
- Facilita a manutenção e atualização dos estilos em um único lugar.

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)


