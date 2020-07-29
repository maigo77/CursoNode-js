# CursoNode-js
Curso de Node JS ministrado por Jorge Sant'Ana e feito por Augusto Seabra


Design Pattern Model-View-Controller (MVC)

  - O MVC nos permite separar as lógicas de entrada, de negócio e, lógicas de interface de usuário em locais bem especificos dentro do nosso aplicativo.

  - O padrão sugere três separações:
    Model: representam os dados da noss aplicação, aqui são centralizadas as regras de negócio.
    Neste projeto prático, utilizamos o model para manipular a tabela de notícias no bando de dados.
    Views: Servem para fornecer algum tipo de representação de dados. Neste projeto prático, utilizamos as views para armazenar os arquivos de HTML estático em conjunto com códigos dinâmicos em JavaScript usando o EJS.
    Controller: é um mediador, recebe as requisições de clientes que podem ser usuários ou outros aplicativos e converte essas requisições em comandos que vão atuar sobre nossos models e views. Neste projeto prático, implementamos os controllers junto com as rotas do sistema de tal modo a fornecer para cada rota um controller específico.

  - Os objetivos principais da utilização do MVC consistem em reutilização de código, separação de conceitos e estabelecimento de uma estrutura mais produtiva para trabalho em equipe.