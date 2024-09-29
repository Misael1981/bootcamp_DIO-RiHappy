# Seletor Universal no CSS

O seletor universal é representado pelo asterisco (*) e é usado para selecionar todos os elementos de uma página HTML. Por exemplo:

```
css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```


Esse código aplica um estilo de margem e preenchimento zero para todos os elementos, além de definir o modelo de caixa para border-box, que é uma prática comum para garantir que o preenchimento e a borda sejam incluídos nas dimensões totais do elemento.

### Vantagens do Seletor Universal

1. **Aplicação Global**: O seletor universal é útil para aplicar estilos globais a todos os elementos de uma página de maneira rápida e eficiente. Isso pode ajudar a criar uma base consistente para o layout.

2. **Reset de Estilos**: É frequentemente usado em "resets" de CSS, onde você deseja remover margens e preenchimentos padrão de todos os elementos, criando um ponto de partida limpo.

3. **Simplicidade**: Usar um único seletor para afetar todos os elementos pode simplificar a manutenção do CSS, já que você não precisa especificar cada elemento individualmente.

### Desvantagens do Seletor Universal

1. **Desempenho**: O uso do seletor universal pode afetar o desempenho em páginas grandes, pois o navegador precisa aplicar estilos a todos os elementos. Em projetos maiores, isso pode resultar em um tempo de renderização mais lento.

2. **Especificidade Baixa**: Como o seletor universal tem a menor especificidade, qualquer estilo mais específico (como ID ou classe) irá sobrescrever seus estilos. Isso pode levar a comportamentos inesperados se não for bem gerenciado.

3. **Efeito Indesejado**: Aplicar estilos globais pode causar efeitos indesejados em alguns elementos, especialmente se você não tiver cuidado com as regras que está definindo. Por exemplo, um estilo aplicado a todos os elementos pode não ser apropriado para certos tipos de conteúdo.

### Conclusão

O seletor universal é uma ferramenta poderosa no CSS, ideal para aplicar estilos globais ou realizar resets. No entanto, deve ser usado com cautela devido ao seu impacto potencial na performance e à possibilidade de causar efeitos indesejados em elementos específicos. É sempre bom equilibrar seu uso com seletores mais específicos para garantir um design coeso e eficiente.


### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)