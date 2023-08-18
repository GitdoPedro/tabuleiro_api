# Tabuleiro API

Desenvolvimento de uma API RESTful para Gestão de Jogos de Tabuleiro com Node.js, Express e Microsoft SQL Server


## Requisitos

- Node.js
- SQL Server

## Como Rodar

1. Clone este repositório:

    ```bash
    git clone https://github.com/GitdoPedro/tabuleiro_api.git
    ```

2. Instale as dependências:

    ```bash
    cd nome-do-repositorio
    npm init -y
    npm i express
    npm i mssql
    npm i sequelize    
    ```

3. Configure o banco de dados:

    - Crie um banco de dados no seu sistema de gerenciamento de banco de dados (ex.: Sql Server).
    - Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente:

    ```dotenv
    DB_HOST=seu-host
    DB_PORT=sua-porta
    DB_NAME=seu-banco-de-dados
    DB_USER=seu-usuario
    DB_PASSWORD=sua-senha
    ```


4. Inicie o servidor:

    ```bash
    node src/server
    ```

    A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

## Rotas

- **POST /game**: Cria um novo jogo.
- **GET /game**: Lista todos os jogos.
- **GET /game/:id**: Obtém detalhes de um jogo específico.
- **PUT /game/:id**: Atualiza um jogo existente.
- **DELETE /game/:id**: Exclui um jogo.

## Melhoras
- Implementação do delete lógico
- Implementação de uma tabela de logs
- Implementação de uma tabela de usuário
- Implementação de um frontEnd

## Autor

Pedro Lima do Nascimento
