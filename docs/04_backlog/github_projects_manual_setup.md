# Configuração do Quadro de Acompanhamento (GitHub Projects / Trello)

Orientação para montar o quadro de acompanhamento do backlog e das tarefas da equipe.

## Objetivo do quadro

Dar visibilidade ao andamento real das histórias do Product Backlog, permitindo acompanhar quais itens estão pendentes, em andamento, em revisão ou concluídos durante as sprints do projeto.

## Colunas do quadro

1. **Sprint Backlog** — itens selecionados para a sprint atual.
2. **To Do** — tarefas prontas para começar.
3. **In Progress** — tarefas em desenvolvimento.
4. **Review/Testing** — tarefas em revisão ou teste.
5. **Done** — tarefas concluídas.

## Modelo de cartão

Cada cartão deve conter:

- **Título:** resumo curto da tarefa.
- **Descrição:** o que precisa ser feito e critérios de aceite.
- **Responsável:** integrante encarregado (Hélio, João Vitor, João Cesar ou Carlos Eduardo).
- **Estimativa:** esforço previsto (ex.: pontos ou horas).
- **Prioridade:** Must / Should / Could (alinhada ao Product Backlog).
- **Status:** coluna atual do cartão.
- **Evidência/link:** link de commit, PR ou outra evidência associada à tarefa, quando existir.

## Boas práticas

- Vincular cada cartão à história correspondente do [Product Backlog](product_backlog.md).
- Mover o cartão entre as colunas conforme o andamento real.
- Registrar prints do quadro como evidência em [docs/01_visao_escopo/evidencias.md](../01_visao_escopo/evidencias.md).

## Criação dos itens do backlog como cartões/issues

Os itens do Product Backlog devem ser representados como cartões neste quadro (ou como Issues do GitHub, quando a equipe optar por essa abordagem). A vinculação das Issues a um quadro publicado (GitHub Projects ou Trello) é uma tarefa a cargo da equipe.

## Issues criadas como evidência do backlog

As histórias abaixo foram registradas como Issues no repositório, com labels de prioridade (Must Have / Should Have) e de sprint, servindo como evidência mínima do backlog organizado:

| Issue | Título | Link |
|---|---|---|
| #2 | US-01 — Login e perfis ADMIN/CLIENTE | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/2) |
| #3 | US-02 — Cadastro de empresa cliente | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/3) |
| #4 | US-03 — Cadastro de usuário CLIENTE | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/4) |
| #5 | US-04 — Criação de análise por período | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/5) |
| #6 | US-05 — Upload de relatório de VENDAS | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/6) |
| #7 | US-06 — Upload de relatório de COMPRAS | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/7) |
| #8 | US-07 — Processamento ETL com Pandas | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/8) |
| #9 | US-08 — Geração de indicadores gerenciais | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/9) |
| #10 | US-09 — Dashboard gerencial | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/10) |
| #11 | US-10 — Devolutiva estratégica | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/11) |
| #12 | US-11 — Teste de usabilidade | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/12) |
| #13 | US-12 — Refino da solução após feedback | [Abrir](https://github.com/Helio965/Projeto_Integrador_1/issues/13) |

Lista completa: [Abrir Issues](https://github.com/Helio965/Projeto_Integrador_1/issues)

## Link do quadro

**GitHub Project/Trello:** a preencher pela equipe, caso seja criado um quadro visual além das Issues. As Issues do Backlog acima já funcionam como evidência mínima rastreável; a criação ou vinculação de um quadro visual com as colunas definidas é uma tarefa a cargo da equipe.

## Labels e milestones

A organização sugerida de labels e milestones está documentada em [plano_labels_milestones.md](plano_labels_milestones.md). A equipe deve criar esses itens no GitHub quando confirmar o quadro de acompanhamento.
