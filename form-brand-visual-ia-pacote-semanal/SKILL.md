---
name: form-brand-visual-ia-pacote-semanal
description: Wrapper que produz PACOTE SEMANAL completo em 1 sessão (6-10h dedicada) — toda a semana de conteúdo de uma vez. Não dispersa produção por 7 dias. Chama múltiplas skills em sequência (content-pipeline, organico-diario, carrossel-feed, etc.) pra entregar 5-7 peças prontas. Padrão usado por marca que escala. Output - pasta da semana com tudo organizado + dashboard de execução. Use toda segunda-feira ou domingo à noite. Triggers - "pacote da semana", "conteúdo dessa semana", "monta semana inteira", "pacote semanal", "weekly content".
---

# Pacote Semanal — Produz toda a semana de uma vez

Padrão de marca que **escala bem**: produz TODO conteúdo da semana numa única sessão (6-10h), em vez de dispersar produção pelos 7 dias.

Resultado: resto da semana = publicação mecânica + engagement + análise.

---

## Pre-requisitos

- `brand-guideline-companion.md`
- `calendario-editorial-[mês].md` (sabe o que produzir)
- `banco-ideias.md` (puxa ideas quando precisa)
- Skills downstream instaladas

## Próxima skill no workflow

Skill orquestra outras. Após pacote pronto = publicação mecânica.

---

## Step 0 — Read context

```yaml
calendario: [carrega calendario-editorial-mês.md]
banco_ideias: [acesso]
pilares: {educativo: 30, produto: 25, bts: 20, social: 15, lifestyle: 10}
```

---

## Step 1 — Identifica semana target

```
═══════════════════════════════════════
PACOTE SEMANAL — Setup
═══════════════════════════════════════

Semana target: [Semana 1, 6-12 maio]

Peças scheduled (do calendario):
1. Reel #1 — Educativo "Ordem skincare matinal"
2. Stories #1-5 — BTS founder week
3. Carrossel #1 — "5 erros skincare"
4. Post feed #1 — Quote/mood
5. Reel #2 — Produto "Como aplicar Aurora"
6. Stories #6-10 — Educativo + question
7. (sábado livre ou peça extra)

Total: 7 peças

Confirma a lista? Ajusta se precisar.
```

---

## Step 2 — Bloco de produção paralela

```
═══════════════════════════════════════
SESSÃO DE PRODUÇÃO — Plano (6-10h)
═══════════════════════════════════════

BLOCO 1 — SETUP (30 min)
- Revisa calendário
- Pega assets necessários
- Define ordem produção

BLOCO 2 — STORYBOARDS (1-1.5h)
Pra cada peça → form-brand-visual-ia-storyboarding
- 7 storyboards rápidos
- Cada peça tem direção

BLOCO 3 — PROMPTS (45-60 min)
Pra cada peça com visual → form-brand-visual-ia-brand-prompt-generator
- Prompts otimizados de imagem
- JSONs de vídeo se aplicável

BLOCO 4 — GERAÇÃO IMAGES (2-3h)
- Roda fal.ai / Higgsfield em paralelo
- 5 prompts simultaneously
- 30-50 imagens master no total

BLOCO 5 — ANIMAÇÃO KLING (1.5-2h)
- Pra Reels: anima cada frame initial
- 15-25 clipes gerados

BLOCO 6 — EDIÇÃO (2-3h)
- Reels: edicao-capcut por Reel
- Carrosséis: monta no Figma
- Posts feed: design rápido

BLOCO 7 — CAPTIONS + agendamento (45 min)
- Cada peça → caption pronta
- Hashtags por peça
- Agenda no Buffer/Later/Creator Studio

BLOCO 8 — CLEANUP (15 min)
- Organiza pasta da semana
- Backup pra Drive
- Atualiza calendário (status)
- Anota lessons learned
```

---

## Step 3 — Execução com skills orquestradas

```
═══════════════════════════════════════
EXECUÇÃO — Skills em sequência
═══════════════════════════════════════

PRA CADA PEÇA na semana:

PEÇA 1 — Reel #1 "Ordem skincare matinal"
→ form-brand-visual-ia-storyboarding (15 min)
→ form-brand-visual-ia-image-generation (gera frames, 20 min)
→ form-brand-visual-ia-video-generation (anima, 20 min)
→ form-brand-visual-ia-edicao-capcut brief (10 min)
→ Caption + hashtags (5 min)
Total: ~70 min

PEÇA 2 — Stories #1-5 BTS
→ form-brand-visual-ia-organico-diario (briefa série, 15 min)
→ form-brand-visual-ia-fal-image-gen pra cada Story (40 min)
→ Caption por Story (10 min)
Total: ~65 min

PEÇA 3 — Carrossel #1
→ form-brand-visual-ia-carrossel-feed (briefa texto, 20 min)
→ form-brand-visual-ia-fal-image-gen pras imagens (30 min)
→ Figma compõe slides (40 min)
→ Caption (10 min)
Total: ~100 min

PEÇA 4 — Post feed #1
→ Brief simples (10 min)
→ Imagem (10 min)
→ Caption (10 min)
Total: ~30 min

PEÇA 5 — Reel #2 Produto
[similar PEÇA 1]
Total: ~70 min

PEÇA 6 — Stories #6-10
[similar PEÇA 2]
Total: ~65 min

PEÇA 7 — Sábado backup
Pulou OR Quick post
Total: ~30 min

TOTAL SEMANA: ~7h
(8-10h com breaks + iteração)
```

