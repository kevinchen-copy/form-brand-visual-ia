---
name: form-brand-visual-ia-ad-video
description: Gera ad de vídeo Meta cold (15-30s) com estrutura específica de ad de vídeo (Hook + Mecanismo + Prova + Reversão de risco + CTA — diferente de Reel orgânico). Storyboard 5 cenas + prompts em 6 camadas (alimenta image-generation) + JSON de video-prompts (alimenta video-generation) + brief edição CapCut com texto overlay agressivo + specs Meta (9:16, MP4, ≤1GB, captions queimadas). Output - variações pra teste A/B (3-5 hooks alternativos). Use pra Meta video ads. Triggers - "ad de vídeo Meta", "video ad cold", "ad video creator", "criar ad de vídeo", "creative de vídeo Meta", "Reels ad", "vídeo de conversão".
---

# Ad Video — Ads de vídeo Meta (Reels, Stories ads)

Gera ad de vídeo PARA META PAID (não Reel orgânico). Estrutura DIFERENTE:
- Pacing mais agressivo
- Texto overlay queimado (sem assumir áudio)
- CTA mais explícito
- Hooks testáveis A/B

---

## Pre-requisitos

- `brand-guideline-companion.md`
- `audience-research` + `product-research` (sabe ângulos)
- Oferta/produto definida

## Próxima skill no workflow

1. `form-brand-visual-ia-image-generation` (gera frames master)
2. `form-brand-visual-ia-video-generation` (anima frames)
3. `form-brand-visual-ia-edicao-capcut` (junta + texto overlay)

---

## Anatomia do ad de vídeo Meta

Diferente de Reel orgânico, **ad de vídeo PAGO** segue estrutura específica:

```
TEMPO   FUNÇÃO              CONTEÚDO
0-2s    HOOK (crítico)      Provocação visual + texto
                            Determina se viewer para
2-6s    MECANISMO           Como produto entrega resultado
                            (mecanismo único do product-research)
6-15s   PROVA               Social proof OR demonstrative
                            Faz audience confiar
15-22s  REVERSÃO DE RISCO   Garantia, satisfaction, devolução
                            Tira fear de "e se não funcionar?"
22-28s  CTA                 Ação clara + scarcity sutil
28-30s  FECHAMENTO          Marca + slogan
```

Duração total: 15-30s. Ideal: 20-25s.

---

## Step 0 — Read context

```yaml
big_idea: "..."
voice_permanent: [...]
mecanismo_unico: "..."  # do product-research
provas: {...}  # do product-research
photography_signature: {ready_to_prompt: "..."}
videography_signature: {ready_to_json: "..."}
```

---

## Step 1 — Coletar inputs

```
═══════════════════════════════════════
AD VIDEO META — Setup
═══════════════════════════════════════

1. Produto / oferta:
   ex: "Aurora Sérum — pré-venda lote 2, 20% off"

2. Audience-alvo do ad:
   ex: "Mulheres 35-45, problem-aware (M3 do mapa consciência)"

3. Duração desejada:
   - 15s (cold, urgência alta)
   - 20s (recomendado — balanceado)
   - 30s (lifestyle, mais storytelling)

4. Aspect ratios:
   - 9:16 (Reels ad, Stories ad)
   - 1:1 (Feed ad)
   - 4:5 (Feed ad)
   - Cria todos ou só específico?

5. Conta com texto overlay sempre? (recomendado SIM, 95% das views são silenciadas)

6. Quantas variações de hook pra teste A/B?
   - 3 variações (recomendado)
   - 5 (pra teste mais amplo)
```

---

## Step 2 — Gerar 3-5 hooks alternativos

Hook = primeiros 2 segundos. Crítico pra retention.

```
═══════════════════════════════════════
HOOK VARIATIONS — AURORA SÉRUM
═══════════════════════════════════════

HOOK A (Pergunta provocativa)
"Você está usando 12 produtos. E sua pele tá pior."
Texto overlay grande: "12 produtos. Pele pior."

HOOK B (Statistic shock)
"83% das mulheres usam pelo menos 5 produtos por dia."
Texto overlay: "83% USAM 5+ PRODUTOS"

HOOK C (Reveal)
"Aurora chegou. 1 produto. 5 ingredientes. 0 ruído."
Texto overlay: "1 PRODUTO. 0 RUÍDO."

HOOK D (Founder POV)
"Comecei na cozinha porque cansei de mentir pra mim mesma."
Texto overlay: "CANSEI DE MENTIR."

HOOK E (Result tease)
"Em 30 dias, ela parou de usar 11 produtos."
Texto overlay: "30 DIAS. -11 PRODUTOS."

Skill avalia cada hook contra:
- Voice check ✓
- Curiosidade level ✓
- Conexão com Big Idea ✓
- Stops scroll? (qualitativa)

Recomenda 3 melhores pra teste A/B.
```

---

