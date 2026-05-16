---
name: form-brand-visual-ia-platform-adaptation
description: Adapta peça pronta (Reel, post, vídeo) pra múltiplas plataformas com ajustes específicos. Aplica matriz CORE x EXECUTION - 5 elementos permanentes da marca (CORE) x 7 dimensões que variam por plataforma (EXECUTION). Cobre Instagram Reels/Feed/Stories, TikTok, YouTube Shorts, LinkedIn, Pinterest. Output - versões adaptadas + captions por plataforma + ajustes técnicos (aspect ratio, duração, captions). Use após peça pronta. Triggers - "adaptar conteúdo", "multiplataforma", "cross-platform", "postar TikTok e Instagram", "adaptar pra LinkedIn", "formato de cada plataforma", "Reels pra TikTok".
---

# Platform Adaptation — Cross-platform com ajustes

Pega peça pronta (Reel, post) e adapta pra múltiplas plataformas. Cada uma tem regras próprias.

---

## Pre-requisitos

- Peça pronta gerada (video, image, carrossel)
- `brand-guideline-companion.md`

## Próxima skill no workflow

Após adaptações → publicação manual ou agendada.

---

## Matriz CORE × EXECUTION

```
CORE (5 elementos PERMANENTES — NUNCA mudam):
1. Brand Voice (3 adjetivos)
2. Visual identity (paleta, tipografia)
3. Big Idea / mensagem central
4. Photography/Videography Signature
5. Brand Faces (se aplicável)

EXECUTION (7 dimensões VARIÁVEIS por plataforma):
1. Aspect ratio
2. Duração
3. Pacing
4. Density de copy (mais/menos texto)
5. Format (Reel/feed/Story/etc.)
6. Hashtag strategy
7. CTA style
```

---

## Step 1 — Define peça master + plataformas alvo

```
═══════════════════════════════════════
PLATFORM ADAPTATION — Setup
═══════════════════════════════════════

1. Peça master:
   - Tipo: Reel / Post feed / Carrossel / Story série
   - Path: [pasta da peça master]
   - Duração master: [Xs ou N slides]
   - Aspect ratio master: [9:16 / 4:5 / 1:1]

2. Plataformas alvo:
   [ ] Instagram Reels
   [ ] Instagram Feed (post estático OR Reel)
   [ ] Instagram Stories
   [ ] TikTok
   [ ] YouTube Shorts
   [ ] YouTube Long (raro)
   [ ] LinkedIn
   [ ] Pinterest
   [ ] Twitter/X

3. Pra cada plataforma, tem requirement especial?
   ex: "TikTok precisa de trending audio"
```

---

## Step 2 — Ajustes por plataforma

Pra cada plataforma alvo, ajusta 7 dimensões:

### INSTAGRAM REELS

```
Aspect ratio: 9:16 (1080×1920)
Duração ideal: 15-30s
Pacing: slow-medium contemplative
Copy density: minimal (texto overlay)
Format: Reel
Hashtags: 10-15 (anchor + large + medium + small)
CTA: suave ("link na bio")
```

### INSTAGRAM FEED POST (estático)

```
Aspect ratio: 4:5 (1080×1350) OR 1:1 (1080×1080)
Duração: N/A (estático)
Copy density: caption rica (200-300 palavras)
Format: single image OR carousel 4-10 slides
Hashtags: 8-15
CTA: link na bio OR DM
```

### INSTAGRAM FEED (Reel também)

```
Aspect ratio: 9:16 OR 4:5
Duração: 15-30s
Pacing: similar Reels normais
Copy: caption rica
CTA: link na bio
```

### INSTAGRAM STORIES

```
Aspect ratio: 9:16
Duração por Story: 5-15s
Pacing: rápido (5s é tempo limite atenção)
Copy: minimal + sticker interactive (poll/quiz)
Format: 5-7 Stories em série geralmente
Hashtags: 1-3 max
CTA: swipe up (se elegível) OR link sticker
```

### TIKTOK

```
Aspect ratio: 9:16 (1080×1920)
Duração ideal: 21-34s (sweet spot 2026)
Pacing: MAIS DINÂMICO que Reel (cuts mais rápidos)
Copy density: text overlay obrigatório
Format: vídeo
Hashtags: 3-5 (incluindo #fyp)
CTA: "link na bio" OR "comenta"
Trending audio: IMPORTANTE — mata reach se ignorado
Watermark: remove (TikTok penaliza Instagram watermark)
```

### YOUTUBE SHORTS

```
Aspect ratio: 9:16
Duração: até 60s (sweet spot 30-45s)
Pacing: medium (mais educativo que TikTok)
Copy: caption rica (descrição)
Format: vídeo
Title: SEO-friendly OBRIGATÓRIO (palavras-chave + curiosity)
Thumbnail: custom (não usar primeiro frame)
Hashtags: 3-5 + #shorts
CTA: "veja vídeo completo" link na descrição
Cross-link: pra long-form se houver
```

### LINKEDIN

```
Aspect ratio: 16:9 OR 1:1 (mais common)
Duração: 30-90s
Pacing: medium-slow
Copy density: ALTA (LinkedIn premia copy elaborada)
Format: text post OR vídeo OR carrossel
Hashtags: 3-5 profissionais
CTA: "compartilhe sua experiência" OR "link"
Tone: PROFISSIONAL (não casual demais)
```

### PINTEREST

```
Aspect ratio: 2:3 (1080×1620) preferred
Duração: N/A (estático principalmente)
Copy density: minimal sobre imagem
Format: Pin estático OR Pin video (15-60s)
Hashtags: 5-10
CTA: link direto (Pin é clicable)
SEO: keywords no title + description
```

