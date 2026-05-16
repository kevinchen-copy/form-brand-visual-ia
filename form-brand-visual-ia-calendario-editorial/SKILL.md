---
name: form-brand-visual-ia-calendario-editorial
description: Cria calendário editorial mensal em Obsidian (substitui Notion) com mix de pilares (30/25/20/15/10), eventos do mês, frequência por plataforma, status workflow (idea/planejado/em produção/aprovado/publicado/analisado). Lê brand-guideline-companion.md + organico-diario pra estruturar. Output - calendario-[mês].md no vault + dashboard visual. Use no início de cada mês pra planejar. Triggers - "calendário editorial", "calendário do mês", "planejar conteúdo", "próximas 4 semanas", "planejamento mensal".
---

# Calendário Editorial — Planejamento mensal em Obsidian

Calendário editorial em Obsidian (você usa Obsidian em vez de Notion). Estrutura mensal com mix de pilares + eventos + status workflow.

---

## Pre-requisitos

- `brand-guideline-companion.md` (pilares + frequência por plataforma)
- Obsidian instalado (você já tem)

## Próxima skill no workflow

`form-brand-visual-ia-banco-ideias` (banco de ideias separado)
`form-brand-visual-ia-pacote-semanal` (executa cada semana)

---

## Step 0 — Read context

```yaml
pilares:
  educativo: 30
  produto: 25
  bts: 20
  social_proof: 15
  lifestyle: 10

posting_frequency:
  reels_per_week: 3
  feed_posts_per_week: 5
  stories_per_day: 5

mode: "visual-copy"
```

---

## Step 1 — Setup inicial

```
═══════════════════════════════════════
CALENDÁRIO EDITORIAL — Setup
═══════════════════════════════════════

1. Mês target: [Maio 2026]

2. Eventos especiais do mês:
   - Dia das Mães (12 maio)? ✓
   - Lançamento previsto?
   - Aniversário marca?
   - Black Friday (novembro só)?
   - Outro?

3. Volume desejado:
   - Light (12 peças/mês)
   - Médio (16-20 peças/mês) ← RECOMENDADO
   - Intenso (25+ peças/mês)

4. Plataformas ativas:
   - Instagram Feed
   - Instagram Stories
   - Instagram Reels
   - TikTok
   - YouTube Shorts
   - LinkedIn (se aplica)
   - Pinterest (se aplica)

5. Métricas-alvo do mês:
   - Reach total alvo
   - Followers gain alvo
   - Conversões (se ecommerce) alvo
```

---

## Step 2 — Distribuição de pilares

```
═══════════════════════════════════════
MIX DE PILARES — Mai 2026
═══════════════════════════════════════

Volume: 16 peças/mês

EDUCATIVO (30%): 5 peças
- 2x Reels educativos
- 2x carrosséis educativos
- 1x post feed quick-tip

PRODUTO (25%): 4 peças
- 2x Reels destaque produto
- 1x carrossel detalhamento produto
- 1x post feed produto

BTS (20%): 3 peças
- 1x Reel founder day
- 1x Story série bastidor (5 stories)
- 1x post feed momento real

SOCIAL PROOF (15%): 2 peças
- 1x Reel testimonial cliente
- 1x carrossel com 5 depoimentos

LIFESTYLE (10%): 2 peças
- 1x Reel aspirational
- 1x post feed quote/mood
```

---

## Step 3 — Calendário mensal

Cria arquivo `[marca]/calendario-editorial-maio-2026.md` no vault:

```markdown
# Calendário Editorial — Aurora, Maio 2026

## Resumo
- **Volume:** 16 peças
- **Mix:** 30/25/20/15/10
- **Eventos:** Dia das Mães (12/5)
- **Meta alcance:** 50k reach total
- **Meta conversões:** 30 vendas

---

## Eventos do mês
- 8/5 (qui) - Início semana Dia das Mães
- 12/5 (dom) - Dia das Mães
- 31/5 (sáb) - Lançamento Aurora Lote 2 (pré-venda começa)

---

## SEMANA 1 (1-7 maio)

### Segunda, 1 maio
- [ ] **Reel #1** — Educativo: "Ordem certa do skincare matinal"
  - Status: 🟡 Idea
  - Pilar: Educativo
  - Plataformas: Instagram + TikTok
  - Skill a usar: content-pipeline
  
### Terça, 2 maio
- [ ] **Stories #1-5** — BTS founder week
  - Status: 🟡 Idea
  - Pilar: BTS
  - Plataforma: Instagram Stories

### Quarta, 3 maio
- [ ] **Carrossel #1** — Educativo: "5 erros skincare matinal"
  - Status: 🟡 Idea
  - Pilar: Educativo
  - Plataforma: Instagram Feed
  - Skill: carrossel-feed

### Quinta, 4 maio
- [ ] **Post feed #1** — Quote / mood
  - Status: 🟡 Idea
  - Pilar: Lifestyle

### Sexta, 5 maio
- [ ] **Reel #2** — Produto: "Como aplicar Aurora — 3 passos"
  - Pilar: Produto
  - Skill: content-pipeline

### Sábado, 6 maio
- [ ] **Stories #6-10** — Educativo (dica + question)
  - Pilar: Educativo

---

## SEMANA 2 (8-14 maio) — DIA DAS MÃES

### Segunda, 8 maio
- [ ] **Reel #3** — Story-driven: Mãe real usando Aurora
  - Pilar: BTS/social proof
  - Especial: foco em Dia das Mães

### Terça, 9 maio
- [ ] **Carrossel #2** — "Por que Aurora foi feita por mãe"
  - Pilar: BTS / manifesto

### Quarta, 10 maio
- [ ] **Stories #11-15** — Countdown Dia das Mães

### Quinta, 11 maio
- [ ] **Reel #4** — Lançamento story (Aurora started)
  - Pilar: BTS / Origem produto

### Sexta, 12 maio (DIA DAS MÃES)
- [ ] **Post feed #2** — Hero: "Pra mães que cuidam de si"
  - Pilar: Social proof
- [ ] **Reel #5** — Especial Dia das Mães
  - Pilar: Story-driven

### Sábado, 13 maio
- [ ] **Stories #16-20** — Repost UGC + agradecimentos

---

## SEMANA 3 (15-21 maio)

[continua mesmo padrão]

---

## SEMANA 4 (22-31 maio) — LAUNCH PRE-VENDA

### Quinta, 29 maio (warmup pre-venda)
- [ ] **Carrossel #4** — "Aurora Lote 2 — 3 dias"
  - Pilar: Produto

### Sexta, 30 maio
- [ ] **Reel #7** — Hero shot Aurora bottle
  - Pilar: Produto

### Sábado, 31 maio (DIA 0 PRÉ-VENDA)
- [ ] **Day 0 sequence:**
  - 8h: Email newsletter
  - 10h: Reel anúncio hero
  - 12h: Carrossel "tudo sobre Aurora"
  - 16h: Story série launch
  - 19h: Stories countdown (final do dia)
  - Skill: campaign-launcher

---

## Métricas baseline (atualizar fim do mês)

| Métrica | Meta | Realizado |
|---|---|---|
| Reach total | 50k | TBD |
| Saves total | 800 | TBD |
| Engagement rate | 5% | TBD |
| New followers | 200 | TBD |
| Conversões | 30 | TBD |

---

## Notas operacionais

- Domingo 14/5 é folga (dia descanso pós-Dia das Mães)
- Semana 4 cargas — concentrar produção pacote semanal anterior
- Brand Face Core aparece em 60% das peças
```

