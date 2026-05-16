---
name: form-brand-visual-ia-image-generation
description: Phase 4 do content-pipeline. Lê storyboard aprovado da Phase 3, traduz visual description de cada frame em prompt otimizado, e gera imagens via fal.ai (Nano Banana 2). Lê brand-guideline-companion.md pra puxar Photography Signature + Brand Face URLs + color palette automaticamente. Output - PNGs no project folder /images/ + section "Phase 4" preenchida no project-brief.md. Use SEMPRE como Phase 4 do content-pipeline OU standalone quando usuário tem storyboard pronto e disser "generate the images", "create the visuals", "run image gen", "turn this storyboard into images", "rodar Phase 4", ou variações de querer ir de frame descriptions para actual generated images.
---

# Image Generation — Phase 4

Esta phase lê storyboard aprovado da Phase 3, traduz visual description de cada frame em prompt otimizado, e gera imagens usando fal.ai Nano Banana 2.

Qualidade do output depende quase inteiramente da qualidade do prompt. Prompt detalhado + técnico produz imagem usável na primeira tentativa. Prompt vago waste cycle de geração e produz algo que não bate com storyboard.

Esta é a skill clonada do Brand AI Claude Course (`image-generation`), refinada pra aplicar Brand Photography Signature do `brand-guideline-companion.md` em todos os prompts automaticamente.

---

## Pre-requisitos

- Phase 3 (Storyboard) aprovada
- `project-brief.md` com Phase 3 detalhada
- `FAL_KEY` configurada
- `brand-guideline-companion.md` (altamente recomendado)
- Project folder com subfolder `/images/`

## Próxima skill no workflow

`form-brand-visual-ia-video-generation` (Phase 5, se deliverable inclui video)

---

## Approach

### Step 1 — Read storyboard + brand context

Read project-brief.md, foca em Phase 3. Pra cada frame, note:

- Visual description (foundation do prompt)
- Whether frame uses existing assets (product images, model images) ou é fully generated
- Creative direction constraints da Phase 2 (palette, lighting style, composition guidelines)

Read `brand-guideline-companion.md`:
- **Photography Signature** (frase ready-to-prompt)
- **Color palette HEX**
- **Brand Faces URLs** (Core, Adjacent, Diversity)
- **Forbidden visual elements**
- **Brand mode**

### Step 2 — Write optimized prompts

Pra cada frame, escreve um prompt seguindo esta estrutura **em ordem** (prompt models weight earlier terms more heavily):

1. **Subject + scene** — o que está na imagem, placed first pra maximum weight
2. **Composition + framing** — close-up, wide shot, centered, rule of thirds, overhead
3. **Camera + lens** — focal length (35mm, 50mm, 85mm, 100mm macro), depth of field, aperture
4. **Lighting** — direction (upper left, backlit, rim light), quality (soft/hard), color temperature (warm/cool), style (natural, studio, golden hour) — **usa Photography Signature do companion.md**
5. **Style + mood** — cinematic, editorial, commercial, fine art, luxury, minimal
6. **Color palette** — reference colors específicas do companion.md
7. **Texture + materials** — surface quality (matte, glossy, brushed metal, linen, skin texture)
8. **Technical details** — sharpness, grain, bokeh quality

**Keep prompts specific + technical.** Escreva como photography brief, não poema. Cada palavra descreve algo visualmente concreto.

### Step 3 — Decide endpoint (text-to-image vs image-to-image)

Pra cada frame:

- **Text-to-image** (`fal-ai/nano-banana-2`) — se frame NÃO usa existing asset
- **Image-to-image edit** (`fal-ai/nano-banana-2/edit`) — se frame usa:
  - Product image fornecido pelo usuário
  - Brand Face Core / Adjacent / Diversity master image
  - Composition reference

Se Brand Face em frame → upload Brand Face URL como reference.

### Step 4 — Confirm prompts com usuário

Antes de rodar (cada geração custa créditos), apresenta plano:

```
═══════════════════════════════════════
PHASE 4 — IMAGE GENERATION (plano)
═══════════════════════════════════════

Frames a gerar: N

Frame 1 (Hook):
Prompt: [prompt completo otimizado]
Endpoint: text-to-image
Resolution: 4K (suggested)

Frame 2 (Setup):
Prompt: [...]
Endpoint: image-to-image (uses Brand Face Core)
References: [URL Brand Face Core]
Resolution: 4K

...

Total: N imagens
Custo estimado fal.ai: ~$X

Confirma plano? Resolução desejada (1K, 2K, 4K)?
```

