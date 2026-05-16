---
name: form-brand-visual-ia-organico-diario
description: Gera calendário de conteúdo orgânico mensal aplicando regra 60-30-10 (60% marca + 30% produto + 10% venda direta) e 9 tipos de post (bastidor, origem do produto, POV founder, demonstração, UGC repostado, educação de categoria, story-driven, drop/sale, manifesto). Distribui 16-20 posts/mês em Seg/Qua/Sex/Sáb com tipo + tema + hook + estrutura + handoff pra Figma ou pra image-generation/video-prompts. Lê brand-guideline-companion.md pra puxar Brand Voice + pilares de conteúdo + Photography Signature. Output - calendário-organico.md no vault + integration com calendario-editorial. Use pra rotina recorrente de Reels/Stories regulares. Triggers - "orgânico diário", "calendário de conteúdo", "planejar mês de posts", "conteúdo recorrente", "posts diários", "conteúdo orgânico".
---

# Orgânico Diário — Calendário de conteúdo mensal

Gera calendário de conteúdo orgânico aplicando regra 60-30-10 + 9 tipos de post + estrutura específica por post.

Diferente do `content-pipeline` (peça única detalhada), este produz **rotina recorrente** — 16-20 posts por mês mapeados.

---

## Pre-requisitos

- `brand-guideline-companion.md` (essencial — lê pilares + voice)
- `audience-research.md` (sabe a tribo)
- Mês target

## Próxima skill no workflow

Pra cada post mapeado, invoca:
- `form-brand-visual-ia-content-pipeline` (se peça detalhada)
- OU `form-brand-visual-ia-fal-image-gen` (peça simples)
- OU `form-brand-visual-ia-figma-ad-builder` (carrossel pré-template)

---

## A regra 60-30-10

```
60% — CONTEÚDO DE MARCA (não-venda)
   Educa, conecta, humaniza
   Build autoridade + relacionamento

30% — CONTEÚDO DE PRODUTO
   Demos, features, social proof
   Build awareness + desire

10% — VENDA DIRETA
   CTAs, urgência, lançamento
   Conversion explícita
```

Mistura típica em 20 posts/mês:
- 12 posts de marca
- 6 posts de produto
- 2 posts de venda direta

---

## Os 9 tipos de post

### Tipo 1 — BASTIDOR (1-2/mês)
BTS do processo, founder no dia a dia.
Categoria: 60% marca.

### Tipo 2 — ORIGEM DO PRODUTO (1/mês)
Como produto foi criado, ingredientes, manifesto.
Categoria: 30% produto.

### Tipo 3 — POV FOUNDER (1-2/mês)
Story pessoal, learning, opinião.
Categoria: 60% marca.

### Tipo 4 — DEMONSTRAÇÃO (2-3/mês)
Produto em uso, antes/depois, tutorial.
Categoria: 30% produto.

### Tipo 5 — UGC REPOSTADO (1-2/mês)
Conteúdo de cliente real.
Categoria: 60% marca (community building).

### Tipo 6 — EDUCAÇÃO DE CATEGORIA (3-4/mês)
Ensina sobre o nicho, sem necessariamente vender.
Categoria: 60% marca.

### Tipo 7 — STORY-DRIVEN (1-2/mês)
Narrativa emocional, cliente case detalhado.
Categoria: 60% marca.

### Tipo 8 — DROP / SALE (2/mês)
Lançamento, restock, oferta especial.
Categoria: 10% venda direta.

### Tipo 9 — MANIFESTO (1/mês)
Tribe-enemy ativada, manifesto da marca.
Categoria: 60% marca.

---

## Step 0 — Read brand context

```yaml
brand_mode: "visual-copy"  # do companion.md
pilares_mix:
  educativo: 30
  produto: 25
  bts: 20
  social_proof: 15
  lifestyle: 10
voice_permanent: ["Calma", "Honesta", "Natural"]
hashtags_anchor: "#aurora"
```

---

## Step 1 — Define escopo do mês

```
═══════════════════════════════════════
ORGÂNICO DIÁRIO — Calendário do mês
═══════════════════════════════════════

1. Mês target: [Maio 2026]

2. Eventos do mês relevantes:
   - Dia das Mães? Black Friday? Aniversário?
   - Lançamento previsto?
   - Datas-chave da marca?
   - [aguarda]

3. Volume:
   - Leve: 12 posts/mês (3 por semana)
   - Médio: 16 posts/mês (4 por semana) ← RECOMENDADO
   - Intenso: 20 posts/mês (5 por semana)

4. Plataformas alvo:
   - Instagram Feed (estático + Reel)
   - Instagram Stories (separado)
   - TikTok
   - YouTube Shorts
   - LinkedIn

5. Frequência por plataforma:
   [pergunta]

6. Pilar especial este mês?
   ex: "este mês foco em produto pra empurrar lançamento"
   [aguarda]
```

---

## Step 2 — Distribuir 60-30-10

Pra 16 posts/mês:

```
DISTRIBUIÇÃO

60% — Marca (10 posts):
- 2x bastidor
- 1x origem produto (story)
- 2x POV founder
- 1x UGC repostado
- 3x educação de categoria
- 1x story-driven

30% — Produto (5 posts):
- 3x demonstração
- 1x ingredient deep-dive
- 1x comparação

10% — Venda direta (1 post):
- 1x drop/sale OR manifesto + CTA forte
```

