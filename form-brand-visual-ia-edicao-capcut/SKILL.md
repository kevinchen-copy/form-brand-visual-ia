---
name: form-brand-visual-ia-edicao-capcut
description: Brief completo de edição de Reels/vídeos no CapCut aplicando Videography Signature + Motion Design + Voice da marca. Cobre timeline frame-by-frame, stack de áudio em camadas (música + ambient + foley), motion design dos textos overlay (fade/slide/scale/typewriter/hard cut), color grading aplicando LUT da marca, export settings finais. Usa Figma como template-source pra overlays. Output - brief detalhado em .md pronto pra você executar no CapCut OU passar pra editor humano. Use depois de video-generation. Triggers - "edição", "CapCut", "editar Reel", "montar timeline", "motion design de texto", "sound design", "export final".
---

# Edição CapCut — Brief completo de edição

Gera brief detalhado de edição pra você executar no CapCut (ou passar pra editor humano).

NÃO executa CapCut diretamente — CapCut não tem MCP. Skill produz **brief executável** com timeline + áudio + texto + export specs.

---

## Pre-requisitos

- Clips video gerados (de video-generation ou Higgsfield)
- `brand-guideline-companion.md` (lê Videography Signature, Motion Design, voice)
- Project folder com /videos/ contendo clipes

## Próxima skill no workflow

Execução manual no CapCut → publicação.

---

## Step 0 — Read brand context

```yaml
videography_signature:
  pacing: "very slow"
  transitions: "cut direto 80%"
  color_grading: "warm muted naturalistic"
  audio:
    music_style: "minimal acoustic"
    libraries: ["Musicbed", "Artlist"]

motion_design:
  animation_style: "smooth"
  easing_default: "ease-in-out"
  duration_default: 0.6
  safe_zones: {...}
  antipatterns: [...]

typography:
  heading: "Cormorant"
  body: "Inter"

palette:
  cream: "#F5F0E8"
  charcoal: "#2C2C2C"
  terracotta: "#C5664A"
```

---

## Step 1 — Coletar inputs do projeto

```
═══════════════════════════════════════
EDIÇÃO CAPCUT — Setup do projeto
═══════════════════════════════════════

1. Projeto:
   ex: "Aurora Sérum Lote 2 — Reel anúncio"

2. Clipes disponíveis:
   - Quantos clips?
   - Path da pasta /videos/
   - Duração total somando clips:

3. Aspect ratio target:
   - 9:16 (Reel/Stories/TikTok)
   - 4:5 (Feed)
   - 1:1 (Feed square)
   - 16:9 (YouTube)

4. Duração final desejada:
   - 15s (curto)
   - 20-30s (médio)
   - 30-60s (longo)
   - 60s+ (longform)

5. Áudio direction:
   - Music apenas (Brand Videography Signature)
   - Music + VO (texto narrado)
   - Music + foley
   - Music + VO + foley (cinematic)

6. Texto overlay?
   - Sim, queimado no vídeo (recomendado pra Reels paid)
   - Sim, mas via captions automáticas (orgânico Reels)
   - Não (visual standalone)

7. Tipo de peça:
   - Reel orgânico
   - Ad pago Meta
   - Story (curto, 5-15s)
   - Brand film (premium, 60s+)
```

---

## Step 2 — Brief de timeline

Documenta timeline frame-by-frame:

```markdown
# TIMELINE — Aurora Sérum Lote 2 Reel

## Duração total: 20s
## Aspect: 9:16 (1080×1920)
## FPS: 30

---

## TRACK 1 — VIDEO CLIPS

```
00:00.0  Clip 1 (Hook) — frame-01-bottle-hands.mp4
00:03.0  Cut → Clip 2 (Mecanismo) — frame-02-bottle-drop.mp4
00:08.0  Cut → Clip 3 (Prova) — frame-03-brand-face.mp4
00:13.0  Cut → Clip 4 (Reversão) — frame-04-hand-bottle.mp4
00:17.0  Cut → Clip 5 (CTA) — frame-05-bottle-hero.mp4
00:20.0  END
```

## TRACK 2 — TRANSITIONS

```
00:03.0  Cut direto (transição 1→2)
00:08.0  Cut direto (transição 2→3)
00:13.0  Cut direto (transição 3→4)
00:17.0  Cross dissolve 0.3s (transição 4→5) — slight smoothness pra CTA
```

## TRACK 3 — COLOR GRADING

```
LUT aplicado: "Aurora Warm Muted" (LUT custom da marca)
   - Salvar arquivo .cube em CapCut Effects → LUT
   - Aplica em todos os clips

