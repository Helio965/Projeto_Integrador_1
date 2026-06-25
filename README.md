# NEXO — Faturamento Inteligente

Plataforma web de análise de dados comerciais para pequenos comércios, desenvolvida como entrega do **Projeto Integrador — Análise e Desenvolvimento de Sistemas**.

## Descrição

O NEXO importa relatórios de vendas e compras exportados por sistemas de PDV, processa esses dados, gera indicadores gerenciais, apresenta dashboards e disponibiliza uma devolutiva estratégica ao cliente. A solução atua como uma consultoria orientada por dados, com portal digital próprio.

## Integrantes

| Integrante | Função no time |
|---|---|
| Hélio | Pendente de definição |
| João Vitor | Pendente de definição |
| João Cesar | Pendente de definição |
| Carlos Eduardo | Pendente de definição |

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
└── demo/
```

## Como executar ou visualizar

A documentação do projeto está toda em [`docs/`](docs/) e pode ser lida diretamente pelo GitHub. As orientações de protótipo e demonstração estão em [`prototipo/`](prototipo/) e [`demo/`](demo/).

Instruções de execução da aplicação Flask: pendente de inclusão pela equipe, a ser detalhada quando o código do MVP estiver disponível no repositório (criação de ambiente virtual, instalação de dependências e comando de inicialização).

## Links importantes

Ver [docs/00_entrega_final/links_entrega.md](docs/00_entrega_final/links_entrega.md).

## Evidências avaliativas

| Etapa do ciclo | Documento |
|---|---|
| Documento de Visão | [docs/01_visao_escopo/documento_de_visao.md](docs/01_visao_escopo/documento_de_visao.md) |
| Plano de Projeto | [docs/01_visao_escopo/plano_de_projeto.md](docs/01_visao_escopo/plano_de_projeto.md) |
| Design Thinking | [docs/02_design_thinking/](docs/02_design_thinking/) |
| Requisitos | [docs/03_requisitos/](docs/03_requisitos/) |
| Backlog | [docs/04_backlog/product_backlog.md](docs/04_backlog/product_backlog.md) |
| Sprint Planning | [docs/04_backlog/sprint_backlog.md](docs/04_backlog/sprint_backlog.md) |
| Sprint 1 | [docs/05_sprints/sprint1_acompanhamento.md](docs/05_sprints/sprint1_acompanhamento.md) |
| Daily Scrum | [docs/05_sprints/daily_scrum.md](docs/05_sprints/daily_scrum.md) |
| Sprint 2 | [docs/05_sprints/sprint2_documento_tecnico.md](docs/05_sprints/sprint2_documento_tecnico.md) |
| Teste de Usabilidade | [docs/06_testes_usabilidade/](docs/06_testes_usabilidade/) |
| Refino da Solução | [docs/07_refino_solucao/documento_refino_solucao.md](docs/07_refino_solucao/documento_refino_solucao.md) |
| Demo | [demo/README.md](demo/README.md) |
| Relatório reflexivo | [docs/09_retrospectiva_extensao/relatorio_reflexivo.md](docs/09_retrospectiva_extensao/relatorio_reflexivo.md) |

## Status da entrega

| Item | Status | Local |
|---|---|---|
| Documento de Visão | Parcial | docs/01_visao_escopo/ |
| Plano de Projeto | Parcial | docs/01_visao_escopo/ |
| Design Thinking | Parcial | docs/02_design_thinking/ |
| Requisitos | Concluído | docs/03_requisitos/ |
| Backlog | Parcial | docs/04_backlog/ |
| Sprint 1 | Pendente | docs/05_sprints/ |
| Daily Scrum | Pendente | docs/05_sprints/ |
| Sprint 2 | Parcial | docs/05_sprints/ |
| Teste de Usabilidade | Pendente | docs/06_testes_usabilidade/ |
| Refino da Solução | Pendente | docs/07_refino_solucao/ |
| Demo | Pendente de link | demo/ |
| Apresentação Final | Pendente de link | docs/08_apresentacao_demo/ |

## Observações sobre documentos sensíveis

O Termo de Anuência assinado e qualquer documento com dados pessoais (CPF, RG, telefone, assinatura, fotos com pessoas identificáveis) **não devem ser publicados neste repositório**. Ver orientação em [docs/01_visao_escopo/termo_de_anuencia_orientacao.md](docs/01_visao_escopo/termo_de_anuencia_orientacao.md).