---

## Step 4 — Output: pasta-semana

Estrutura organizada:

```
[marca]/semana-6-12-maio/
├── README.md (índice da semana)
├── 01-reel-ordem-skincare/
│   ├── storyboard.md
│   ├── prompts-images.md
│   ├── prompts-videos.md
│   ├── /assets/
│   │   ├── frame-01.png
│   │   ├── frame-02.png
│   │   ├── ...
│   │   ├── frame-01.mp4 (Kling output)
│   │   ├── ...
│   │   └── reel-final.mp4
│   ├── edit-brief.md
│   └── caption.md
├── 02-stories-bts-founder/
│   ├── briefing.md
│   ├── /assets/
│   └── caption.md
├── 03-carrossel-5-erros/
│   ├── briefing.md
│   ├── /slides/ (10 PNGs)
│   ├── figma-link.md
│   └── caption.md
├── 04-post-quote/
├── 05-reel-aplicar-aurora/
├── 06-stories-educativo/
└── 07-sabado-backup/
```

Cada subpasta = 1 peça com tudo dentro.

---

## Step 5 — Dashboard da semana

```markdown
# Pacote Semanal — Aurora, 6-12 maio 2026

## Status

✅ PEÇA 1 — Reel #1 (pronto)
✅ PEÇA 2 — Stories #1-5 (pronto)
🟡 PEÇA 3 — Carrossel #1 (95% — finalizar slide 6)
✅ PEÇA 4 — Post feed
✅ PEÇA 5 — Reel #2
🟡 PEÇA 6 — Stories #6-10 (esperando 1 prompt rerun)
⚪ PEÇA 7 — Sábado backup (não iniciado)

## Tempo gasto
- Sessão domingo noite: 4h
- Sessão segunda manhã: 3h
- Total: 7h

## Próximos passos
- Finalizar slide 6 do carrossel (15 min)
- Rerun 1 prompt Story (10 min)
- Decisão sábado: backup OR pular
- Schedule peças no Buffer

## Aprendizados desta semana
- Storyboard mais detalhado economiza retrabalho na geração
- Brand Face Core gerou 95% consistent — boom
- Caption #4 demorou demais — pre-build templates
```

---

## Step 6 — Schedule publicação

Após pacote pronto, agenda peças:

```
═══════════════════════════════════════
SCHEDULING — Buffer / Later / Creator Studio
═══════════════════════════════════════

PEÇAS A AGENDAR:

Segunda 6/5 às 9h:
- Reel #1 — Instagram + TikTok

Terça 7/5 ao longo do dia:
- Stories 1-5 (intervalo 2h cada)

Quarta 8/5 às 10h:
- Carrossel #1 — Instagram Feed

Quinta 9/5 às 8h:
- Post feed #1

Sexta 10/5 às 11h:
- Reel #2 — Instagram + TikTok

Sábado 11/5 ao longo do dia:
- Stories 6-10

Domingo 12/5:
- Free day OR repost UGC se aparecer

Tool sugerido:
- Buffer (mais simples)
- Creator Studio (Meta nativo, grátis)
- Later (visual planner)

Setup time: 30 min
```

---

## Adaptação por modo

### VISUAL-ONLY
- Menos peças carregadas em texto
- Mais Reels visuais + Stories
- Tempo total menor (4-6h)

### VISUAL+COPY (padrão)
- 6-10h padrão

### COPY-HEAVY
- Carrosséis educativos longos demoram mais
- Newsletters semanais incluídas
- Total: 10-15h por semana

---

## Sustentabilidade — não burn

```
ESTRATÉGIAS ANTI-BURNOUT:

1. Sessão única (não dispersa)
   - Concentra produção em domingo OR segunda
   - Resto da semana = engagement + análise

2. Breaks programados
   - 90 min de produção / 10 min break
   - Mente fresca produz melhor

3. Música/ambiente certo
   - Música instrumental
   - Local quieto

4. Pre-week prep
   - Calendário + banco ideias prontos
   - Brand Assets atualizados
   - Não improvisa setup

5. Recompensa pós-sessão
   - Comida boa
   - Lazer
   - Cérebro associa esforço com prêmio
```

---

## Armadilhas a evitar

- **Tentar 1 dia.** 14h seguidas = burnout. Quebra em 2 dias.
- **Sem pre-week prep.** Improvisar setup quebra fluxo.
- **Sem batching.** Alternar tarefas cansa. Batch similares.
- **Não monitorar tempo.** Sai do controle.
- **Não documentar lessons.** Próxima semana repete erros.

---

## Output esperado

✅ Pasta da semana com todas peças prontas (7 peças)
✅ Dashboard de status
✅ Peças scheduled (Buffer/Creator Studio)
✅ Tempo total documentado
✅ Lessons learned anotadas