---

## Step 3 — Workflow de adaptação

Pra cada plataforma:

```
WORKFLOW POR PLATAFORMA

INSTAGRAM REELS (master):
1. Peça já pronta — usa direto

INSTAGRAM FEED POST estático (se quer adaptar):
1. Pega 1-3 frames do Reel
2. Compõe estático no Figma (ou já tem)
3. Caption rica (200-300 palavras)
4. Adapta hashtags
5. Publica

TIKTOK:
1. Pega Reel master (9:16)
2. Verifica watermark Instagram (se houver, recorta)
3. Adapta caption mais curta
4. Adiciona TRENDING AUDIO se possível
   - Browse TikTok Sounds top
   - Substitui audio do Reel (se permite brand voice)
5. Hashtags: #fyp + 2-3 relevantes
6. Posta — algoritmo testa 1ª hora

YOUTUBE SHORTS:
1. Reel master 9:16 → upload Shorts
2. Title SEO-friendly:
   "[Keyword principal] | [hook] | [brand]"
   ex: "5 erros skincare matinal | Niacinamida explicada | Aurora"
3. Thumbnail custom (Figma 1080×1920, headline grande)
4. Descrição completa com keywords + links
5. Hashtags: #shorts + 3-4 relevantes
6. Cross-link pra long-form se houver

LINKEDIN:
1. Reel master pode virar:
   - Vídeo direto 16:9 (crop horizontal)
   - OR carrossel slides (mais comum LinkedIn)
2. Caption MUITO mais elaborada (300-500 palavras)
   - Tone profissional
   - Story-driven se possível
   - Insights de aprendizado
3. Hashtags 3-5 profissionais

INSTAGRAM STORIES:
1. Reel master ÷ em 4-7 Stories de 5-7s cada
2. Adiciona stickers (poll, question, countdown)
3. Captions curtas
4. Repost CTA
```

---

## Step 4 — Output: pasta adaptações

```
[marca]/peça-X/adaptacoes/
├── instagram-reels.mp4 (master)
├── instagram-feed-post.png
├── instagram-stories-1-7.mp4 (cada Story)
├── tiktok.mp4 (com trending audio)
├── youtube-shorts.mp4
├── youtube-thumbnail.png (custom)
├── linkedin-carousel-slides/ (10 PNGs)
├── linkedin-caption.md
├── pinterest-pin-2x3.png
└── captions-por-plataforma.md
```

---

## Step 5 — Caption por plataforma

```markdown
# Captions — Peça X em múltiplas plataformas

## Instagram Reels (CORE)
"A ordem do skincare matinal importa mais que os produtos.

Em 5 erros que você comete sem saber.

[hashtags: #aurora #skincare #peleboa #autocuidado 
#skincarematinal #cuidadocomapele #rotina #educacao 
#beleza #saude]"

## TikTok (mais curto)
"Você está aplicando skincare na ordem errada. 
Salva pra rever 🌿

#fyp #skincare #peleboa"

## YouTube Shorts (SEO + descrição)
TITLE: "Skincare matinal: 5 erros que TODO MUNDO comete | Aurora"

DESCRIPTION: "Aprenda a ordem certa do skincare matinal em 30 
segundos. As 5 regras que ninguém te conta..."

#shorts #skincare #aurora #peleboa

## LinkedIn (profissional, elaborado)
"Nos últimos 3 anos, conversei com centenas de mulheres sobre 
skincare. E descobri algo curioso:

A maioria está fazendo certo. Na ordem errada.

A ordem em que você aplica os produtos importa MAIS que 
quais produtos você escolhe.

[continua mais 200 palavras storytelling]

#beleza #consumo #marca #lideranca"

## Pinterest
TITLE: "5 regras do skincare matinal — Guia Aurora"
DESCRIPTION: "Aprenda a ordem certa do skincare matinal. 
Niacinamida, bakuchiol, e os 3 ingredientes essenciais."

#skincare #beauty #morningroutine #cuidadocomapele
```

---

## Step 6 — Schedule publicação

```
═══════════════════════════════════════
ESCALONAMENTO ENTRE PLATAFORMAS
═══════════════════════════════════════

Regra: cada plataforma "primeiro post" gera mais reach.
Evita publicar simultaneamente em todas.

ORDEM RECOMENDADA:

T0: Instagram Reels (primary)
+24h: TikTok (com adaptações trending audio)
+48h: YouTube Shorts (com title SEO + thumbnail)
+72h: LinkedIn (formato carrossel ou long caption)
+1 semana: Pinterest (se relevante)

Stories: dia da publicação ou +1 dia, série complementar
```

---

## Adaptação por modo

### VISUAL-ONLY
- TikTok com trending audio MUITO importante
- Captions ultra-curtas
- LinkedIn pode pular (texto pesado)

### VISUAL+COPY (padrão)
- Todas plataformas funcionam
- Adaptações conforme acima

### COPY-HEAVY
- LinkedIn forte (texto premia)
- Captions elaboradas em todas
- YouTube Shorts com descrição muito rica

---

## Armadilhas a evitar

- **Cross-post idêntico.** Mesma caption em TikTok e LinkedIn = falha em ambas.
- **Watermark Instagram no TikTok.** Algoritmo penaliza.
- **Sem trending audio em TikTok.** Visibility cai.
- **Title YouTube fraco.** SEO mata.
- **Pular escalonamento.** Cada plataforma primeira é better.

---

## Output esperado

✅ Peça adaptada pra N plataformas
✅ Captions específicas por plataforma
✅ Ajustes técnicos aplicados
✅ Cronograma de publicação escalonado
✅ Pronto pra schedule ou publicar
