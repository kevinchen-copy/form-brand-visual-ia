---
name: form-brand-visual-ia-color-palette
description: Constrói paleta cromática da marca como Color Variables vivas no Figma — primárias (2-3 cores), secundárias (1-2 acentos), neutras (background/texto), alertas opcionais. Cada cor com HEX + RGB + caso de uso + emoção. Aplica harmonia cromática + verifica acessibilidade AA/AAA. Cria Color Variables na collection "Brand Tokens" (criada pelo figma-setup). Lê moodboard pra puxar paleta emergente. Output - Variables no Figma + frame "Paleta" na Brand Guidelines + entrada no companion.md. Use SEMPRE depois de moodboard. Triggers - "paleta", "paleta cromática", "cores da marca", "color palette", "HEX da marca", "cor primária", "acento", "harmonia cromática".
---

# Color Palette — Variables vivas no Figma

Constrói paleta cromática da marca como Color Variables na collection "Brand Tokens" (criada pelo figma-setup).

Estrutura:
- **Primárias** (2-3 cores que dominam — identidade visual)
- **Secundárias** (1-2 acentos)
- **Neutras** (background, texto)
- **Alertas** (opcional — success/warning/error pra interfaces)

Cada cor: HEX + RGB + caso de uso + emoção + acessibilidade AA/AAA.

---

## Pre-requisitos

- `figma-setup` rodou (Variable Collection "Brand Tokens" existe)
- `moodboard` rodou (paleta emergente identificada)
- Figma MCP conectado

## Próxima skill no workflow

- `form-brand-visual-ia-brand-faces` (se modo permite)
- `form-brand-visual-ia-photography-signature`

---

## Step 0 — Read context

Lê:
- moodboard síntese (paleta emergente)
- positioning + 12 traits
- mode da marca

---

## Step 1 — Define palette baseado em moodboard

```
═══════════════════════════════════════
COLOR PALETTE — Direção
═══════════════════════════════════════

Moodboard sugere paleta:
"warm muted earth tones — cream, terracotta, sand, soft amber"

Vamos definir 7-10 Color Variables organizadas em:

PRIMÁRIAS (2-3 cores — dominantes)
SECUNDÁRIAS (1-2 acentos)
NEUTRAS (3-4 — background, text)
ALERTAS (3 — opcional, só pra apps/dashboards)

Confirma direção warm muted earth tones?
Ou ajusta:
- Mais saturado
- Mais frio
- Adiciona cor específica
- Outra direção totalmente
```

---

## Step 2 — Propõe paleta concreta

Pra direção "warm muted earth tones", propõe:

```
PRIMÁRIAS

1. Terracotta — #C5664A
   RGB: 197, 102, 74
   Uso: highlights, CTAs, accents importantes
   Emoção: calor, terra, presença

2. Warm Sand — #E8D4B8
   RGB: 232, 212, 184
   Uso: backgrounds suaves, accents secundários
   Emoção: calma, sofisticação

3. Cream — #F5F0E8
   RGB: 245, 240, 232
   Uso: background principal, áreas leves
   Emoção: limpeza, espaço, respiro

SECUNDÁRIAS

4. Dusty Olive — #9B9669
   RGB: 155, 150, 105
   Uso: detalhes naturalistas, contrastes sutis
   Emoção: natureza, ground

5. Amber — #D49344
   RGB: 212, 147, 68
   Uso: accent dourado (raro), highlights premium
   Emoção: luxo natural, premium calor

NEUTRAS

6. Charcoal — #2C2C2C
   RGB: 44, 44, 44
   Uso: text principal, logo dark
   Emoção: solidez, leitura confortável (não preto absoluto)

7. Medium Gray — #6B6B6B
   RGB: 107, 107, 107
   Uso: text secundário, captions
   Emoção: hierarquia, suporte

8. Off-White — #FBFAF6
   RGB: 251, 250, 246
   Uso: backgrounds extra-leves, surfaces
   Emoção: pureza sem clínico

ALERTAS (opcional)

9. Success — #4F7A4F
10. Warning — #C99B4F
11. Error — #B85C5C

Confirma essa paleta?
Ou ajusta cor X?
```

---

## Step 3 — Validar acessibilidade

Pra cada combinação de uso (text/background), valida contraste WCAG:

