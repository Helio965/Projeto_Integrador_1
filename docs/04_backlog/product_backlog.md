# Product Backlog — NEXO

Backlog de produto do NEXO — Faturamento Inteligente (Projeto Integrador I). É a base dos documentos de Sprint Backlog e Sprint Planning.

## Critérios de priorização

Priorização pela técnica **MoSCoW**:

- **Must Have** — essencial para o MVP.
- **Should Have** — importante, mas não bloqueante.
- **Could Have** — desejável, se houver tempo.
- **Won't Have (neste momento)** — fora do escopo desta entrega.

## Product Backlog priorizado

| ID | História de Usuário | Épico | Prioridade | Requisitos relacionados |
|---|---|---|---|---|
| US01 | Como ADMIN, quero acessar o sistema com login para garantir acesso restrito por perfil. | Acesso e cadastros | Must Have | RF01, RF02 |
| US02 | Como ADMIN, quero cadastrar uma empresa cliente para organizar as análises por cliente. | Acesso e cadastros | Must Have | RF03 |
| US03 | Como ADMIN, quero cadastrar um usuário CLIENTE vinculado à empresa para que ele acesse suas análises. | Acesso e cadastros | Must Have | RF04 |
| US04 | Como ADMIN, quero criar uma análise por período para consolidar os dados do intervalo. | Análise e upload | Must Have | RF08 |
| US05 | Como ADMIN, quero fazer upload simulado do relatório de vendas para alimentar a análise. | Análise e upload | Must Have | RF09 |
| US06 | Como ADMIN, quero fazer upload simulado do relatório de compras para alimentar a análise. | Análise e upload | Must Have | RF10 |
| US07 | Como ADMIN, quero que o sistema processe os relatórios para gerar resultados consolidados. | Processamento e indicadores | Must Have | RF11 |
| US08 | Como CLIENTE, quero ver o faturamento total do período para entender o volume vendido. | Processamento e indicadores | Must Have | RF12 |
| US09 | Como CLIENTE, quero ver o total comprado no período para entender o volume adquirido. | Processamento e indicadores | Must Have | RF12 |
| US10 | Como CLIENTE, quero ver o Indicador de Pressão de Estoque para perceber o descasamento entre compras e vendas. | Processamento e indicadores | Must Have | RF12 |
| US11 | Como CLIENTE, quero ver o produto mais vendido por quantidade para identificar o carro-chefe. | Processamento e indicadores | Must Have | RF12 |
| US12 | Como CLIENTE, quero ver o produto com maior faturamento para identificar o de maior impacto. | Processamento e indicadores | Must Have | RF12 |
| US13 | Como CLIENTE, quero destacar o produto com maior saldo estimado parado, quando houver dados suficientes. | Processamento e indicadores | Should Have | RF12 |
| US14 | Como CLIENTE, quero visualizar um dashboard gerencial para interpretar os resultados do período. | Dashboard e devolutiva | Must Have | RF13 |
| US15 | Como ADMIN, quero registrar a devolutiva estratégica para orientar o cliente. | Dashboard e devolutiva | Must Have | RF14 |
| US16 | Como ADMIN, quero disponibilizar/publicar a análise para o CLIENTE. | Dashboard e devolutiva | Should Have | RF14, RF15 |
| US17 | Como CLIENTE, quero visualizar os resultados e a devolutiva da análise publicada. | Dashboard e devolutiva | Must Have | RF15 |
| US18 | Como CLIENTE, quero consultar um histórico básico de análises para acompanhar a evolução. | Histórico e usabilidade | Should Have | RF16 |
| US19 | Como CLIENTE, quero mensagens explicativas dos indicadores para interpretá-los sem apoio técnico. | Histórico e usabilidade | Should Have | RF13 |
| US20 | Como equipe, quero um protótipo navegável demonstrável para validar o fluxo do MVP. | Protótipo e validação | Must Have | Processo |
| US21 | Como equipe, quero um roteiro de teste de usabilidade para validar a solução com um usuário real. | Protótipo e validação | Should Have | Processo |
| US22 | Como equipe, quero registrar feedback e refino após o teste para melhorar a solução. | Protótipo e validação | Should Have | Processo |

## Resumo por prioridade

- **Must Have:** US01, US02, US03, US04, US05, US06, US07, US08, US09, US10, US11, US12, US14, US15, US17, US20.
- **Should Have:** US13, US16, US18, US19, US21, US22.
- **Could Have:** não definido neste momento.
- **Won't Have (neste momento):** integração automática com PDV, aplicativo mobile, cobrança real, faturas, cliente vencido, avaliação da análise pelo cliente, central de suporte, machine learning preditivo e funcionalidades técnicas avançadas futuras.

> As Issues abertas no GitHub cobrem um recorte inicial deste backlog (ver [issues_backlog.md](issues_backlog.md)). Nenhuma execução concluída é presumida sem atualização real da equipe.
