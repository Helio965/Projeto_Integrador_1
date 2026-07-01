# Product Backlog — NEXO

Histórias de usuário do NEXO — Faturamento Inteligente, priorizadas pela técnica MoSCoW (Must / Should / Could / Won't). Este backlog é a base dos documentos de Sprint Backlog e Sprint Planning.

> As Issues abertas no GitHub cobrem um **recorte inicial** deste backlog (fluxo principal do MVP). O mapeamento está em [issues_backlog.md](issues_backlog.md).

## Must Have

| ID | História | Requisito |
|---|---|---|
| US01 | Como ADMIN, quero acessar o sistema com login para garantir acesso restrito por perfil. | RF01, RF02 |
| US02 | Como ADMIN, quero cadastrar uma empresa cliente para organizar as análises por cliente. | RF03 |
| US03 | Como ADMIN, quero cadastrar um usuário CLIENTE vinculado à empresa para que ele acesse suas análises. | RF04 |
| US04 | Como ADMIN, quero criar uma análise por período para consolidar os dados daquele intervalo. | RF08 |
| US05 | Como ADMIN, quero fazer upload simulado do relatório de vendas para alimentar a análise. | RF09 |
| US06 | Como ADMIN, quero fazer upload simulado do relatório de compras para alimentar a análise. | RF10 |
| US07 | Como ADMIN, quero que o sistema processe os relatórios para gerar resultados consolidados. | RF11 |
| US08 | Como CLIENTE, quero ver o faturamento total do período para entender o volume vendido. | RF12 |
| US09 | Como CLIENTE, quero ver o total comprado no período para entender o volume adquirido. | RF12 |
| US10 | Como CLIENTE, quero ver o Indicador de Pressão de Estoque para perceber o descasamento entre compras e vendas. | RF12 |
| US14 | Como CLIENTE, quero visualizar um dashboard gerencial para interpretar os resultados do período. | RF13 |
| US15 | Como ADMIN, quero registrar a devolutiva estratégica para orientar o cliente. | RF14 |
| US16 | Como ADMIN, quero disponibilizar/publicar a análise para o CLIENTE. | RF14, RF15 |
| US17 | Como CLIENTE, quero visualizar os resultados e a devolutiva da análise publicada. | RF15 |
| US20 | Como equipe, quero um protótipo navegável demonstrável para validar o fluxo do MVP. | Processo |

## Should Have

| ID | História | Requisito |
|---|---|---|
| US11 | Como CLIENTE, quero ver o produto mais vendido por quantidade para identificar o carro-chefe. | RF12 |
| US12 | Como CLIENTE, quero ver o produto com maior faturamento para identificar o de maior impacto. | RF12 |
| US18 | Como CLIENTE, quero consultar um histórico básico de análises para acompanhar a evolução. | RF16 |
| US19 | Como CLIENTE, quero mensagens explicativas dos indicadores para interpretá-los sem apoio técnico. | RF13 |
| US21 | Como equipe, quero um roteiro de teste de usabilidade para validar a solução com um usuário real. | Processo |
| US22 | Como equipe, quero registrar feedback e refino após o teste para melhorar a solução. | Processo |

## Could Have

| ID | História | Observação |
|---|---|---|
| US13 | Como CLIENTE, quero destacar o produto com maior saldo estimado parado. | Depende de dados suficientes nos relatórios. |

## Won't Have (neste momento)

- Integração automática com PDV via API.
- Aplicativo mobile nativo.
- Cobrança real, faturas e cliente vencido.
- Avaliação da análise pelo cliente.
- Central de suporte/atendimento.
- Machine learning ou análise preditiva.
- Funcionalidades técnicas avançadas de etapas futuras (ex.: regras de plano/periodicidade como foco central).

> O status real de cada item deve refletir o quadro do GitHub Projects/Trello da equipe. Nenhuma execução concluída é presumida sem atualização real.
