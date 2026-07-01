# NEXO — Faturamento Inteligente

Plataforma web de análise de dados comerciais para pequenos comércios, desenvolvida como entrega do **Projeto Integrador I — Análise e Desenvolvimento de Sistemas**.

> Este repositório é uma **estrutura progressiva** da entrega de Projeto Integrador I. A base (documentos, templates, protótipo e organização) já está montada; vários itens ainda dependem de conteúdo real, execução e validação pela equipe. Ver [pendências reais](docs/00_entrega_final/pendencias_reais.md).

## Descrição

O NEXO importa relatórios de vendas e compras exportados por sistemas de PDV, processa esses dados, gera indicadores gerenciais, apresenta dashboards e disponibiliza uma devolutiva estratégica ao cliente. A solução atua como uma consultoria orientada por dados, com portal digital próprio.

## Integrantes

| Integrante | Função no time |
|---|---|
| Hélio | Pendente de inclusão pela equipe |
| João Vitor | Pendente de inclusão pela equipe |
| João Cesar | Pendente de inclusão pela equipe |
| Carlos Eduardo | Pendente de inclusão pela equipe |

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

- Python
- Flask
- SQLite
- SQLAlchemy
- Pandas (ETL)
- Plotly.js (dashboards)
- Bootstrap
- HTML/CSS/JavaScript
- Jinja2 (templates Flask)
- GitHub (versionamento)
- GitHub Projects ou Trello (acompanhamento de backlog e tarefas)

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

Instruções de execução da aplicação Flask: pendente de inclusão pela equipe, a ser detalhada quando o código do MVP estiver disponível no repositório (criação de ambiente virtual, instalação de dependências e comando de inicialização).

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
| Entrega Final | Pendências Reais (progressivas) | [Abrir](docs/00_entrega_final/pendencias_reais.md) |
| Entrega Final | Pendências Humanas | [Abrir](docs/00_entrega_final/pendencias_humanas.md) |
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
| Sprints | Sprint Planning | [Abrir](docs/05_sprints/sprint_planning.md) |
| Sprints | Sprint 1 | [Abrir](docs/05_sprints/sprint1_acompanhamento.md) |
| Sprints | Daily Scrum | [Abrir](docs/05_sprints/daily_scrum.md) |
| Sprints | Sprint 2 | [Abrir](docs/05_sprints/sprint2_documento_tecnico.md) |
| Testes | Roteiro de Usabilidade | [Abrir](docs/06_testes_usabilidade/roteiro_teste_usabilidade.md) |
| Testes | Relatório de Feedback | [Abrir](docs/06_testes_usabilidade/relatorio_feedback_usuario.md) |
| Refino | Documento de Refino | [Abrir](docs/07_refino_solucao/documento_refino_solucao.md) |
| Apresentação | Roteiro da Demo | [Abrir](docs/08_apresentacao_demo/roteiro_demo.md) |
| Apresentação | Roteiro do Pitch | [Abrir](docs/08_apresentacao_demo/roteiro_pitch.md) |
| Retrospectiva/Extensão | Relatório Reflexivo | [Abrir](docs/09_retrospectiva_extensao/relatorio_reflexivo.md) |
| Protótipo | Protótipo navegável | [Abrir](prototipo/index.html) |
| Protótipo | README do Protótipo | [Abrir](prototipo/README.md) |
| Demo | README da Demo | [Abrir](demo/README.md) |

## Documentos da entrega

> **Nota sobre os documentos:** os arquivos `.md` deste repositório são versões de trabalho, sincronizadas com os documentos oficiais produzidos pela equipe. Onde a versão oficial completa (`.docx`) for exigida, ela será anexada pelo canal da disciplina. O status abaixo distingue documentos-base já consolidados de itens que ainda são estrutura/template pendente de dados reais.

