# URL Path, Método

**URL Path, Método** são conceitos fundamentais na arquitetura da web e na comunicação entre clientes e servidores. Vamos desmistificar cada um deles:

## Caminho da URL

- **O que é**: É uma parte de uma URL que indica a localização específica de um recurso em um servidor web. Imagine um sistema de arquivos, onde o caminho é o caminho que você percorre para encontrar um arquivo específico.
- **Exemplo**: Em `https://www.exemplo.com/produtos/eletronicos/televisores`, o caminho é "/produtos/eletrônicos/televisores". Ele indica que o recurso desejado está localizado dentro da pasta "produtos", depois na subpasta "eletrônicos" e, finalmente, no arquivo ou página "televisores".

## Método HTTP

- **O que é**: É uma ação que você deseja realizar em um recurso identificado por uma URL. Os métodos mais comuns são:
    - **GET**: Obter um recurso.
    - **POST**: Crie um novo recurso.
    - **PUT**: Atualizar um recurso existente.
    - **DELETE**: Excluir um recurso.
    - **PATCH**: Atualizar parcialmente um recurso.
- **Exemplo**: Quando você acessa uma página da web, seu navegador envia uma requisição HTTP GET para o servidor, solicitando o conteúdo dessa página.

## Conversão de Domínio em IP e DNS

- ### Por que isso acontece:

    - **Humanos vs. Máquinas**: Nós, humanos, preferimos lembrar nomes como "[URL inválido removido]" dos números como "142.250.186.142".
    - **Hierarquia**: A internet é uma rede global com milhões de dispositivos. Para organizar tudo isso, utilizamos o Sistema de Nomes de Domínio (DNS).
    - **Funcionamento**:

        1. **Você digita**: Quando você digita um endereço como "https://www.exemplo.com"em seu navegador, ele envia uma consulta ao servidor DNS mais próximo.

        2. **Consulte**: O servidor DNS consulte outros servidores DNS até encontrar o endereço IP correspondente ao domínio.

        3. **Resposta:** O servidor DNS retorna o endereço IP para o seu navegador.

        4. **Conexão**: Seu navegador então estabelece uma conexão com o servidor web no endereço IP obtido.

### Em resumo:

- **URL Path**: Indica o caminho para um recurso específico em um servidor.
- **Método HTTP**: Defina a ação que você deseja realizar nesse recurso.
- **Caminho IP**: Não existe como conceito isolado, mas a conversão de domínio em IP (através do DNS) é fundamental para que os navegadores encontrem os servidores na internet.

### Para que sirva tudo isso? 

Essa comunicação cliente-servidor, baseada em URLs, métodos HTTP e resolução de nomes de domínio, é a espinha dorsal da World Wide Web. Ela permite que você navegue por sites, faça compras online, assista a vídeos e muito mais.

### [Menu Protocolo HTTP e APIs](../menu.md)




