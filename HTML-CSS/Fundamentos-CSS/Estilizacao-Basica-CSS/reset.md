# Reset CSS: Começando do Zero

O **reset CSS** é uma técnica utilizada no desenvolvimento web para zerar as estilizações padrão dos navegadores, garantindo uma base consistente para a aplicação de seus próprios estilos. Cada navegador possui suas próprias regras de estilo para elementos HTML, o que pode resultar em layouts inconsistentes entre diferentes navegadores. Redefinir o nível CSS do campo de jogo, removendo essas diferenças e permitindo que você construa um design mais uniforme e controlável.

### Por que usar ou redefinir CSS?

- **Consistência**: Garante que todos os elementos HTML comecem com as mesmas propriedades, eliminando diferenças entre navegadores.
- **Facilidade de manutenção**: Ao ter uma base consistente, fica mais fácil aplicar seus próprios estilos e fazer alterações no futuro.
- **Melhor desempenho**: Em alguns casos, redefinir CSS pode melhorar o desempenho da página, removendo estilos desnecessários.

## Importando um arquivo reset CSS

A forma mais comum de usar o reset CSS é importar um arquivo predefinido no início do seu arquivo CSS. Existem diversos arquivos reset CSS disponíveis online, como os de Eric Meyer, Normalize.css e outros.

### Exemplo:

```
@import url('https://meyerweb.com/eric/tools/css/reset/reset.css');
```

## Criando um reset básico no seu próprio arquivo CSS

Se você preferir criar seu próprio reset CSS, pode usar o seletor universal (`*`) para aplicar estilos a todos os elementos HTML.

### Exemplo:

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Explicação:

- **margem: 0; padding: 0;**: Remove as margens e preenchimentos padrão de todos os elementos, garantindo que eles comecem com um espaço em branco ao redor.
- **box-sizing: border-box;**: Faz com que a largura e altura de um elemento incluindo a borda e o preenchimento, facilitando o cálculo das dimensões.

### Quais propriedades não incluem redefinição de CSS?

Além das propriedades básicas mencionadas acima, você pode incluir outras propriedades para personalizar seu reset CSS, como:

- **font-family**: Define uma fonte padrão para todos os elementos.
- **font-size**: Define o tamanho da fonte padrão.
- **list-style**: Remove os marcadores de listas.
- **text-decoration**: Remova o sublinhado padrão dos links.

### Exemplo mais completo:

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
```

## Reset CSS vs. Normalize.css

- **reset CSS**: Remova quase todos os estilos padrão dos elementos, deixando uma tela em branco para você começar a construir.
- **Normalize.css**: Preserva alguns dos estilos padrão que são úteis, como espaçamento entre linhas e correções de bugs em navegadores.

A escolha entre **reset CSS** e **Normalize.css** dependerá de suas preferências e necessidades específicas do projeto.

### Quando usar ou reset CSS?

O **reset CSS** é recomendado para a maioria dos projetos web, especialmente quando você precisa de um alto grau de controle sobre a aparência dos elementos HTML. Ao utilizar um **reset CSS**, você garante uma base consistente e evita problemas de compatibilidade entre navegadores.

### Em resumo:

O **reset CSS** é uma técnica fundamental para iniciar um projeto web com uma base sólida. Ao remover os estilos padrão dos navegadores, você ganha mais controle sobre o design da sua página e garante uma aparência consistente em diferentes dispositivos.

### [Menu Estilização CSS](../menu_estilizacao.md)


