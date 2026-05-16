---
name: form-brand-visual-ia-carrossel-feed
description: Cria carrossel Instagram Feed (5-10 slides) com estrutura - Capa (slide 1 com Hook visual + texto manchete) + Setup (slide 2 contexto) + Middle (slides 3-7, 1 conceito por slide) + Resolution (slide 8 payoff) + CTA opcional (slide 9). 5 tipos de carrossel - educativo, listicle, frameworks, FAQ, storytelling. Lê brand-guideline-companion.md pra puxar voice + paleta + tipografia. Output - texto de cada slide + handoff pra Figma com template de carrossel. Use pra carrosséis educativos do feed. Triggers - "carrossel", "carrossel feed", "carrossel educativo", "5 slides", "10 slides", "slides Instagram", "post slides".
---

# Carrossel Feed — Estrutura completa

Cria carrossel Instagram Feed seguindo estrutura testada. 5-10 slides com função clara por slide.

---

## Pre-requisitos

- `brand-guideline-companion.md` rodou
- `figma-setup` rodou (templates de carrossel existem)
- Tema definido

## Próxima skill no workflow

Após texto pronto, handoff pra:
- Figma (manualmente OU via `figma-ad-builder` se template existe)
- Caption: já gerada nesta skill

---

## Estrutura mestre

```
SLIDE 1 — CAPA
Função: hook visual + texto manchete
Pro Reels, hook é a primeira frase visual.
Pra carrossel, hook = primeiro slide.

✓ Imagem hero ou visual forte
✓ Headline máximo 7-8 palavras
✓ Sub-headline opcional (uma linha)
✓ Indicador "Arraste →"

EXEMPLO Aurora:
[imagem macro de gota suspensa]
"5 erros no skincare matinal"
"que você comete sem saber"
→ arraste

────────────────────────────

SLIDE 2 — SETUP
Função: contexto, validate dor do viewer
Por que tema importa?

✓ 2-3 frases reconhecendo dor
✓ Promessa de resolução
✓ Mantém visual coerente

────────────────────────────

SLIDES 3-7 — MIDDLE (1 ideia por slide)
Função: desenvolvimento detalhado
1 conceito por slide — NÃO empilha.

5 slides middle = 5 ideias principais.

Cada slide:
✓ Heading curto (3-5 palavras)
✓ Body 2-4 frases
✓ Visual de apoio (não obrigatório, mas eleva)

────────────────────────────

SLIDE 8 — RESOLUTION
Função: payoff, síntese
Conecta tudo. Recompensa quem chegou até aqui.

✓ Frase de impacto
✓ Resumo visual ou textual

────────────────────────────

SLIDE 9 — CTA (opcional)
Função: ação clara
Só se carrossel é orientado a venda.

✓ CTA suave OR direto conforme contexto
✓ Link na bio referenciado
```

---

## 5 tipos de carrossel

### Tipo 1 — EDUCATIVO
"5 mitos do skincare", "Como aplica sérum", "10 ingredientes a evitar"

Estrutura mestre acima.

### Tipo 2 — LISTICLE
"7 produtos que mudaram minha rotina", "10 maiores erros de iniciantes"

Cada slide middle = 1 item da lista.

### Tipo 3 — FRAMEWORK
"O método 5C para skincare", "Framework de rotina matinal"

Slides middle = 1 letra/passo do framework.

### Tipo 4 — FAQ
"Tudo sobre o Aurora respondido", "Perguntas que mais recebemos"

Slides middle = 1 pergunta + resposta por slide.

### Tipo 5 — STORYTELLING
"Como Aurora começou", "Caso da cliente Mariana"

Slides middle = capítulos da história.

---

## Step 0 — Read brand context

```yaml
voice_permanent: ["Calma", "Honesta", "Natural"]
vocabulary_favorite: [...]
vocabulary_forbidden: [...]
visual_palette: [...]
typography: {heading: "Cormorant", body: "Inter"}
mode: "visual-copy"
```

---

## Step 1 — Coletar inputs

```
═══════════════════════════════════════
CARROSSEL FEED — Setup
═══════════════════════════════════════

1. Tipo de carrossel:
   A) Educativo (5 mitos, regras, princípios)
   B) Listicle (top 10, 5 melhores, ranking)
   C) Framework (método, sistema, passos)
   D) FAQ (perguntas e respostas)
   E) Storytelling (história, caso, jornada)
   
2. Tema central:
   ex: "5 regras pra skincare matinal"
   ex: "Por que Aurora não usa fragrância sintética"

3. Quantidade de slides:
   - 5 slides (carrossel curto)
   - 8 slides (médio — recomendado)
   - 10 slides (longo — temas profundos)

4. Plataforma:
   - Instagram Feed (1080×1350 4:5)
   - Instagram Carrossel quadrado (1080×1080 1:1)

5. Tem CTA?
   - Sim (slide final = CTA)
   - Não (encerra no payoff)

6. Visual style:
   - Predominante texto + background neutro
   - Predominante imagem + texto sobreposto
   - Mix: imagem alguns slides, texto outros
```

---

## Step 2 — Estrutura aplicada ao tipo

Pra tipo Educativo, 8 slides, tema "5 regras skincare matinal":