## Step 3 — Storyboard de 5 cenas (~5s cada)

```
═══════════════════════════════════════
STORYBOARD — Aurora Sérum Lote 2
Duração: 20s | Aspect: 9:16
═══════════════════════════════════════

CENA 1 — HOOK (0-3s)
Visual: ECU mãos cheias de 12 frascos diferentes
Texto overlay (grande): "12 produtos. Pele pior."
Áudio: silêncio + impacto sonoro sutil
Camera: static

CENA 2 — MECANISMO (3-8s)
Visual: Macro Aurora bottle, gota suspendida
Texto overlay: "5 ingredientes"
"Niacinamida + bakuchiol em fórmula limpa"
Áudio: warm music starts
Camera: slow push-in

CENA 3 — PROVA (8-13s)
Visual: Brand Face Core sorrindo, pele luminosa
Texto overlay: "30 dias — pele radiante"
"Mariana, 38 anos, 6 meses de uso"
Camera: static portrait

CENA 4 — REVERSÃO RISCO (13-17s)
Visual: produto em mão, frasco close-up
Texto overlay: "Garantia 30 dias"
"Devolve se não funcionar"
Camera: static

CENA 5 — CTA (17-20s)
Visual: bottle elegante + logo
Texto overlay GRANDE: "Pré-venda 20% off"
CTA: "Link na bio — só 100 unidades"
Camera: static, slight zoom-in
```

---

## Step 4 — Gerar prompts pra cada cena (handoff pra image-generation)

```
═══════════════════════════════════════
PROMPTS DE IMAGEM PRA CADA CENA
═══════════════════════════════════════

CENA 1 — HOOK
Endpoint: text-to-image
Prompt:
"[Photography Signature mestre] + extreme close-up of two 
hands holding multiple skincare bottles cluttered together, 
overwhelming visual chaos, slight blur on background hands, 
focus on bottles in middle, warm muted palette but bottles 
mix of colors creating visual noise"

CENA 2 — MECANISMO
Endpoint: text-to-image
Prompt:
"[Photography Signature mestre] + Aurora serum bottle 
(30ml clear glass with amber liquid, brushed gold cap) on 
unfinished oak surface, single drop suspended at dropper tip"

CENA 3 — PROVA
Endpoint: image-to-image (uses Brand Face Core)
Prompt:
"[Photography Signature mestre] + Brand Face Core (use 
reference image), gentle smile, glowing skin, late afternoon 
warm light"
References: [URL Brand Face Core]

CENA 4 — REVERSÃO
Endpoint: text-to-image  
Prompt:
"[Photography Signature mestre] + Aurora bottle held in 
woman's hand, side angle showing texture and label, 
intimate confidence"

CENA 5 — CTA
Endpoint: text-to-image
Prompt:
"[Photography Signature mestre] + Aurora bottle centered 
hero composition on oak surface, single warm light, premium 
isolated"
```

---

## Step 5 — Gerar JSON video-prompts pra cada cena

```
═══════════════════════════════════════
JSON IMAGE-TO-VIDEO PRA CADA CENA
═══════════════════════════════════════

CENA 1 — HOOK (3s)
{
  "image_url": "[CDN URL da imagem cena 1]",
  "prompt": "Static camera, slight tension in hands holding bottles, no movement of bottles",
  "duration": 3,
  "aspect_ratio": "9:16"
}

CENA 2 — MECANISMO (5s)
{
  "image_url": "[CDN URL cena 2]",
  "prompt": "Slow push-in toward dropper, single drop slowly forms and begins to fall in slow motion",
  "duration": 5,
  "aspect_ratio": "9:16"
}

CENA 3 — PROVA (5s)
{
  "image_url": "[CDN URL cena 3]",
  "prompt": "Subject barely moves, breathing visible, soft natural smile slowly forming",
  "duration": 5,
  "aspect_ratio": "9:16"
}

CENA 4 — REVERSÃO (4s)
{
  "image_url": "[CDN URL cena 4]",
  "prompt": "Static, hand slightly adjusts grip on bottle, light shifts subtly",
  "duration": 4,
  "aspect_ratio": "9:16"
}

CENA 5 — CTA (3s)
{
  "image_url": "[CDN URL cena 5]",
  "prompt": "Static, very slight zoom-in toward bottle, light slowly intensifies",
  "duration": 3,
  "aspect_ratio": "9:16"
}
```

---

## Step 6 — Brief de edição CapCut

