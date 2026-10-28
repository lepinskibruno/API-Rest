# API de Transações e Estatísticas

API REST desenvolvida em Node.js como exercício prático, com foco no recebimento e validação de transações financeiras e no cálculo de estatísticas.

## Funcionalidades

- **Registrar transações:** recebe valores e datas, validando os dados e impedindo transações futuras ou com valores negativos.
- **Limpar transações:** remove todas as transações armazenadas.
- **Consultar estatísticas:** calcula quantidade, soma, média, menor e maior valor das transações realizadas nos últimos 60 segundos.
- **Tratar transações vazias:** retorna estatísticas zeradas quando não existem transações no período analisado.

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/transacao` | Registra uma transação válida |
| DELETE | `/transacao` | Remove todas as transações |
| GET | `/estatistica` | Retorna estatísticas dos últimos 60 segundos |

## Tecnologias

- Node.js
- JavaScript
- API REST
- JSON
- Git e GitHub

## Como executar

1. Clone o repositório:

   `git clone https://github.com/lepinskibruno/API-Rest.git`

2. Entre na pasta:

   `cd API-Rest`

3. Instale as dependências:

   `npm install`

4. Execute o projeto conforme o script configurado no `package.json`.

## Objetivo

Praticar desenvolvimento de APIs REST, validação de dados, manipulação de datas e cálculo de estatísticas utilizando Node.js.
