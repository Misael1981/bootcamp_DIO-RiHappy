# Body e Status Code

## Body

- **O que é**: É a parte da mensagem HTTP que contém os dados que estão sendo enviados para o servidor. É como o "pacote" que você está enviando.
- **Formato**: O formato do corpo depende do tipo de conteúdo indicado no cabeçalho Content-Type. Pode ser texto (plain, HTML, JSON, XML), dados binários (imagens, arquivos) ou qualquer outro formato definido.
- **Quando usar**: É utilizado em requisições que envolvem a criação, atualização ou exclusão de recursos no servidor, como ao enviar um formulário, fazer upload de um arquivo ou enviar dados para uma API.

**Exemplo**: Em uma requisição POST para criar um novo usuário, o corpo pode conter um JSON com os dados do usuário:

```
{
    "nome": "João da Silva",
    "email": "joao@example.com"
}
```

## Status Code

- **O que é**: É um número de três dígitos que indica o resultado da requisição. Ele é enviado pelo servidor em resposta à requisição do cliente.
- **Função**: Informar se a requisição foi bem-sucedida, se ocorreu algum erro ou se a ação solicitada não pode ser realizada.
- **Grupos**:
    - **2xx**: Sucesso. A requisição foi recebida, recebida e aceita pelo servidor.
    - **3xx**: Redirecionamento. O cliente deve tomar alguma ação adicional para concluir uma requisição.
    - **4xx**: Erro do cliente. A requisição contém um erro de sintaxe, ou o cliente não tem autorização para acessar o recurso solicitado.
    - **5xx**: Erro no servidor. O servidor não foi capaz de processar a requisição devido a um erro interno.

### Exemplos de códigos de status:

- **200 OK**: A requisição foi bem-sucedida.
- **404 Not Found**: O recurso solicitado não foi encontrado.
- **500 Internal Server Error**: Ocorreu um erro interno no servidor.

### Relação entre corpo da requisição e código de status:

- **Requisições bem-sucedidas (2xx)**: O corpo da resposta geralmente contém os dados solicitados ou uma confirmação da operação realizada.
- **Erros do cliente (4xx)**: O corpo da resposta pode conter informações adicionais sobre o erro, como uma mensagem de erro.
- **Erros do servidor (5xx)**: O corpo da resposta pode conter informações técnicas sobre o erro, mas nem sempre é exibido para o usuário.

### Em resumo:

O corpo da requisição e o código de status são elementos essenciais de uma interação HTTP. O corpo carrega os dados da requisição, enquanto o código de status indica o resultado da operação. Ao entender esses conceitos, você poderá construir aplicações web mais robustas e eficientes.

### [Menu Protocolo HTTP e APIs](../menu.md)

