---
name: form-brand-visual-ia-static-ads
description: Gera COPY de ads estáticos pra e-commerce/marca em 10 tipos disponíveis - Direct Offer, Benefit-First, Social Proof, PAS (Problem-Agitate-Solution), Story, Curiosity, Insider Education, Bundle, Scarcity, Lifestyle. Filtra automaticamente quais tipos servem baseado em brand-guideline-companion.md (RECUSA tipos que violam Big Idea ou vocabulário proibido). Output - 3 copies por ad com Headline (≤12 palavras) + Body (≤125 chars) + CTA + handoff pra figma-ad-builder OU brand-ad-replicator pra design final. Use pra Meta Ads / Google Ads / TikTok Ads estáticos. Triggers - "ads estáticos", "copy de ad", "anúncio Meta", "Instagram ad", "Facebook ad", "Google ad", "headline de ad", "CTA pra ad".
---

# Static Ads — Copy pra anúncios estáticos

Gera COPY de ads estáticos pra plataformas de paid media (Meta, Google, TikTok). 10 tipos disponíveis. **Filtra automaticamente** quais servem à marca baseado em Big Idea + vocabulário.

Esta skill produz **copy**. Pra design visual, handoff pra `figma-ad-builder` OR `brand-ad-replicator`.

---

## Pre-requisitos

- `brand-guideline-companion.md`
- Definido: produto/oferta específica + audience-alvo do ad

## Próxima skill no workflow

- `form-brand-visual-ia-figma-ad-builder` (monta design no Figma)
- `form-brand-visual-ia-brand-ad-replicator` (replica template)

---

## Os 10 tipos de ad

### Tipo 1 — DIRECT OFFER
"X com 20% off — só hoje"

Quando usar: scarcity real + audience product-aware.

### Tipo 2 — BENEFIT-FIRST
"Pele descansada em 30 dias"

Quando usar: benefit emocional claro do produto.

### Tipo 3 — SOCIAL PROOF
"3.000 mulheres usam Aurora todo mês"

Quando usar: já tem volume de clientes.

### Tipo 4 — PAS (Problem-Agitate-Solution)
"Cansada de 12 produtos? Aurora resolve em 1."

Quando usar: audience problem-aware.

### Tipo 5 — STORY
"Comecei na cozinha. Hoje, Aurora chega."

Quando usar: founder-led storytelling.

### Tipo 6 — CURIOSITY
"O segredo que mudou minha pele em 30 dias"

Quando usar: gerar clicks (com cuidado pra não soar clickbait).

### Tipo 7 — INSIDER EDUCATION
"5 ingredientes vs 30. Você não precisa do excesso."

Quando usar: audience educada que valoriza conhecimento.

### Tipo 8 — BUNDLE
"Aurora Sérum + Hidratante por R$ X"

Quando usar: tem 2+ products complementares.

### Tipo 9 — SCARCITY
"Lote 1 esgotou. Lote 2 com 100 unidades."

Quando usar: scarcity REAL (não fake).

### Tipo 10 — LIFESTYLE
"Sua manhã merece o mesmo cuidado"

Quando usar: aspirational ads.

---

## Step 0 — Read brand context

```yaml
big_idea: "Cuidado real, sem ruído"
voice_permanent: ["Calma", "Honesta", "Natural"]
vocabulary_forbidden: ["incrível", "milagre", "transformador", ...]
mode: "visual-copy"
```

---

## Step 1 — Filtrar tipos compatíveis

Skill **avalia** cada tipo contra Big Idea + voice + mode:

```
═══════════════════════════════════════
FILTRAGEM AUTOMÁTICA — Aurora
═══════════════════════════════════════

Big Idea: "Cuidado real, sem ruído"

TIPOS COMPATÍVEIS:

✓ Direct Offer — OK se desconto real (não criativo)
✓ Benefit-First — OK alinhada com Big Idea
⚠️ Social Proof — OK se evita números inflados
✓ PAS — OK se audience consciente
✓ Story — OK (founder-led se alinha)
⚠️ Curiosity — CUIDADO — pode soar clickbait, viola "honesta"
✓ Insider Education — IDEAL pra Aurora
❌ Bundle — Aurora não tem produtos múltiplos ainda
⚠️ Scarcity — OK se REAL (lote limitado é OK)
✓ Lifestyle — OK alinhada com aspirational

PARA AURORA, recomendo TOP 4:
1. Insider Education (mais on-brand)
2. Benefit-First
3. Story
4. Lifestyle

Quer focar nesses 4? Ou explorar outros?
```

---

## Step 2 — Coletar inputs

```
1. Tipo de ad escolhido:
   [user escolhe entre filtrados]

2. Oferta / produto destacado:
   ex: "Aurora Sérum — pré-venda lote 2"

3. Audience-alvo do ad:
   ex: "Mulheres 35-45, F1 audience, problem-aware"

4. Plataforma:
   - Meta Feed (1:1 ou 4:5)
   - Meta Stories (9:16)
   - Google Display (rectangle)
   - TikTok Feed
   - Outra

5. Aspect ratios desejados:
   - 1:1
   - 9:16
   - 16:9
   - Outros

6. Já tem visual / imagem pronta?
   - Sim — passa link/path
   - Não — vou usar Photography Signature
```