---

## Step 3 — Cronograma na grade Seg/Qua/Sex/Sáb

Sempre 4 dias da semana fixos. Domingo é dia de descanso (geralmente).

```
SEMANA 1 (1-7 maio)
SEG  Educação de categoria — "3 mitos do skincare matinal"
QUA  Bastidor — "Manhã de quarta na bancada"
SEX  Demonstração — "Como aplica o Aurora — 3 passos"
SÁB  POV founder — "O que me motiva esta semana"

SEMANA 2 (8-14 maio) — DIA DAS MÃES dia 12!
SEG  Story-driven — Caso real de cliente mãe
QUA  Manifesto — "Por que founded by mom importa"
SEX  Origem produto — "Como Aurora começou em cozinha"
SÁB  UGC repostado — Cliente postou marca, repost

SEMANA 3 (15-21 maio)
SEG  Educação categoria — "Niacinamida explicada"
QUA  POV founder — "5 coisas que aprendi neste ano"
SEX  Demonstração — "Antes/depois 30 dias cliente Mariana"
SÁB  Bastidor — "Produção do próximo lote"

SEMANA 4 (22-31 maio)
SEG  Educação categoria — "Skincare matinal vs noturna"
QUA  Demonstração — "Aurora + outras rotinas existentes"
SEX  Drop/sale — "Restock do lote 2 — limitado"
SÁB  UGC OU Bastidor (curinga)
```

---

## Step 4 — Detalha cada post

Pra cada post, gera template:

```
POST: [Tipo] — [Tema]
Data: [data]
Plataforma: [Reel / Feed Post / Carrossel / Story série]
Pilar: [educativo / produto / bts / social proof / lifestyle]

HOOK (primeiros 2-3s):
"[Frase curta provocativa]"

ESTRUTURA:
- Abertura: [...]
- Desenvolvimento: [...]
- Resolução: [...]
- CTA: [suave OU forte conforme tipo]

VOICE CHECK:
✓ 3 adjetivos preservados? (Calma, Honesta, Natural)
✓ Vocabulário favorito usado? ["...", "..."]
✓ Vocabulário proibido evitado? ✓
✓ Regras de copy aplicadas? ✓

VISUAL DIRECTION:
- Tipo de visual: [hero produto / Brand Face / texto sobre BG / etc.]
- Photography Signature aplicada (frase mestre do companion.md)
- Brand Face: [Core / Adjacente / N/A]

CAPTION (rascunho):
"[Texto da caption pronta pra refinamento]"

HASHTAGS:
[anchor + 4 médias + 4 pequenas selecionadas]

PRÓXIMA SKILL (handoff):
- form-brand-visual-ia-content-pipeline (peça única detalhada)
  OU
- form-brand-visual-ia-fal-image-gen (peça simples)
  OU
- form-brand-visual-ia-figma-ad-builder (template existente)
```

---

## Step 5 — Output: calendário-organico-[mês].md

```markdown
# Calendário Orgânico — Aurora, Maio 2026

## Resumo
- Total: 16 posts
- Distribuição: 60% marca / 30% produto / 10% venda
- Eventos especiais: Dia das Mães (12 maio)

## Semana 1 (1-7 maio)
### Segunda, 1 maio — POST 1
**Tipo:** Educação de categoria
**Tema:** "3 mitos do skincare matinal"
**Plataforma:** Reel + carrossel feed
**Hook:** "Você está fazendo isso errado, e ninguém te contou."
**Estrutura:** [...]
**Caption rascunho:** [...]
**Hashtags:** [...]
**Próxima skill:** form-brand-visual-ia-content-pipeline

### Quarta, 3 maio — POST 2
[...]

[continua até POST 16]

## Implementation notes
- Semana 2 tem 4 posts conectados a Dia das Mães
- Drop do lote 2 cai em sexta da semana 4
- UGC depende de cliente postar — backup: bastidor extra

## Métricas-alvo do mês
- Reach total: 50k+
- Saves: 800+
- New followers: 200+
- Conversões: 30+ vendas
```

---

## Adaptação por modo

### VISUAL-ONLY
- Menos posts texto-pesados
- Mais Reels visuais + Stories
- 60-30-10 vira 70-25-5 (mais marca, menos venda)
- Captions ultra-curtas

### VISUAL+COPY (padrão)
- 60-30-10 padrão
- Mix de Reels + Carrosséis educativos

### COPY-HEAVY
- Mais carrosséis educativos (10 slides)
- Newsletters longas como complemento
- 60-30-10 vira 50-30-20 (mais venda, mais education funnels)

---

## Armadilhas a evitar

- **Só posts de produto.** Mata audience. 60-30-10 protege.
- **Calendário sem hook por post.** Hook = primeiros 2-3s. Sem ele, sem retention.
- **Pular voice check.** Caption fora de voice destrói consistency.
- **Sem hashtag strategy.** Hashtag random = reach baixa.
- **Frequência irrealista.** 7 posts/semana queima. 4 sustentável.
- **Não documentar.** Calendário verbal vira esquecido.

---

## Output esperado

✅ `calendario-organico-[mês].md` no vault
✅ 16-20 posts mapeados com tipo + tema + hook + estrutura
✅ 60-30-10 respeitado
✅ Voice check em cada post
✅ Visual direction (Photography Signature aplicada)
✅ Próxima skill recomendada por post
