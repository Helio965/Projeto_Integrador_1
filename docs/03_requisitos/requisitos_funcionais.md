# Requisitos Funcionais — NEXO

| ID | Requisito | Descrição |
|---|---|---|
| RF01 | Login | O sistema deve permitir autenticação de usuários cadastrados. |
| RF02 | Perfis ADMIN e CLIENTE | O sistema deve distinguir os perfis ADMIN e CLIENTE, com permissões próprias para cada um. |
| RF03 | Cadastro de empresa | O ADMIN deve poder cadastrar empresas clientes. |
| RF04 | Cadastro de usuário cliente | O ADMIN deve poder cadastrar usuários CLIENTE vinculados a uma empresa. |
| RF05 | Cadastro/associação de segmento | O sistema deve permitir cadastrar ou associar um segmento à empresa. |
| RF06 | Controle de plano | O sistema deve registrar o plano da empresa (regra de negócio secundária). |
| RF07 | Regra de periodicidade por plano | A periodicidade permitida das análises pode variar conforme o plano da empresa, tratada como regra de negócio na aplicação (secundária ao MVP). |
| RF08 | Criação de análise | O ADMIN deve poder criar uma análise vinculada a uma empresa e a um período. |
| RF09 | Upload de vendas | O ADMIN deve poder enviar o relatório de VENDAS de uma análise. |
| RF10 | Upload de compras | O ADMIN deve poder enviar o relatório de COMPRAS de uma análise. |
| RF11 | Processamento ETL | O sistema deve processar os relatórios enviados utilizando Pandas. |
| RF12 | Geração de indicadores | O sistema deve calcular os indicadores consolidados: faturamento total, total comprado, Indicador de Pressão de Estoque, produto mais vendido por quantidade, produto com maior faturamento e produto com maior saldo estimado parado (quando houver dados suficientes). |
| RF13 | Dashboard | O sistema deve apresentar os indicadores em dashboard utilizando Plotly.js. |
| RF14 | Devolutiva estratégica | O ADMIN deve poder registrar/publicar uma devolutiva estratégica para a análise. |
| RF15 | Visualização pelo cliente | O CLIENTE deve poder acessar os resultados, dashboards e a devolutiva da análise publicada. |
| RF16 | Histórico de análises | O sistema deve manter e exibir o histórico de análises publicadas por empresa. |

> **Nota:** RF06 e RF07 (plano da empresa e periodicidade por plano) são regras de negócio **secundárias** e não são o foco da entrega de Projeto Integrador I. O núcleo avaliado é o fluxo de análise: cadastro → criação de análise → upload → processamento (ETL) → indicadores → dashboard → devolutiva.

> **Nota técnica do PI I:** nesta entrega, os requisitos são demonstrados em protótipo navegável estático com dados simulados. O processamento real com Pandas e dashboards dinâmicos com Plotly.js representam evolução técnica prevista, não backend funcional já versionado.