```
ACESSIBILIDADE — Verificações automáticas:

✓ Charcoal #2C2C2C sobre Cream #F5F0E8
  Contrast ratio: 11.4:1 (AAA passa)
  Uso: texto principal sobre background — OK

✓ Medium Gray #6B6B6B sobre Cream #F5F0E8
  Contrast ratio: 4.9:1 (AA passa, AAA falha)
  Uso: texto secundário — OK pra texto normal

✗ Terracotta #C5664A sobre Cream #F5F0E8
  Contrast ratio: 3.2:1 (AA falha pra texto normal)
  ⚠️ NÃO usar como texto puro
  ✓ OK pra accents/CTAs com background contrast

✓ Cream #F5F0E8 sobre Charcoal #2C2C2C
  Contrast ratio: 11.4:1 (AAA passa)
  Uso: texto invertido — OK

[continua pra todas combinações relevantes]
```

Marca onde combinações falham + sugere ajustes:

```
⚠️ Terracotta sobre Cream tem contraste insuficiente pra TEXTO 
LONGO. 

Opções:
A) Aceitar — usa Terracotta só pra CTAs/links (não texto corrido)
B) Escurecer Terracotta pra #A04E36 (AA passa)
C) Usar Terracotta sobre background mais escuro

Sugiro A (clarifica uso).
```

---

## Step 4 — Cria Variables no Figma

Via Figma MCP, cria Variables na collection "Brand Tokens":

```javascript
const brandTokens = await figma.findVariableCollection({
  fileKey: FIGMA_FILE_KEY,
  name: "Brand Tokens"
});

const colorVariables = [
  { name: "color/primary/terracotta", value: "#C5664A" },
  { name: "color/primary/warm-sand", value: "#E8D4B8" },
  { name: "color/primary/cream", value: "#F5F0E8" },
  { name: "color/secondary/dusty-olive", value: "#9B9669" },
  { name: "color/secondary/amber", value: "#D49344" },
  { name: "color/neutral/charcoal", value: "#2C2C2C" },
  { name: "color/neutral/medium-gray", value: "#6B6B6B" },
  { name: "color/neutral/off-white", value: "#FBFAF6" },
  // alertas (se applicable)
  { name: "color/alert/success", value: "#4F7A4F" },
  { name: "color/alert/warning", value: "#C99B4F" },
  { name: "color/alert/error", value: "#B85C5C" }
];

for (const variable of colorVariables) {
  await figma.createVariable({
    collectionId: brandTokens.id,
    name: variable.name,
    type: "COLOR",
    value: variable.value,
    mode: "Light"  // OR Dark
  });
}
```

Variables ficam disponíveis em **todos os Frames** do Figma. Trocar 1 cor → atualiza em 200 lugares.

---

## Step 5 — Cria frame "Paleta" na Brand Guidelines

Frame visual mostrando paleta:

```
┌──────────────────────────────────────────────┐
│  COLOR PALETTE                               │
├──────────────────────────────────────────────┤
│                                              │
│  PRIMÁRIAS                                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│  │Terracotta│ │WarmSand │ │ Cream   │         │
│  │#C5664A  │ │#E8D4B8  │ │#F5F0E8  │         │
│  │RGB 197, │ │RGB 232, │ │RGB 245, │         │
│  │102, 74  │ │212, 184 │ │240, 232 │         │
│  │         │ │         │ │         │         │
│  │Uso: CTA │ │Uso: BG  │ │Uso: BG  │         │
│  │Emoção:  │ │Emoção:  │ │Emoção:  │         │
│  │calor    │ │calma    │ │limpeza  │         │
│  └─────────┘ └─────────┘ └─────────┘         │
│                                              │
│  SECUNDÁRIAS                                 │
│  ┌─────────┐ ┌─────────┐                     │
│  │Dusty    │ │ Amber   │                     │
│  │Olive    │ │         │                     │
│  └─────────┘ └─────────┘                     │
│                                              │
│  NEUTRAS                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│  │Charcoal │ │ Medium  │ │ Off-    │         │
│  │         │ │  Gray   │ │ white   │         │
│  └─────────┘ └─────────┘ └─────────┘         │
│                                              │
│  ALERTAS (opcional)                          │
│  ┌─────┐ ┌─────┐ ┌─────┐                     │
│  │Succ │ │Warn │ │Error│                     │
│  └─────┘ └─────┘ └─────┘                     │
│                                              │
│  COMBINAÇÕES PERMITIDAS                      │
│  [text Charcoal on Cream]  ✓ AAA             │
│  [text Charcoal on Sand]   ✓ AAA             │
│  [text Cream on Charcoal]  ✓ AAA             │
│  [text MediumGray on Cream] ✓ AA             │
│  [text Terracotta on Cream] ⚠ só pra CTA     │
│                                              │
│  COMBINAÇÕES PROIBIDAS                       │
│  [text Sand on Cream] ✗ baixo contraste      │
│  [text Terracotta on Olive] ✗ vibra ruim     │
│  Cores forbidden: pure black, neon, cool     │
│  blue, magenta                               │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 6 — Update companion.md

```yaml
visual:
  palette:
    primary:
      - name: "Terracotta"
        hex: "#C5664A"
        rgb: "197, 102, 74"
        use: "CTAs, highlights, accents importantes"
        emocao: "calor, terra, presença"
      - name: "Warm Sand"
        hex: "#E8D4B8"
        rgb: "232, 212, 184"
        use: "backgrounds suaves"
        emocao: "calma, sofisticação"
      - name: "Cream"
        hex: "#F5F0E8"
        rgb: "245, 240, 232"
        use: "background principal"
        emocao: "limpeza, respiro"
    
    secondary:
      - name: "Dusty Olive"
        hex: "#9B9669"
        use: "detalhes naturalistas"
      - name: "Amber"
        hex: "#D49344"
        use: "accent dourado raro"
    
    neutrals:
      - name: "Charcoal"
        hex: "#2C2C2C"
        use: "text principal, logo dark"
      - name: "Medium Gray"
        hex: "#6B6B6B"
        use: "text secundário"
      - name: "Off-White"
        hex: "#FBFAF6"
        use: "backgrounds extra-leves"
    
    alerts:
      success: "#4F7A4F"
      warning: "#C99B4F"
      error: "#B85C5C"
    
    forbidden:
      - "Pure black #000000"
      - "Saturated bright colors"
      - "Cool blue tones"
      - "Magenta / pink saturado"
      - "Neon"
    
    accessible_combinations:
      - {text: "Charcoal", bg: "Cream", ratio: "11.4:1", rating: "AAA"}
      - {text: "Charcoal", bg: "Sand", ratio: "9.8:1", rating: "AAA"}
      - {text: "Cream", bg: "Charcoal", ratio: "11.4:1", rating: "AAA"}
      - {text: "Medium Gray", bg: "Cream", ratio: "4.9:1", rating: "AA"}
    
    cta_color: "Terracotta — sempre sobre background neutro ou cream"
