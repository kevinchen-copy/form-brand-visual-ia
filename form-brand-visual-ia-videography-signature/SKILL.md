---
name: form-brand-visual-ia-videography-signature
description: Define o CINEMA da marca em 5 decisões — LIGHTING (mesma da photography ou ajustada pra movimento), CAMERA SIGNATURE pra vídeo, PACING (slow/medium/fast), COLOR GRADING (warm muted/cool clean/vibrant/naturalistic), TRANSITIONS (cut direto, fade, dissolve, match cut, whip pan, J/L cut). Output - frase pronta pra alimentar JSON de image-to-video em Kling/Veo/Sora/Higgsfield. Use depois de photography-signature. Triggers - "videography signature", "cinema da marca", "estilo de vídeo", "pacing", "color grading", "transitions", "video style".
---

# Videography Signature — Cinema da marca

Define como vídeos da marca se MOVEM. Output = frase pronta pra alimentar JSON de image-to-video (Kling, Veo, Sora via Higgsfield).

5 decisões:
1. **Lighting em movimento** (geralmente reusa photography)
2. **Camera signature** pra vídeo
3. **Pacing** dominante
4. **Color grading**
5. **Transitions** preferidas

---

## Pre-requisitos

- `photography-signature` rodou
- `moodboard` rodou
- Modo da marca definido

## Próxima skill no workflow

`form-brand-visual-ia-motion-design` (animação de texto + elementos gráficos)

---

## As 5 decisões

### 1. Lighting em movimento

Em fotografia, light é estático. Em vídeo, light pode mudar (light shift, candle flicker, sunset roll).

```
A) ESTÁTICA (mesma de photography)
   Light não muda durante o clipe.
   Apenas subject ou camera se move.

B) LIGHT SHIFT (movimento natural de luz)
   Light sutilmente muda — sun setting, cloud passing, 
   candle flicker.
   Adds sense of time passing.

C) LIGHT REVEAL (light surge / fade)
   Light entra ou sai durante o clipe.
   Dramatic moment.
```

Pra marca calm/contemplative (Aurora): **A — Estática** (ou B sutil).

### 2. Camera signature (movimento)

```
A) STATIC (câmera fixa, subject se move)
   Premium, contemplativo, fácil de gerar (Kling lida bem)

B) SLOW PUSH-IN (câmera avança suavemente)
   Build intimacy, dramático sutil

C) SLOW PAN (câmera gira lateralmente)
   Reveal, exploration

D) ORBIT (câmera gira ao redor)
   Hero shot 360°, mais difícil de gerar bem

E) HANDHELD FEEL (leve trepidação)
   Naturalistic, documentary feel

F) TRACKING (acompanha subject)
   Lifestyle, naturalistic
```

Recomendação pra Aurora: A + B (static dominante, push-in pra special moments).

### 3. Pacing

Velocidade do movimento e dos cuts:

```
A) VERY SLOW (contemplative)
   - Movimento sutil
   - Cuts a cada 4-5s
   - Mood premium absoluto
   - Aesop, Le Labo style

B) SLOW (default premium)
   - Movimento moderado
   - Cuts a cada 3-4s
   - Mood contemplativo

C) MEDIUM (default narrativo)
   - Pacing natural
   - Cuts a cada 2-3s
   - Mood balanceado

D) FAST (energetic)
   - Cuts rápidos
   - Cada 1-2s
   - Mood TikTok / Reels viral

E) SPEED RAMP (acelera + desacelera)
   - Dynamic
   - Pra moments de revelation
```

Aurora: A — Very slow. Premium signature.

### 4. Color grading (em vídeo)

Mesmo da photography geralmente. Em vídeo, **LUT** (Look Up Table) aplicado em pós.

```
LUT da marca:
- Salva como arquivo .cube (DaVinci Resolve)
- Aplica em todos os clipes
- Garante consistency cross-clips

Especifica do companion.md:
- Warm muted naturalistic
- Slight underexposure
- Warm shadows lifted
- Highlights soft roll-off
```

### 5. Transitions

Como clipes se conectam.

