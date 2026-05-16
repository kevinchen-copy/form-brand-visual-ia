---
name: form-brand-visual-ia-voiceover
description: Gera script + voice settings pra voiceover via ElevenLabs OU instrui gravação humana. Lê voice-tone + videography-signature pra alinhar qualidade da voz com Brand Voice. Sound design em camadas (música + ambient + foley + VO). Output - script formatado + ElevenLabs settings + brief pra editor + alternativa human voice actress. SKILL OPCIONAL no modo VISUAL-ONLY. Use depois de video-generation ou em ad-video. Triggers - "voiceover", "narração", "voz AI", "locução", "ElevenLabs", "narrar vídeo", "script de narração", "adicionar voz".
---

# Voiceover — Geração de VO + Sound Design

Gera voiceover via ElevenLabs OR instrui gravação humana. Voice settings alinhadas com Brand Voice.

---

## Pre-requisitos

- `brand-guideline-companion.md` (voice + videography_signature)
- ElevenLabs account (se IA) OR voice actress disponível
- Script ou conteúdo a narrar

## Próxima skill no workflow

Após VO gerada → `form-brand-visual-ia-edicao-capcut` OR `edicao-davinci`

---

## Step 0 — Read context

```yaml
voice_permanent: ["Calma", "Honesta", "Natural"]
videography_signature:
  audio:
    voiceover_quality: "warm intimate female 35-45"
    voiceover_tool: "ElevenLabs OR voice actress"
mode: "visual-copy"
```

---

## Step 1 — Define caminho VO

```
═══════════════════════════════════════
VOICEOVER — Caminho
═══════════════════════════════════════

A) ELEVENLABS IA (rápido + barato)
   Custo: $5-22/mês conforme plano
   Tempo: 5 min pra gerar
   Qualidade: muito boa (95% indistinguível de humano)
   Best for: rascunhos, A/B testing, volume

B) VOICE ACTRESS HUMANA (premium)
   Custo: R$ 300-1500 por projeto
   Tempo: 3-7 dias (casting + recording + edit)
   Qualidade: máxima autenticidade
   Best for: brand films âncora, projetos premium

C) FOUNDER FALA (pessoal autêntico)
   Custo: zero (você grava)
   Tempo: 1-2h (gravação + edição)
   Qualidade: depende do mic + ambiente
   Best for: brand storytelling, conexão emocional

Qual caminho?
```

---

## Step 2A — Caminho ElevenLabs

### Setup

```
═══════════════════════════════════════
ELEVENLABS — Setup voz da marca
═══════════════════════════════════════

1. Acessa elevenlabs.io
2. Cria conta (ou login)
3. Plan recomendado:
   - Starter ($5/mês): 30 min/mês — pra testes
   - Creator ($22/mês): 100 min/mês — pra rotina

4. Voice selection:

OPTION A — Pre-made voice library
   - Browse vozes "Premade" do ElevenLabs
   - Filtra: female, 35-45 age range, warm/calm
   - Sugestões pra Aurora:
     - "Bella" — warm, intimate
     - "Charlotte" — calm, sophisticated
     - "Grace" — natural, conversational
   - Test cada uma com sample text
   - Escolhe voz que best matches Voice Brand

OPTION B — Voice cloning (premium)
   - $22/mês plan tem voice cloning
   - Grava 1-2 min de audio sample (qualquer voz)
   - ElevenLabs clona
   - Use clone em todas gerações
   - Best for: marca quer voz única, não usável por outros

OPTION C — Voice design (text-based)
   - Plus plans
   - Descreve voz desejada em texto
   - ElevenLabs gera

Pra Aurora, recomendo OPTION A — Premade "Charlotte" (matches voice calm/sophisticated).

Escolheu qual?
```

### Geração

```
═══════════════════════════════════════
SCRIPT PRO ELEVENLABS
═══════════════════════════════════════

Script (~100 palavras = ~30s):

"Aurora começou em 2023, na minha cozinha.

Eu estava na fila da farmácia com quatro frascos diferentes 
na mão. Cada um prometendo um milagre diferente.

E eu pensei: minha filha não vai estar nessa fila.

Aurora é cinco ingredientes. Em um frasco.

Niacinamida. Bakuchiol. Hialurônico. Vitamina E. Pantenol.

Trinta dias até diferença visível. Sessenta até todo mundo notar.

Não é milagre. É honestidade.

Pré-venda no link da bio."

VOICE SETTINGS (ElevenLabs):
- Voice: Charlotte (OR escolhida)
- Stability: 0.45 (médio — natural expression)
- Clarity + Similarity Enhancement: 0.65
- Style exaggeration: 0.20 (baixo — calm voice)
- Speaker boost: ON

Pra gerar:
1. Cola script no ElevenLabs
2. Aplica settings
3. Generate
4. Listen — pode regenerar se quiser variação
5. Download como WAV 48kHz
```

---

## Step 2B — Caminho Voice Actress

### Brief pra voice actress