Adjustments adicionais por clip se necessário:
   Clip 1: -5 exposure (mais moody)
   Clip 3: +3 saturation (Brand Face mais vívida)
   Clip 5: +2 highlights (produto pop)
```
```

---

## Step 3 — Brief de áudio (stack em camadas)

```markdown
## TRACK 4 — MÚSICA (camada 1)

Source: Musicbed OR Epidemic Sound
Track: [escolher track minimal acoustic, ~20s]
   Sugestões: "Slow Bloom" (Epidemic), "Quiet Morning" (Musicbed)

Volume: -15 dB (background level)
Fade in: 0.5s no início
Fade out: 1s no final

Timing:
- Começa em 00:03 (silêncio nos primeiros 3s do hook)
- Sustenta nivel até 00:17
- Crescendo sutil de 00:17 a 00:19
- Fade out 00:19-00:20

## TRACK 5 — VOICEOVER (camada 2, se aplicável)

Source: ElevenLabs OR gravado por founder
Voice: Aurora voice quality (do companion.md)
   "Warm intimate, female 35-45, calm, naturalistic"

Script:
```
[00:00-03] (silêncio — texto overlay carrega)
[00:03-08] "Aurora Sérum. Niacinamida e bakuchiol em 1 frasco."
[00:08-13] "Mariana, 38 anos, 6 meses de uso."
[00:13-17] "Garantia de 30 dias. Sem risco."
[00:17-20] "Link na bio. Pré-venda só hoje."
```

Volume: -8 dB
Compressão: 2:1 ratio
EQ: presence boost em 3-5kHz (clareza)
De-esser: aplicar (reduz "s" excessivo)

## TRACK 6 — FOLEY (camada 3, opcional)

Source: Freesound OR Epidemic SFX

00:00-03  silence (deixar visual respirar)
00:03-08  subtle: liquid drop sound at 00:05 (sync com gota)
00:08-13  subtle: gentle breath sound (Brand Face)
00:13-17  silence ambient
00:17-20  subtle: soft "click" subtle quando logo aparece

Volume: -20 dB (muito sutil)

## TRACK 7 — AMBIENT (camada 4, opcional)

Subtle room tone throughout
Volume: -25 dB (mais imaginado que ouvido)

## MIX FINAL — MASTER

Master limiter:
- Threshold: -1 dB
- Ratio: ∞:1 (brick wall)
- Loudness target: -16 LUFS (Meta/Instagram standard)
- Peak: max -1 dB

Audio export:
- 48kHz
- 16-bit
- Stereo
```

---

## Step 4 — Brief de motion design (texto overlay)

```markdown
## TRACK 8 — TEXTO OVERLAY

Aplicar Motion Design da marca:
- Animation style: smooth
- Easing: ease-in-out
- Duration entry: 0.6s
- Duration exit: 0.3s

Typography:
- Heading: Cormorant SemiBold
- Body: Inter Regular

Safe zone 9:16:
- Top reserved: 250px
- Bottom reserved: 350px
- Lateral: 120px each
- Safe area: 840×1320

---

ELEMENTO 1 — HOOK TEXT (00:00.5 - 00:03.0)
Content: "12 produtos. Pele pior."
Font: Cormorant Bold 80pt
Color: #FBFAF6 (Off-white) sobre dim BG
Position: Center, slight top of safe area
Animation:
- 00:00.5 fade in + scale 0.95→1.0 (0.6s)
- Hold until 00:02.7
- 00:02.7 fade out (0.3s)

ELEMENTO 2 — MECANISMO TEXT (00:03.0 - 00:08.0)
Content top: "5 ingredientes"
Font: Cormorant 60pt
Position: Top of safe area
Animation: fade in 0.6s + hold + fade out

Content bottom: "Niacinamida + bakuchiol em fórmula limpa"
Font: Inter 24pt
Position: Bottom of safe area
Animation: fade in 0.4s + hold + fade out

[continua pra todos elementos texto]

ELEMENTO N — CTA TEXT (00:17.0 - 00:20.0)
Content top: "Pré-venda 20% off"
Font: Cormorant Bold 80pt
Color: Terracotta #C5664A
Position: Center
Animation: scale 0.9→1.0 + fade in (0.5s)

Content bottom: "Link na bio — 100 unidades"
Font: Inter 28pt
Color: #FBFAF6
Position: Bottom of safe area
Animation: fade in 0.4s after top

LOGO permanente (canto):
Position: bottom-right canto, 80px da margem
Size: 60px width
Variant: Logo White
Visibility: 00:00 - 00:20 (toda duração)
Opacity: 80%
```

