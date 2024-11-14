# Path Params e Query String

## Path Params

- **Definição**: São partes da URL que identificam um recurso específico. Geralmente, são inseridos diretamente no caminho da URL, após o nome do recurso.
- **Exemplo na PokéAPI**: Embora uma URL que você não tenha utilizado Path Params de forma explícita, imagine que uma PokéAPI tivesse um endpoint para buscar um Pokémon específico pelo seu nome. Nesse caso, o nome do Pokémon poderia ser um Path Param:
    - `https://pokeapi.co/api/v2/pokemon/{nomeDoPokemon}`
    - Aqui, `{nomeDoPokemon}` seria substituído pelo nome real do Pokémon, como “pikachu”.

## Query String

- **Definição**: É uma parte da URL que contém pares de chave-valor, utilizados para filtrar, ordenar ou limitar os resultados de uma requisição.
- **Exemplo na PokéAPI**: Na URL que você apareceu, uma **Query String** `offset=${offset}&limit=${limit}` é usada para:
    - **offset**: Indica a partir de qual posição da lista de Pokémon a consulta deve começar.
    - **limite**: Defina a quantidade máxima de Pokémon que devem ser retornados na resposta.

### Por que usar Path Params e Query Strings?

- **Organização**: A separação entre Path Params e Query Strings ajuda a organizar a estrutura das APIs e torna as URLs mais intuitivas.
- **Flexibilidade**: Query Strings permitem criar consultas mais complexas e personalizáveis, enquanto Path Params identifica recursos específicos.
- **Padrões REST**: O uso adequado de Path Params e Query Strings é uma prática comum em APIs RESTful, facilitando a compreensão e a interação com os recursos.

### Quando usar cada um?

- **Path Params**:
    - Para identificar um recurso único e imutável.
    - Quando o valor faz parte da classificação do recurso.
    - Exemplo: /usuarios/{id}para buscar um usuário específico pelo seu ID.
- **Query String**:
    - Para filtrar, classificar ou limitar resultados.
    - Para passar parâmetros alternativos.
    - Exemplo: `/produtos?categoria=eletronicos&preco_minimo=100` para buscar produtos eletrônicos com preço mínimo de 100 reais.

### Em resumo:

- **Path Params**: Parte da URL que identifica um recurso específico.
- **Query String**: Parte da URL que contém pares de chave-valor para filtrar ou personalizar a requisição.

### [Menu Protocolo HTTP e APIs](../menu.md)

