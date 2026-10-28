# API de Transações e Estatísticas

API REST desenvolvida em Node.js e Express como exercício prático, com foco no recebimento e validação de transações financeiras e no cálculo de estatísticas.

## Funcionalidades

- Registrar transações, validando valores e datas.
- Impedir transações com valores negativos ou datas futuras.
- Excluir todas as transações armazenadas.
- Consultar estatísticas dos últimos 60 segundos.
- Retornar quantidade, soma, média, menor e maior valor das transações.
- Retornar estatísticas zeradas quando não existem transações no período analisado.

## Tecnologias

- Node.js
- Express
- JavaScript
- JSON
- Git e GitHub
- Insomnia para testes das requisições HTTP

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/transacao` | Registra uma nova transação. |
| `DELETE` | `/transacao` | Remove todas as transações. |
| `GET` | `/estatistica` | Retorna estatísticas dos últimos 60 segundos. |

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- Git instalado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/bruno2906-lang/API-Rest.git
```

Entre na pasta do projeto:

```bash
cd API-Rest
```

Instale as dependências:

```bash
npm install
```

Inicie a API:

```bash
npm start
```

O servidor será iniciado na porta `3000`.

## Testes

As requisições podem ser testadas utilizando o Insomnia ou outra ferramenta de requisições HTTP.

## Objetivo

Praticar o desenvolvimento de APIs REST, validação de dados, manipulação de datas e cálculo de estatísticas utilizando Node.js.

## Autor

**Bruno Lepinski**

[GitHub](https://github.com/lepinskibruno)