```
SLIDE 1 — CAPA
"5 regras pra skincare matinal"
(que ninguém te conta)
→ arraste

SLIDE 2 — SETUP
"Você está fazendo skincare há anos.
Mas pode estar errando na regra mais simples.

A ordem dos produtos."

SLIDE 3 — Regra 1
"REGRA 1
A ordem importa."
[corpo]: "Do mais fluido pro mais denso. 
Sempre. Sem exceção."

SLIDE 4 — Regra 2
"REGRA 2
Camada por camada."
[corpo]: "Espera 30 segundos entre cada produto.
A pele precisa absorver antes do próximo."

SLIDE 5 — Regra 3
"REGRA 3
Hidratação primeiro."
[corpo]: "Sérum hidratante antes do creme.
Não inverte."

SLIDE 6 — Regra 4
"REGRA 4
SPF não negocia."
[corpo]: "Mesmo em dia nublado.
Mesmo em dezembro.
Sempre."

SLIDE 7 — Regra 5
"REGRA 5
Menos é mais."
[corpo]: "5 produtos máximo.
Mais que isso vira ruído."

SLIDE 8 — RESOLUTION
"Skincare boa não é magia.
É consistência simples."

SLIDE 9 — CTA (opcional pra esse tema)
"Aurora Sérum — 1 produto. 5 ingredientes.
Link na bio."
```

---

## Step 3 — Validação voice check

Pra cada slide:
- ✓ Vocabulary favorite usado quando possível
- ✓ Vocabulary forbidden evitado
- ✓ Frases curtas dominam
- ✓ Sem ! exceções
- ✓ Voice permanente preservada

Output após check:

```
VOICE CHECK — APROVADO

Vocabulary favorite usado: "consistência", "simples", "ruído"
Vocabulary forbidden NÃO usado: ✓
Sentence length: média 6 palavras ✓
Exclamation marks: 0 ✓
Tone: calmo + honesto + natural ✓
```

---

## Step 4 — Visual direction por slide

Pra cada slide, sugere visual:

```
SLIDE 1 (capa):
Visual: macro de gota de sérum no ar (Photography Signature aplicada)
Texto: Cormorant SemiBold 60pt centralizado
BG: cream (#F5F0E8) com leve textura linen
Arrow → no canto inferior

SLIDE 2 (setup):
Visual: texto sobre BG terracotta sutil
Sem imagem (texto puro pra contraste com slide 1)

SLIDES 3-7 (regras):
Visual: número grande "REGRA 1" em Cormorant Display
BG: alternating cream → sand → cream
Subtítulo Cormorant 40pt
Body Inter 18pt

SLIDE 8 (resolution):
Visual: macro produto Aurora final (warm muted)
Texto sobreposto Cormorant Italic

SLIDE 9 (CTA):
Visual: produto centralizado + link na bio call-out
```

---

## Step 5 — Caption pronto

```
CAPTION PARA O POST

A ordem importa mais que o produto.

Em 8 anos de skincare, ninguém me ensinou isso. 
Só descobri pesquisando.

As 5 regras estão no carrossel — em ordem.

Salva pra reler. E aplica amanhã de manhã.

Aurora Sérum é o único produto que uso desde 2024. 
Niacinamida + bakuchiol em fórmula simples. 
Sem ruído.

Link na bio.

#aurora #skincare #peleboa #autocuidado 
#skincarematinal #cuidadocomapele #rotina 
#carrossel #educacao #saude

[hashtags: 1 anchor + 3 large + 4 medium + 2 small]
```

---

## Step 6 — Handoff pra Figma

```
═══════════════════════════════════════
✅ CARROSSEL PRONTO

Texto: 9 slides escritos
Voice check: APROVADO
Visual direction: definida por slide
Caption: pronta

PRÓXIMOS PASSOS:

1. Montar no Figma:
   - Abre arquivo Figma da marca
   - Page "Templates" → section "Carrossel Slide"
   - Duplica template 9 vezes (1 por slide)
   - Aplica textos + visuais conforme direction
   - Exporta como 9 PNGs

OU

2. Roda form-brand-visual-ia-figma-ad-builder
   (se template existe)
   pra automação parcial

OU

3. Roda form-brand-visual-ia-content-pipeline
   pra peça mais elaborada
═══════════════════════════════════════
```

---

## Adaptação por modo

### VISUAL-ONLY
- Slides com mais imagem, menos texto
- Headings menores
- Foco no visual cada slide

### VISUAL+COPY (padrão)
- 8 slides padrão
- Mix balanceado

### COPY-HEAVY
- 10+ slides
- Mais texto por slide
- Possivelmente sub-bullets

---

## Armadilhas a evitar

- **Slide 1 sem hook.** Carrossel não abre = ninguém vê.
- **Mais de 1 ideia por slide middle.** Caos.
- **Texto longo demais.** Mobile: ilegível.
- **Sem indicador "arraste".** Audience não percebe que tem mais.
- **CTA forçado em carrossel educativo.** Pode soar comercial demais.

---

## Output esperado

✅ 5-10 slides com texto escrito
✅ Voice check aprovado
✅ Visual direction por slide
✅ Caption pronta com hashtags
✅ Handoff pra Figma claro
