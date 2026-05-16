---
name: form-brand-visual-ia-video-generation
description: Phase 5 do content-pipeline. Pega imagens geradas na Phase 4 e transforma em video clips. Cada imagem serve como start frame, storyboard da Phase 3 fornece motion direction. Roda via fal.ai (Kling v3 Pro default, Minimax alternativa). Lê brand-guideline-companion.md pra puxar Videography Signature. Output - MP4 clips no project folder /videos/, nomeados frame-by-frame. Só roda se concept indicou deliverable = video OR both. Use SEMPRE como Phase 5 do content-pipeline OU standalone quando usuário tem imagens geradas e disser "turn these into video", "animate these frames", "create video from images", "generate video clips", "run video gen", "Phase 5", ou variações de converter still images em motion clips via IA.
---

# Video Generation — Phase 5

Esta phase pega as imagens geradas na Phase 4 e transforma em video clips. Cada imagem serve como **start frame**, e o storyboard da Phase 3 provê motion direction. Output é set de individual video clips, nomeados frame-by-frame, salvos no project folder.

**Só roda essa phase se deliverable do usuário inclui video** (determinado em Concept phase).

Esta é a skill clonada do Brand AI Claude Course (`video-generation`), refinada pra aplicar Videography Signature do `brand-guideline-companion.md`.

---

## Pre-requisitos

- Phase 4 (Image Generation) aprovada
- Imagens em `/project-folder/images/`
- `project-brief.md` com Phase 3 + Phase 4
- `FAL_KEY` configurada
- Concept indica deliverable = video OR both
- `brand-guideline-companion.md` (recomendado pra Videography Signature)

## Próxima skill no workflow

Depois desta phase, pipeline encerra. Próximas skills sugeridas:
- `form-brand-visual-ia-edicao-capcut` (junta clips + áudio + texto overlay)
- `form-brand-visual-ia-voiceover` (adiciona VO se necessário)
- `form-brand-visual-ia-platform-adaptation` (adapta pra outras plataformas)

---

## Approach

### Step 1 — Re-read storyboard + brand context

Read Phase 3 do project-brief.md AGAIN. Pra cada frame, focus em:

- **Action field** (descreve o que move, how camera se comporta, e como clipe transitions pro próximo)
- **Storyboard Summary** (overall flow, music/audio direction, pacing)
- **Estimated duration per frame**

Read também Phase 4 pra saber qual image file corresponde a cada frame.

Read `brand-guideline-companion.md`:
- **Videography Signature** (pacing, movement, color grading)
- **Audio direction**

### Step 2 — Ask which video model to use

Apresenta options + sugere default:

```
═══════════════════════════════════════
MODELO DE VIDEO
═══════════════════════════════════════

Modelos disponíveis via fal.ai:

A) Kling v3 Pro (DEFAULT recomendado)
   endpoint: fal-ai/kling-video/v2.1/pro
   Forte em: camera movement, realistic motion, consistent style
   Custo: ~$0.30 por 5s

B) Minimax Video
   endpoint: fal-ai/minimax-video
   Forte em: stylized ou abstract motion
   Custo: ~$0.20 por 5s

C) Outro modelo fal.ai hosted
   Você tem preferência específica?

Qual?
```

Confirma escolha antes de prosseguir.

### Step 3 — Upload start frame images to CDN

Cada imagem gerada na Phase 4 precisa ser uploaded pro CDN da fal antes de ser usada como start frame input. Pra cada frame:

```bash
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
url = fal_client.upload_file('/path/to/frame-01-description.png')
print(url)
"
```

Salva URLs retornadas. Você precisa delas pra video generation calls.

### Step 4 — Write video prompts

Pra cada frame, escreve video prompt. Video prompts são **diferentes** de image prompts. Start frame image já estabelece o que a scene parece. Video prompt deve descrever **só o que muda**:

**What to include:**

- **Camera movement** — push-in, pull-out, pan left/right, tilt up/down, orbit, dolly, static
- **Subject motion** — what moves in the scene (modelo, produto, particles, light)
- **Pacing** — very slow, slow, medium, fast, speed ramp
- **Transitions** — fade, dissolve, cut, match cut, whip pan (mostly cut between clips)
- **Atmospheric details** — wind, light shift, particles in air

**What NOT to include:**

- Descrições do que já está visível na imagem (já estabelecido)
- Camera setup (lens, aperture — já no frame)
- Cores ou composição (já no frame)

**Pull from Videography Signature** se companion.md tem:
- Default pacing
- Default movement style
- Color grading consistency

