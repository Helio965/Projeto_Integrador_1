# Documento de Visão — NEXO — Faturamento Inteligente

## 1. Identificação do projeto

- **Projeto:** NEXO — Faturamento Inteligente
- **Disciplina:** Projeto Integrador I — Análise e Desenvolvimento de Sistemas
- **Professora:** Kadidja Valéria Reginaldo de Oliveira
- **Equipe:** Hélio, João Vitor, João Cesar, Carlos Eduardo

## 2. Contexto

Pequenos comércios utilizam sistemas de PDV que geram relatórios de vendas e compras, mas raramente dispõem de estrutura analítica para transformar esses relatórios em decisões gerenciais. O NEXO nasce para preencher essa lacuna, oferecendo uma análise orientada por dados a partir de relatórios que o próprio comércio já exporta.

## 3. Problema

O gestor vê números soltos nos relatórios do PDV, mas não consegue identificar com clareza quais produtos vendem mais, quais mais impactam o faturamento, quais itens podem estar com saldo estimado parado e quais decisões comerciais tomar com base nesses dados.

## 4. Público-alvo

Pequenos comércios independentes ligados a construção, reforma e pintura, tendo uma loja de tintas/material de pintura como caso de validação inicial. O usuário direto é o dono ou gestor do comércio.

## 5. Persona

Dono de pequeno comércio de tintas/material de pintura, com experiência prática no negócio, mas sem capacidade analítica avançada sobre os dados do PDV. Toma decisões muitas vezes por intuição e precisa de uma visão simples e objetiva para apoiar decisões comerciais. Detalhamento em [docs/02_design_thinking/persona_jornada_usuario.md](../02_design_thinking/persona_jornada_usuario.md).

## 6. Objetivo geral

Disponibilizar uma plataforma web que transforme relatórios de vendas e compras de PDV em indicadores gerenciais e em uma devolutiva estratégica compreensível para o gestor do comércio.

## 7. Objetivos específicos

- Importar e processar relatórios de vendas e compras exportados do PDV.
- Calcular indicadores consolidados de cada período de análise.
- Apresentar os resultados em dashboards claros.
- Registrar uma devolutiva estratégica associada a cada análise.
- Disponibilizar ao cliente o acesso às análises publicadas e ao seu histórico.

## 8. Solução proposta

Plataforma web com perfis ADMIN e CLIENTE, na qual o ADMIN cadastra empresas, cria análises por período, faz upload dos relatórios, o sistema executa o ETL e gera indicadores, e o CLIENTE acessa os resultados, dashboards e a devolutiva estratégica.

## 9. Escopo do MVP

- Autenticação com perfis ADMIN e CLIENTE.
- Cadastro de empresa.
- Cadastro de usuário cliente vinculado à empresa.
- Cadastro ou associação de segmento.
- Registro do plano da empresa (regra de negócio secundária; ver nota abaixo).
- Criação de análise por período.
- Upload de relatório de VENDAS e de COMPRAS.
- Processamento dos relatórios com Pandas.
- Geração de indicadores consolidados.
- Dashboard com Plotly.js.
- Devolutiva estratégica para o cliente.
- Histórico de análises publicadas.

### Planos (detalhe secundário)

Os planos são uma **regra de negócio secundária** do produto e **não são o centro da entrega de Projeto Integrador I**. São registrados aqui apenas como possibilidade de evolução do produto:

- Planos diferenciam a periodicidade permitida das análises (por exemplo, períodos de análise distintos conforme o nível do plano).
- Quando aplicada, essa regra é tratada na camada de aplicação (Flask), não como restrição no banco de dados.

O foco da entrega é o fluxo de análise (upload → processamento → indicadores → devolutiva), independentemente do plano.

### Indicadores

- Faturamento total do período.
- Total comprado no período.
- Indicador de Pressão de Estoque (diferença gerencial entre total comprado e faturamento total).
- Produto mais vendido por quantidade.
- Produto com maior faturamento.
- Produto com maior saldo estimado parado, quando houver dados suficientes.

O Indicador de Pressão de Estoque é um sinal gerencial de descasamento entre compras e vendas. Não representa lucro real, margem, rentabilidade ou apuração contábil.

## 10. Fora do escopo

- Avaliação da análise pelo cliente.
- Cobrança real, faturas, cliente vencido.
- Histórico de mudança de plano.
- Log de auditoria detalhado.
- Integração automática com PDV via API.
- Aplicativo mobile nativo.
- Machine learning ou análise preditiva.
- Indicadores estatísticos avançados de vendas (métricas de sazonalidade ou de comportamento temporal de compra) como indicadores ativos.

## 11. Benefícios esperados

- Leitura rápida e objetiva do desempenho do período.
- Apoio à decisão de compra e venda com base em dados já existentes.
- Identificação de produtos de maior impacto no faturamento e de itens parados.

## 12. Riscos e limitações

- Qualidade e padronização dos relatórios exportados pelo PDV podem variar entre comércios.
- O Indicador de Pressão de Estoque é um sinal gerencial e não substitui apuração contábil.
- Demais riscos: pendente de inclusão pela equipe.

## 13. Critérios de sucesso

- O fluxo principal do MVP é executado de ponta a ponta (do upload à devolutiva publicada).
- Os indicadores são calculados corretamente a partir dos relatórios de exemplo.
- O cliente consegue compreender os resultados no teste de usabilidade.
