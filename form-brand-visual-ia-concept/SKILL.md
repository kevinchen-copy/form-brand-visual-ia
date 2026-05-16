---
name: form-brand-visual-ia-concept
description: Phase 1 do content-pipeline. Define core idea, goal e message por trás de uma peça de conteúdo. Lê brand-guideline-companion.md pra puxar contexto da marca automaticamente. Output - section "Phase 1 — Concept" do project-brief.md com 5 elementos definidos (produto/audiência/goal/plataforma/CTA). Use SEMPRE como Phase 1 do content-pipeline OU standalone quando usuário disser "I need a concept for", "help me define the idea", "what should this campaign be about", "brief me on", "preciso definir conceito de", ou variações de querer firmar a base antes de criar visual. Também acione quando usuário der ideia solta e precisar virar conceito criativo apropriado.
---

# Concept — Phase 1

Aqui todo projeto começa. Seu trabalho é pegar o que o usuário deu — seja brief polido ou ideia meia-formada — e transformar em concept claro e acionável que o resto do pipeline pode construir em cima.

Bom concept responde: **o que estamos fazendo, pra quem é, por que importa, e o que o viewer deve fazer depois de ver**.

Esta é a skill clonada do Brand AI Claude Course (`concept`), refinada pra ler `brand-guideline-companion.md` e usar Brand Mode.

---

## Pre-requisitos

- Pedido do usuário (brief, descrição, ou ideia solta)
- `brand-guideline-companion.md` (recomendado)
- `project-brief.md` criado pelo orchestrator (ou cria-se aqui se standalone)

## Próxima skill no workflow

`form-brand-visual-ia-creative-direction` (Phase 2)

---

## Step 0 — Read brand context

Lê `brand-guideline-companion.md`:
- Brand name, setor, produto
- Brand mode
- Target audience descrita lá (se houver)
- Pilares de conteúdo
- Brand voice

Se companion.md disponível, NÃO faça perguntas que já estão respondidas lá.

---

## Approach

### Step 1 — Understand the brief

Read what user gave you. Then fill gaps asking about anything missing or unclear.

**About the content:**
- What is the product, service, ou topic?
- Who is the target audience? (companion.md pode ter)
- What is the goal? (awareness, conversion, engagement, education, launch, promotion)
- What platform? (Instagram, TikTok, YouTube, website, paid ads)
- Specific CTA?

**About the deliverable:**
- What should final output be?
  - Static images only (social post, ad creative, carousel)
  - Video only (reel, video ad, product demo)
  - Both static + video

**Pula perguntas que companion.md já responde.**

### Step 2 — Campaign context

Ask se conteúdo encaixa em campanha existente ou é peça standalone.

Importa porque: campaign content precisa ser visualmente + tonalmente consistente com o que já existe.

**Perguntas:**
- "Esta é parte de uma campanha existente, ou peça standalone?"
- Se campanha existente: "Pode me apontar exemplos do que já foi criado, ou descrever direção visual + messaging da campanha até agora?"
- Se standalone: segue.

### Step 3 — Existing assets

Ask sobre assets visuais que usuário quer incorporar. Importa porque determina se image generation usa text-to-image (do zero) ou image-to-image (com photos de referência).

**Products:**
- "Vamos featuring products existentes?"
- Se sim: "Onde estão as product images?" (file path, folder, ou URL)
- Se não: nota que visuais serão fully generated

**Models / pessoas:**
- "Pessoa(s) específica(s) deve aparecer?" (Brand Face Core do companion.md?)
- Se sim, puxa URL da Brand Face Core
- Se não, define gênero/idade desejado ou aceita default da marca

**Brand assets:**
- "Tem logo, brand fonts, ou identity assets pra incluir nas peças finais?"
- Companion.md geralmente cobre

### Step 4 — Sintetiza concept

Escreve concept claro em 4-6 parágrafos:

```markdown
## Phase 1 — Concept

### What we're making
[Descrição clara da peça final: tipo, formato, propósito]

### For whom
[Audience específica — não "todo mundo"]

### Why it matters
[Por que essa peça importa pra essa audience agora]

### The call to action
[O que viewer deve fazer depois de ver]

### Deliverable type
[Static / Video / Both — informa Phase 5]

### Platform + dimensions
[Instagram Reels / Feed / Stories / TikTok / YouTube / etc.]
[Aspect ratio: 9:16 / 1:1 / 4:5 / 16:9]

### Campaign context
[Standalone OR parte de campanha X]

### Existing assets to incorporate
[Lista: product photos, Brand Face URL, logos, etc.]
```

### Step 5 — Approval gate

Apresenta concept ao usuário:

```
═══════════════════════════════════════
PHASE 1 — CONCEPT (rascunho)
═══════════════════════════════════════

[Concept escrito]

Aprovado?
- ✓ Sim, seguir pra Phase 2 (Creative Direction)
- ✗ Ajustar: [especifica o quê]
```

Só prossegue após "Sim".

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Concept focado em **visual outcome** + sentimento
- Menos peso em copy e messaging
- "Call to action" pode ser visual (não-textual)

### VISUAL+COPY (padrão)
- Concept balanceado entre visual + texto
- CTA texto + visual

### COPY-HEAVY
- Concept enfatiza messaging
- CTA texto destacado
- Considerar series (não peça única) se complexo

---

## Exemplos

### Exemplo A — Concept simples

**User brief:** "Quero post pro lançamento do meu sérum facial novo"

**Skill faz:**
1. Lê companion.md → Aurora, modo V+C, audience 35-45, etc.
2. Pergunta gaps: platform? aspect ratio? CTA específico? quando lançamento?
3. Escreve concept:

```
## Phase 1 — Concept

### What we're making
Post de feed Instagram (single image 4:5) anunciando 
lançamento do Aurora Sérum, com foco sensorial 
(primeira gota como ritual).

### For whom
Mulheres 35-45 da Aurora audience que já seguem a marca 
mas ainda não conhecem o sérum.

### Why it matters
Lançamento de produto-âncora da marca, primeiro produto 
real. Audience aguarda há semanas.

### The call to action
"Pré-venda disponível — link na bio"

### Deliverable type
Static — 1 imagem hero shot

### Platform + dimensions
Instagram Feed, 4:5 (1080×1350)

### Campaign context
Standalone (mas faz parte de lançamento maior)

### Existing assets
- Aurora sérum bottle (gerar via fal.ai com Photography Signature)
- Brand Face Core opcional (pode ou não aparecer)
- Logo Aurora
```

### Exemplo B — Concept video

**User brief:** "Reel de 15s pra falar dos ingredientes"

**Skill:** similar mas deliverable = video, platform = Reels, aspect 9:16.

---

## Armadilhas a evitar

- Não pula leitura do companion.md
- Não pergunta coisas óbvias do companion.md
- Não aprova concept sem confirmação do usuário
- Não passa pra Phase 2 com concept vago
- Não confunde "deliverable" com "platform" — Reels é platform, vídeo é deliverable

---

## Output esperado

✅ Section "Phase 1 — Concept" preenchida no project-brief.md
✅ Approval do usuário
✅ Pronto pra Phase 2 (Creative Direction)
