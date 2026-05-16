---
name: form-brand-visual-ia-motion-design
description: Define sistema de motion design da marca — animation style dominante (smooth/bouncy/quick/slow), easing default (ease-in-out/ease-out/linear), duração padrão de transições de texto, safe zones por aspect ratio (9:16, 1:1, 4:5, 16:9), 3 antipatterns visuais a EVITAR. Aplica regra 80/20 (80% das peças usam UM estilo dominante, 20% variações). Output - Motion Style Block + safe zones documentadas + lista de antipatterns. Use depois de videography-signature. Triggers - "motion design", "animação de texto", "animação de elementos", "easing", "safe zones", "estilo de animação".
---

# Motion Design — Sistema de animação

Define como **textos e elementos gráficos** animam em vídeos da marca. Não é videography (que é cinema do clipe). É **motion design** (animation de overlays).

Inclui:
- Animation style dominante
- Easing default
- Duração de transições
- Safe zones por aspect ratio
- Antipatterns a evitar

---

## Pre-requisitos

- `videography-signature` rodou
- `typography` rodou
- `color-palette` rodou

## Próxima skill no workflow

`form-brand-visual-ia-brand-guideline-builder` ⭐ (consolida tudo)

---

## Conceitos fundamentais

### Motion design vs Videography

```
VIDEOGRAPHY (skill anterior):
- Como o clipe (filmagem/IA) se move
- Camera, subject, lighting, pacing dentro do clipe

MOTION DESIGN (esta skill):
- Como TEXTOS e GRÁFICOS animam sobre o clipe
- Headlines entrando, CTAs piscando, logo revelando
- Aplicado em pós (CapCut, DaVinci, After Effects)
```

---

## Step 1 — Define Animation Style dominante

```
═══════════════════════════════════════
ANIMATION STYLE — Direção
═══════════════════════════════════════

5 estilos principais:

A) SMOOTH (recomendado pra premium)
   Fade in/out suaves, slides controlados
   Easing: ease-in-out
   Speed: lento (0.5-0.8s entradas)
   Marcas: Aesop, Apple, COS

B) BOUNCY (playful)
   Salto + settle, energy
   Easing: ease-out-back ou spring
   Speed: médio (0.4-0.6s)
   Marcas: Glossier, Bumble

C) QUICK (energetic / TikTok-style)
   Cut sharp, snap, no easing
   Easing: linear OR instant
   Speed: muito rápido (0.1-0.2s)
   Marcas: TikTok brands, viral

D) SLOW REVEAL (cinematic)
   Build-up gradual, dramatic
   Easing: very long ease-in
   Speed: 1.5-3s
   Marcas: cinema editorial, A24, art

E) HYBRID (mix conforme contexto)
   Smooth pra headlines, quick pra CTAs
```

Pra Aurora: **A — SMOOTH**.

---

## Step 2 — Define Easing default

Easing = a "curva" do movimento.

```
EASING REFERENCE

LINEAR — movimento robotic, uniforme
  Use: NUNCA pra brand premium

EASE-IN — começa devagar, acelera
  Use: elementos saindo (exit)

EASE-OUT — começa rápido, desacelera
  Use: elementos entrando (entry)

EASE-IN-OUT — devagar nas pontas, rápido no meio
  Use: DEFAULT pra Aurora (smooth)
  Style: contemplative, premium

EASE-OUT-BACK — entra rápido, salta sutil
  Use: bouncy (não Aurora)
```

Default Aurora: **ease-in-out** pra entradas e saídas.

---

## Step 3 — Define Duração padrão

```
DURATION DEFAULTS — AURORA

Text entries (headlines, captions):
  Default: 0.6s
  Quick: 0.4s (pra Reels mais dinâmicos)
  Cinematic: 1.0s (peças especiais)

Text exits:
  Default: 0.3s
  Quick: 0.2s

Element transitions (logos, decorations):
  Default: 0.8s

Holds (texto fica na tela):
  Mínimo: 2s pra texto curto, 4s pra texto longo
  Regra: viewer deve poder ler 2x sem pressa
```

