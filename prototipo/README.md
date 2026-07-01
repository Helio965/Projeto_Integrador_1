# Protótipo Funcional — NEXO

Este diretório contém um protótipo navegável do MVP do NEXO — Faturamento Inteligente.

## Objetivo

Demonstrar o fluxo principal da solução para a entrega do Projeto Integrador I: acesso do ADMIN, cadastro de empresa, criação de análise, upload simulado de relatórios, processamento simulado, visualização de indicadores, devolutiva estratégica, confirmação de publicação e acesso do CLIENTE com histórico básico.

## Como visualizar

Abra o arquivo:

[index.html](index.html)

Também é possível abrir localmente no navegador.

No Windows:

```bash
cd prototipo
start index.html
```

No Linux:

```bash
cd prototipo
xdg-open index.html
```

No macOS:

```bash
cd prototipo
open index.html
```

## Arquivos

- `index.html` — telas navegáveis do fluxo do MVP.
- `styles.css` — estilo visual do protótipo.
- `script.js` — navegação entre telas e simulações locais (processamento ETL, alternância ADMIN/CLIENTE).

## Fluxo demonstrado

1. Login simulado.
2. Painel ADMIN.
3. Cadastro de empresa.
4. Cadastro de usuário CLIENTE.
5. Criação de análise.
6. Upload de VENDAS e COMPRAS.
7. Processamento ETL simulado.
8. Dashboard com indicadores.
9. Devolutiva estratégica.
10. Publicação simulada para o CLIENTE.
11. Visualização pelo CLIENTE.
12. Histórico básico de análises.

## Indicadores demonstrados

- Faturamento total do período.
- Total comprado no período.
- Indicador de Pressão de Estoque (sinal gerencial de descasamento entre compras e vendas; não representa lucro, margem, prejuízo ou apuração contábil).
- Produto mais vendido por quantidade.
- Produto com maior faturamento.
- Produto com maior saldo estimado parado.

## Observação

Este protótipo é uma demonstração acadêmica navegável em HTML/CSS/JavaScript. Os dados exibidos são simulados e servem apenas para demonstrar a proposta de valor do MVP, não representando sistema em produção nem resultados reais validados.

A equipe ainda pode complementar com link externo (por exemplo, Figma ou GitHub Pages) ou substituir por uma versão final, registrando os links em [docs/00_entrega_final/links_entrega.md](../docs/00_entrega_final/links_entrega.md).