| Documento | Link | Status |
|---|---|---|
| Documento de Visão | [Abrir](docs/01_visao_escopo/documento_de_visao.md) | Base — em revisão |
| Plano de Projeto | [Abrir](docs/01_visao_escopo/plano_de_projeto.md) | Base — em revisão |
| Mapa da Empatia, Persona/Jornada e HMW | [Abrir pasta](docs/02_design_thinking/) | Base — em revisão |
| Requisitos Funcionais e Não Funcionais | [Abrir pasta](docs/03_requisitos/) | Base — em revisão |
| Product Backlog | [Abrir](docs/04_backlog/product_backlog.md) | Base (recorte do backlog completo) |
| Sprint Backlog | [Abrir](docs/04_backlog/sprint_backlog.md) | Base |
| GitHub Projects/Trello — Setup | [Abrir](docs/04_backlog/github_projects_manual_setup.md) | Base |
| Sprint Planning | [Abrir](docs/05_sprints/sprint_planning.md) | Base |
| Sprint 1 — Acompanhamento | [Abrir](docs/05_sprints/sprint1_acompanhamento.md) | Estrutura — pendente de dados reais |
| Daily Scrum | [Abrir](docs/05_sprints/daily_scrum.md) | Estrutura — pendente de dados reais |
| Sprint 2 — Documento Técnico | [Abrir](docs/05_sprints/sprint2_documento_tecnico.md) | Estrutura — pendente de dados reais |
| Roteiro de Teste de Usabilidade | [Abrir](docs/06_testes_usabilidade/roteiro_teste_usabilidade.md) | Roteiro pronto — execução pendente |
| Relatório de Feedback do Usuário | [Abrir](docs/06_testes_usabilidade/relatorio_feedback_usuario.md) | Template — pendente de dados reais |
| Documento de Refino da Solução | [Abrir](docs/07_refino_solucao/documento_refino_solucao.md) | Template — pendente de dados reais |
| Roteiro da Demo | [Abrir](docs/08_apresentacao_demo/roteiro_demo.md) | Roteiro pronto — gravação pendente |
| Roteiro do Pitch / Apresentação Final | [Abrir](docs/08_apresentacao_demo/roteiro_pitch.md) | Roteiro pronto — apresentação pendente |
| Relatório Reflexivo / Retrospectiva | [Abrir](docs/09_retrospectiva_extensao/relatorio_reflexivo.md) | Template — pendente de dados reais |
| Pendências Reais / Humanas | [Reais](docs/00_entrega_final/pendencias_reais.md) · [Humanas](docs/00_entrega_final/pendencias_humanas.md) | Em acompanhamento |

## Status geral

| Bloco | Situação |
|---|---|
| Planejamento inicial | Em andamento |
| Design Thinking | Em andamento |
| Requisitos | Em andamento |
| Backlog e Sprints | Em andamento |
| Protótipo | Estrutura criada, validação pendente |
| Usabilidade e Feedback | Pendente de inclusão pela equipe |
| Refino | Pendente de inclusão pela equipe |
| Apresentação | Pendente de inclusão pela equipe |

## Pendências reais e humanas

Este repositório é progressivo: alguns itens dependem de conteúdo real, execução ou dados da equipe e não devem ser inventados na documentação. As listas controladas estão em:

- [Pendências Reais da Entrega](docs/00_entrega_final/pendencias_reais.md) — visão progressiva do que ainda falta produzir/validar.
- [Pendências Humanas da Entrega](docs/00_entrega_final/pendencias_humanas.md) — itens que dependem de dados reais das pessoas do time.

## Observações sobre documentos sensíveis

O Termo de Anuência assinado e qualquer documento com dados pessoais (CPF, RG, telefone, assinatura, fotos com pessoas identificáveis) **não devem ser publicados neste repositório**. Ver orientação em [docs/01_visao_escopo/termo_de_anuencia_orientacao.md](docs/01_visao_escopo/termo_de_anuencia_orientacao.md).
