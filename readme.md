
# Projeto 2 Serralheria

O objetivo principal do projeto é melhorar a captação de clientes e organizar o atendimento de uma serralheria. Como o serralheiro administra o negócio sozinho, ele precisa de mais visibilidade e de um processo de atendimento mais organizado para responder rapidamente a possíveis clientes.

- Resolução
    
    A proposta do projeto foi desenvolver uma página simples em HTML, CSS e JavaScript para organizar e apresentar as principais informações da serralheria: etapas do atendimento e execução, experiência do profissional, materiais utilizados na construção de gradis, portfólio de projetos entregues e um canal de contato para novos clientes. 
    
    Próxima etapa do projeto: **enviar um formulário para o n8n**, que irá **processar os dados recebidos em JSON** com apoio de **IA**, **gerar um resumo da solicitação** e **enviar esse resumo para o WhatsApp pessoal do cliente**, incluindo **nome, contato e detalhes principais**, para que ele consiga retornar rapidamente ao lead.
    
    Complexidade baixa
    
- Tecnologias utilizadas
    
    As tecnologias utilizadas no projeto são HTML, CSS e JavaScript, além do n8n integrado ao WhatsApp.

  | Item | Descrição |
| --- | --- |
| HTML | Estrutura da página (seções como serviços, etapas do atendimento, portfólio e contato). |
| CSS | Estilização e responsividade (layout, cores, tipografia e adaptação para celular). |
| JavaScript | Interatividade e lógica do front-end (validações, envio do formulário e manipulação do DOM). |
| n8n | Automação do fluxo do formulário: recebe os dados em JSON, processa com IA e monta o resumo do lead. |
| WhatsApp | Canal de notificação: entrega o resumo do lead diretamente no WhatsApp pessoal do cliente. |


### Links em Uso

- [Icones](https://ionic.io/ionicons)
- [Fontes](https://fonts.google.com/)

### Opções de Server

> **Usar o Vite**
>
> O Vite é a ferramenta moderna mais popular para desenvolvimento web. Ele cria um servidor local super rápido e atualiza a página automaticamente sempre que alteras o código (Hot Module Replacement).
>
> 1. **Instala o Vite** como dependência de desenvolvimento no teu projeto:\*\***bash**
>
>    ```
>    npm install vite --save-dev
>    
>    ```
>
>    Use o código com cuidado.
>
> 2. **Configura o comando** no teu ficheiro `package.json`. Procura o campo `"scripts"` e adiciona a linha `"dev": "vite"`:\*\***json**
>
>    ```
>    "scripts": {
>      "dev": "vite"
>    }
>    
>    ```
>
>    Use o código com cuidado.
>
> 3. **Garante a estrutura correta**: O teu ficheiro `index.html` deve estar na **raiz** do projeto (junto ao `package.json`).
>
> 4. **Roda o projeto**:\*\***bash**
>
>    ```
>    npm run dev
>    
>    ```
>
>    Use o código com cuidado.
>
>    O terminal vai dar-te um link (como `http://localhost:5173`) para abrires no navegador.
>
> ---
