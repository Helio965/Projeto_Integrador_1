# Sprint 2 — Documento Técnico

## Revisão da Sprint 1

[PREENCHER: o que foi concluído na Sprint 1 e o que entrou na Sprint 2]

## Definição técnica

A aplicação é uma plataforma web em Flask, com banco SQLite acessado via SQLAlchemy, processamento de relatórios com Pandas e dashboards com Plotly.js.

## Linguagem e frameworks

- Python e Flask (backend e rotas).
- SQLAlchemy (ORM) sobre SQLite.
- Pandas (ETL dos relatórios).
- Plotly.js (dashboards).
- Bootstrap, HTML/CSS/JavaScript e Jinja2 (interface).

## Arquitetura adotada

Arquitetura web baseada em servidor, com renderização de templates (Jinja2) e camada de dados via ORM. O fluxo é: upload de relatórios → ETL com Pandas → persistência dos indicadores → exibição no dashboard → devolutiva estratégica.

### Modelo de dados (núcleo do MVP)

Tabelas mínimas previstas para o núcleo do MVP:

| Tabela | Finalidade |
|---|---|
| `plano` | Planos disponíveis (BRONZE, PRATA, OURO) e suas características. |
| `segmento` | Segmentos de mercado das empresas clientes. |
| `empresa` | Dados da empresa cliente, vinculada a plano e segmento. |
| `usuario` | Usuários do sistema, com perfil ADMIN ou CLIENTE. |
| `analise` | Análise criada para um período (mensal ou quinzenal). |
| `upload_relatorio` | Arquivos de relatório (VENDAS ou COMPRAS) enviados para uma análise. |
| `indicador_analise` | Indicadores consolidados calculados para uma análise. |
| `relatorio_analise` | Devolutiva estratégica registrada/publicada para uma análise. |

A regra de análise quinzenal para o plano OURO é validada na camada de aplicação (Flask), não como restrição (CHECK) no banco.

## Padrões de código

[PREENCHER: convenções adotadas pela equipe — nomenclatura, organização de pastas, estilo]

## Ferramentas

GitHub (versionamento), GitHub Projects ou Trello (tarefas), e ambiente de desenvolvimento local.

## Funcionalidades implementadas

[PREENCHER: listar as funcionalidades efetivamente implementadas nesta sprint, com link para o commit/PR correspondente]

## Testes básicos

[PREENCHER: descrever os testes realizados — ex.: processamento de um relatório de exemplo e conferência dos indicadores]

## Link do incremento / protótipo

[PREENCHER: link para o incremento funcional ou protótipo desta sprint]
