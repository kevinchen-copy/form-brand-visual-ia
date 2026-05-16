---
name: form-brand-visual-ia-storyboarding
description: Phase 3 do content-pipeline. Pega concept (Phase 1) + creative direction (Phase 2) e quebra em frames individuais. Cada frame descrito em detail suficiente pra ser gerado independentemente mas ainda fitting na sequência maior. Output - section "Phase 3 — Storyboarding" do project-brief.md com N frames detalhados (visual, action, copy por frame). Use SEMPRE como Phase 3 do content-pipeline OU standalone quando usuário disser "create storyboard", "map out frames", "plan visuals", "storyboard this", "lay out sequence", "frame-by-frame", ou variações de querer planejar conteúdo frame a frame antes da produção.
---

# Storyboarding — Phase 3

Esta phase pega concept (Phase 1) + creative direction (Phase 2) e quebra em frames individuais. Cada frame descrito em detail suficiente pra ser gerado independentemente, mas ainda fitting na sequência maior.

Storyboard é o **blueprint** pra tudo que vem depois. Image generation lê pra escrever prompts. Video generation lê pra entender motion e transitions. Se storyboard fraco, tudo downstream sofre.

Esta é a skill clonada do Brand AI Claude Course (`storyboarding`), refinada pra usar Brand Photography Signature do `brand-guideline-companion.md` em cada frame.

---

## Pre-requisitos

- Phase 1 (Concept) aprovada
- Phase 2 (Creative Direction) aprovada
- `project-brief.md` com sections 1 e 2 preenchidas
- `brand-guideline-companion.md` (recomendado)

## Próxima skill no workflow

`form-brand-visual-ia-image-generation` (Phase 4)

---

## Approach

### Step 1 — Review previous phases

Read concept (Phase 1) + creative direction (Phase 2) do project-brief.md. Pay attention a:

- **Deliverable type** (static, video, ou both)
- **Platform + aspect ratio**
- **Tone + mood**
- **Existing assets** (product images, model images) que precisam aparecer em frames específicos
- **Campaign context** (se extends campanha existente, match visual rhythm)

Lê também `brand-guideline-companion.md`:
- Photography Signature
- Videography Signature (se video)
- Brand Faces URLs
- Color palette

### Step 2 — Determine frame count

Número de frames depende do deliverable type:

- **Static images (single post ou ad):** 1-3 frames (variations ou options)
- **Static images (carousel):** 3-10 frames (slides)
- **Video (short-form reel, 15-30s):** 4-8 frames
- **Video (longer ad ou demo, 30-60s):** 8-15 frames

Pergunta ao usuário pra confirmar frame count se não óbvio do brief. Pra carrosséis, pergunta quantos slides. Pra video, sugere count baseado em duração alvo (~1 frame per 3-5 segundos).

### Step 3 — Build the storyboard

Pra cada frame, escreve 3 components:

#### A. Visual

Descrição detalhada do que vemos nesse frame. Detalhe suficiente pra servir como foundation de prompt de image generation. Inclua:

