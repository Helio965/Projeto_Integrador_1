#!/usr/bin/env bash
# Setup do perfil GitHub — Hélio (Helio965)
# Rode este script de dentro da pasta github-profile/ com o gh autenticado:
#   cd github-profile && bash setup.sh
set -euo pipefail

command -v gh >/dev/null || { echo "gh não encontrado — instale e rode 'gh auth login'"; exit 1; }
gh auth status >/dev/null || { echo "gh não autenticado — rode 'gh auth login'"; exit 1; }

HERE="$(cd "$(dirname "$0")" && pwd)"
WORKDIR="$(mktemp -d)"

# Passo 1 — criar o repositório especial de perfil (mesmo nome do usuário)
if gh repo view Helio965/Helio965 >/dev/null 2>&1; then
  echo "Repo Helio965/Helio965 já existe — clonando para atualizar."
  gh repo clone Helio965/Helio965 "$WORKDIR/Helio965"
else
  gh repo create Helio965 --public --description "Profile README" --clone -- "$WORKDIR/Helio965"
fi
cd "$WORKDIR/Helio965"

# Passo 2 — README + workflow da cobrinha
cp "$HERE/README.md" ./README.md
mkdir -p .github/workflows
cp "$HERE/.github/workflows/snake.yml" ./.github/workflows/snake.yml

# Passo 3 — commit e push
git add .
git commit -m "Add professional profile README + snake animation"
git branch -M main
git push -u origin main

# Passo 4 — rodar a Action da cobrinha uma vez (gera a branch 'output')
sleep 3
gh workflow run "Generate Snake" --repo Helio965/Helio965 || \
  echo "Não consegui disparar a Action agora — ela roda no push e diariamente; ou rode: gh workflow run 'Generate Snake' --repo Helio965/Helio965"

# Passo 5 — bio curta + localização da conta
gh api -X PATCH /user \
  -f bio="Brazilian Air Force · ADS student @ CEUB · Python/Flask · building Nexo, Kernel & Connectagro · proactive & tech-curious" \
  -f location="Brasília, DF, Brazil"

echo
echo "✅ Pronto! Confira: https://github.com/Helio965"
echo "A cobrinha aparece ~1 min depois que a Action 'Generate Snake' terminar (aba Actions)."