### Step 5 — Run generations

Pra cada frame:

#### Text-to-image:

```bash
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
handler = fal_client.submit(
    'fal-ai/nano-banana-2',
    arguments={
        'prompt': '''PROMPT_OTIMIZADO_AQUI''',
        'image_size': '4K',
        'num_images': 1
    }
)
result = handler.get()
print(result)
"
```

#### Image-to-image:

```bash
# 1. Upload references
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
ref_url = fal_client.upload_file('/path/to/brand-face-core.png')
print(ref_url)
"

# 2. Run generation com refs
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
handler = fal_client.submit(
    'fal-ai/nano-banana-2/edit',
    arguments={
        'prompt': '''PROMPT_AQUI''',
        'image_urls': ['REF_URL_1', 'REF_URL_2'],
        'image_size': '4K',
        'num_images': 1
    }
)
result = handler.get()
print(result)
"
```

#### Download:

```bash
curl -o /project-folder/images/frame-01-hero-shot.png "RESULT_URL"
```

### Step 6 — Iteration loop

Após cada geração, apresenta ao usuário:

```
Frame 1 gerado: [path]
[Mostra imagem se possível]

Aprovado? OR
- Re-gera com prompt ajustado
- Aplica fix específico (mais warm, menos saturado, etc.)
```

Permite 2-3 iterações por frame. Se 4ª tentativa não satisfaz, sugere voltar pra Phase 3 e ajustar visual description.

### Step 7 — Update master document

Atualiza section "Phase 4" do project-brief.md:

```markdown
## Phase 4 — Image Generation

### Generation summary
- Total frames generated: N
- Total iterations: M (X frames precisaram 2+ tentativas)
- Endpoint distribution: P text-to-image, Q image-to-image
- Average resolution: 4K

### Generated files

| Frame | Filename | Endpoint | Iterations |
|-------|----------|----------|------------|
| 1 (Hook) | frame-01-hero-shot.png | text-to-image | 1 |
| 2 (Setup) | frame-02-brandface-application.png | edit | 2 |
| ... | ... | ... | ... |

### Prompts used (for reproducibility)
[Lista completa de cada prompt usado]

### Aprovação
[Status de cada frame: ✓ Approved / ⚠️ Needs revision]
```

### Step 8 — Approval gate

Apresenta todas imagens em galeria + pede approval:

```
═══════════════════════════════════════
PHASE 4 — IMAGE GENERATION (concluída)
═══════════════════════════════════════

[N] imagens geradas em [project-folder]/images/

[Mostra todas se possível]

Aprovado pra seguir pra Phase 5 (Video Generation)?

Se deliverable = static apenas, pipeline encerra aqui com 
outputs prontos pra publicação ou edição.

Se deliverable = video, próxima fase anima cada imagem.

Opções:
- ✓ Aprovar todas, seguir Phase 5
- ✓ Aprovar todas (static apenas, encerra pipeline)
- ⚠️ Re-gerar frame X com [ajuste]
- ⏸ Pausar
```

---

## Estrutura típica de prompt

Pra Aurora Sérum frame 1 (hero shot):

```
Editorial product still life photography, extreme macro close-up
of Aurora serum bottle (30ml clear glass dropper with amber liquid,
brushed gold cap), resting on unfinished oak surface, warm muted
color palette (cream #F5F0E8, sand #E8D4B8, terracotta #C5664A,
amber accent #D49344), soft window light from upper-left diffused
through sheer linen curtains, naturalistic warm color grading,
rule of thirds composition with bottle in left third, generous
negative space 40%+ on right, slight high angle (15° above eye-level),
100mm macro lens at f/4, shot on Hasselblad medium format, single
amber drop suspended at tip of dropper about to fall, contemplative
sensorial mood, no text or logos, 4K resolution.
```

Note como **cada palavra é específica + visualmente concreta**.

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Prompts MAIS detalhados (camera/lens/lighting/material em depth)
- Mais iterações aceitas (3-5 por frame se necessário)
- Resolução 4K obrigatória pra finais
- Photography Signature aplicada com weight máximo

### VISUAL+COPY

- Prompts padrão (detail razoável)
- 2-3 iterações por frame
- 2K-4K resolução

### COPY-HEAVY

- Prompts mais simples (imagem suporta texto)
- 1-2 iterações
- 2K suficiente (texto vai cobrir muito da imagem)

---

## Tratamento de problemas comuns

