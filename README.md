# Integração Contínua com GitHub Actions

Este projeto demonstra uma pipeline de integração contínua usando GitHub Actions com testes automatizados e relatório de execução.

## Objetivo

A pipeline atende aos seguintes requisitos:

- Execução automática em `push` na branch `main`
- Execução manual via `workflow_dispatch`
- Execução agendada semanalmente (`schedule`)
- Execução de testes automatizados com Mocha
- Geração de um relatório de testes em formato JUnit/XML
- Publicação do relatório como artefato da pipeline

## Estrutura da solução

O workflow principal está em `.github/workflows/node.js.yml`.

### Disparadores do workflow

- `push` em `main`
- `workflow_dispatch` para execução manual
- `schedule` para execução agendada toda segunda-feira às 01:00 UTC

### Job principal

O job `test` realiza:

1. Checkout do código
2. Configuração do Node.js nas versões `18.x`, `20.x` e `22.x`
3. Instalação de dependências com `npm ci`
4. Criação da pasta `test-results`
5. Execução dos testes com `npm run test:ci`
6. Upload do diretório `test-results` como artefato da pipeline

## Testes automatizados

Os testes estão localizados em `test/ServicoDePagamento.test.js` e validam o comportamento da classe `ServicoDePagamento`.

### Comandos disponíveis

- `npm test` — executa os testes usando o repórter padrão do Mocha
- `npm run test:ci` — executa os testes e gera um relatório JUnit em `test-results/TESTS-results.xml`

## Relatório de testes

O relatório gerado na pipeline está disponível como artefato com o nome `junit-test-report`.

Ele contém o arquivo:

- `test-results/TESTS-results.xml`

Esse relatório pode ser baixado diretamente da execução do workflow no GitHub Actions.

## Observações sobre os conceitos usados

- **GitHub Actions**: ferramenta de CI/CD para automatizar builds e testes
- **workflow_dispatch**: permite executar o pipeline manualmente a partir da interface do GitHub
- **schedule**: agenda a execução periódica do workflow usando cron
- **Artifacts**: permitem armazenar e disponibilizar arquivos gerados pela pipeline
- **Mocha**: framework de testes JavaScript usado para validar o comportamento da aplicação
- **JUnit XML**: formato de relatório amplamente compatível com ferramentas de CI

## Como usar

1. Abra o projeto
2. Execute `npm ci`
3. Execute `npm test` para rodar os testes localmente
4. No GitHub Actions, acesse o workflow `CI - Node.js Test e Relatório` para execução manual ou agendada
