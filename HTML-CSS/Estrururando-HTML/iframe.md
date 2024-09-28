# A tag `<iframe>`: Um quadro dentro de sua página

## O que é um `<iframe>`?

Uma tag `<iframe>`em HTML é como um quadro dentro de sua página web. Ela permite que você insira um documento HTML de outra página dentro de sua página atual. Imagine que você está lendo um artigo e, no meio dele, há um vídeo no YouTube. Esse vídeo foi digitado em um `<iframe>`.

## Para que serve?

- **Inclusão de conteúdo externo**: É comum usar `<iframe>`para incorporar mapas, vídeos, formulários ou até mesmo páginas inteiras de outros sites.
- **Criação de layouts complexos**: Ao dividir uma página em diferentes `<iframe>`, você pode criar layouts mais complexos e organizar o conteúdo de forma mais flexível.

### Exemplo básico:

```
<iframe src="https://www.example.com" width="300" height="200"></iframe>
```

Neste exemplo, um `<iframe>`é criado para mostrar o conteúdo da página`https://www.example.com`dentro de um quadro com 300 pixels de largura e 200 pixels de altura.

## Problemas de segurança com `<iframe>`:

Apesar de ser uma ferramenta útil, pode o `<iframe>`apresentar alguns riscos de segurança se não for utilizado com cuidado:

- **Clickjacking**: Ataques em que um elemento invisível ou transparente é colocado sobre um botão importante (como um botão de "enviar" em um formulário), enganando o usuário a clicar em um lugar onde ele não deseja.
- **XSS (Cross-Site Scripting)**: Se o conteúdo dentro do `<iframe>`não for devidamente higienizado, um atacante pode injetar scripts maliciosos que podem roubar dados do usuário ou comprometer a segurança do site.
- **Isolamento**: O conteúdo contido nele `<iframe>`pode ser isolado do resto da página, ou pode dificultar a implementação de algumas funcionalidades.

## Como usar `<iframe>`o formato seguro:

- **Sandbox**: Utilize o atributo sandboxpara restringir as ações que o conteúdo dentro `<iframe>`pode realizar.
- **Política de segurança de conteúdo (CSP)**: Configure o CSP para controlar as fontes de recursos que você `<iframe>`pode carregar.
- **Valide e higienize todo o conteúdo**: Certifique-se de que todo o conteúdo inserido `<iframe>`seja validado e higienizado para evitar ataques de XSS.
- **Mantenha o software atualizado**: Mantenha seu servidor web e os frameworks que você utiliza atualizados para corrigir vulnerabilidades.
- **Mínimo de permissões**: Conceda `<iframe>`apenas as permissões necessárias para operar corretamente.

### Alternativas ao `<iframe>`:

Em alguns casos, pode ser mais seguro e eficiente utilizar outras técnicas para incorporar conteúdo em sua página, como:

- **APIs**: Muitas plataformas oferecem APIs para incorporar seus conteúdos de forma mais controlada e segura.
- **Componentes Web**: Essa tecnologia permite criar componentes personalizados que podem ser reutilizados em diferentes projetos.

### Conclusão

O `<iframe>`é uma ferramenta poderosa, mas requer cuidado ao ser utilizada. Ao seguir as melhores práticas de segurança, você pode usar `<iframe>`de forma segura e eficaz em seus projetos.


### [Menu HTML/CSS](../menu_html-css.md)