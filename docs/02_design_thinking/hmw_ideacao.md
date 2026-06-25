# HMW e Ideação — NEXO

## Problemas identificados

- O gestor não interpreta estrategicamente os relatórios do PDV.
- Não há clareza sobre produtos mais vendidos, de maior faturamento e parados.
- As decisões comerciais são tomadas sem apoio analítico.

## Perguntas "Como poderíamos...?"

- Como poderíamos transformar relatórios brutos de PDV em indicadores compreensíveis em poucos minutos?
- Como poderíamos mostrar quais produtos mais impactam o faturamento do período?
- Como poderíamos sinalizar o descasamento entre compras e vendas sem usar termos contábeis que o gestor não domina?
- Como poderíamos entregar uma orientação prática que o gestor consiga aplicar no negócio?
- Demais perguntas geradas pela equipe: pendente de inclusão.

## Ideias geradas

- Dashboard com indicadores consolidados em Plotly.js.
- Indicador de Pressão de Estoque como sinal gerencial (sem se apresentar como apuração contábil).
- Devolutiva estratégica escrita pelo ADMIN e associada a cada análise.
- Histórico de análises publicadas para acompanhamento ao longo do tempo.
- Demais ideias do brainstorming: pendente de inclusão.

## Critérios de seleção

- Usar apenas dados já existentes nos relatórios de vendas e compras (sem integração automática por API).
- Viabilidade com a stack definida (Flask, SQLite, SQLAlchemy, Pandas, Plotly.js) no prazo da disciplina.
- Clareza para a persona (linguagem acessível ao gestor).

## Solução escolhida

Plataforma web que importa os relatórios, processa via ETL, gera os indicadores consolidados, apresenta dashboards e disponibiliza a devolutiva estratégica ao cliente.

## Justificativa

A solução resolve diretamente a dor central da persona — interpretar os dados do PDV — usando informação que o comércio já possui, com baixo custo de adoção e dentro da viabilidade técnica do projeto.
