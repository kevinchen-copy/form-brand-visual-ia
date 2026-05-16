---
name: form-brand-visual-ia-edicao-davinci
description: Brief de edição PREMIUM no DaVinci Resolve pra brand films + ads premium + projetos onde CapCut não basta. 7 pages do DaVinci - Media, Cut, Edit, Fusion, Color, Fairlight, Deliver. Foco em color grading profissional (LUT custom + secondaries) + Fairlight audio mix (loudness target -16 LUFS) + Fusion motion graphics. Output - brief executável detalhado + LUT setup + workflow handoff. Use pra brand films 30-60s, lançamentos high-stakes, peças anchor. SKILL ALTERNATIVA ao edicao-capcut (não obrigatória se peças simples). Triggers - "DaVinci", "edição premium", "brand film", "color grading sério", "Fairlight", "edição profissional".
---

# Edição DaVinci Resolve — Brief de edição premium

Brief de edição **profissional** no DaVinci Resolve. Usado pra:
- Brand films 30-60s
- Ads premium high-stakes
- Peças anchor da marca (ano)
- Projetos onde CapCut não basta

DaVinci é GRÁTIS (versão Free é completíssima). Studio é $295 (compra única).

Esta skill é **ALTERNATIVA** ao edicao-capcut, não substituto. Pra peças diárias, CapCut. Pra peças premium, DaVinci.

---

## Pre-requisitos

- DaVinci Resolve instalado (Free version basta)
- Clips video gerados
- `brand-guideline-companion.md`
- LUT da marca preferencialmente já criada (esta skill ajuda criar se não)

---

## As 7 pages do DaVinci

```
1. MEDIA — Import + organização
2. CUT — Edição rápida (similar CapCut)
3. EDIT — Edição profissional completa
4. FUSION — VFX + motion graphics
5. COLOR — Color grading (a página estrela)
6. FAIRLIGHT — Audio mixing profissional
7. DELIVER — Export final
```

Workflow padrão pra brand film: Media → Edit → Color → Fairlight → Deliver.

---

## Step 0 — Read context

Lê companion.md pra Videography Signature + Motion Design + voice.

---

## Step 1 — Coletar inputs do projeto

```
═══════════════════════════════════════
DAVINCI — Setup brand film
═══════════════════════════════════════

1. Tipo de projeto:
   - Brand film hero (60s, ano-âncora)
   - Premium ad (30s, lançamento)
   - Documentário curto (45s)
   - Outro

2. Duração final:
   ex: 45 segundos

3. Aspect ratio:
   - 9:16 (Reel/Stories premium)
   - 16:9 (cinema, YouTube)
   - 2.39:1 (anamorphic, cinema premium)

4. Clipes disponíveis:
   - Quantos clips? Pasta?
   - Algum filmado profissionalmente (real)?
   - Algum gerado por IA (Kling, Higgsfield)?
   - Mix dos dois?

5. Audio:
   - Music: original/composição? OR licensed (Musicbed)?
   - VO: gravado? IA (ElevenLabs)? OR sem VO?
   - Foley pesado ou sutil?

6. VFX necessários:
   - Title sequences animadas?
   - Logo reveal cinematográfico?
   - Compositing avançado (Fusion)?
   - Color grading absoluto (premium look)?
```

---

## Step 2 — Brief Page MEDIA

```markdown
## PAGE 1 — MEDIA (Import)

### Estrutura de bins (folders):

Brand Film Aurora 2026/
├── 01 — Raw footage
│   ├── A_Camera (se houver)
│   ├── B_Camera
│   └── Drone (se houver)
├── 02 — AI-generated clips
│   ├── Kling outputs
│   └── Higgsfield outputs
├── 03 — Audio
│   ├── Music
│   ├── VO
│   └── Foley/SFX
├── 04 — Stills / Graphics
│   ├── Logo files
│   ├── Text plates
│   └── Texture overlays
├── 05 — LUTs
│   └── Aurora_LUT.cube
└── 06 — Reference
    └── Moodboard images

### Project Settings:
- Resolution: 3840×2160 (4K) — final delivery
- Working at: 1920×1080 timeline (proxy mode)
- Frame rate: 24fps (cinema) OR 30fps (online)
- Color space: Rec. 709 (standard) OR Rec. 2020 (HDR)
```

---

## Step 3 — Brief Page EDIT

