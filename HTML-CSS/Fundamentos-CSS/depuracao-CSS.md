# Depurando CSS

O processo de depuração (conhecido como debbug), é uma forma de identificar problemas no código fonte de uma aplicação e entender seu comportamento.

## Dev Tools

Todos os navegadores possuem uma ferramenta voltada para os desenvolvedores que permite examinar nossos sites, requisições para recursos externos, entre outros. Essa ferramenta é conhecida como **DEV TOOLS**.

Essa ferramenta tem diversos recursos básicos, e outros até bastante avançados, que permite analisar como os elementos da página estão se comportando em tela.

Para abrirmos o **Dev Tools** do Google Chrome, temos os seguintes atalhos:

- Segundo botão do mouse > Inspencionar;
- CTRL + SHIFT + I;
- CTRL + SHIFT + C;
- F12;

É importante frisar que através do **Dev Tolls** como examinar **QUALQUER** site aberto no navegador.

## Principais Funcionalidades

### 1. *Elements (Elementos)*
- **O que é:** Mostra a estrutura HTML da página e permite visualizar e editar os estilos CSS aplicados a cada elemento.
- **Como usar:** Clique em um elemento no painel ou use a ferramenta de seleção (ícone de seta no canto superior esquerdo) para selecionar um elemento diretamente na página. Você pode editar o HTML e os estilos CSS em tempo real.

### 2. *Console*
- **O que é:** Um espaço para executar comandos JavaScript e ver mensagens de erro ou logs.
- **Como usar:** Você pode digitar comandos JavaScript diretamente e pressionar Enter para executá-los. É ótimo para testar pequenas funções ou verificar valores de variáveis.

### 3. *Sources (Fontes)*
- **O que é:** Permite visualizar todos os arquivos carregados pela página, incluindo scripts JavaScript, arquivos CSS e imagens.
- **Como usar:** Navegue pelos arquivos no painel à esquerda. Você pode colocar breakpoints nos scripts para depuração, permitindo que você pause a execução do código e inspecione variáveis.

### 4. *Network (Rede)*
- **O que é:** Mostra todas as requisições feitas pela página (como arquivos HTML, CSS, JS, imagens).
- **Como usar:** Abra a aba e recarregue a página para ver todas as requisições sendo feitas. Você pode ver detalhes como tempo de carregamento, tamanho do arquivo e status da requisição.

### 5. *Performance*
- **O que é:** Permite analisar o desempenho da sua página, ajudando a identificar gargalos.
- **Como usar:** Clique em "Record" para começar a gravar a atividade da página e depois pare a gravação. Você verá um gráfico com informações sobre tempos de carregamento e execução.

### 6. *Application (Aplicativo)*
- **O que é:** Fornece informações sobre os recursos da aplicação web, como cookies, armazenamento local e caches.
- **Como usar:** Navegue pelas abas para ver os dados armazenados pela sua aplicação, como cookies ou dados do Local Storage.

### Dicas Finais
- Explore as opções de "Responsive Design Mode" (modo de design responsivo) para testar como sua página se comporta em diferentes tamanhos de tela.
- Use o "Lighthouse" para realizar auditorias na sua página quanto ao desempenho, acessibilidade e SEO.


### [Voltar ao Menu HTML/CSS](/HTML-CSS/menu_html-css.md)
