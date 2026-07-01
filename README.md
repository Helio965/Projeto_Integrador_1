# NEXO — Faturamento Inteligente

Plataforma web de análise de dados comerciais para pequenos comércios, desenvolvida como entrega do **Projeto Integrador I — Análise e Desenvolvimento de Sistemas**.

> Este repositório organiza os artefatos digitais da entrega acadêmica do Projeto Integrador I. A documentação, o backlog, os roteiros e o protótipo navegável estão estruturados; itens que dependem de execução real da equipe permanecem identificados de forma transparente. Ver [pendências reais](docs/00_entrega_final/pendencias_reais.md).

## Descrição

O NEXO importa relatórios de vendas e compras exportados por sistemas de PDV, processa esses dados, gera indicadores gerenciais, apresenta dashboards e disponibiliza uma devolutiva estratégica ao cliente. A solução atua como uma consultoria orientada por dados, com portal digital próprio.

## Integrantes

| Integrante | Função no time |
|---|---|
| Hélio | Product Owner / Documentação / Organização do GitHub |
| João Vitor | Scrum Master / Backlog / Apoio em testes |
| João Cesar | Desenvolvimento / Interface / Protótipo |
| Carlos Eduardo | Requisitos / Validação / Apoio na apresentação |

## Contexto acadêmico

Disciplina: Projeto Integrador I — Análise e Desenvolvimento de Sistemas. Professora: Kadidja Valéria Reginaldo de Oliveira. O objetivo da entrega é organizar este repositório como evidência técnica do ciclo completo de desenvolvimento: identificação de problema real, Design Thinking, definição de escopo, requisitos, backlog, planejamento de sprint, protótipo, implementação incremental, teste de usabilidade, feedback do usuário, refino da solução, demonstração do MVP e apresentação final.

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
2. ADMIN cria uma análise para um período.
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

### Tecnologias utilizadas no protótipo acadêmico

- HTML5
- CSS3
- JavaScript
- GitHub (versionamento)

### Tecnologias previstas para evolução técnica

- Python
- Flask
- SQLite
- SQLAlchemy
- Pandas (ETL)
- Plotly.js (dashboards)
- Bootstrap
- Jinja2 (templates Flask)
- GitHub Projects ou Trello (acompanhamento de backlog e tarefas)

> O MVP entregue neste repositório é um protótipo navegável estático em HTML/CSS/JavaScript. Python, Flask, SQLite, SQLAlchemy, Pandas, Plotly.js, Bootstrap e Jinja2 representam a arquitetura prevista para evolução técnica caso o projeto avance. Não há aplicação Flask funcional versionada neste momento.

## Organização do repositório

```
.
├── README.md
├── docs/
│   ├── 00_entrega_final/
│   ├── 01_visao_escopo/
│   ├── 02_design_thinking/
│   ├── 03_requisitos/
│   ├── 04_backlog/
│   ├── 05_sprints/
│   ├── 06_testes_usabilidade/
│   ├── 07_refino_solucao/
│   ├── 08_apresentacao_demo/
│   └── 09_retrospectiva_extensao/
├── prototipo/
├── apresentacao/
├── evidencias/
├── referencias/
└── demo/
```

## Como executar ou visualizar

A documentação do projeto está toda em [`docs/`](docs/) e pode ser lida diretamente pelo GitHub. As orientações de protótipo e demonstração estão em [`prototipo/`](prototipo/) e [`demo/`](demo/).

O protótipo navegável do MVP pode ser aberto pelo arquivo [Protótipo navegável](prototipo/index.html) (demonstração acadêmica com dados simulados).

Para visualizar localmente, abra o arquivo `prototipo/index.html` diretamente no navegador. Não há comando Flask nesta entrega porque o repositório contém o protótipo estático do PI I, não uma aplicação backend em produção.

## Como contribuir

Alterações na documentação ou no código devem ser feitas em uma branch própria, com um Pull Request para a branch `main` antes da mesclagem. Isso facilita a revisão entre os integrantes da equipe e mantém um histórico claro do que foi alterado em cada etapa do projeto.

## Links importantes

Ver [docs/00_entrega_final/links_entrega.md](docs/00_entrega_final/links_entrega.md).