```markdown
## PAGE 3 — EDIT (Editing)

### Timeline structure:

V1 — Main video track
V2 — Overlay titles
V3 — Logo / motion graphics
V4 — VFX layer

A1 — Music
A2 — VO (se houver)
A3 — Foley primary
A4 — Foley secondary
A5 — Ambient

### Cuts:

00:00.0  Establishing shot wide (5s)
00:05.0  Cut → Detail shot product (4s)
00:09.0  Cut → Lifestyle people (6s)
00:15.0  Match cut → Brand Face portrait (5s)
00:20.0  Cut → BTS texture (4s)
00:24.0  J-cut audio extends → Wide product (5s)
00:29.0  Cut → Brand Face revelation (4s)
00:33.0  L-cut audio sustains → Final logo (12s)
00:45.0  END

### Audio bed:

Music starts at 00:02 (silence in opening 2s for impact)
Music sustains throughout
Builds gradually 00:20 → 00:35
Resolves at 00:42 → fadeout 00:45
```

---

## Step 4 — Brief Page COLOR (CRÍTICA)

```markdown
## PAGE 5 — COLOR (Color Grading)

### Workflow primário:

NODE 1 — Primary correction (per clip)
- Lift: shadows ajusta (warm push se cool source)
- Gamma: midtones balance
- Gain: highlights control
- Exposure: ±0.5 stops conforme clip

NODE 2 — Secondary correction (selective)
- Qualifier por color (skin tones, sky, etc.)
- Power Windows pra áreas específicas

NODE 3 — Match colors entre clips
- Color match feature do DaVinci
- Garante consistency cross-clips

NODE 4 — Creative LUT (Aurora signature)
- Apply: Aurora_LUT.cube
- Settings:
  - Warm muted naturalistic
  - Slight underexposure
  - Shadows warm-toned
  - Highlights soft roll-off
  - Medium contrast

NODE 5 — Final tweaks
- Vinheta sutil
- Film grain leve (16mm style — opcional)
- Sharpen levemente

### LUT da marca:

Se LUT já existe: aplica em todos clips
Se não existe: skill ajuda criar pegando 1 clip representativo e aplicando primary + creative grading, depois exporta como .cube

### Color match objetivo:
Todos os clips devem parecer **da mesma sequência**, não 5 sources diferentes.
```

---

## Step 5 — Brief Page FAIRLIGHT

```markdown
## PAGE 6 — FAIRLIGHT (Audio Mixing)

### Tracks setup:

A1 — MUSIC
EQ: HPF 80Hz (corta low-end mud)
Compression: 2:1 ratio, slow attack
Volume: -15 dB

A2 — VOICEOVER (se houver)
EQ: HPF 100Hz, presence boost 3-5kHz
Compression: 3:1 ratio, medium attack
De-esser: aplica (reduz "s")
Volume: 0 dB (referência)

A3 — FOLEY primary
EQ: ajuste per sound
Volume: -10 dB

A4 — FOLEY secondary
Volume: -15 dB

A5 — AMBIENT
EQ: subtle (mantém naturalismo)
Volume: -25 dB

### Master bus:

Limiter:
- Threshold: -1 dB
- Ratio: ∞:1 (brick wall)
- Lookahead: 5ms
- Release: 100ms

Loudness target:
- Online streaming: -16 LUFS (Instagram, YouTube)
- Broadcast: -23 LUFS (TV)
- Cinema: -27 LUFS

Peak: max -1 dB true peak

### Final mix check:

- Play full timeline com headphones
- Verifica balance VO vs music
- Verifica foley está perceptível mas não distrai
- Confirma loudness target hit

### Music sourcing (se aplicável):
- Premium license: Musicbed ($200-500 license premium)
- Alternative: Artlist subscription
- Custom composition: contratar compositor ($500-3000)
- AI generated: Suno/Udio (verificar license)
```

---

## Step 6 — Brief Page FUSION (se VFX necessário)