---

## Step 4 — Status workflow

Cada peça passa por status:

```
🟡 IDEA → 🟠 PLANEJADO → 🔵 EM PRODUÇÃO → 🟢 APROVADO → ✅ PUBLICADO → 📊 ANALISADO
```

No Obsidian:
- Tags por status: #idea #planejado #produção #aprovado #publicado #analisado
- Updates conforme avança
- Dashboard pode filtrar por status

---

## Step 5 — Dashboard visual (Obsidian)

Cria `[marca]/dashboard-editorial.md` que pulla de todos os calendários:

```markdown
# Dashboard Editorial — Aurora

## Esta semana (status)
- [ ] Reel #1 — Educativo ordem skincare 🟢 Aprovado
- [ ] Stories #1-5 — BTS founder 🔵 Em produção
- [ ] Carrossel #1 — 5 erros 🟠 Planejado
- ...

## Próximas peças (1-7 dias)
[link pra peças com data futura]

## Backlog (ideas não scheduled)
[link pra banco-ideias.md]

## Métricas última semana
[updates]

## Próxima audit
[data sugerida]
```

---

## Step 6 — Recurrent updates

A cada segunda-feira (planejamento semanal):

```
1. Revisa calendário da semana que vem
2. Atualiza status (✅ Publicado pra peças passadas)
3. Anota métricas observadas
4. Refinar peças próximas se necessário
5. Adiciona peças extras se ainda não scheduled
```

Tempo: 15-30 min toda segunda.

---

## Step 7 — Output

```markdown
# Calendário-editorial-[mês].md

[Estrutura completa acima]

## Implementation summary
- Mês prep: 1h (esta skill)
- Updates semanais: 15-30 min × 4 = 1-2h/mês
- Total time investment: 3-4h/mês de planejamento
```

```
═══════════════════════════════════════
✅ CALENDÁRIO EDITORIAL CRIADO

Localização: [marca]/calendario-editorial-[mês].md
Dashboard: [marca]/dashboard-editorial.md

16 peças mapeadas pro mês
4 semanas estruturadas
Eventos especiais identificados
Métricas-alvo definidas

PRÓXIMOS PASSOS:
1. Roda form-brand-visual-ia-banco-ideias 
   pra encher backlog de ideas

2. Toda segunda-feira:
   → form-brand-visual-ia-pacote-semanal
   (gera pacote da semana)

3. Toda peça específica:
   → form-brand-visual-ia-content-pipeline
   OR organico-diario / carrossel-feed / etc.
═══════════════════════════════════════
```

---

## Adaptação por modo

### VISUAL-ONLY
- Mix vira 50/30/15/5 (mais lifestyle/visual, menos copy-heavy)
- Calendário com mais Reels visuais
- Menos carrosséis educativos

### VISUAL+COPY
- Mix 30/25/20/15/10 padrão

### COPY-HEAVY
- Mix vira 40/20/15/15/10 (mais educativo)
- Mais carrosséis educativos
- Newsletters semanais incluídas

---

## Armadilhas a evitar

- **Calendário sem mix.** Só produto = audience cansa.
- **Volume irrealista.** 30+ peças/mês queima criatividade.
- **Sem status workflow.** Vira caos.
- **Não atualizar.** Calendário esquecido = sem valor.

---

## Output esperado

✅ `calendario-editorial-[mês].md` no Obsidian
✅ Dashboard editorial atualizado
✅ Mix de pilares respeitando %
✅ Eventos especiais flagged
✅ Próximas skills handoff claro