```
A) CUT DIRETO (recomendado pra premium)
   Sem transição. Cut limpo.
   80%+ das transições da marca.

B) FADE (sutil)
   Black fade in/out
   Pra início/fim ou marcador de tempo.

C) CROSS DISSOLVE (passagem suave)
   Pra continuidade de mood entre cenas relacionadas.
   10-15% das transições.

D) MATCH CUT (conexão visual)
   Forma similar ou movement match entre clipes.
   Pra storytelling sofisticado.

E) WHIP PAN (transição dinâmica)
   Pan rápido com motion blur.
   Pra Reels energéticos.

F) J/L CUT (audio overlap)
   Áudio do próximo clipe começa antes / áudio do anterior continua.
   Sofisticado, narrativo.
```

Aurora: A (80%) + C dissolve (15%) + D match cut (5% — peças especiais).

---

## Step 1 — Sintetiza decisões

Apresenta proposta:

```
═══════════════════════════════════════
VIDEOGRAPHY SIGNATURE — Aurora
═══════════════════════════════════════

1. LIGHTING: Estática (mesma da photography)
2. CAMERA: Static dominante (70%) + slow push-in (30%)
3. PACING: Very slow (contemplative)
4. COLOR GRADING: Warm muted naturalistic (mesma photography)
5. TRANSITIONS: Cut direto (80%) + cross dissolve (15%) + 
   match cut (5%)

Cohere com: Aesop campaigns, Le Labo videos, slow cinema A24

Confirma?
```

---

## Step 2 — Detalha specs cada decisão

### Camera signature em depth

```
CAMERA SIGNATURE — AURORA VÍDEO

Pra cada tipo de peça, default:

HERO SHOT PRODUCT (10-15s clipe):
  Movement: "Slow push-in toward product over 10 seconds"
  Pacing: "very slow"
  Aspect ratio: 9:16 (Reel) OR 4:5 (feed video)

BRAND FACE PORTRAIT (5-8s clipe):
  Movement: "Static OR very subtle camera drift"
  Subject: "Brand Face barely moves, breathing visible, 
            slow blink occasional"
  Pacing: "very slow"

LIFESTYLE MOMENT (5-7s clipe):
  Movement: "Tracking shot acompanha subject natural movement"
  Subject: "Person doing simple natural action"
  Pacing: "slow natural"

ABSTRACT / TEXTURE (3-5s clipe):
  Movement: "Macro slow zoom OR static with light shift"
  Pacing: "very slow"

DETAILS / MACRO (3-5s clipe):
  Movement: "Static OR extreme slow pull-back"
  Pacing: "very slow"
```

---

## Step 3 — Frase mestre ready-to-JSON

Output principal pra image-to-video skills.

```
VIDEOGRAPHY SIGNATURE — FRASE MESTRE

(cole em JSON de video-generation, fal.ai Kling, Higgsfield)

{
  "camera": {
    "movement": "static OR slow push-in",
    "framing_default": "matches photography composition"
  },
  "pacing": "very slow contemplative",
  "color_grading": "warm muted naturalistic, matching photography signature",
  "subject_action": "minimal — breathing, slight movement, no dramatic actions",
  "audio": {
    "music_style": "single sustained warm note, minimal ambient",
    "no_dialogue_default": true
  },
  "transition_out": "cut direto preferred"
}
```

---

## Step 4 — Audio direction

Som é metade do impacto do vídeo. Define direction default:

```
AUDIO DIRECTION — AURORA

MUSIC STYLE
- Acoustic minimal (cello + piano + occasional strings)
- Slow tempo (60-80 BPM)
- Warm tonalidade (não cool/cold)
- Sem percussão dramática
- Sem build-up agressivo

EXEMPLOS DE TRACKS REFERÊNCIA:
- Max Richter "On the Nature of Daylight"
- Ólafur Arnalds "Saman"
- Nils Frahm "Says"

LIBRARIES:
- Musicbed (premium, license clara)
- Artlist (subscription)
- Epidemic Sound (alternative)

AMBIENT (foley)
- Sutil: distant water, fabric rustle, breath natural
- NUNCA: traffic forte, vozes claras

VOICEOVER (quando aplicável)
- Voice quality: warm intimate
- Female 35-45 (matches Brand Voice + audience)
- Pace: slow, deliberate
- Tom: contemplative
- Pitch: medium-low
- Tool: ElevenLabs OR human voice actress

FRASE READY-TO-JSON pra audio:
{
  "music": "minimal acoustic, single sustained warm note, no dramatic build",
  "ambient": "subtle natural — distant water, breath",
  "voiceover_quality": "warm intimate female 35-45"
}
```

---

## Step 5 — Frame "Videography Signature" na Brand Guidelines

