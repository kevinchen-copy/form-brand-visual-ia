---
name: form-brand-visual-ia-typography
description: Define sistema tipográfico da marca como Text Styles vivos no Figma — família primária (heading) + secundária (body) + opcional terciária + hierarquia completa H1-H6 + Body + Caption + Quote com size, weight, line-height, letter-spacing exatos + pairing tipográfico (3 Cs - Concordante, Conflitante, Contrastante). Atualiza Text Styles default do figma-setup com brand fonts reais. Output - Text Styles atualizados + frames "Tipografia" na Brand Guidelines + entrada no companion.md. Use SEMPRE depois de logo-system (geralmente). Triggers - "tipografia", "fontes", "família tipográfica", "pairing", "heading e body", "serifa", "sans serif", "tipografia da marca".
---

# Typography — Sistema tipográfico vivo no Figma

Define sistema tipográfico da marca:
- 1 fonte primária (heading) + 1 secundária (body)
- Opcionalmente 1 terciária (display/accent)
- Hierarquia completa (H1/H2/H3/Body/Caption/Quote)
- Pairing tipográfico (3 Cs framework)
- Atualiza Text Styles no Figma (criados em figma-setup)

---

## Pre-requisitos

- `figma-setup` rodou (file Figma + Text Styles default existem)
- `moodboard` rodou (sabe estética geral)
- `logo-system` rodou (tipografia casa com logo)
- Figma MCP conectado

## Próxima skill no workflow

`form-brand-visual-ia-color-palette` (define paleta cromática)

---

## Step 0 — Read brand context

Lê:
- CLAUDE.md (modo da marca)
- moodboard síntese (mood estético)
- logo-system (se logo usa serifa ou sans)
- positioning (traits afirmados)

---

## Step 1 — Pergunta orientação

```
═══════════════════════════════════════
TYPOGRAPHY — Direção
═══════════════════════════════════════

Baseado no moodboard ("editorial, contemplativo, premium"):

Sugestão de direção tipográfica:

A) SERIFA CLÁSSICA + SANS NEUTRA
   Heading: Cormorant / Bodoni / Playfair
   Body: Inter / Söhne / Helvetica
   Mood: editorial premium (Aesop, Le Labo, COS)

B) SANS MODERN + SANS WEIGHT VARIATION
   Heading: Söhne Bold / GT America / Inter Bold
   Body: Söhne Regular / Inter Regular
   Mood: minimalista moderno (Apple, COS, MUJI)

C) SERIFA MODERNA + MONO ACCENT
   Heading: Tiempos / GT Sectra
   Body: Inter
   Accent (números/tags): IBM Plex Mono
   Mood: editorial tech (FT, NYT, Bloomberg)

D) DISPLAY EXPRESSIVA + SANS SIMPLES
   Heading: Modern Display Custom
   Body: Inter
   Mood: contemporâneo statement-making

E) ESCOLHA PRÓPRIA
   Você tem fontes específicas em mente?

Qual direção?
```

Aguarda resposta.

---

## Step 2 — Confirma fonts específicas

Após direção escolhida, valida fonts exatas:

```
Direção A — SERIFA CLÁSSICA + SANS NEUTRA

Sugestão pra Aurora:
- Heading: Cormorant (Google Fonts, free)
- Body: Inter (Google Fonts, free)

Alternativas:
- Heading: Playfair Display, EB Garamond, Lora
- Body: Söhne (premium), Inter, Plus Jakarta Sans

Confirmar Cormorant + Inter?
OR escolhe outras?
```

---

## Step 3 — Aplicar pairing tipográfico (3 Cs)

3 frameworks de pairing:

### Concordante
Mesma "voz" — ambas serifas OR ambas sans. Harmônico, calmo.
Ex: 2 serifas (Playfair + Lora)

### Contrastante (recomendado)
Diferentes mas complementares — Serifa heading + Sans body.
Ex: Cormorant + Inter

### Conflitante
Estilos opostos pra criar tensão. Difícil acertar.
Ex: Display script + Industrial sans