```markdown
## PAGE 4 — FUSION (Motion Graphics + VFX)

### Use cases típicos:

1. LOGO ANIMATION (intro/outro)
   - Logo reveal cinematic
   - Particle effect sutil
   - Custom animação 2-3s

2. TITLE SEQUENCES
   - Text animations elaboradas (além do que CapCut faz)
   - Kinetic typography
   - Brand-specific styles

3. VFX SIMPLES
   - Object removal (poste indesejado no fundo)
   - Sky replacement
   - Color isolation
   - Speed ramps

### Pra brand film Aurora típico:

Element 1 — LOGO REVEAL final (00:42-00:45)
   Pre-comp:
   - Logo SVG imported
   - Mask reveal (left-to-right, ease-in-out, 1.5s)
   - Subtle particle (mist) overlay
   - Audio sync: chord sustains during reveal

Element 2 — TEXT INTRO (00:02-00:05)
   "Aurora" title slow fade in
   Cormorant SemiBold 200pt
   Color: cream over warm BG
   Animation: scale 0.97→1.0 over 2s, smooth ease

Element 3 — TRANSITION BETWEEN SCENES
   Subtle light flare match cut (frame 2 → frame 3)
```

---

## Step 7 — Brief Page DELIVER (Export)

```markdown
## PAGE 7 — DELIVER

### Export presets:

MASTER 4K (arquivo principal):
- Codec: ProRes 422 HQ (best quality)
- Resolution: 3840×2160
- Frame rate: 24fps OR 30fps
- Audio: 48kHz 16-bit stereo

WEB 1080p (delivery online):
- Codec: H.264
- Resolution: 1920×1080 (16:9) OR 1080×1920 (9:16)
- Bitrate: 10-15 Mbps
- Frame rate: 30fps
- Audio: AAC 192 kbps

REELS 9:16 (Instagram):
- Crop / scale 1080×1920
- H.264, 10 Mbps
- 30fps
- Audio AAC 192 kbps

CINEMA DCP (se for pra cinema/evento):
- DCP package
- 2K ou 4K
- Audio surround se mixed

### Filenames:

aurora-brand-film-2026-master-4k.mov
aurora-brand-film-2026-web-1080.mp4
aurora-brand-film-2026-reels-9x16.mp4
```

---

## Step 8 — Output: brief-davinci-[projeto].md

Documento completo com todas as 7 seções.

```
═══════════════════════════════════════
✅ BRIEF DAVINCI PRONTO

Documento: [marca]/edicao/aurora-brand-film-davinci-brief.md

EXECUTAR (5-10 dias estimados pra brand film):

Day 1-2 — Media + Edit (rough cut)
Day 3 — Color grading (a página + intensa)
Day 4 — Fairlight (audio mix)
Day 5 — Fusion (motion graphics finais)
Day 6 — Final pass + approval
Day 7-8 — Refinements
Day 9-10 — Final delivery + multi-format exports

OU contrata editor profissional:
- DaVinci specialist: 1-2 dias OR R$ 2000-8000 freelance
- Garante qualidade Hollywood-grade

PRÓXIMOS PASSOS:
1. Setup DaVinci (free download blackmagicdesign.com)
2. Importa assets seguindo brief
3. Segue workflow 7 pages
4. Exporta finals
═══════════════════════════════════════
```

---

## Adaptação por modo

### VISUAL-ONLY
- Page COLOR investida pesado
- Page FUSION robusta (motion graphics premium)
- Audio mais simples

### VISUAL+COPY
- Todas 7 pages padrão

### COPY-HEAVY
- Fairlight investida pesado (VO crítica)
- Motion design de texto elaborado em Fusion
- Color secondary correção

---

## Armadilhas a evitar

- **Pular Color Page.** É onde DaVinci destrói CapCut. 80% do polish vem daqui.
- **Audio mediocre.** Fairlight = nível profissional. Use.
- **Sem LUT da marca.** Brand drift visual cross-projects.
- **Loudness fora target.** Meta penaliza algoritmo.
- **Export bitrate baixo.** Vídeo borrado.

---

## Quando usar DaVinci vs CapCut

| Caso | DaVinci | CapCut |
|---|---|---|
| Reel diário | ❌ overkill | ✅ adequado |
| Story curto | ❌ | ✅ |
| Brand film 60s | ✅ | ❌ insuficiente |
| Ad pago premium | ✅ | ⚠️ aceitável mas DaVinci ganha |
| Color grading sério | ✅ obrigatório | ❌ limitado |
| Audio multi-camada | ✅ | ⚠️ funciona simples |
| Motion graphics | ⚠️ Fusion power, mas curva | ✅ templates rápidos |

---

## Output esperado

✅ Brief detalhado 7 pages DaVinci
✅ Color grading workflow
✅ Audio mixing specs (-16 LUFS)
✅ Export presets múltiplos
✅ Estimativa tempo + opções de execução