---

## Step 5 — Brief de captions automáticas (alternativa)

Se ad orgânico (não paid), captions automáticas podem substituir texto overlay manual:

```
## CAPTIONS AUTOMÁTICAS (CapCut feature)

CapCut Desktop → Tools → Auto Captions:

1. Select VO track
2. Generate captions
3. Edit / approve transcription
4. Style:
   - Font: Inter Bold 36pt
   - Color: white com sombra preta
   - Position: bottom center (within safe area)
   - Background: light black overlay 60% opacity (legibilidade)
   - Animation: fade in 0.2s por word (efeito kinetic)

Captions ficam sincronizadas automaticamente com VO.
```

---

## Step 6 — Export specs

```markdown
## EXPORT — CONFIGURAÇÕES FINAIS

CapCut Desktop → Export:

Resolution: 1080×1920 (9:16)
Frame rate: 30 fps
Bitrate: 8-10 Mbps (alta qualidade)
Codec: H.264
Container: MP4
Color space: Rec. 709 (standard)

Audio:
- Codec: AAC
- Bitrate: 192 kbps
- Sample rate: 48 kHz
- Stereo

Filename: aurora-sermo-lote2-reel-FINAL-9x16.mp4

Estimated final size: 25-40 MB (pra 20s)
Meta limit: 1 GB (OK)

Versões secundárias (se necessário):
- aurora-sermo-lote2-reel-FINAL-1x1.mp4 (crop pra Feed quadrado)
- aurora-sermo-lote2-reel-FINAL-4x5.mp4 (crop pra Feed vertical)
```

---

## Step 7 — Output: brief-edicao-[projeto].md

Documento completo com todas as 7 seções acima. Pronto pra executar no CapCut OR mandar pra editor.

```
═══════════════════════════════════════
✅ BRIEF DE EDIÇÃO PRONTO

Documento: [marca]/edicao/aurora-lote2-reel-brief.md

EXECUTAR EDIÇÃO:

OPÇÃO A — Você executa (1-2h):
1. Abre CapCut Desktop
2. Importa 5 clipes da pasta /videos/
3. Importa LUT da marca + música
4. Segue brief frame-by-frame
5. Export conforme specs

OPÇÃO B — Editor humano executa (1-2 dias):
1. Manda brief + assets pra editor
2. Recebe primeira cut
3. Revisões
4. Aprovação final

OPÇÃO C — Roda form-brand-visual-ia-edicao-davinci
(se quer color grading + audio mix premium)

PRÓXIMOS PASSOS:
1. Edição executada
2. Export final
3. Upload Meta (se ad paid)
4. Publicação Instagram/TikTok (se orgânico)
═══════════════════════════════════════
```

---

## Adaptação por modo

### VISUAL-ONLY
- Texto overlay MÍNIMO (1-2 elementos)
- Música mais slow
- Cuts ainda mais devagar
- Possivelmente sem VO

### VISUAL+COPY (padrão)
- Estrutura acima padrão

### COPY-HEAVY
- Texto overlay denso
- VO frequente
- Captions sempre
- Cuts mais frequentes pra reforçar mensagem

---

## Armadilhas a evitar

- **Música genérica.** Track random não combina. Investe em curadoria.
- **Texto fora de safe zone.** UI Instagram corta.
- **Color grading inconsistente.** LUT aplicado em todos os clips.
- **Volumes desbalanceados.** Música abafa VO ou vice-versa.
- **Loudness fora de -16 LUFS.** Meta penaliza.
- **Export errado.** Bitrate baixo = vídeo borrado.

---

## Output esperado

✅ Brief executável detalhado em .md
✅ Timeline frame-by-frame
✅ Stack de áudio em 4 camadas
✅ Motion design de texto overlay (8+ elementos)
✅ Export specs precisos
✅ Pronto pra você executar OR mandar pra editor
