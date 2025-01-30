# CRUD API com Express, TypeScript e PostgreSQL

Este projeto é uma API CRUD (Create, Read, Update, Delete) desenvolvida com Express e TypeScript, utilizando um banco de dados PostgreSQL em um container Docker.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- PostgreSQL
- Docker
- Prisma ORM

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Como Rodar o Projeto

### 1. Clonar o repositório

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

```sh
npm install
```

### 3. Criar o arquivo de variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione:

```env
DATABASE_URL="postgresql://youruser:yourpassword@localhost:5432/yourdatabase?schema=public"
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### 4. Subir o banco de dados com Docker

```sh
docker-compose up -d
```

Isso iniciará um container com PostgreSQL.

### 5. Executar as migrações do banco de dados

```sh
npx prisma migrate dev --name init
```

### 6. Rodar a aplicação

```sh
npm run dev
```

A API estará rodando em `http://localhost:3000`

## Estrutura do Projeto

```
/
|-- src/
|   |-- controllers/
|   |-- routes/
|   |-- services/
|   |-- prisma/
|   |-- index.ts
|-- prisma/
|   |-- schema.prisma
|-- .env
|-- docker-compose.yml
|-- package.json
|-- tsconfig.json
```

## Endpoints

### Criar um item

```http
POST /tarefas
```

**Body:**

```json
{
  "title": "Tarefa 1",
  "status": "pendente"
}
```

### Listar todos as tarefas

```http
GET /tarefas
```

### Buscar uma tarefa por ID

```http
GET /tarefas/:id
```

### Atualizar uma tarefa

```http
PUT /tarefas/:id
```

**Body:**

```json
{
  "name": "Tarefa atualizada",
  "description": "Nova descrição"
}
```

### Deletar um tarefa

```http
DELETE /tarefas/:id
```

## Parar e remover containers Docker

Caso precise parar o banco de dados:

```sh
docker-compose down
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias! Faça um fork do repositório, crie uma branch e envie um pull request.