```
═══════════════════════════════════════
EDIÇÃO CAPCUT — Brief
═══════════════════════════════════════

PROJETO: Aurora Sérum Lote 2 Ad
DURAÇÃO: 20s
ASPECT: 9:16

TIMELINE:
0-3s    [cena 1 video clip]
3-8s    [cena 2 video clip]
8-13s   [cena 3 video clip]
13-17s  [cena 4 video clip]
17-20s  [cena 5 video clip]

ÁUDIO:
- Music track: minimal acoustic (Musicbed, ~20s)
- Music starts at 3s (silence in hook)
- Music subtle build through middle
- Music sustains in CTA
- ZERO dialogue / VO (captions cover)

TEXTO OVERLAY (queimado, sempre visível):
0-3s   "12 produtos. Pele pior." (Cormorant Bold 80pt, white)
3-8s   "5 ingredientes" (top)
       "Niacinamida + bakuchiol em fórmula limpa" (bottom)
8-13s  "30 dias — pele radiante" (top)
       "Mariana, 38 anos" (small bottom)
13-17s "Garantia 30 dias" (top)
       "Devolve se não funcionar" (bottom)
17-20s "Pré-venda 20% off" (huge center)
       "Link na bio — 100 unidades" (small)

LOGO:
- Aurora logo discreto canto bottom-right toda duração
- Versão White (sobre todas cenas)

COLOR GRADING:
- LUT da marca aplicado em todos clipes
- "Warm muted naturalistic"
- Consistent across scenes

EXPORT:
- MP4 H.264
- 1080×1920 (9:16)
- 30fps
- Bitrate 8-10 Mbps
- Audio: 48kHz stereo
- Tamanho final: ≤1GB (Meta limit)
- Captions: queimadas no vídeo
```

---

## Step 7 — Specs Meta + variações pra teste A/B

```
═══════════════════════════════════════
EXPORT SPECS — META ADS
═══════════════════════════════════════

ESPECIFICAÇÕES TÉCNICAS:
- Formato: MP4 (preferred) OR MOV
- Tamanho máximo: 4GB
- Duração: 1s a 240s (max 30s pra Reels ad)
- Aspect ratios:
  - 9:16 (Reels, Stories) — RECOMENDADO
  - 1:1 (Feed)
  - 4:5 (Feed)
- Resolução mínima: 600×600
- Resolução recomendada: 1080×1920
- Bitrate vídeo: 4-15 Mbps
- Audio: AAC 128kbps+

TESTE A/B SUGERIDO:

Variant Set 1 — Hook test (3 hooks):
- HOOK A: "12 produtos. Pele pior."
- HOOK C: "1 PRODUTO. 0 RUÍDO."
- HOOK E: "30 DIAS. -11 PRODUTOS."

Variant Set 2 — Aspect ratio test:
- 9:16 ad (placement: Reels + Stories)
- 1:1 ad (placement: Feed)
- 4:5 ad (placement: Feed extended)

Variant Set 3 — CTA test:
- "Link na bio" (suave)
- "Reserve agora" (médio)
- "Garante o seu" (direto)

Total ads pra teste inicial: 6-9 variants
Tempo de teste: 7-14 dias
Métrica primária: CPM + CTR
Métrica secundária: conversão (compras)
```

---

## Output: ad-video-[campanha].md

Documento completo com:
- Storyboard 5 cenas
- 3-5 hooks alternativos
- Prompts pra cada cena
- JSON video-prompts
- Brief edição CapCut
- Specs Meta + plano A/B

```
═══════════════════════════════════════
✅ AD VIDEO COMPLETO

PRÓXIMOS PASSOS (ordem):

1. Gera imagens master de cada cena:
   → form-brand-visual-ia-image-generation
   (ou fal-image-gen direto)

2. Anima cada imagem:
   → form-brand-visual-ia-video-generation
   (Kling v3 Pro)

3. Edita timeline:
   → form-brand-visual-ia-edicao-capcut
   Brief completo está documentado

4. Export final + upload Meta

Tempo total estimado: 3-5h pra primeiro ad completo
Variants A/B subsequentes: 1-2h cada
═══════════════════════════════════════
```

---

## Adaptação por modo

### VISUAL-ONLY
- Hooks visuais (sem dependência de texto)
- Menos texto overlay
- Pacing mais slow

### VISUAL+COPY (padrão)
- Estrutura padrão acima

### COPY-HEAVY
- Mais texto overlay em cada cena
- Hooks textuais predominantes
- Audio VO opcional (não só texto)

---

## Armadilhas a evitar

- **Hook fraco.** Primeiros 2s definem se viewer fica. Investe em hook.
- **Sem texto overlay queimado.** 95% silencioso. Sem texto, mensagem perdida.
- **Pacing igual a Reel orgânico.** Ad é mais rápido, mais explicit, mais CTA-driven.
- **CTA implícito.** Ad pago precisa CTA explícito.
- **Reversão de risco ausente.** Cold audience precisa segurança. Garantia importa.

---

## Output esperado

✅ Storyboard 5 cenas
✅ 3-5 hooks alternativos pra A/B
✅ Prompts pra image-generation por cena
✅ JSONs pra video-generation por cena
✅ Brief CapCut completo
✅ Specs Meta + plano A/B
✅ Próximas skills handoff claro