### Problema 1 — Imagem não bate com prompt

```
Skill identifica diferenças:
- Color saturada quando devia ser muted → adiciona "muted, desaturated"
- Composição centralizada quando devia ser rule of thirds → adiciona "off-center, rule of thirds"
- Iluminação errada → reforça lighting da Photography Signature
- Brand Face não consistente → re-upload reference com weight maior

Re-gera com prompt ajustado automaticamente.
```

### Problema 2 — Brand Face inconsistente entre frames

```
Solução: usa MESMA Brand Face URL como reference em todos os 
frames onde ela aparece. Em image-to-image, ela mantém consistente.

Se ainda inconsistente após 2-3 tentativas:
→ Sugere usar form-brand-visual-ia-fal-image-gen 
  diretamente com weight maior na reference
```

### Problema 3 — Mãos / dedos errados (problema crônico IA)

```
Solução padrão:
- "Hands not visible in frame" no prompt
- OR ângulo que esconde mãos
- OR fallback pra image-to-image com reference de mão correta
```

### Problema 4 — Logo distorcido

```
Solução: NÃO gera logo via fal.ai. 
Gera imagem SEM logo + adiciona logo em pós (Figma).
```

### Problema 5 — Texto on-image distorcido

```
fal.ai (Nano Banana 2) tem qualidade média pra texto.
Pra texto crítico → usa GPT Image 2 via Claude.
OR gera sem texto + adiciona em pós.
```

---

## Best practices de prompt

### O que incluir sempre

- Subject específico
- Camera + lens
- Lighting + temperature
- Color palette HEX
- Composition rule
- Style descriptor
- Resolução

### O que NUNCA incluir

- "Beautiful" sem context (muito vago)
- "Professional" (todos modelos default já tentam isso)
- "Realistic" (todos modelos já tentam)
- Adjetivos genéricos vazios

### Truques úteis

- **Reference style:** "in the style of [comparable brand]" — pode help
- **Negative prompt** (se modelo suporta): exclui elementos indesejados
- **Seed control:** salva seed de geração que funcionou pra reproducibility

---

## Exemplos completos

### Exemplo A — Frame 1 Aurora Sérum

**Storyboard:** "ECU dropper com gota suspended, slight golden light"

**Prompt otimizado:**
```
Editorial product macro photography, extreme close-up of a 
brushed gold dropper held vertically above frame, single amber 
drop suspended at tip about to fall, background soft warm muted 
neutral cream tones slightly blurred, single beam of warm light 
catches the drop creating subtle golden highlight, 100mm macro 
lens at f/2.8, slightly low angle looking up, centered 
composition with dropper in upper-middle frame, generous 
negative space below, shot on Hasselblad medium format, warm 
muted color grading, contemplative anticipatory mood, no text 
or logos
```

**Endpoint:** text-to-image (sem refs)

### Exemplo B — Frame com Brand Face

**Storyboard:** "Brand Face Core applying serum to cheek"

**Prompt:**
```
Editorial lifestyle portrait, woman in her early 40s (use 
reference image for facial features and styling), applying 
amber serum to her cheek with ring finger, eyes slightly 
closed in moment of presence, gentle circular motion, wearing 
cream linen robe, warm muted palette (cream, sand, terracotta), 
soft window light from upper-left, naturalistic color grading, 
slight underexposure for premium mood, 85mm portrait lens at 
f/2.0, eye-level, medium shot from shoulders up, contemplative 
intimate mood
```

**Endpoint:** image-to-image (`edit`)
**References:** Brand Face Core URL

---

## Armadilhas a evitar

- **Não usar prompt do storyboard literal.** Storyboard descreve cena humanly. Prompt precisa ser técnico + estruturado.
- **Não esquecer Photography Signature.** Aplica em CADA frame.
- **Não rodar sem confirmar plano + custo.** Geração custa créditos.
- **Não iterar infinitamente.** 3 tentativas máximo. Se não sair, volta pra Phase 3.
- **Não esquecer Brand Face reference em frames com pessoa.**
- **Não usar resolução 4K pra rascunhos.** Caro. Usa 1K-2K em iteração, 4K pra finais.

---

## Output esperado

✅ N PNGs em /project-folder/images/
✅ Naming descritivo (frame-01-hero-shot.png, etc.)
✅ Section "Phase 4" do project-brief.md atualizada com todos prompts
✅ Approval em cada frame
✅ Pronto pra Phase 5 (se video) OR encerra pipeline (se static)
