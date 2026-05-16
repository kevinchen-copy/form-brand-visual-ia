---
name: form-brand-visual-ia-creative-direction
description: Phase 2 do content-pipeline. Pega concept da Phase 1 e traduz em visual language. Lê brand-guideline-companion.md pra puxar Photography Signature, paleta, tipografia, mood references automaticamente. Output - section "Phase 2 — Creative Direction" no project-brief.md com 6 áreas definidas (visual style, color, typography, lighting, composition, mood/references). Use SEMPRE como Phase 2 do content-pipeline OU standalone quando usuário disser "set creative direction", "define look and feel", "what should this look like", "visual direction for", "mood board for", "criar direção visual de", ou variações de querer estabelecer visual identity de peça antes da produção começar.
---

# Creative Direction — Phase 2

Esta phase pega o concept da Phase 1 e traduz em **linguagem visual**. Ao final, todo mundo envolvido deve saber **exatamente** como o conteúdo se vê e sente, mesmo antes de single frame ser designed.

Creative direction faz ponte entre "o que queremos dizer" e "como deve parecer". É o guardrail que mantém cada frame consistente e on-brand.

Esta é a skill clonada do Brand AI Claude Course (`creative-direction`), refinada pra ler `brand-guideline-companion.md` da marca e aplicar Brand Photography/Videography Signature automaticamente.

---

## Pre-requisitos

- Phase 1 (Concept) concluída e aprovada
- `project-brief.md` com section "Phase 1" preenchida
- `brand-guideline-companion.md` (altamente recomendado)

## Próxima skill no workflow

`form-brand-visual-ia-storyboarding` (Phase 3)

---

## Approach

### Step 1 — Read brand context

Antes de escrever, gather todo brand context:

1. **Read `brand-guideline-companion.md`** completo:
   - Photography Signature (lighting + camera + grading)
   - Videography Signature (pacing + movement + audio)
   - Color palette completa (HEX codes)
   - Typography (heading + body fonts)
   - Brand mode
   - Forbidden visual elements

2. **Read `CLAUDE.md`** se existe — pode ter overrides specific da marca.

3. **Search workspace pra brand folder.** Look pra directories chamadas `brand-guidelines/`, `brand-assets/`, `brand/`, `style-guide/`, ou similar. Se found, read docs inside (PDFs, markdowns, imagens).

4. **Check concept's existing assets.** Se Phase 1 listou product images, model images, ou campaign references, note them. Influenciam visual direction.

5. **Ask user:** "Tem brand guidelines adicionais, style guides, moodboards, ou referências visuais que devo seguir além do que tá no workspace?"

---

### Step 2 — Write the creative direction

Baseado em concept da Phase 1 + brand context, escreva creative direction cobrindo 6 áreas:

#### A. Visual Style

Aesthetic overall. Seja específico:

✗ "minimal"
✓ "clean, minimal editorial com generous whitespace e foco em product isolation"

Reference comparable brands ou campaigns se útil:
- "Similar a abordagem de product photography da Aesop"
- "A visual density de campanha da Gucci mas com palette muted"

**Se companion.md tem Photography Signature, use-a como ponto de partida.**

#### B. Color Palette

Lista primary colors, accent colors, e background tones.

- Use HEX codes do companion.md
- Note cores estritamente a evitar (forbidden list)
- Descreve como cores devem interagir:
  - High contrast vs tonal
  - Warm vs cool dominant

**Companion.md já tem palette — apenas valida que serve pra essa peça específica.**

#### C. Typography Direction

Font style + hierarchy.

- Companion.md tem heading + body fonts
- Define hierarchy pra essa peça (H1 grande? H2? body?)
- Letter spacing, weight emphasis
- Quaisquer overrides pra esse projeto

#### D. Lighting Style

Pra qualquer visual fotográfico/video:

- Direction (upper-left, backlit, side, etc.)
- Quality (soft / hard / diffused)
- Color temperature (warm / cool / neutral / Kelvin específico)
- Mood (natural / studio / golden hour / dramatic)

**Companion.md tem Photography Signature pronta — use-a OR adapta minimamente.**

#### E. Composition Style

- Rule of thirds vs centered vs symmetrical
- Negative space (generous vs filled)
- Subject positioning preferences
- Depth of field (shallow vs deep)
- Camera angle (eye-level / high / low)

#### F. Mood + References

- Mood palavras-chave (3-5 adjetivos)
- Reference brands / campaigns / artists (1-3)
- Examples se aplicável (links, image refs)

---

### Step 3 — Document creative direction

Format:

