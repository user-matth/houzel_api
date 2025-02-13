# Houzel AI API

Este guia irá ajudá-lo a configurar o ambiente do projeto do zero, instalando todas as dependências necessárias (Node.js, npm, Bun, NestJS CLI e Prisma) e configurando a conexão com o banco de dados.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado (versão LTS recomendada).  
  Baixe em: [https://nodejs.org/](https://nodejs.org/)

- **npm**: Geralmente instalado junto com o Node.js. Você também pode optar por usar [Yarn](https://yarnpkg.com/) ou [Bun](https://bun.sh/).

- **Bun (opcional)**: Uma alternativa ao npm, que pode acelerar a instalação de pacotes.  
  Para instalar o Bun, execute:
```bash
  curl -fsSL https://bun.sh/install | bash
```

- NestJS CLI: Instale globalmente com o npm:

```bash
npm install -g @nestjs/cli
```

- Prisma CLI: Embora o Prisma seja instalado como dependência do projeto, você pode instalá-lo globalmente se desejar:

```bash
npm install -g prisma
```

## Instalação do Projeto

1. Clone o repositório
2. 
```bash
git clone https://seu-repositorio.git
cd nome-do-projeto
```

2. Instale as dependências

- Usando npm:

```bash
npm install
```

- Usando Bun (indicado):

```bash
bun install
```

3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/databaseName"
```

Substitua `USER`, `PASSWORD` e `databaseName` pelos dados do seu ambiente e banco de dados PostgreSQL.

4. Configure o Prisma

- Gere o client do Prisma:

```bash
npx prisma generate
```

- Se precisar criar ou atualizar as migrações (após ajustar seu schema):

```bash
npx prisma migrate dev --name init
```

## Rodando o Projeto

### Modo de Desenvolvimento

```bash
npm run start:dev
```

### Modo de Produção

```bash
npm run start:prod
```

## Testes
### Testes Unitários

```bash
npm run test
```

### Testes e2e

```bash
npm run test:e2e
```

### Cobertura de Testes

```bash
npm run test:cov
```

## Observações
- Este projeto utiliza o NestJS como framework para construir aplicações escaláveis e organizadas.
- O Prisma é utilizado como ORM para facilitar a interação com o banco de dados PostgreSQL.
- Se optar por utilizar o Bun, os comandos de instalação poderão variar, mas a estrutura e funcionamento geral do projeto permanecem os mesmos.
