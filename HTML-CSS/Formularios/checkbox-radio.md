# Checkbox e Radio

Os tipos `checkbox`e `radio` são fundamentais para criar opções de seleção em formulários HTML. Embora ambos permitam que o usuário escolha entre várias opções, eles apresentam comportamentos distintos, que são definidos em grande parte pelo atributo `name`.

## `Checkbox`: Múltiplas Seleções

- **Funcionalidade**: Permite que o usuário selecione uma ou mais opções de um conjunto.
- **Atributo `name`**: Cada `checkbox` que pertence a um grupo independente deve ter um nome único . Isso significa que você pode agrupar caixas de seleção relacionadas dando a elas o mesmo nome. Ao enviar o formulário, os valores de todas as caixas de seleção marcadas dentro de um mesmo grupo serão enviados.

### Exemplo:

```
<form>
  <input type="checkbox" name="hobbies" value="ler"> Ler
  <input type="checkbox" name="hobbies" value="cozinhar"> Cozinhar
  <input type="checkbox" name="hobbies" value="viajar"> Viajar
</form>
```

Neste exemplo, o usuário pode selecionar um, dois ou todos os hobbies. Ao enviar o formulário, o servidor receberá um array com os valores dos checkboxes marcados (por exemplo, `["ler", "cozinhar"]`).

## Radio: Seleção Única

- **Funcionalidade**: Permite que o usuário selecione apenas uma opção de um conjunto.
- **Atributo name**: Todos os botões de rádio que pertencem a um mesmo grupo devem ter o** mesmo nome** . Isso cria um grupo de opções exclusivas e exclusivas. Ao selecionar um botão de rádio, os outros botões do mesmo grupo são automaticamente desmarcados.

### Exemplo:

```
<form>
  <input type="radio" name="genero" value="masculino"> Masculino
  <input type="radio" name="genero" value="feminino"> Feminino
  <input type="radio" name="genero" value="outro"> Outro
</form>
```

Neste exemplo, o usuário pode selecionar apenas uma das opções do gênero. Ao enviar o formulário, o servidor receberá o valor do botão da rádio selecionada.

### Resumir o papel do atributo `name`

- **Checkbox**: Caixas de seleção agrupadas relacionadas, permitindo múltiplas seleções.
- **Rádio**: Grupo de botões de rádio relacionados, permitindo apenas uma seleção.

Em ambos os casos, o valor do atributo `name` define o grupo ao qual o elemento pertence.


### [Menu HTML/CSS](../menu_html-css.md)