### Step 5 — Confirm plan with user

```
═══════════════════════════════════════
PHASE 5 — VIDEO GENERATION (plano)
═══════════════════════════════════════

Modelo: Kling v3 Pro
Total clips: N (durações: 2s, 3s, 3s, 3s, 2s = 13s)
Custo estimado: ~$X

Video prompts por frame:

Frame 1 (Hook, 2s):
- Image: frame-01-hero-shot.png
- Camera: static, slight push-in
- Action: amber drop slowly forms and starts falling in slow motion
- Pacing: very slow
- Reference: warm cello note begins

Frame 2 (Setup, 3s):
- Image: frame-02-drop-landing.png
- Camera: very subtle push-in
- Action: drop lands on skin, slowly spreads, light catches the spread
- Pacing: slow
- Reference: cello develops

...

Confirma plano? Resolução desejada (720p ou 1080p)?
```

### Step 6 — Run video generations

Pra cada frame:

```bash
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
handler = fal_client.submit(
    'fal-ai/kling-video/v2.1/pro',
    arguments={
        'prompt': '''VIDEO_PROMPT_AQUI''',
        'image_url': 'FRAME_CDN_URL',
        'duration': '5',  # ou '10'
        'aspect_ratio': '9:16',  # ou '16:9' / '1:1'
        'cfg_scale': 0.5  # how strictly follow prompt
    }
)
result = handler.get()
print(result)
"
```

Tempo médio: 2-5 minutos por clip.

**Tip:** paralelize. Manda 3-5 generations simultaneously enquanto trabalha em outras coisas.

### Step 7 — Download clips

```bash
curl -o /project-folder/videos/frame-01-hero-shot.mp4 "RESULT_URL"
```

### Step 8 — Iterate per frame

Pra cada clip gerado, apresenta ao usuário:

```
Clip frame-01-hero-shot.mp4 (3s)
[Preview se possível]

Aprovado? OR
- Re-gera com prompt ajustado (mais movimento, menos movimento, etc.)
- Mudar modelo
- Aceitar como rascunho (editar em pós)
```

Permite 2-3 iterações.

### Step 9 — Update master document

Atualiza section "Phase 5":

```markdown
## Phase 5 — Video Generation

### Generation summary
- Total clips: N
- Total duration: X seconds
- Model used: Kling v3 Pro
- Total cost (approx): $Y

### Generated files

| Frame | Filename | Duration | Iterations | Status |
|-------|----------|----------|------------|--------|
| 1 (Hook) | frame-01-hero-shot.mp4 | 3s | 1 | ✓ Approved |
| 2 (Setup) | frame-02-application.mp4 | 3s | 2 | ✓ Approved |
| ... | ... | ... | ... | ... |

### Video prompts used
[Lista completa]

### Audio direction (handoff pra edição)
Música: [tipo recomendado, fonte sugerida]
VO: [se houver]
Foley: [se houver]
SFX: [se houver]
Loudness target: -16 LUFS
```

### Step 10 — Final delivery

```
═══════════════════════════════════════
✅ CONTENT PIPELINE COMPLETO

Projeto: [nome]
Total tempo: [X horas]

Outputs em [project-folder]:
- /images/ — N PNGs (Phase 4)
- /videos/ — N MP4 clips (Phase 5)
- project-brief.md — master doc com todos os outputs

Total duração video (somando clips): X segundos

Próximos passos sugeridos:

1. EDIÇÃO FINAL
   → form-brand-visual-ia-edicao-capcut (default mobile/desktop)
   → form-brand-visual-ia-edicao-davinci (premium)
   Junta clips + adiciona música + texto overlay + transições

2. VOICEOVER (se necessário)
   → form-brand-visual-ia-voiceover (ElevenLabs)

3. ADAPTAÇÃO MULTI-PLATAFORMA
   → form-brand-visual-ia-platform-adaptation
   Reels → TikTok → Shorts → Stories

4. PUBLICAÇÃO
   Manual ou agendado
═══════════════════════════════════════
```

---

## Tipos de motion (vocabulário cinematográfico)

### Camera moves

- **Push-in / dolly in** — câmera avança em direção ao sujeito
- **Pull-out / dolly out** — câmera afasta
- **Pan left/right** — câmera gira lateralmente (eixo vertical)
- **Tilt up/down** — câmera gira verticalmente
- **Tracking shot** — câmera acompanha lateralmente movimento do sujeito
- **Orbit / arc shot** — câmera circula sujeito
- **Crane up/down** — câmera sobe/desce verticalmente
- **Static** — câmera fixa
- **Handheld feel** — leve trepidação natural
- **Whip pan** — pan rápido com motion blur (transição)