---

## Step 4 — Safe zones por aspect ratio

Áreas onde NÃO colocar texto/elementos importantes (pra UI das plataformas não cortar).

```
SAFE ZONES — POR ASPECT RATIO

9:16 (Reels, Stories, TikTok, Shorts)
─────────────────────────
TOP 250px:
  Reservado pra UI Instagram (handle, info)
  ❌ Não colocar texto crítico

BOTTOM 350px:
  Reservado pra UI Instagram (caption, CTA)
  ❌ Não colocar texto crítico

LATERAL safe area:
  120px de cada lado
  ❌ Não colocar texto na borda

SAFE AREA TOTAL:
  840×1320 (de 1080×1920)
  Texto crítico DENTRO desta área

─────────────────────────

4:5 (Instagram Feed)
─────────────────────────
TOP: 150px reservado
BOTTOM: 200px reservado
LATERAL: 100px cada lado

SAFE AREA: 880×1000 (de 1080×1350)

─────────────────────────

1:1 (Square Feed)
─────────────────────────
TOP: 100px
BOTTOM: 150px
LATERAL: 100px

SAFE AREA: 880×830 (de 1080×1080)

─────────────────────────

16:9 (YouTube, websites)
─────────────────────────
TOP: 80px
BOTTOM: 80px (mais se YouTube tem progress bar visível)
LATERAL: 80px

SAFE AREA: 1760×920 (de 1920×1080)
```

---

## Step 5 — Define Hierarquia de animação

```
HIERARQUIA DE ANIMAÇÃO

1. HEADLINE (mais importante)
   Entry: fade up + scale 0.95→1.0
   Duration: 0.6s ease-in-out
   Hold: até 4s
   Exit: fade down

2. BODY TEXT
   Entry: fade in
   Duration: 0.4s
   Hold: até 6s pra ler
   Exit: fade out

3. CTAs / BUTTONS
   Entry: fade up + slight scale 0.9→1.0
   Duration: 0.5s
   Hold: até fim do clipe
   Exit: fade

4. LOGO
   Entry: fade in slow
   Duration: 0.8s
   Hold: contínuo
   Exit: opcional

5. DECORATIVE LINES/ELEMENTS
   Entry: draw stroke (length 0→100%)
   Duration: 1.0s
   Hold: contínuo
   Exit: opcional
```

---

## Step 6 — Antipatterns (NÃO fazer)

```
3 ANTIPATTERNS — AURORA

1. BOUNCE EXAGERADO
   Texto pulando como bola de tênis.
   ❌ Quebra premium
   ✓ Substituir: smooth fade up

2. ROTATION ALEATÓRIA
   Texto rodando 360° na entrada.
   ❌ Visual clutter
   ✓ Substituir: fade in simples

3. GLITCH / DISTORTION
   Texto distorcendo digital style.
   ❌ Cyberpunk, não Aurora
   ✓ Substituir: smooth dissolve

OUTROS A EVITAR:
- Caps lock + bounce + zoom (assault visual)
- Texto rotacionado em diagonal
- Cores neon em animação
- Múltiplos elementos animando simultâneo (caos)
```

---

## Step 7 — Regra 80/20

```
REGRA 80/20

80% das peças da marca usam:
- Animation style dominante (SMOOTH)
- Easing default (ease-in-out)
- Duration default (0.6s)
- Hierarquia padrão de animação

20% das peças (especiais) podem variar:
- Lançamento âncora — animation mais elaborada
- Story experimental — outros styles
- Brand film — cinematic motion mais ambicioso
- Ad teste A/B — variar pra testar performance

NUNCA misturar 5 estilos em 1 peça.
```

---

## Step 8 — Frame "Motion Design" na Brand Guidelines

