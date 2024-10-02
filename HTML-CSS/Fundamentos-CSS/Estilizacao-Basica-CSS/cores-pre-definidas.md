# Cores Pré-definidos no CSS

## Introdução

O CSS (Cascading Style Sheets) oferece uma ampla gama de opções para estilizar páginas da web, e os núcleos são um dos elementos mais importantes. Além de podermos definir núcleos através de códigos hexadecimais, RGB, HSL e outros formatos, o CSS também nos fornece a utilização de **núcleos pré-definidos** . Esses núcleos são palavras-chave que representam tendências comuns e conhecidas, facilitando a escrita de estilos.

### Quais são os núcleos pré-definidos?

Os navegadores modernos suportam cerca de 140 nomes de núcleos pré-definidos. Essas cores abrangem uma vasta paleta, desde as básicas como preto (preto), branco (branco) e vermelho (vermelho), até tonalidades mais específicas como água, fúcsia e azeitona.

### Exemplo de utilização:

```
p {
  color: blue;
}
```

O código acima irá definir o cor do texto dentro de todos os parágrafos como azul.

### Por que usar cores pré-definidas?

- **Facilidade**: É mais intuitivo escrever "red" do que seu equivalente em hexadecimal (#FF0000).
- **Leitura**: Códigos CSS com nomes de cores são mais legíveis e simples de entender.
- **Compatibilidade**: As cores pré-definidos são amplamente suportados por todos os navegadores modernos.

## Núcleos especiais: transparent e currentColor

Além dos núcleos tradicionais, o CSS oferece duas propriedades especiais relacionadas ao cor:

- **transparent**: Essa propriedade torna um elemento completamente transparente, ou seja, invisível. É útil para criar efeitos como botões com bordas, mas sem preenchimento.
- **currentColor**: Essa propriedade define o cor de um elemento como sendo a mesma cor que foi definida para outra propriedade, geralmente a propriedade color. Isso é útil para criar elementos que herdam o cor de seus pais.

### Exemplo de utilização:

```
a {
  color: blue;
  text-decoration: underline currentColor;
}
```

No exemplo acima, o sublinhado do link terá a mesma cor que o texto, que foi definido como azul.

### Lista completa dos núcleos pré-definidos

Infelizmente, não é prático listar todos as 140 cores pré-definidos aqui. Recomendamos que você consulte a documentação completa do MDN Web Docs para uma referência completa:https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value

### Dicas adicionais

- **Combinações de cores**: Utilize ferramentas online para encontrar combinações de cores harmoniosas e criar paletas personalizadas.
- **Acessibilidade**: Ao escolher núcleos, leve em consideração a acessibilidade. -se de que os núcleos tenham contraste suficiente para serem legíveis por pessoas com deficiência visual.
- **Tendências**: Esteja atento às tendências de design e utilize os núcleos para criar interfaces modernas e interessantes.

### Conclusão

Os núcleos pré-definidos no CSS são uma ferramenta poderosa para estilizar páginas web de forma rápida e eficiente. Ao dominar o uso desses núcleos, você poderá criar designs mais personalizados e profissionais.

### [Menu Estilização CSS](../menu_estilizacao.md)