```

---

## Step 7 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ COLOR PALETTE CRIADO

Color Variables criadas no Figma (collection "Brand Tokens"):
✓ 3 primárias (Terracotta, Warm Sand, Cream)
✓ 2 secundárias (Olive, Amber)
✓ 3 neutras (Charcoal, Medium Gray, Off-White)
✓ 3 alertas (Success, Warning, Error)

Total: 11 Color Variables

Acessibilidade verificada: combinações AAA + AA marcadas.

Frame "Color Palette" na Brand Guidelines com:
- Swatches visuais com HEX/RGB/uso/emoção
- Combinações permitidas (AAA, AA)
- Combinações proibidas
- Forbidden colors list

Companion.md atualizado com YAML completo.

PRÓXIMAS SKILLS:
1. form-brand-visual-ia-brand-faces (se modo permite)
2. form-brand-visual-ia-photography-signature
═══════════════════════════════════════
```

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Paleta mais robusta (10-12 cores)
- Mais nuances + tons intermediários
- Foco em harmonia visual (tonal palette dominante)
- Forbidden list mais rigorosa

### VISUAL+COPY (padrão)
- 8-10 cores
- Balanceada

### COPY-HEAVY
- Paleta mais minimalista (5-7 cores)
- Foco em **legibilidade** (contraste alto)
- Cor accent forte pra CTAs
- Background neutro dominante

---

## Princípios chave

### 1. Mais cores ≠ melhor
8-11 Variables é sweet spot. Mais que 12 vira confuso.

### 2. Acessibilidade não negocia
WCAG AA mínimo pra texto normal. AAA pra heading + body crítico.

### 3. Sistema, não cores soltas
Cada cor tem **caso de uso específico**. "Terracotta" não vira random.

### 4. Forbidden list é proteção
Listar o que NÃO usar evita drift visual.

### 5. Variables > hardcode
Trocar 1 cor da paleta deve atualizar em 200 lugares.

---

## Armadilhas a evitar

- **Paleta sem acessibilidade.** Texto baixo contraste fail UX.
- **15+ cores.** Sistema vira caos. Max 11.
- **Hardcode hex em frames.** Sempre Variables.
- **Sem caso de uso.** "Linda mas pra quê?" — sempre define uso.
- **Esquecer modos Light/Dark.** Se app/dashboard, define ambos.
- **Forbidden list vazia.** Definir o que NÃO usar é tão importante.

---

## Output esperado

✅ 8-11 Color Variables criadas na collection "Brand Tokens"
✅ Frame "Color Palette" na Brand Guidelines page
✅ Acessibilidade documentada (AAA + AA)
✅ Forbidden colors listadas
✅ Section `visual.palette` no companion.md completa
✅ Próxima skill: `brand-faces` OU `photography-signature`