```markdown
## Phase 2 — Creative Direction

### Visual Style
[Aesthetic + referências comparáveis]

### Color Palette
- Primary: [cores HEX + nomes]
- Accents: [cores HEX]
- Backgrounds: [tones]
- Avoid: [forbidden colors]
- Interaction: [warm/cool dominant, high/low contrast]

### Typography Direction
- Heading: [font + weight + tamanho relativo]
- Body: [font + weight]
- Hierarchy: [definição clara]
- Spacing: [letter spacing, line height]

### Lighting Style
[Direction + quality + temperature + mood, prontos pra prompt]

### Composition Style
[Rule + space + positioning + depth + angle]

### Mood + References
- Mood: [3-5 adjectives]
- References: [marcas/campanhas/artistas, com link/desc]

### Brand assets to integrate
- Logo: [White / Dark / Mark variant]
- Brand Faces: [Core / Adjacent / None]
- Patterns/textures: [se aplicável]
```

---

### Step 4 — Approval gate

Apresenta direction ao usuário:

```
═══════════════════════════════════════
PHASE 2 — CREATIVE DIRECTION (rascunho)
═══════════════════════════════════════

[Creative direction escrita]

Resumo visual:
- Style: [palavras-chave]
- Palette: [cores principais]
- Lighting: [tipo]
- Mood: [adjetivos]

Aprovado?
- ✓ Sim, seguir pra Phase 3 (Storyboarding)
- ✗ Ajustar: [especifica]
```

Só prossegue após "Sim".

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Creative direction **MUITO detalhada**
- Pode ser metade do trabalho total da peça
- Inclua references específicas + adjetivos visuais ricos
- Mood é fundamental

### VISUAL+COPY (padrão)

- Direction balanceada
- Visual + text considerados juntos
- Mood importante mas não absoluto

### COPY-HEAVY

- Direction mais funcional/utilitária
- Foco em legibilidade + hierarchy
- Suporta texto em vez de protagonista
- Pode reusar muito do companion.md sem adicionar muito

---

## Exemplos

### Exemplo A — Aurora Sérum hero shot

**Phase 1 concept:** Post Instagram 4:5 lançamento sérum, hero shot sensorial.

**Creative direction gerada:**

```markdown
### Visual Style
Editorial product still life com naturalistic mood, similar à
abordagem da Aesop em campanhas de produto 2024. Generous 
whitespace, foco isolado no produto, mood contemplativo.

### Color Palette
- Primary: terracotta (#C5664A), sand (#E8D4B8), cream (#F5F0E8)
- Accent: amber (#D49344) do produto
- Backgrounds: warm muted neutrals
- Avoid: saturated pure colors, cool blue tones
- Interaction: tonal dominante, warm cohesive

### Typography Direction
- Heading: Cormorant 60pt+
- Body: Inter 14-18pt
- Hierarchy: minimal — só headline + 1 line CTA

### Lighting Style
Soft window light from upper-left, diffused through sheer
linen curtains. Warm afternoon 3500K. Single dominant source.
Slight underexposure for moody premium feel.

### Composition Style
Rule of thirds com produto em terço esquerdo, generous negative
space (40%+) à direita. Slight high angle (15°). Shallow depth
of field — 100mm macro at f/4.

### Mood + References
- Mood: contemplative, sensorial, premium, calm
- References: Aesop product photography 2024, Le Labo Instagram,
  Kinfolk magazine beauty editorials

### Brand assets to integrate
- Logo: Logo Dark (fundo claro)
- Brand Faces: None nesta peça (foco produto isolado)
- Patterns: linen texture sutil como background
```

### Exemplo B — Reel video

**Phase 1 concept:** Reel 15s anúncio sérum.

**Creative direction** adiciona Videography Signature:

```markdown
### Videography Signature (adicional pra video)
- Pacing: very slow contemplative
- Movement: slow push-in
- Duration per shot: 2-3s
- Audio: single sustained warm cello note + subtle ambient
- Transitions: cut direto (no dissolves)
```

---

## Armadilhas a evitar

- **Não escrever Photography Signature do zero.** Usa do companion.md.
- **Não usar cor fora do palette.** Se peça pede cor que não está, valida com usuário.
- **Não generalizar mood.** "Bonito" não é mood. "Contemplative + premium + calm" é.
- **Não pular references.** Mínimo 1-2 comparable brands.
- **Não esquecer logo theme.** White ou Dark conforme background final.

---

## Output esperado

✅ Section "Phase 2 — Creative Direction" preenchida no project-brief.md
✅ 6 áreas cobertas (style, color, typography, lighting, composition, mood/refs)
✅ Brand assets to integrate listados
✅ Approval do usuário
✅ Pronto pra Phase 3 (Storyboarding)