```
┌──────────────────────────────────────────────┐
│  MOTION DESIGN                               │
├──────────────────────────────────────────────┤
│                                              │
│  ANIMATION STYLE: SMOOTH                     │
│  Easing default: ease-in-out                 │
│  Duration default: 0.6s                      │
│                                              │
│  HIERARQUIA DE ANIMAÇÃO                      │
│  1. Headline — fade up + scale, 0.6s         │
│  2. Body — fade in, 0.4s                     │
│  3. CTAs — fade up + scale, 0.5s             │
│  4. Logo — fade in slow, 0.8s                │
│  5. Decorative — draw stroke, 1.0s           │
│                                              │
│  SAFE ZONES                                  │
│  [diagramas por aspect ratio]                │
│  - 9:16: 840×1320 safe                       │
│  - 4:5: 880×1000 safe                        │
│  - 1:1: 880×830 safe                         │
│  - 16:9: 1760×920 safe                       │
│                                              │
│  ANTIPATTERNS (não fazer)                    │
│  ❌ Bounce exagerado                          │
│  ❌ Rotation aleatória                        │
│  ❌ Glitch/distortion                         │
│  ❌ Caps lock + bounce + zoom                 │
│                                              │
│  REGRA 80/20                                 │
│  80% smooth padrão                           │
│  20% variações em peças especiais            │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 9 — Update companion.md

```yaml
motion_design:
  animation_style: "smooth"
  easing_default: "ease-in-out"
  duration_default: 0.6
  
  text_animation:
    entry: "fade up + scale 0.95→1.0"
    exit: "fade down"
    entry_duration: 0.6
    exit_duration: 0.3
    hold_minimum: 2.0
  
  hierarchy:
    headline: {entry: "fade up + scale", duration: 0.6, hold: 4}
    body: {entry: "fade in", duration: 0.4, hold: 6}
    cta: {entry: "fade up + slight scale", duration: 0.5, hold: "until end"}
    logo: {entry: "fade in slow", duration: 0.8, hold: "continuous"}
    decorative: {entry: "draw stroke", duration: 1.0, hold: "continuous"}
  
  safe_zones:
    9_16:
      top_reserved: 250
      bottom_reserved: 350
      lateral_reserved: 120
      safe_area: "840×1320"
    4_5:
      top_reserved: 150
      bottom_reserved: 200
      lateral_reserved: 100
      safe_area: "880×1000"
    1_1:
      top_reserved: 100
      bottom_reserved: 150
      lateral_reserved: 100
      safe_area: "880×830"
    16_9:
      top_reserved: 80
      bottom_reserved: 80
      lateral_reserved: 80
      safe_area: "1760×920"
  
  antipatterns:
    - "Bounce exagerado"
    - "Rotation aleatória"
    - "Glitch/distortion"
    - "Caps lock + bounce + zoom (assault visual)"
    - "Texto rotacionado em diagonal"
    - "Cores neon"
    - "Múltiplos elementos animando simultâneo"
  
  rule_80_20: "80% das peças usam style smooth dominante, 20% peças especiais variam"
```

---

## Adaptação por modo

### VISUAL-ONLY
- Motion design MAIS sofisticado
- Texto minimal, mas animação refinada
- Cinematic motion em peças premium

### VISUAL+COPY (padrão)
- Motion design padrão

### COPY-HEAVY
- Motion design MAIS funcional
- Foco em **legibilidade** (texto deve poder ser lido facilmente)
- Animação não atrapalha leitura

---

## Armadilhas a evitar

- **Animação excessiva.** Texto rotacionando + bouncing + flashing = clutter.
- **Safe zones ignoradas.** UI Instagram corta texto crítico.
- **Velocidade aleatória.** Sem default, cada peça tem timing diferente.
- **Antipatterns aplicados.** Sempre verifica contra lista de "não fazer".
- **5 styles em 1 peça.** Caos. Sempre 1 dominante.

---

## Output esperado

✅ Animation style dominante definido
✅ Easing + duration defaults
✅ Hierarquia de animação (5 níveis)
✅ Safe zones documentadas por aspect ratio (4 ratios)
✅ Antipatterns listados (8+)
✅ Regra 80/20 estabelecida
✅ Frame "Motion Design" na Brand Guidelines
✅ Section `motion_design` no companion.md
✅ Próxima skill: `brand-guideline-builder` ⭐ (consolidação)