```
┌──────────────────────────────────────────────┐
│  VIDEOGRAPHY SIGNATURE                       │
├──────────────────────────────────────────────┤
│                                              │
│  5 DECISÕES                                  │
│                                              │
│  1. Lighting: Estática (matches photography) │
│  2. Camera: Static 70% + push-in 30%         │
│  3. Pacing: Very slow contemplative          │
│  4. Color grading: Warm muted naturalistic   │
│  5. Transitions: Cut direto 80%              │
│                                              │
│  CAMERA SIGNATURE POR CONTEXTO               │
│  - Hero product: slow push-in 10s            │
│  - Brand Face portrait: static               │
│  - Lifestyle: tracking shot                  │
│  - Abstract/texture: macro slow zoom         │
│                                              │
│  AUDIO DIRECTION                             │
│  Music: minimal acoustic (Max Richter-like)  │
│  Ambient: subtle natural                     │
│  VO quality: warm intimate female 35-45      │
│                                              │
│  FRASE MESTRE JSON (ready-to-paste):         │
│  [bloco completo de JSON]                    │
│                                              │
│  REFERENCE TRACKS                            │
│  - Max Richter "On the Nature of Daylight"   │
│  - Ólafur Arnalds "Saman"                    │
│  - Nils Frahm "Says"                         │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 6 — Update companion.md

```yaml
visual:
  videography_signature:
    lighting: "Estática (matches photography_signature.lighting)"
    
    camera:
      dominant: "static (70%)"
      secondary: "slow push-in (30%)"
      
      by_context:
        hero_product: "slow push-in over 10s"
        brand_face_portrait: "static OR very subtle drift"
        lifestyle: "tracking shot acompanha movement natural"
        abstract: "macro slow zoom OR static with light shift"
    
    pacing: "very slow contemplative"
    
    color_grading: "warm muted naturalistic (matches photography)"
    
    transitions:
      dominant: "cut direto (80%)"
      secondary: "cross dissolve (15%)"
      special: "match cut (5%)"
    
    subject_action_default: "minimal — breathing, slight movement, no dramatic"
    
    audio:
      music_style: "minimal acoustic, single sustained warm note"
      tempo_range: "60-80 BPM"
      reference_tracks:
        - "Max Richter — On the Nature of Daylight"
        - "Ólafur Arnalds — Saman"
        - "Nils Frahm — Says"
      libraries: ["Musicbed", "Artlist", "Epidemic Sound"]
      ambient: "subtle natural sounds"
      voiceover_quality: "warm intimate female 35-45"
      voiceover_tool: "ElevenLabs OR human voice actress"
    
    ready_to_json: |
      {
        "camera": {
          "movement": "static OR slow push-in",
          "framing": "matches photography_signature"
        },
        "pacing": "very slow contemplative",
        "color_grading": "warm muted naturalistic",
        "subject_action": "minimal — breathing, slight movement",
        "audio": {
          "music": "minimal acoustic, single sustained warm note",
          "ambient": "subtle natural",
          "voiceover_quality": "warm intimate female 35-45"
        },
        "transition_out": "cut direto"
      }
```

---

## Adaptação por modo

### VISUAL-ONLY
- Videography Signature **máximo detalhe**
- Music references obrigatórias (premium)
- Multiple camera signatures by context (5-7)
- Color grading em DaVinci preciso

### VISUAL+COPY (padrão)
- Videography Signature detalhada padrão

### COPY-HEAVY
- Videography mais simplificada
- VO direction prioritária
- Music secundária (texto é foco)

---

## Armadilhas a evitar

- **Signature inconsistente com photography.** Se foto é warm muted contemplative, vídeo não pode ser high-saturation energetic.
- **Movimento extremo.** Movimento complexo gera mal em IA. Static + push-in funcionam melhor.
- **Pacing rápido pra marca calm.** Aurora rápida = não-Aurora.
- **Sem audio direction.** Vídeo é 50% áudio. Define direction.
- **Music genérica.** "Música legal" não basta. References específicas.

---

## Output esperado

✅ 5 decisões definidas
✅ Camera signature por contexto (5 tipos)
✅ Pacing dominante
✅ Color grading specificado (matches photography)
✅ Transitions com %
✅ Audio direction (music + ambient + VO)
✅ Frase mestre JSON ready-to-paste
✅ Frame "Videography Signature" na Brand Guidelines
✅ Section `videography_signature` no companion.md
✅ Próxima skill: `motion-design`