### Subject actions

- Rotates, slides, falls, rises
- Walks, sits, stands, turns
- Pours, splashes, scatters
- Reveals, opens, transforms
- Speeds up, slows down

### Pacing

- **Very slow** — contemplativo, premium
- **Slow** — moderado, observativo
- **Medium** — natural, narrativo
- **Fast** — energético, dinâmico
- **Speed ramp** — acelera + desacelera (efeito drama)

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Pacing: very slow (premium feel)
- Movement: subtle, contemplative
- Foley/áudio: mínimo, deixa visual respirar
- Iterações até sair perfeito (3-5)

### VISUAL+COPY

- Padrão
- Pacing slow-medium
- Movement balanceado

### COPY-HEAVY

- Pacing medium-fast (suporta texto que aparece)
- Movement pode ser mais dramático pra reforçar mensagem
- Audio: VO frequente

---

## Problemas comuns

### Problema 1 — Movement distorce sujeito

Solução: pacing mais lento + descrição mais simples no prompt
```
"static, very subtle push-in, subject barely moves"
```

### Problema 2 — Hands/objects morphing

Solução: pacing slow + action que não envolva mãos detalhadas
```
"subject's hands rest in current position, only camera moves"
```

### Problema 3 — Style inconsistente entre clips

Solução: usa MESMO model em todos os frames + Videography Signature consistent + cfg_scale = 0.5

### Problema 4 — Clip muito curto (5s mínimo no Kling)

Solução: aceita 5s mínimo, edita em pós pra trim. OR escolhe outro modelo se suporta menor.

### Problema 5 — Áudio dos clips fal.ai não serve

Padrão Kling gera áudio também mas geralmente substituído. Solução:
- Strip áudio em edição
- Adiciona música própria + foley em edição

---

## Best practices de video prompts

### O que funciona bem

✓ "Slow push-in, subject barely moves, light slowly shifts on surface"
✓ "Static camera, drop falls in slow motion and lands creating ripple"
✓ "Orbit shot 90 degrees around subject, smooth and slow"

### O que NÃO funciona

✗ "Make it move beautifully" (vago)
✗ "Cinematic" (clichê genérico — modelo já tenta isso)
✗ "Dramatic 3D movement around subject" (complexo demais)

### Princípios

- Specific > vague
- Less is more (movimento simples > complexo)
- Slow > fast (modelos lidam slow melhor)
- Single action > multiple actions

---

## Exemplos completos

### Exemplo A — Frame Hook Aurora Sérum

**Storyboard:** "Drop slowly forms and starts falling, slow motion"

**Video prompt:**
```
Static camera, subtle slow push-in toward the dropper, single 
amber drop slowly forms at the tip and begins to fall in extreme 
slow motion, golden light catches the drop, subtle particles in 
air, very slow pacing, contemplative atmosphere
```

**Duration:** 5s (mínimo Kling)
**Aspect:** 9:16

### Exemplo B — Brand Face applying serum

**Storyboard:** "Brand Face applying serum to cheek, gentle circular motion, eyes closed in moment of presence"

**Video prompt:**
```
Very slow push-in to medium close-up, woman gently applies 
serum to cheek with ring finger in slow circular motion, eyes 
close softly during application, subtle natural breathing 
visible, warm window light remains steady, contemplative intimate 
mood, very slow pacing
```

**Duration:** 5s
**Aspect:** 9:16

---

## Armadilhas a evitar

- **Não escrever video prompt que repete image prompt.** Video é o que MUDA.
- **Não pedir movimento complexo.** Modelos lidam mal com 2+ ações simultâneas.
- **Não esquecer image_url.** Sem start frame, vira text-to-video (qualidade pior).
- **Não rodar sem confirmar plano + custo.** Video é mais caro que imagem.
- **Não esperar 1 minute clip.** Kling máximo 5-10s. Pra mais longo, edita múltiplos em pós.
- **Não iterar infinitamente.** 3 tentativas máximo. Se não sair, accepta ou ajusta storyboard.

---

## Output esperado

✅ N MP4 clips em /project-folder/videos/
✅ Naming descritivo (frame-01-hero-shot.mp4, etc.)
✅ Section "Phase 5" preenchida no project-brief.md
✅ Audio direction handoff pra edição
✅ Pipeline encerra OR próximos passos claros (edição, voiceover, adapt)
