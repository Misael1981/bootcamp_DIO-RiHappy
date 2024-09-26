#  Personalizando seus elementos

## O que são atributos?

Em HTML, os atributos são como adjetivos que fornecem informações adicionais sobre um elemento. Eles aparecem dentro da tag de abertura e são formados por um nome e um valor, separados por um sinal de igual (=), e geralmente envoltos em aspas.

## Por que usar atributos?

- **Estilização**: Definir núcleos, fontes, tamanhos e outras propriedades visuais.
- **Estrutura**: Indica a relação entre elementos, como links, imagens e formulários.
- **Acessibilidade**: Tornar o conteúdo mais acessível para pessoas com deficiência.
- **Comportamento**: Controlar como um elemento se comporta em diferentes situações.

### Sintaxe básica:

```
<elemento atributo="valor">Conteúdo do elemento</elemento>
```

### Exemplos comuns de atributos:

- **id**: Atribui um identificador exclusivo a um elemento, permitindo que você selecione com CSS ou JavaScript.
- **class**: Atribui uma ou mais classes a um elemento, permitindo que você aplique estilos a grupos de elementos.
- **src**: Especifica a URL de uma imagem, um arquivo de áudio ou vídeo.
- **href**: Especifica o URL de um link.
- **alt**: fornecer um texto alternativo para uma imagem, utilizado por leitores de tela.
- **title**: forneça um texto de dica que aparece quando o mouse passa sobre um elemento.

### Exemplo:

```
<img src="minha-imagem.jpg" alt="Uma bela paisagem" title="Clique para ampliar">
```

## Atributos booleanos:

Alguns atributos não desabilitam um valor, sua simples presença indica que um recurso está ativado.

```
<input type="checkbox" checked>
```

### Atributos globais:

Existem atributos que podem ser usados ​​em quase todos os elementos HTML, como `style`, `title` e `lang`.

### Atributos personalizados:

Você pode criar seus próprios atributos, mas eles serão ignorados pelos navegadores. No entanto, eles podem ser úteis para armazenar dados que serão processados ​​por JavaScript.

### Dicas importantes:

- **Use nomes de atributos válidos**: Evite espaços, caracteres especiais e comece com uma letra.
- **Sempre feche as tags**: As tags de abertura e fechamento devem ser pareadas corretamente.
- **Mantenha a organização**: Use indentação para melhorar a legibilidade do código.
- **Valide seu HTML**: Utilize ferramentas de validação para identificar erros.

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)