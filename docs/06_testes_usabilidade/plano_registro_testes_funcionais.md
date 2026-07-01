# Plano / Registro de Testes Funcionais do Protótipo - NEXO

## Finalidade

Verificar se o protótipo navegável funciona minimamente para a apresentação do Projeto Integrador I: abertura, navegação, fluxo ADMIN, cadastro/visualização de empresa, criação de análise, upload simulado, processamento simulado, indicadores, dashboard, devolutiva, publicação para o CLIENTE, visão CLIENTE, histórico básico e reinício da demonstração.

Este documento não registra execução real inventada. Os resultados devem ser preenchidos somente após teste funcional realizado pela equipe.

## Diferença entre teste funcional e teste de usabilidade

| Tipo de teste | Objetivo | Exemplo no NEXO |
|---|---|---|
| Teste funcional | Verificar se o protótipo abre, navega e exibe as telas esperadas | Conferir se o dashboard carrega e exibe os indicadores |
| Teste de usabilidade | Verificar se o usuário entende o fluxo, os indicadores e a devolutiva | Conferir se o participante compreende o Indicador de Pressão de Estoque |

## Casos de teste

| ID | Caso de teste | Passos | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| TF01 | Abrir protótipo | Abrir `prototipo/index.html` no navegador. | A tela inicial do protótipo é exibida. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF02 | Acessar login | Conferir campos de e-mail, senha e botão de entrada. | Login simulado aparece com campos preenchidos para demonstração. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF03 | Entrar como ADMIN | Clicar em `Entrar como ADMIN`. | Painel administrativo é exibido. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF04 | Cadastrar empresa | Avançar para cadastro de empresa e conferir os campos. | Tela de cadastro de empresa é exibida com dados simulados. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF05 | Cadastrar usuário CLIENTE | Avançar para cadastro de usuário CLIENTE. | Tela de usuário CLIENTE vinculado à empresa é exibida. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF06 | Criar análise | Avançar para criação de análise e conferir período. | Tela de criação de análise por período é exibida. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF07 | Visualizar upload simulado | Avançar para upload de vendas e compras. | Relatórios simulados de vendas e compras aparecem selecionados. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF08 | Processar relatórios | Clicar em `Processar relatórios`. | Barra de processamento avança e libera acesso ao dashboard. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF09 | Visualizar indicadores | Acessar dashboard após processamento. | Faturamento total, total comprado, Pressão de Estoque e produtos de destaque são exibidos. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF10 | Conferir aviso do indicador | Ler o card de Pressão de Estoque. | O indicador é explicado como sinal gerencial, não como lucro, margem, prejuízo ou apuração contábil. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF11 | Registrar devolutiva | Avançar para devolutiva estratégica. | Campo de devolutiva é exibido com texto simulado editável. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF12 | Publicar para CLIENTE | Clicar em `Publicar para o CLIENTE`. | Visão CLIENTE é aberta e mostra confirmação de publicação. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF13 | Visualizar histórico básico | Conferir a seção de histórico na visão CLIENTE. | Histórico básico de análises aparece com período, status e resumo. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |
| TF14 | Reiniciar demonstração | Clicar em `Reiniciar demonstração`. | Protótipo retorna ao início para nova apresentação. | A preencher após execução real pela equipe. | A preencher após execução real pela equipe. |

## Matriz de rastreabilidade

| Caso de teste | História(s) relacionada(s) |
|---|---|
| TF01-TF03 | US01, US20 |
| TF04 | US02 |
| TF05 | US03 |
| TF06 | US04 |
| TF07 | US05, US06 |
| TF08 | US07 |
| TF09 | US08, US09, US10, US11, US12, US13, US14 |
| TF10 | US10, US19 |
| TF11 | US15 |
| TF12 | US16, US17 |
| TF13 | US18 |
| TF14 | US20 |

## Pendências

- Executar os testes no ambiente real da equipe.
- Preencher resultado obtido e status de cada caso.
- Registrar evidências permitidas, sem dados sensíveis.
- Atualizar este documento antes da demo, caso a equipe realize os testes funcionais.
