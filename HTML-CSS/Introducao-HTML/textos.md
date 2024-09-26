# Deixando seu site com a sua cara!

## O que é tipografia em HTML?

A tipografia no HTML se refere à escolha e ao uso de fontes em uma página da web. A fonte certa pode transformar completamente o visual do seu site, tornando-o mais atraente, legível e profissional.

## Por que a tipografia é importante?

- **Legibilidade**: Fontes legíveis facilitam a leitura do seu conteúdo, melhorando a experiência do usuário.
- **Identidade visual**: A escolha da fonte contribui para a identidade visual do seu site, transmitindo a personalidade de sua marca.
- **Hierarquia**: Fontes diferentes podem ser usadas para criar um título visual e destacar os elementos mais importantes da página.
- **Estética**: A tipografia certa deixa seu site mais bonito e agradável aos olhos.

## Como adicionar fontes ao HTML?

Existem duas formas principais de adicionar fontes ao HTML:

## 1. Fontes da Web:

- **Vantagens**: Maior flexibilidade, pois as fontes são compartilhadas diretamente do servidor.
- **Desvantagens**: Podem demorar mais para carregar, e a compatibilidade com diferentes navegadores pode variar.
- **Como usar**: Utilize tags `<link>`para importar fontes do Google Fonts ou de outras bibliotecas.

## 2. Fontes locais:

- **Vantagens**: Carregamento mais rápido, pois as fontes estão armazenadas no dispositivo do usuário.
- **Desvantagens**: Menos flexibilidade, pois as fontes precisam ser instaladas no computador do usuário.
- **Como usar**: Utilize uma tag `<font>`para definir a fonte, mas essa tag está depreciada e não é recomendada.

### Dicas para escolher a fonte certa:

- **Legibilidade**: Priorize fontes claras e simples de ler, especialmente em tamanhos menores.
Consistência: Utilize poucas fontes diferentes para manter a harmonia visual do seu site.
- **Contexto**: A escolha da fonte deve levar em consideração o conteúdo e o público-alvo do seu site.
- **Hierarquia**: Use fontes diferentes para criar um título visual e destacar os elementos mais importantes.
- **Teste**: Experimente diferentes combinações de fontes para encontrar a que melhor se adapta ao seu design.

### Recursos úteis:

- **Google Fonts**: Uma vasta biblioteca de fontes gratuitas e de alta qualidade.
- **Adobe Fonts**: Outra excelente opção para encontrar fontes para seus projetos.
- **Typekit**: Uma plataforma para gerenciar e sincronizar fontes em diferentes projetos.

# Tags HTML para Formatação de Texto

fundamentais para estruturar e formatar o conteúdo de uma página web. Cada uma delas serve a um propósito específico e contribui para a organização e a apresentação visual do texto.

## Tags de Título (`<h1>` até `<h6>`)

- **Função**: Definir títulos e legendas de diferentes níveis de importância em uma página.
- **Uso**:
    - `<h1>`: Título principal da página.
    - `<h2>`: Legenda de nível 2.
    - `<h3>`: Subtítulo de nível 3, e assim por diante até `<h6>`.`

### Exemplo:

```
<h1>Título Principal</h1>
<h2>Subtítulo de Nível 2</h2>
<h3>Subtítulo de Nível 3</h3>
```

## Tag de Parágrafo (`<p>`)

- **Função**: Definir um parágrafo de texto.
- **Uso**: Envolve um bloco de texto que forma uma unidade de pensamento.

### Exemplo:

```
<p>Este é um parágrafo de exemplo. As tags <p> delimitam um bloco de texto.</p>
```

### Tag de Citação (`<blockquote>`)

- **Função**: Indicar uma citação longa de outra fonte.
- **Uso**: Geralmente recua o texto e adiciona aspas.

### Exemplo:

```
<blockquote>
    <p>“A única coisa que se interpõe entre você e seu objetivo é a história que você conta a si mesmo sobre por que você não pode alcançá-lo.” - Paulo Coelho</p>
</blockquote>
```

## Tags de Ênfase (`<strong>`, `<em>`, `<u>`, `<i>`, `<mark>`)

- **Função**: Destacar palavras ou frases de forma específica.
- **Uso**:
    - `<strong>`: Forte ênfase, geralmente em negro.
    - `<em>`: Ênfase em itálico, para ênfase ou para indicar palavras estrangeiras.
    - `<u>`: Sublinhado, geralmente usado para indicar texto que precisa de atenção especial.
    - `<i>`: Itálico, semelhante a `<em>`, mas com um significado mais amplo.
    - `<mark>`: Marca texto, geralmente com fundo colorido, para destacar partes importantes.

### Exemplo:

```
<p>Este é um texto com <strong>palavras em negrito</strong>, <em>palavras em itálico</em>, <u>palavras sublinhadas</u> e <mark>palavras marcadas</mark>.</p>
```

## Tag de Sobrescrito (`<sup>`)

- **Função**: Indicar texto sobrescrito, como expoentes em fórmulas matemáticas ou números de referência.
- **Uso**: O texto dentro da tag é apresentado basicamente acima da linha de base.

### Exemplo:

```
<p>A fórmula da água é H<sub>2</sub>O.</p>
```

### Observações:

- **Hierarquia**: As tags de cabeçalho (`<h1>` a `<h6>`) definem uma hierarquia de importância para o conteúdo.
- **Ninhos**: As tags podem ser aninhadas, ou seja, uma tag pode conter outra. Por exemplo, você pode usar um `<strong>`dentro de um `<em>`.
- **CSS**: Para personalizar a aparência dessas tags, você pode usar CSS. Por exemplo, para alterar o texto de um texto para preto, você pode usar uma propriedade colorem CSS.
- **Semântica**: Ao utilizar essas tags, você está adicionando significado semântico ao seu conteúdo, o que é importante para a acessibilidade e para os mecanismos de busca.

### Exemplo completo:

```
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de Formatação de Texto</title>
</head>
<body>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    <p>Este é um parágrafo com um <strong>texto em negrito</strong> e um <em>texto em itálico</em>.</p>
    <blockquote>
        <p>“A vida é o que acontece enquanto você está fazendo outros planos.” - John Lennon</p>
    </blockquote>
    <p>A fórmula da água é H<sub>2</sub>O.</p>
</body>
</html>
```

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)