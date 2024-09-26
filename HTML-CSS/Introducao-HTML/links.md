# O que são Links?

Na essência, um link (ou hiperlink) é uma conexão entre duas páginas da web ou entre uma página e outro recurso online. Quando você clica em um link, seu navegador leva para um novo local na internet. Essa é uma base da World Wide Web, permitindo que naveguemos de um site para outro, explorando um vasto universo de informações.

## Links em HTML

### Como criar um link em HTML:

No HTML, usamos uma tag `<a>`para criar um link. O atributo `href` dentro dessa tag especifica o endereço (URL) para onde o link direcionar o usuário.

### Exemplo:

```
<a href="https://www.google.com">Visite o Google</a>
```

**Resultado**: Visite o Google

### Anatomia de um link:

- `<a>`: Tag âncora, que define o início e o fim do link.
- `href`: Atributo que especifica o endereço (URL) do destino.
- `Texto entre as tags`: O texto que será exibido como link.

### Tipos de links:

- **Links internos**: Conecte-se às páginas dentro do mesmo site.
- **Links externos**: Conecte-se a páginas em outros sites.
- **Links para arquivos**: Podem levar a downloads de arquivos (PDF, documentos, imagens, etc.).
- **Links para especificações de uma página**: Usando o atributo `id` e o símbolo `#`.
- **Links para e-mail**: Usando o formato `mailto`:.

### Exemplo de link para uma seção específica:

```
<a href="#contato">Entre em contato conosco</a>

<h2 id="contato">Contato</h2>
```

### Exemplo de link para e-mail:

```
<a href="mailto:contato@exemplo.com">Envie um e-mail</a>
```

### Outras funcionalidades:

- Abrir link em nova aba: Use o atributo `target="_blank"`.
- Adicione um título ao link: Use o atributo `title`.

```
<a href="https://www.example.com" target="_blank" title="Visite nosso site">Saiba mais</a>
```

## Links na Internet

### URLs (Localizadores Uniformes de Recursos):

- São os endereços únicos que identificam cada recurso na internet.
- A estrutura básica de uma URL é: `protocolo://domínio/caminho(ex https://www.example.com/contato:)`.

### Como funcionam os links na internet:

1. Quando você clica em um link, seu navegador envia uma solicitação para o servidor onde o recurso está hospedado.
2. O servidor encontra o recurso solicitado e envia de volta para o seu navegador.
3. O navegador exibe o conteúdo do recurso em sua tela.

### Protocolos:

- **HTTP**: Protocolo de transferência de hipertexto, o mais comum para páginas web.
- **HTTPS**: Versão segura do HTTP, que utiliza criptografia para proteger a comunicação.
- **Outros protocolos**: FTP (transferência de arquivos), SMTP (e-mail), etc.

### Domínios:

- São nomes que identificam sites na internet (ex: [URL inválido removido], exemplo.com).
- São registrados e gerenciados por empresas registradas.

### Dicas Adicionais

- **Use textos descritivos para os links**: Ajude os usuários a entender para onde o link leva.
- **Utilize links de forma estratégica**: Evite links que não agregam valor ao conteúdo.
- **Mantenha os links atualizados**: Links quebrados prejudicam a experiência do usuário.
- **Utilize atributos `rel`e `nofollow` para controlar o modo como os mecanismos de busca tratam os links**.

### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)