```
═══════════════════════════════════════
BRIEF PARA VOICE ACTRESS
═══════════════════════════════════════

PROJETO: [Marca] — [tipo de vídeo]
DURAÇÃO: ~30 segundos
ENTREGA: WAV stereo 48kHz, sem edição (raw)

BRAND VOICE:
"3 adjetivos permanentes: CALMA, HONESTA, NATURAL"

VOICE QUALITY DESIRED:
- Feminina, 35-45 anos
- Tom: warm intimate (íntimo caloroso)
- Pace: lento, deliberado (~140 palavras/minuto)
- Pitch: medium-low
- Emoção dominante: contemplative, confident, peaceful
- Sotaque: neutro brasileiro (sem regional carregado)

REFERENCES:
- "Voz de meditação guided" (intimacy)
- "Documentário Netflix narration" (authority sem ostentação)
- "Conversa de amiga ao telefone" (closeness)

SCRIPT:
[cola script]

NOTAS PARA INTERPRETAÇÃO:
- Linha "minha filha não vai estar nessa fila": emoção genuína, não dramática
- Pausa longa antes de "Aurora é cinco ingredientes"
- Encerra "pré-venda no link da bio" suave, convite (não pushy)

LOCAL/SETUP:
- Profissional studio OR home studio com tratamento acústico
- Mic preferred: Neumann TLM 102, AT4040, ou similar
- Pop filter obrigatório
- Ambiente silencioso

BUDGET RANGE:
- R$ 500-1500 conforme experiência

CANDIDATOS POTENCIAIS:
- Plataforma Voicebrew (Brasil)
- Voices.com
- Indicações de community
```

---

## Step 2C — Caminho Founder

### Setup gravação

```
═══════════════════════════════════════
FOUNDER GRAVA — Setup
═══════════════════════════════════════

EQUIPAMENTO MÍNIMO:
- Mic USB decente: Blue Yeti ($130), Audio-Technica AT2020 USB ($150)
- Pop filter (R$ 20-50)
- Ambiente silencioso (closet com roupas é truque clássico)

EQUIPAMENTO IDEAL:
- Mic condensador: Audio-Technica AT2020 XLR ($120) + audio interface
- Acoustic treatment (panéis foam)

SETUP DE GRAVAÇÃO:
- 6 polegadas (15cm) do mic
- Pop filter entre boca e mic
- Sentada, postura confortável
- Hidratada (água por perto)
- Ambiente sem eco (closet, room com tapetes/cortinas)

GRAVAÇÃO:
- Software: Audacity (free) OR GarageBand (Mac)
- Sample rate: 48 kHz
- Bit depth: 24-bit (best quality)
- Gravar várias takes
- Reler script pelo menos 2x antes
- Não tenta perfeição — naturalismo > flawless

EDIÇÃO:
- Remove pauses awkward longas
- Remove respirações pesadas
- Normaliza volume
- Light noise reduction se necessário
- Compressor leve (2:1 ratio)
- EQ: HPF 100Hz + slight presence boost 3kHz
- Export WAV 48kHz 16-bit
```

---

## Step 3 — Sound Design — stack camadas

Independente de qual caminho (A, B, C), VO entra em **stack de áudio**:

```
═══════════════════════════════════════
SOUND DESIGN — Stack de áudio
═══════════════════════════════════════

CAMADA 1 — MÚSICA (background)
Style: minimal acoustic (Videography Signature)
Volume: -15 dB
Timing: começa 1-2s antes do VO, sustenta, fadeout 1s após VO

CAMADA 2 — VOICEOVER
Volume: 0 dB (referência)
EQ: HPF 100Hz, presence boost 3-5kHz
Compression: 2:1 ratio
De-esser: aplicar

CAMADA 3 — FOLEY (sons de ação)
Quando VO menciona "fila da farmácia" — subtle ambient sound
Quando "minha cozinha" — soft kitchen tone (3-4s)
Volume: -18 dB

CAMADA 4 — AMBIENT
Subtle room tone constant
Volume: -25 dB

MASTER:
Limiter no master bus
Loudness target: -16 LUFS (Instagram/Meta standard)
True peak: -1 dB

EXPORT:
WAV 48kHz 16-bit stereo (master)
MP3 320 kbps (delivery)
```

---

## Step 4 — Output: voiceover-[projeto].md

```markdown
# Voiceover — Aurora Brand Film 2026

## Caminho: ElevenLabs (Charlotte voice)

## Script (final approved):
[script]

## Voice settings:
- Stability: 0.45
- Clarity: 0.65
- Style: 0.20

## Output file:
- Path: [marca]/audio/aurora-brand-film-vo-charlotte.wav
- Duration: 28s
- Format: WAV 48kHz 16-bit

## Sound design notes (pra editor):
[stack 4 camadas]

## Edição:
- EQ aplicada
- Compression 2:1
- De-esser ON
- Pronto pra import em CapCut/DaVinci timeline

## Próximo passo:
→ form-brand-visual-ia-edicao-capcut OR davinci
   (importar VO no project + mix com vídeo)
```

---

## Adaptação por modo

### VISUAL-ONLY
- Skill geralmente pula
- Se rodar: VO ultra-curto (5-10s) com 2-3 frases

### VISUAL+COPY (padrão)
- VO completo padrão

### COPY-HEAVY
- VO essencial em quase todas as peças
- Scripts mais elaborados
- Múltiplas voices podendo ser exploradas

---

## Armadilhas a evitar

- **Voice errada pro tom da marca.** ElevenLabs Bella não casa com brand sério/edu. Aurora vai bem com Charlotte/Grace.
- **VO muito longa.** 30s é teto pra Reels. Pra brand film 60s, max 45s VO.
- **Sem sound design.** VO sem stack = isolada, parece amador.
- **Loudness fora target.** Resampling broken.
- **Não testar voz antes.** Gera 30s, ouve, ajusta antes de aprovar.

---

## Output esperado

✅ Script aprovado
✅ Voice settings ElevenLabs OR brief actress OR setup founder
✅ Audio file gerado e pronto pra timeline
✅ Sound design stack documentada
✅ Próxima skill handoff (edição)