**Skill geralmente recomenda Contrastante** (mais versátil + fácil de operar).

---

## Step 4 — Define hierarquia completa

Pra cada nível, define: font, weight, size, line-height, letter-spacing.

```
HIERARQUIA TIPOGRÁFICA — AURORA

DISPLAY (excepcional, raro)
- Font: Cormorant
- Weight: 300 Light Italic
- Size: 120pt (display) / 80pt (mobile)
- Line-height: 1.0
- Letter-spacing: 0

H1
- Font: Cormorant
- Weight: 600 SemiBold
- Size: 64pt / 48pt mobile
- Line-height: 1.1
- Letter-spacing: -1%

H2
- Font: Cormorant
- Weight: 500 Medium
- Size: 40pt / 32pt mobile
- Line-height: 1.2
- Letter-spacing: 0

H3
- Font: Cormorant
- Weight: 500 Medium
- Size: 28pt / 24pt mobile
- Line-height: 1.3
- Letter-spacing: 0

H4
- Font: Inter
- Weight: 600 SemiBold
- Size: 20pt / 18pt mobile
- Line-height: 1.4
- Letter-spacing: 0
- Text transform: uppercase
- Letter-spacing UPPERCASE: 5%

BODY LARGE
- Font: Inter
- Weight: 400 Regular
- Size: 20pt / 18pt mobile
- Line-height: 1.6
- Letter-spacing: 0

BODY (default)
- Font: Inter
- Weight: 400 Regular
- Size: 16pt / 14pt mobile
- Line-height: 1.6
- Letter-spacing: 0

BODY SMALL
- Font: Inter
- Weight: 400 Regular
- Size: 14pt / 12pt mobile
- Line-height: 1.5
- Letter-spacing: 0

CAPTION
- Font: Inter
- Weight: 400 Regular
- Size: 12pt / 11pt mobile
- Line-height: 1.4
- Letter-spacing: 0

QUOTE
- Font: Cormorant
- Weight: 400 Italic
- Size: 28pt / 24pt mobile
- Line-height: 1.4
- Letter-spacing: 0
```

---

## Step 5 — Atualizar Text Styles no Figma

Via Figma MCP, atualiza ou cria Text Styles no Styleguide page:

```javascript
// Pra cada estilo definido
await figma.createOrUpdateTextStyle({
  fileKey: FIGMA_FILE_KEY,
  styleName: "Heading/H1",
  font: "Cormorant",
  weight: "SemiBold",
  size: 64,
  lineHeight: 1.1,
  letterSpacing: "-1%"
});
```

Cria 11 Text Styles:
- Display
- Heading/H1
- Heading/H2
- Heading/H3
- Heading/H4 (uppercase variant)
- Body/Large
- Body/Default
- Body/Small
- Caption
- Quote
- + alguma necessária

---

## Step 6 — Carregar fontes no Figma

Se fontes não estão na conta Figma:

```
⚠️ Fontes "Cormorant" não detectadas em sua biblioteca Figma.

Opções pra adicionar:
A) Instala via Figma Font Installer 
   (Google Fonts free são auto-detect)

B) Upload custom font:
   - Figma Settings → Account → Fonts
   - Adiciona Cormorant.ttf
   - Adiciona Inter.ttf

C) Usa fonte fallback temporariamente:
   - Substituir Cormorant por "Playfair Display" (já no Figma)
   - Substituir Inter por "Helvetica" (já no Figma)

Sugiro A — Cormorant + Inter são Google Fonts, instala automaticamente.

Confirma instalar Cormorant + Inter?
```

---

## Step 7 — Cria frames "Tipografia" na Brand Guidelines

Frame visual demonstrando hierarquia:

```
┌──────────────────────────────────────────────┐
│  TYPOGRAPHY                                  │
├──────────────────────────────────────────────┤
│                                              │
│  Heading font: Cormorant                     │
│  Body font: Inter                            │
│  Pairing: Contrastante (Serif + Sans)        │
│                                              │
│  HIERARQUIA                                  │
│                                              │
│  Display 120pt (raro)                        │
│  "Algo grande aqui"                          │
│                                              │
│  H1 64pt SemiBold                            │
│  "Skincare repensada"                        │
│                                              │
│  H2 40pt Medium                              │
│  "Cuidado real"                              │
│                                              │
│  H3 28pt Medium                              │
│  "Niacinamida + Bakuchiol"                   │
│                                              │
│  H4 UPPERCASE 20pt SEMIBOLD                  │
│  "RESERVE SEU LOTE"                          │
│                                              │
│  Body Large 20pt Regular                     │
│  "Texto principal para introduções..."       │
│                                              │
│  Body 16pt Regular                           │
│  "Texto padrão para descrições..."           │
│                                              │
│  Body Small 14pt Regular                     │
│  "Texto de suporte"                          │
│                                              │
│  Caption 12pt Regular                        │
│  "Pequenas anotações"                        │
│                                              │
│  Quote 28pt Italic                           │
│  "A primeira gota sente diferente."          │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 8 — Atualizar companion.md

```yaml
visual:
  typography:
    heading_font: "Cormorant"
    body_font: "Inter"
    accent_font: null  # optional
    
    pairing_type: "Contrastante (Serif + Sans)"
    
    hierarchy:
      display:
        font: "Cormorant"
        weight: 300
        weight_name: "Light Italic"
        size_desktop: 120
        size_mobile: 80
        line_height: 1.0
        letter_spacing: "0"
      h1:
        font: "Cormorant"
        weight: 600
        size_desktop: 64
        size_mobile: 48
        line_height: 1.1
        letter_spacing: "-1%"
      h2:
        font: "Cormorant"
        weight: 500
        size_desktop: 40
        size_mobile: 32
        line_height: 1.2
        letter_spacing: "0"
      # ... continua até caption + quote
    
    where_to_get:
      cormorant: "https://fonts.google.com/specimen/Cormorant"
      inter: "https://fonts.google.com/specimen/Inter"
    
    fallbacks:
      cormorant_fallback: "Playfair Display"
      inter_fallback: "Helvetica"
```

---

## Step 9 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ TYPOGRAPHY SYSTEM CRIADO

Fontes definidas:
- Heading: Cormorant (Google Fonts)
- Body: Inter (Google Fonts)
- Pairing: Contrastante

Text Styles no Figma (page Styleguide):
✓ Display
✓ Heading/H1 H2 H3 H4
✓ Body/Large Default Small
✓ Caption
✓ Quote

Frame "Typography" na Brand Guidelines visualizando hierarquia.

Companion.md atualizado com YAML completo.

PRÓXIMAS SKILLS:
1. form-brand-visual-ia-color-palette
2. form-brand-visual-ia-brand-faces (se aplicável)
═══════════════════════════════════════
```

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Hierarquia mais minimalista (5 níveis em vez de 11)
- Foco em quote font (frases marcantes ocasionais)
- Menos peso em body diversos

### VISUAL+COPY (padrão)
- 11 níveis padrão

### COPY-HEAVY
- Hierarquia EXPANDIDA (15+ níveis)
- Múltiplas variantes de Body
- Display font separada
- Specifics pra long-form (drop caps, columns, etc.)

---

## Armadilhas a evitar

- **Muitas fontes.** Max 3. Mais que isso = bagunça.
- **Sem pairing testado.** Heading + body devem ser visualmente harmônicos.
- **Sem fallback.** Se Cormorant não carrega, qual usa? Define.
- **Não criar Text Styles.** Hard-code é veneno. Sempre Styles reutilizáveis.
- **Tamanhos só desktop.** Mobile = metade ou 70%. Define ambos.
- **Letter-spacing aleatório.** UPPERCASE precisa 5-10% extra de spacing.

---

## Output esperado

✅ Text Styles atualizados no Figma (11 estilos)
✅ Frame "Typography" criado na Brand Guidelines
✅ Fontes instaladas (Cormorant + Inter)
✅ Section `typography` no companion.md
✅ Próxima skill: `color-palette`