- **Subject** (qual é o foco principal)
- **Setting** (onde isso é, what's the background)
- **Lighting** (direction, quality, color temperature) — **PUXAR do companion.md Photography Signature**
- **Colors** (palette dominante neste frame, consistent com creative direction)
- **Composition** (framing, positioning, negative space) — **PUXAR do companion.md**
- **Style** (cinematic, editorial, commercial, etc.)
- **Existing assets** (se Brand Face Core aparece, ou product image específico, especifica)

#### B. Action (só se video)

Pra video frames, descreve **o que se move e como** durante o clipe que começa neste frame:

- **Subject motion** (modelo turning, gesture, walking, eating, etc.)
- **Camera motion** (push-in, pull-out, pan, tilt, orbit, static)
- **Pacing** (very slow, slow, medium, fast)
- **Transition out** (cut, dissolve, match cut, etc.)

Se static deliverable, **pula essa seção**.

#### C. Copy (se aplicável)

Pra peças com texto on-screen:

- **Headline** (se houver)
- **Body** (se houver)
- **CTA** (se houver)
- **Position** (top, center, bottom, etc.)
- **Style** (puxa typography do companion.md)

Se modo VISUAL-ONLY ou frame não tem texto, **pula**.

### Step 4 — Estimate duration (só video)

Pra video, define duração de cada clipe:

- Frame 1 (hook): 2-3s
- Frame 2-N (middle): 3-5s each
- Last frame (resolution / CTA): 2-3s

Total = sum dos frames.

Confirma que total bate com target duration definido em Phase 1.

### Step 5 — Document storyboard

Format:

```markdown
## Phase 3 — Storyboarding

### Storyboard Summary
[1-paragraph overview do fluxo total: o que acontece do frame 1 ao N]

### Total frames: N
### Estimated total duration (if video): X seconds

---

### Frame 1 — [Function: Hook / Setup / Middle / Resolution / CTA]
Duration: Xs

**Visual:**
[Descrição detalhada]

**Action:**
[Motion description, se video]

**Copy:**
[Texto on-screen, se houver]
- Headline: "..."
- Body: "..."
- CTA: "..."
- Position: [top/center/bottom]

---

### Frame 2 — [Function]
Duration: Xs

[Mesma estrutura]

---

[continua até frame N]

---

### Music/Audio direction (se video)
- Style: [puxa de Videography Signature]
- Specific track ou library: [sugestão]
- Foley/SFX: [se aplicável]
- VO: [se aplicável]

### Consistency notes
- Brand Face: [presente em frames X, Y]
- Color palette: [mantém across todos frames]
- Logo: [aparece em frame Z]
```

### Step 6 — Approval gate

Apresenta storyboard ao usuário:

```
═══════════════════════════════════════
PHASE 3 — STORYBOARD (rascunho)
═══════════════════════════════════════

Total: N frames
Duração estimada: X segundos (se video)

[Storyboard escrito]

Aprovado?
- ✓ Sim, seguir pra Phase 4 (Image Generation)
- ✗ Ajustar frame X: [especifica]
- ✗ Adicionar/remover frame
- ✗ Reordenar
```

Só prossegue após "Sim".

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Frames com **descrição visual MUITO rica**
- Action describe movement sutil (não dramático)
- Copy seção **PULA** ou minimal (1-2 palavras max)
- Foco em mood + composition + lighting

### VISUAL+COPY

- Padrão
- Visual + copy balanceados
- Cada frame tem visual + ação + headline curta

### COPY-HEAVY

- Frames com copy **destacada**
- Headline por frame (educational carousel)
- Body por frame se aplicável
- Visual suporta texto, não vice-versa

---

## Workflow específico por tipo de peça

### Static post único (1 frame)

Storyboard mínimo:
- 1 frame com visual completo, copy (se aplicável), e brand assets

### Carousel (3-10 frames)

Cada frame = 1 slide:
- Slide 1 (cover): hook visual + headline grande
- Slides 2 a N-1 (middle): conteúdo desenvolvido, 1 ideia por slide
- Slide N (close/CTA): summary + ação

### Reel (15-30s, 4-8 frames)

Estrutura típica:
- Frame 1 (2s): Hook (algo visual surprising)
- Frame 2 (3s): Setup (contexto)
- Frames 3-5 (4s each): Middle (development)
- Frame 6 (3s): Resolution
- Frame 7 (2s): CTA

### Long-form video (30-60s, 8-15 frames)

Estrutura cinematic em 3 atos:
- Setup (25% dos frames)
- Confronto (50%)
- Resolução (25%)

---

## Exemplos

### Exemplo A — Static post Aurora Sérum

**Phase 1:** Hero shot post Instagram 4:5
**Phase 2:** Editorial warm muted, soft window light, 100mm macro

**Storyboard:**

```markdown
## Phase 3 — Storyboarding

### Storyboard Summary
1 frame: hero shot sensorial do Aurora Sérum em superfície de 
carvalho, com gota suspensa do dropper em air, capturando momento 
preciso. Atmosphere contemplative, premium.

### Total frames: 1

---

### Frame 1 — Hero shot
Duration: N/A (static)

**Visual:**
Extreme close-up macro de Aurora Sérum bottle (30ml clear glass 
dropper com amber liquid, brushed gold cap) em unfinished oak 
surface. Single drop suspended in air about to fall from dropper.
Warm muted palette (cream, sand, terracotta, amber accent).
Soft window light from upper-left diffused through sheer linen 
curtains. Rule of thirds com bottle em terço esquerdo. Generous 
negative space (40%+) à direita. Slight high angle (15°). 100mm 
macro at f/4. Cinematic, sensorial mood.

**Action:** N/A (static)

**Copy:** None (visual standalone — caption será separada em 
caption-writer skill)

---

### Music/Audio: N/A
### Consistency: 
- Brand Face: not present this frame
- Logo: not in frame (caption tem brand mention)
```

### Exemplo B — Reel Aurora 15s

```markdown
### Storyboard Summary
15s Reel showcasing Aurora Sérum sensorial application ritual.
Build slow → arrive at product reveal → CTA.

### Total frames: 5
### Duration: 15s

---

### Frame 1 — Hook (3s)
**Visual:** ECU dropper com gota suspended, slight golden light
**Action:** Drop slowly forms and starts falling, slow motion
**Copy:** None
Audio: warm cello note starts

### Frame 2 — Setup (3s)
**Visual:** ECU drop landing on bare forearm, spreading slowly
**Action:** Drop spreads, light catches the spread
**Copy:** Text overlay top: "Aurora"
Audio: cello note develops

### Frame 3 — Middle (3s)
**Visual:** MS Brand Face Core applying serum to cheek, eyes closed
**Action:** Gentle circular motion application
**Copy:** None
Audio: continues

### Frame 4 — Middle (3s)
**Visual:** CU pele radiante, slight smile
**Action:** Eyes open slowly, gentle confident expression
**Copy:** Text overlay bottom: "Niacinamida + Bakuchiol"
Audio: lifts

### Frame 5 — CTA (3s)
**Visual:** Product hero shot on wooden surface
**Action:** Subtle light shift on bottle
**Copy:** Headline: "Pré-venda" | CTA: "Link na bio"
Audio: resolves into sustained warm chord

### Music: solo cello + piano, contemplative, building
### Consistency: Brand Face Core in frames 3-4
```

---

## Armadilhas a evitar

- **Não escrever Visual vago.** "Bonito produto" não vira prompt. Detalhado pixel-level.
- **Não pular Photography Signature.** Aplica em cada frame.
- **Não usar texto em VISUAL-ONLY frames.** Respeita o modo.
- **Não esquecer Action se video.** Frame 4 sem motion = imagem parada no meio do vídeo.
- **Não exceder frame count razoável.** 8 frames pra 15s é máximo (~1.8s/frame).
- **Não esquecer cabeçalho Storyboard Summary.** Audio/edição precisam visão geral.

---

## Output esperado

✅ Section "Phase 3 — Storyboarding" no project-brief.md
✅ N frames com Visual + Action + Copy (conforme aplicável)
✅ Audio direction (se video)
✅ Consistency notes
✅ Approval do usuário
✅ Pronto pra Phase 4 (Image Generation)