---

## Step 3 — Gerar 3 copies por tipo

Pra cada tipo escolhido, gera 3 variações:

```
═══════════════════════════════════════
TIPO: INSIDER EDUCATION
═══════════════════════════════════════

VARIAÇÃO 1 (linha emocional)
HEADLINE: "5 ingredientes contra 30. Você não precisa do excesso."
BODY: "Aurora Sérum traz apenas o essencial: niacinamida, 
bakuchiol e 3 mais. Sem fragrância. Sem mistério."
CTA: "Conheça"
Hashtags: [conforme plataforma]
Voice check: ✓ Vocab favorite ("essencial", "sem ruído" implícito)
Voice check: ✓ Vocab forbidden NÃO usado

VARIAÇÃO 2 (linha técnica)
HEADLINE: "Skincare premium = 12 produtos? Nem sempre."
BODY: "Aurora desafia: 1 produto com 5 ingredientes pode 
substituir rotinas complexas. Niacinamida + bakuchiol no centro."
CTA: "Ver fórmula"
Voice check: ✓

VARIAÇÃO 3 (linha pragmática)
HEADLINE: "30 dias com 1 sérum. Resultado real."
BODY: "Sem prometer milagre. Aurora trabalha com niacinamida e 
bakuchiol em 30 dias até diferença visível."
CTA: "Reservar"
Voice check: ✓
```

Gera 3 variações por tipo. Se 4 tipos escolhidos = 12 copies prontas.

---

## Step 4 — Voice check rigoroso

Cada copy passa por:

```
VOICE CHECK CHECKLIST

✓ Headline ≤ 12 palavras?
✓ Body ≤ 125 caracteres?
✓ CTA conciso (1-3 palavras)?
✓ Vocabulary favorite usado?
✓ Vocabulary forbidden EVITADO?
✓ Voice permanente preservada?
✓ Aderente à Big Idea?
✓ Sem ! (90% dos casos)?
✓ Sem caps lock excessivo?
✓ Voz ativa?

Score: [X/10]
Mínimo aceitável: 9/10
```

Copies que falham são automaticamente reescritas.

---

## Step 5 — Output: copy-static-ads-[campanha].md

```markdown
# Ads Estáticos — Aurora Sérum Lote 2
Data: [data]
Plataformas: Meta Feed (1:1, 4:5), Stories (9:16)

## Tipos selecionados
1. Insider Education
2. Benefit-First
3. Story
4. Lifestyle

## Total copies geradas: 12 (3 por tipo)

---

## TIPO 1 — INSIDER EDUCATION

### Variação 1.1 (emocional)
[completa com headline, body, CTA, voice check]

### Variação 1.2 (técnica)
[idem]

### Variação 1.3 (pragmática)
[idem]

---

## TIPO 2 — BENEFIT-FIRST
[3 variações]

## TIPO 3 — STORY
[3 variações]

## TIPO 4 — LIFESTYLE
[3 variações]

---

## Recomendação de teste A/B

Sugiro testar 2 vencedores por tipo (8 ads no total):
- 4 INSIDER + 4 BENEFIT iniciais
- Variações nos aspect ratios 1:1 + 9:16
- 2 weeks de teste cada
- Métrica primária: CTR + cost per click

## Próximos passos

1. Roda form-brand-visual-ia-figma-ad-builder
   - Aplica essas 12 copies nos templates
   - Gera 36 ads (12 × 3 aspect ratios)

OU

2. Roda form-brand-visual-ia-brand-ad-replicator
   - Se brand folder padrão configurado
   - Output em PNG locais
```

---

## Adaptação por modo

### VISUAL-ONLY
- Tipos preferidos: Lifestyle, Story (visual-heavy)
- Tipos a evitar: Direct Offer, Bundle (texto-heavy)
- Headlines ultra-curtas (≤6 palavras)

### VISUAL+COPY (padrão)
- 4-5 tipos disponíveis
- Headlines moderadas

### COPY-HEAVY
- Todos 10 tipos disponíveis
- Headlines podem ser mais longas
- Body mais elaborada

---

## Armadilhas a evitar

- **Tipo errado pra Big Idea.** Curiosity em marca honesta = violação.
- **Copy violando vocabulary forbidden.** Auto-rejeita.
- **Headline > 12 palavras.** Plataformas cortam. Sempre testa.
- **Sem voice check.** Drift inevitável.
- **Gerar copy sem aspect ratio defined.** Direção visual fica perdida.

---

## Output esperado

✅ 9-12 copies geradas (3 por tipo, 3-4 tipos)
✅ Voice check em cada
✅ Aspect ratios definidos
✅ Recomendação de teste A/B
✅ Handoff claro pra figma-ad-builder
