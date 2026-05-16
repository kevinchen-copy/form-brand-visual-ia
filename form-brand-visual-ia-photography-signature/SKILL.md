---
name: form-brand-visual-ia-photography-signature
description: Define a assinatura fotográfica da marca em 4 dimensões — LIGHTING (natural/studio/dramatic/soft), MOOD (minimal/clean/busy/artistic), SUBJECT (people/products/lifestyle/abstract), FILTER (color treatment/saturation/brightness). Gera Lighting Signature em frase pronta pra prompt em inglês + Camera Signature (modelo, lente, aperture) + Color Grading. Output alimenta DIRETAMENTE os prompts das skills image-generation e fal-image-gen. Use depois de moodboard + color-palette. Triggers - "photography signature", "estilo fotográfico", "assinatura fotográfica", "lighting signature", "camera signature", "estilo das fotos", "photography style".
---

# Photography Signature — Assinatura fotográfica

Define a assinatura fotográfica da marca em 4 dimensões. Output = frases prontas pra colar em prompts de geração (fal.ai, Midjourney, Higgsfield).

Esta skill é **fonte de verdade pra TODAS as gerações visuais**. Skills `fal-image-gen`, `image-generation`, `brand-prompt-generator` puxam direto desta.

---

## Pre-requisitos

- `moodboard` rodou (síntese visual existente)
- `color-palette` rodou (paleta definida)
- `brand-faces` rodou (se modo permite)
- `positioning` finalizado

## Próxima skill no workflow

`form-brand-visual-ia-videography-signature` (similar mas pra vídeo)

---

## As 4 dimensões

### Dimensão 1 — LIGHTING

Tipo de luz dominante nas peças.

```
A) NATURAL (recomendado pra premium)
   "Soft natural window light, diffused, warm afternoon"
   Marcas: Aesop, Le Labo, Kinfolk

B) STUDIO (controlled)
   "Studio softbox key light at 45°, controlled shadows"
   Marcas: Apple, COS, Tesla

C) DRAMATIC (high contrast)
   "Single hard light source, deep shadows, chiaroscuro"
   Marcas: Le Labo apothecary, Diptyque

D) SOFT (diffused, even)
   "Overcast daylight, even illumination, no harsh shadows"
   Marcas: MUJI, Daily Paper, neutrals

E) GOLDEN HOUR
   "Late afternoon golden hour, warm raking light, long shadows"
   Marcas: outdoor lifestyle, fashion editorial
```

Pergunta:
```
Pra Aurora, com mood "contemplativo, warm muted, editorial":

Sugiro A — NATURAL com warm afternoon temperature.

Alternativas:
- B (controlled studio) se quer mais polido
- E (golden hour) se quer mais cinematográfico

Qual?
```

### Dimensão 2 — MOOD

Atmosphere visual dominante.

```
A) MINIMAL (Aesop-style)
   Generous negative space, foco isolado, calma

B) CLEAN (commercial premium)
   Composições organizadas, well-lit, polished

C) BUSY (editorial complex)
   Múltiplos elementos, density visual

D) ARTISTIC (fine art aesthetic)
   Composições intencionalmente unusuais, mood-driven

E) DOCUMENTARY (raw, authentic)
   Real moments captured, less staged
```

### Dimensão 3 — SUBJECT focus

O que aparece no centro das peças geralmente.

```
A) PRODUCT-CENTRIC (produto é protagonista)
   Brand Face entra em peças especiais
   ex: skincare, perfume, watches

B) PEOPLE-CENTRIC (pessoas protagonistam)
   Produto entra em apoio
   ex: fashion, lifestyle, beauty model

C) LIFESTYLE BLENDED (mix de pessoas + produto + ambiente)
   Foco em uso real
   ex: kitchen brands, wellness

D) ABSTRACT (texturas, padrões, formas)
   Quase sem subject claro
   ex: brand stylized, artistic
```

### Dimensão 4 — FILTER / Color treatment

Color grading aplicado em pós.

```
A) WARM MUTED (Aurora-like)
   Color cast quente sutil, saturação reduzida
   "Naturalistic warm grading"

B) COOL CLEAN (apple-like)
   Whites brilhantes, slight blue undertone
   "Bright clean grading"

C) FILM ANALOG (vintage)
   Grain visible, color cast filmic
   "35mm Kodak Portra-like"

D) HIGH CONTRAST B&W
   Pure black & white, dramatic
   "Monochrome editorial"

E) HYPER-SATURATED (pop)
   Cores vibrantes, alta saturação
   "Vibrant commercial"
```

---

## Step 1 — Decisões consolidadas

Apresenta resumo:

```
═══════════════════════════════════════
PHOTOGRAPHY SIGNATURE — Decisões
═══════════════════════════════════════

Baseado em moodboard + paleta + positioning:

LIGHTING: A — Natural (warm afternoon window light)
MOOD: A — Minimal (generous negative space)
SUBJECT: A — Product-centric (Brand Face em peças especiais)
FILTER: A — Warm muted (naturalistic)

Cohere com referências: Aesop, Le Labo, COS

Confirma?
```

---

## Step 2 — Detalha Lighting Signature

Frase técnica pronta pra prompts:

```
LIGHTING SIGNATURE — AURORA

Detalhamento:
- Source: Single natural window light (preferencial)
- Direction: Upper-left (60-70%), upper-right (20%), top (10%)
- Quality: Soft, diffused through sheer linen curtains
- Temperature: Warm afternoon (3000K-4000K)
- Intensity: Slight underexposure (premium feel)
- Shadows: Gentle, soft, naturalistic (não duras)

FRASE READY-TO-PROMPT (cole em geração):

"Soft natural window light from upper-left, diffused through 
sheer linen curtains, warm afternoon temperature (3500K), 
naturalistic gentle shadows, slight underexposure for moody 
premium feel"

Variações por contexto:
- Hero product: "Single warm light from upper-left, dramatic 
  long shadow on right"
- Brand Face portrait: "Soft enveloping window light, gentle 
  fill from right side"
- Lifestyle: "Available natural daylight, warm afternoon, 
  no direct sunbeam"
```

---

## Step 3 — Detalha Camera Signature

Setup técnico de câmera ready-to-prompt.

```
CAMERA SIGNATURE — AURORA

Lentes preferidas (por contexto):
- Product close-up: 100mm macro at f/4
- Product mid-range: 85mm at f/2.8
- Brand Face portrait: 85mm at f/2.0
- Lifestyle wide: 35mm at f/2.8
- Architectural / wide: 24mm at f/8

Angle dominante:
- Eye-level (60% das peças)
- Slight high angle 15° (25%)
- Slight low angle 5° (10%)
- Top-down flat lay (5%)

Camera reference:
"Shot on Hasselblad medium format" (premium feel)
OR
"Shot on Leica Q" (intimacy)

FRASE READY-TO-PROMPT (escolha por contexto):

Pra product hero:
"100mm macro lens at f/4, slight high angle, shot on Hasselblad 
medium format"

Pra Brand Face:
"85mm portrait lens at f/2.0, eye-level, shallow depth of field"

Pra lifestyle:
"35mm at f/2.8, eye-level, naturalistic perspective"
```

---

## Step 4 — Detalha Color Grading

Tratamento de cor em pós-produção.

```
COLOR GRADING — AURORA

Estilo: Warm muted naturalistic

Características:
- Saturação: -10 a -15% vs default
- Temperature: +5 (warm push)
- Tint: neutral (slight magenta avoid)
- Shadows: lifted slightly (não pure black)
- Highlights: held back (não blown out)
- Contrast: medium (não alto)

Color cast dominante: warm cream undertone

FRASE READY-TO-PROMPT:

"Naturalistic warm muted color grading, slight underexposure, 
shadows lifted but warm-toned, highlights softly rolled-off, 
medium contrast, no saturation pop"

Alternative simpler:
"Warm naturalistic grading"
```

---

## Step 5 — Detalha Composition Signature

Composição dominante (do moodboard).

```
COMPOSITION SIGNATURE — AURORA

Princípios:
- Rule of thirds dominante (70% das peças)
- Centered apenas em hero shots específicos
- Generous negative space (40%+ do frame)
- Subject no terço esquerdo OR direito (raramente center)
- Layered depth quando possível (foreground/midground/background)

FRASE READY-TO-PROMPT:

"Rule of thirds composition with subject positioned in left 
third, generous negative space (40%+) on right, shallow depth 
of field"
```

---

## Step 6 — Combina tudo numa frase mestre

A frase mestre = combinação de Lighting + Camera + Color Grading + Composition. É a **base universal** pra prompts.

```
PHOTOGRAPHY SIGNATURE COMPLETA — AURORA
(cole em qualquer prompt de imagem da marca)

"Editorial photography, soft natural window light from 
upper-left diffused through sheer linen curtains, warm 
afternoon temperature 3500K, rule of thirds composition with 
generous negative space, naturalistic warm muted color grading, 
slight underexposure for moody premium feel, 85mm portrait 
lens at f/2.0 eye-level, shot on Hasselblad medium format, 
warm earthy palette (cream, terracotta, sand)"
```

Skills downstream (fal-image-gen, image-generation) **prepend essa frase** automaticamente em prompts.

---

## Step 7 — Cria frame "Photography Signature" na Brand Guidelines

Frame visual:

```
┌──────────────────────────────────────────────┐
│  PHOTOGRAPHY SIGNATURE                       │
├──────────────────────────────────────────────┤
│                                              │
│  4 DIMENSÕES                                 │
│  - Lighting: NATURAL (warm afternoon)        │
│  - Mood: MINIMAL (generous negative space)   │
│  - Subject: PRODUCT-CENTRIC (Brand Face spec.)│
│  - Filter: WARM MUTED (naturalistic)         │
│                                              │
│  LIGHTING DETALHADA                          │
│  Source: Single natural window light         │
│  Direction: Upper-left dominante             │
│  Quality: Soft, diffused                     │
│  Temperature: Warm 3500K                     │
│  Shadows: Gentle, soft                       │
│                                              │
│  CAMERA SETUPS POR CONTEXTO                  │
│  - Product close: 100mm macro f/4            │
│  - Portrait: 85mm f/2.0                      │
│  - Lifestyle: 35mm f/2.8                     │
│                                              │
│  COLOR GRADING                               │
│  Warm muted naturalistic                     │
│  Slight underexposure                        │
│  Warm cream undertone                        │
│                                              │
│  COMPOSITION                                 │
│  Rule of thirds                              │
│  Generous negative space (40%+)              │
│  Subject offset                              │
│                                              │
│  FRASE MESTRE (ready-to-prompt):             │
│  ┌────────────────────────────────────────┐  │
│  │ "Editorial photography, soft natural   │  │
│  │  window light from upper-left,         │  │
│  │  warm afternoon, rule of thirds,       │  │
│  │  generous negative space, naturalistic │  │
│  │  warm muted grading, 85mm f/2.0..."    │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  EXEMPLOS VISUAIS                            │
│  [3-5 thumbnails de imagens master da marca  │
│   que exemplificam Photography Signature]    │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 8 — Update companion.md

```yaml
visual:
  photography_signature:
    lighting:
      source: "Single natural window light"
      direction: "Upper-left dominante"
      quality: "Soft, diffused through sheer linen"
      temperature: "Warm 3500K"
      shadows: "Gentle, soft, naturalistic"
    
    camera_setups:
      product_close: "100mm macro lens at f/4, slight high angle"
      product_mid: "85mm at f/2.8"
      portrait: "85mm portrait lens at f/2.0, eye-level"
      lifestyle_wide: "35mm at f/2.8, naturalistic"
      flat_lay: "50mm at f/5.6, top-down"
    
    camera_reference: "Hasselblad medium format"
    
    color_grading:
      style: "Warm muted naturalistic"
      saturation: "-10 to -15%"
      temperature: "+5 (warm push)"
      shadows: "Lifted, warm-toned"
      highlights: "Soft roll-off"
      contrast: "Medium"
    
    composition:
      dominant_rule: "Rule of thirds"
      negative_space: "40%+ generous"
      subject_position: "Left or right third"
      depth: "Layered when possible"
    
    ready_to_prompt: |
      Editorial photography, soft natural window light from 
      upper-left diffused through sheer linen curtains, warm 
      afternoon temperature 3500K, rule of thirds composition 
      with generous negative space, naturalistic warm muted 
      color grading, slight underexposure for moody premium 
      feel, 85mm portrait lens at f/2.0 eye-level, shot on 
      Hasselblad medium format, warm earthy palette (cream, 
      terracotta, sand)
```

Skills downstream agora podem **referenciar `photography_signature.ready_to_prompt` direto**.

---

## Adaptação por modo

### VISUAL-ONLY
- Photography Signature **máximo detalhe**
- Variações por contexto (5-7)
- Pasta de exemplos visuais robusta
- Skill é central na marca

### VISUAL+COPY (padrão)
- Photography Signature detalhada padrão

### COPY-HEAVY
- Photography Signature **simplificada**
- 1 frase mestre + 2-3 variações max
- Detalhamento menor

---

## Armadilhas a evitar

- **Signature vaga.** "Bonita, premium" — não vira prompt.
- **Sem frase ready-to-prompt.** Skills downstream precisam frase **literal pronta**.
- **Múltiplas lighting styles.** Marca premium tem 1 dominante. Variações são exceções.
- **Esquecer color grading.** Grading consistent = identidade visual.
- **Sem exemplos visuais.** Texto descritivo + 0 imagens = abstrato demais.

---

## Output esperado

✅ 4 dimensões definidas (lighting/mood/subject/filter)
✅ Lighting Signature detalhada
✅ Camera Signature por contexto
✅ Color Grading especificado
✅ Composition Signature
✅ **Frase MESTRE ready-to-prompt** (peça central)
✅ Frame "Photography Signature" no Figma
✅ Section completa no companion.md
✅ Próxima skill: `videography-signature`