- Issues do Backlog: [Abrir Issues](https://github.com/Helio965/Projeto_Integrador_1/issues)

## Evidências avaliativas

| Etapa do ciclo | Documento | Link |
|---|---|---|
| Entrega Final | Índice de Documentos | [Abrir](docs/00_entrega_final/indice_documentos.md) |
| Entrega Final | Checklist da Entrega | [Abrir](docs/00_entrega_final/checklist_entrega.md) |
| Entrega Final | Links da Entrega | [Abrir](docs/00_entrega_final/links_entrega.md) |
| Entrega Final | Auditoria Final do GitHub | [Abrir](docs/00_entrega_final/auditoria_final_github.md) |
| Entrega Final | Pendências Reais | [Abrir](docs/00_entrega_final/pendencias_reais.md) |
| Entrega Final | Pendências Humanas | [Abrir](docs/00_entrega_final/pendencias_humanas.md) |
| Entrega Final | Documentos oficiais Word | [Abrir](docs/documentos_word/README.md) |
| Visão e Escopo | Definição do Problema e Objetivos | [Abrir](docs/01_visao_escopo/definicao_problema_objetivos.md) |
| Visão e Escopo | Documento de Visão | [Abrir](docs/01_visao_escopo/documento_de_visao.md) |
| Visão e Escopo | Plano de Projeto | [Abrir](docs/01_visao_escopo/plano_de_projeto.md) |
| Design Thinking | Mapa da Empatia | [Abrir](docs/02_design_thinking/mapa_da_empatia.md) |
| Design Thinking | Persona e Jornada do Usuário | [Abrir](docs/02_design_thinking/persona_jornada_usuario.md) |
| Design Thinking | HMW e Ideação | [Abrir](docs/02_design_thinking/hmw_ideacao.md) |
| Requisitos | Requisitos Funcionais | [Abrir](docs/03_requisitos/requisitos_funcionais.md) |
| Requisitos | Requisitos Não Funcionais | [Abrir](docs/03_requisitos/requisitos_nao_funcionais.md) |
| Backlog | Product Backlog | [Abrir](docs/04_backlog/product_backlog.md) |
| Backlog | Sprint Backlog | [Abrir](docs/04_backlog/sprint_backlog.md) |
| Backlog | GitHub Projects/Trello — Setup | [Abrir](docs/04_backlog/github_projects_manual_setup.md) |
| Backlog | Plano de Labels e Milestones | [Abrir](docs/04_backlog/plano_labels_milestones.md) |
| Sprints | Sprint Planning | [Abrir](docs/05_sprints/sprint_planning.md) |
| Sprints | Sprint 1 | [Abrir](docs/05_sprints/sprint1_acompanhamento.md) |
| Sprints | Daily Scrum | [Abrir](docs/05_sprints/daily_scrum.md) |
| Sprints | Sprint 2 | [Abrir](docs/05_sprints/sprint2_documento_tecnico.md) |
| Testes | Plano / Registro de Testes Funcionais | [Abrir](docs/06_testes_usabilidade/plano_registro_testes_funcionais.md) |
| Testes | Roteiro de Usabilidade | [Abrir](docs/06_testes_usabilidade/roteiro_teste_usabilidade.md) |
| Testes | Relatório de Feedback | [Abrir](docs/06_testes_usabilidade/relatorio_feedback_usuario.md) |
| Refino | Documento de Refino | [Abrir](docs/07_refino_solucao/documento_refino_solucao.md) |
| Apresentação | Roteiro da Demo | [Abrir](docs/08_apresentacao_demo/roteiro_demo.md) |
| Apresentação | Roteiro do Pitch | [Abrir](docs/08_apresentacao_demo/roteiro_pitch.md) |
| Apresentação | Estrutura da Apresentação | [Abrir](apresentacao/estrutura_apresentacao.md) |
| Retrospectiva/Extensão | Relatório Reflexivo | [Abrir](docs/09_retrospectiva_extensao/relatorio_reflexivo.md) |
| Protótipo | Protótipo navegável | [Abrir](prototipo/index.html) |
| Protótipo | README do Protótipo | [Abrir](prototipo/README.md) |
| Demo | README da Demo | [Abrir](demo/README.md) |

## Documentos da entrega

> **Nota sobre os documentos:** os arquivos `.md` deste repositório são versões de trabalho, sincronizadas com os documentos oficiais produzidos pela equipe. Onde a versão oficial completa (`.docx`) for exigida, ela será anexada pelo canal da disciplina. O status abaixo distingue documentos-base já consolidados de itens que ainda são estrutura/template pendente de dados reais.

| Documento | Link | Status |
|---|---|---|
| Documentos oficiais Word | [Abrir](docs/documentos_word/README.md) | Estrutura criada para preenchimento real |
| Definição do Problema e Objetivos | [Abrir](docs/01_visao_escopo/definicao_problema_objetivos.md) | Documentado |
| Documento de Visão | [Abrir](docs/01_visao_escopo/documento_de_visao.md) | Documentado |
| Plano de Projeto | [Abrir](docs/01_visao_escopo/plano_de_projeto.md) | Documentado |
| Mapa da Empatia, Persona/Jornada e HMW | [Abrir pasta](docs/02_design_thinking/) | Documentado |
| Requisitos Funcionais e Não Funcionais | [Abrir pasta](docs/03_requisitos/) | Documentado |
| Product Backlog | [Abrir](docs/04_backlog/product_backlog.md) | Documentado — US01–US22 |
| Sprint Backlog | [Abrir](docs/04_backlog/sprint_backlog.md) | Documentado |
| GitHub Projects/Trello — Setup | [Abrir](docs/04_backlog/github_projects_manual_setup.md) | Orientação documentada |
| Plano de Labels e Milestones | [Abrir](docs/04_backlog/plano_labels_milestones.md) | Documentado |
| Sprint Planning | [Abrir](docs/05_sprints/sprint_planning.md) | Documentado |
| Sprint 1 — Acompanhamento | [Abrir](docs/05_sprints/sprint1_acompanhamento.md) | Estrutura criada para preenchimento real |
| Daily Scrum | [Abrir](docs/05_sprints/daily_scrum.md) | Estrutura criada para preenchimento real |
| Sprint 2 — Documento Técnico | [Abrir](docs/05_sprints/sprint2_documento_tecnico.md) | Estrutura criada para preenchimento real |
| Plano / Registro de Testes Funcionais | [Abrir](docs/06_testes_usabilidade/plano_registro_testes_funcionais.md) | Estrutura criada para preenchimento real |
| Roteiro de Teste de Usabilidade | [Abrir](docs/06_testes_usabilidade/roteiro_teste_usabilidade.md) | Roteiro preparado |
| Relatório de Feedback do Usuário | [Abrir](docs/06_testes_usabilidade/relatorio_feedback_usuario.md) | Estrutura criada para preenchimento real |
| Documento de Refino da Solução | [Abrir](docs/07_refino_solucao/documento_refino_solucao.md) | Estrutura criada para preenchimento real |
| Roteiro da Demo | [Abrir](docs/08_apresentacao_demo/roteiro_demo.md) | Roteiro preparado |
| Roteiro do Pitch / Apresentação Final | [Abrir](docs/08_apresentacao_demo/roteiro_pitch.md) | Roteiro preparado |
| Estrutura da Apresentação | [Abrir](apresentacao/estrutura_apresentacao.md) | Documentado |
| Relatório Reflexivo / Retrospectiva | [Abrir](docs/09_retrospectiva_extensao/relatorio_reflexivo.md) | Base acadêmica documentada |
| Pendências Reais / Humanas | [Reais](docs/00_entrega_final/pendencias_reais.md) · [Humanas](docs/00_entrega_final/pendencias_humanas.md) | Em acompanhamento |

## Status geral

| Bloco | Situação |
|---|---|
| Planejamento inicial | Documentado |
| Design Thinking | Documentado |
| Requisitos | Documentado |
| Backlog e Sprints | Documentado |
| Protótipo | Protótipo navegável criado |
| Testes Funcionais | Estrutura criada para registro |
| Usabilidade e Feedback | Roteiro e relatório preparados para preenchimento com dados reais |
| Refino | Documento preparado para registrar ajustes após feedback |
| Apresentação | Roteiro preparado |

## Pendências reais e humanas

Alguns itens ainda dependem de conteúdo real, execução ou dados da equipe e não devem ser inventados na documentação. As listas controladas estão em:

- [Pendências Reais da Entrega](docs/00_entrega_final/pendencias_reais.md) — visão do que ainda precisa de validação ou evidência real.
- [Pendências Humanas da Entrega](docs/00_entrega_final/pendencias_humanas.md) — itens que dependem de dados reais das pessoas do time.

## Observações sobre documentos sensíveis

O Termo de Anuência assinado e qualquer documento com dados pessoais (CPF, RG, telefone, assinatura, fotos com pessoas identificáveis) **não devem ser publicados neste repositório**. Ver orientação em [docs/01_visao_escopo/termo_de_anuencia_orientacao.md](docs/01_visao_escopo/termo_de_anuencia_orientacao.md).
