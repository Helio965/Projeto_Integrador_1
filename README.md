# NEXO — Faturamento Inteligente

Plataforma web de análise de dados comerciais para pequenos comércios, desenvolvida como entrega do **Projeto Integrador — Análise e Desenvolvimento de Sistemas**.

## Descrição

O NEXO importa relatórios de vendas e compras exportados por sistemas de PDV, processa esses dados, gera indicadores gerenciais, apresenta dashboards e disponibiliza uma devolutiva estratégica ao cliente. A solução atua como uma consultoria orientada por dados, com portal digital próprio.

## Integrantes

| Integrante | Função no time |
|---|---|
| Hélio | [PREENCHER: função no time] |
| João Vitor | [PREENCHER: função no time] |
| João Cesar | [PREENCHER: função no time] |
| Carlos Eduardo | [PREENCHER: função no time] |

## Contexto acadêmico

Disciplina: Projeto Integrador — Análise e Desenvolvimento de Sistemas. O objetivo da entrega é organizar este repositório como evidência técnica do ciclo completo de desenvolvimento: identificação de problema real, Design Thinking, definição de escopo, requisitos, backlog, planejamento de sprint, protótipo, implementação incremental, teste de usabilidade, feedback do usuário, refino da solução, demonstração do MVP e apresentação final.

## Problema

Pequenos comércios possuem dados registrados em sistemas de PDV, especialmente relatórios de vendas e compras, mas têm dificuldade para interpretar essas informações de forma estratégica. O gestor vê números soltos, mas não consegue identificar com clareza quais produtos vendem mais, quais mais impactam o faturamento, quais itens podem estar com saldo estimado parado e quais decisões comerciais tomar com base nos dados.

## Público-alvo

Pequenos comércios independentes, especialmente lojas ligadas a construção, reforma e pintura, com loja de tintas/material de pintura como caso de validação inicial. O público principal é o dono ou gestor do comércio que utiliza PDV, mas não possui estrutura analítica para transformar relatórios em decisões gerenciais.

## Solução proposta

Plataforma web que importa relatórios de vendas e compras, processa os dados via ETL, gera indicadores consolidados, apresenta dashboards e disponibiliza uma devolutiva estratégica ao cliente.

## MVP

O MVP demonstra o fluxo principal de análise de dados comerciais:

1. ADMIN acessa o sistema.
2. ADMIN cadastra empresa cliente e usuário CLIENTE.
3. ADMIN cria uma análise para um período.
4. São enviados relatórios de VENDAS e COMPRAS.
5. O sistema processa os dados via ETL.
6. O sistema gera indicadores consolidados.
7. O ADMIN registra ou publica a devolutiva estratégica.
8. O CLIENTE acessa os resultados, dashboards e histórico da análise.

## Fluxo principal

1. ADMIN cria ou seleciona uma empresa cliente.
2. ADMIN cria uma análise mensal ou quinzenal conforme o plano.
3. ADMIN realiza upload dos relatórios de vendas e compras.
4. Sistema processa os arquivos e calcula os indicadores.
5. Sistema apresenta os resultados em dashboard.
6. ADMIN escreve ou revisa a devolutiva estratégica.
7. CLIENTE acessa a análise publicada e visualiza os principais resultados.

## Indicadores

- Faturamento total do período.
- Total comprado no período.
- Indicador de Pressão de Estoque, calculado como a diferença gerencial entre total comprado e faturamento total.
- Produto mais vendido por quantidade.
- Produto com maior faturamento.
- Produto com maior saldo estimado parado, quando houver dados suficientes.

> O Indicador de Pressão de Estoque é um sinal gerencial de descasamento entre compras e vendas. Ele não representa lucro real, margem, rentabilidade ou apuração contábil.

## Tecnologias

Python, Flask, SQLite, SQLAlchemy, Pandas (ETL), Plotly.js (dashboards), Bootstrap, HTML/CSS/JavaScript, Jinja2/templates Flask, GitHub (versionamento), GitHub Projects ou Trello (acompanhamento de backlog e tarefas).

## Organização do repositório

```
README.md
.gitignore
docs/
  00_entrega_final/        Checklist e links da entrega
  01_visao_escopo/         Visão, plano de projeto, anuência, evidências
  02_design_thinking/      Mapa da empatia, persona/jornada, HMW/ideação
  03_requisitos/           Requisitos funcionais e não funcionais
  04_backlog/              Product backlog, sprint backlog, setup do quadro
  05_sprints/              Acompanhamento de sprints e daily scrum
  06_testes_usabilidade/   Roteiro e relatório de feedback
  07_refino_solucao/       Documento de refino
  08_apresentacao_demo/    Roteiros de demo e pitch
  09_retrospectiva_extensao/ Relatório reflexivo
prototipo/                 Documentação e referências do protótipo
demo/                      Documentação da demonstração do MVP
```

## Como executar ou visualizar

A documentação do projeto está toda em [`docs/`](docs/) e pode ser lida diretamente pelo GitHub. As orientações de protótipo e demonstração estão em [`prototipo/`](prototipo/) e [`demo/`](demo/).

[PREENCHER: instruções de execução da aplicação Flask, quando o código do MVP estiver disponível no repositório — ex.: criação de ambiente virtual, instalação de dependências, comando de inicialização]

## Links importantes

Ver [docs/00_entrega_final/links_entrega.md](docs/00_entrega_final/links_entrega.md).

## Status da entrega

| Item | Status |
|---|---|
| Documento de Visão | Em estruturação |
| Plano de Projeto | Em estruturação |
| Design Thinking | Em estruturação |
| Requisitos | Em estruturação |
| Backlog | Em estruturação |
| Sprint 1 | Em estruturação |
| Daily Scrum | Em estruturação |
| Sprint 2 | Em estruturação |
| Teste de Usabilidade | Em estruturação |
| Refino da Solução | Em estruturação |
| Demo | Pendente de link |
| Apresentação Final | Pendente de link |

## Observações sobre documentos sensíveis

O Termo de Anuência assinado e qualquer documento com dados pessoais (CPF, RG, telefone, assinatura, fotos com pessoas identificáveis) **não devem ser publicados neste repositório**. Ver orientação em [docs/01_visao_escopo/termo_de_anuencia_orientacao.md](docs/01_visao_escopo/termo_de_anuencia_orientacao.md).
