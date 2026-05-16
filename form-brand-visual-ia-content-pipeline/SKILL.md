---
name: form-brand-visual-ia-content-pipeline
description: Orquestrador master que coordena processo completo de criação de conteúdo em 5 fases - concept, creative-direction, storyboarding, image-generation, video-generation. Não faz o trabalho diretamente — chama 5 sub-skills em sequência, gerencia documento master project-brief.md e handles approval gates entre fases. Lê brand-guideline-companion.md pra puxar Brand Voice, Photography Signature, paleta automaticamente. Use SEMPRE quando usuário quiser rodar full content creation pipeline de brief a finished visuals/video. Triggers - "create content for", "run the pipeline", "content pipeline", "I have a brief", "create a campaign", "produce visuals for", "make an ad from scratch", "I need content for a launch", "full production", "rodar pipeline completo", ou variações de querer ir de ideia a imagens/vídeo finalizados. Use mesmo se usuário só disse "make something for my brand" ou descreveu campanha sem nomear pipeline.
---

# Content Pipeline — Orquestrador master

Esta é a wrapper skill que coordena o processo completo de criação de conteúdo. Ela não faz o trabalho diretamente. Chama 5 sub-skills em sequência, gerencia o master document, e handles approval gates entre fases.

Esta é a skill clonada do Brand AI Claude Course (`content-pipeline`), refinada pra integrar com o sistema `form-brand-visual-ia` (lê companion.md, usa Photography Signature, etc.).

O pipeline split entre dois ambientes:

- **Cowork** (Claude Desktop) handles Phases 1-3 (Concept, Creative Direction, Storyboarding) — fases de planejamento text-based que não precisam CLI tools.
- **Claude Code** handles Phases 4-5 (Image Generation, Video Generation) — fases que precisam fal.ai MCP tools, bash pra CDN uploads, e file system access pra salvar assets.

Após Phase 3 aprovada, orchestrator gera handoff package pra usuário seamlessly continuar em Claude Code. Após Claude Code finish, project folder contém tudo pra voltar pro Cowork pra review.

---

## Pre-requisitos

- `brand-guideline-companion.md` da marca (altamente recomendado)
- `FAL_KEY` configurada (pra Phase 4 e 5)
- Figma MCP conectado (se Phase 3 vai usar storyboard visual)

## Próximas skills no workflow

Esta skill é o **wrapper master**. Ela mesma chama em sequência:
1. `form-brand-visual-ia-concept`
2. `form-brand-visual-ia-creative-direction`
3. `form-brand-visual-ia-storyboarding`
4. `form-brand-visual-ia-image-generation`
5. `form-brand-visual-ia-video-generation`

---

## As 5 sub-skills

1. **concept** — define core idea, goal, message
2. **creative-direction** — set visual style, tone, mood, references
3. **storyboarding** — map out every frame com visuals, actions, copy
4. **image-generation** — write optimized prompts e gera images via fal.ai
5. **video-generation** — turn generated images em video clips via fal.ai

Cada sub-skill vive em sua própria pasta e tem seu próprio SKILL.md. Leia o relevante antes de executar cada phase.

---

## Como o orchestrator funciona

### Step 0 — Read brand context

Antes de qualquer phase, lê `brand-guideline-companion.md`:

- **Brand name + setor**
- **Mode** (visual-only / v+c / copy-heavy)
- **Brand Voice** (pra usar nas copies das fases)
- **Photography Signature** (pra Phase 4)
- **Videography Signature** (pra Phase 5)
- **Brand Faces URLs** (se houver pessoa no conteúdo)
- **Color palette**

Se companion.md não existe, avisa usuário:

```
⚠️ brand-guideline-companion.md não encontrado.

Você pode:
A) Rodar primeiro form-brand-visual-ia-brand-readiness + 
   form-brand-visual-ia-brand-guideline-builder pra criar o companion
B) Continuar sem companion (pipeline vai pedir mais info manualmente)

Recomendo A. Companion economiza muito tempo nas próximas fases.
```

### Step 1 — Set up project

1. Lê o brief ou description do usuário
2. Cria project folder com nome descritivo em kebab-case (ex: `summer-launch-campaign/`) no workspace do usuário
3. Cria `project-brief.md` dentro com header:

```markdown
# [Project Name]
Created: [date]
Brand: [brand name from companion.md]
Mode: [brand mode]

---

## Original brief from user

[Texto exato do pedido]

---

## Phase 1 — Concept
(em progresso...)

---

## Phase 2 — Creative Direction
(aguardando Phase 1)

---

## Phase 3 — Storyboarding
(aguardando Phase 2)

---

## Phase 4 — Image Generation
(aguardando Phase 3)

---

## Phase 5 — Video Generation
(aguardando Phase 4)
```

Master document fica atualizado por cada sub-skill.

### Step 2 — Phase 1: Concept (Cowork)

Invoca `form-brand-visual-ia-concept`. Output dela vai pra section "Phase 1" do master document.

**Approval gate:** apresenta concept ao usuário, pergunta:

```
═══════════════════════════════════════
PHASE 1 — CONCEPT (concluída)
═══════════════════════════════════════

[Resumo do concept]

Aprova pra seguir pra Phase 2 (Creative Direction)?
- Sim, seguir
- Não, ajustar [explica o que]
- Quero parar aqui
```

Só prossegue após aprovação.

### Step 3 — Phase 2: Creative Direction (Cowork)

Invoca `form-brand-visual-ia-creative-direction`. Lê Phase 1 + companion.md.

**Approval gate.**

### Step 4 — Phase 3: Storyboarding (Cowork)

Invoca `form-brand-visual-ia-storyboarding`. Lê Phase 1 + 2 + companion.md.

**Approval gate.**

Após aprovado, gera **handoff package** pra Claude Code:

```
═══════════════════════════════════════
PHASE 3 APROVADA — HANDOFF PRO CLAUDE CODE

Pra continuar Phases 4 e 5 (Image + Video Generation):

1. Abra Claude Code (terminal)
2. Navegue até: [project folder path]
3. Comando: claude
4. Diga: "Continuar pipeline. Read project-brief.md and run Phase 4."

Project folder está pronto:
[lista arquivos no project folder]

Quando Phase 4 e 5 terminarem, volte pro Cowork pra review final.
═══════════════════════════════════════
```

### Step 5 — Phase 4: Image Generation (Claude Code)

Em Claude Code:
- Lê project-brief.md
- Invoca `form-brand-visual-ia-image-generation`
- Pra cada frame do storyboard, gera prompt otimizado
- Roda via fal.ai (Nano Banana 2)
- Salva PNGs no project folder
- Atualiza Phase 4 section do master doc

**Approval gate.**

### Step 6 — Phase 5: Video Generation (Claude Code, condicional)

Só roda se concept indicou deliverable = video (ou both).

- Lê project-brief.md (Phase 3 + 4)
- Invoca `form-brand-visual-ia-video-generation`
- Pra cada frame, upload PNG → CDN → roda Kling v3 Pro
- Salva MP4s
- Atualiza Phase 5 section

### Step 7 — Final review (Cowork)

Volta pro Cowork. Apresenta:

```
═══════════════════════════════════════
✅ PIPELINE COMPLETO

Projeto: [nome]
Marca: [brand]

Outputs:
- Phase 1: Concept ✓
- Phase 2: Creative Direction ✓
- Phase 3: Storyboard ✓
- Phase 4: [N] imagens geradas em [folder]
- Phase 5: [N] vídeos gerados em [folder]

Total tempo: [X min]

Project folder: [path absoluto]

Próximos passos sugeridos:
1. Edição final em CapCut / DaVinci
   → form-brand-visual-ia-edicao-capcut
   
2. Adaptação cross-platform
   → form-brand-visual-ia-platform-adaptation
   
3. Adicionar voiceover
   → form-brand-visual-ia-voiceover
═══════════════════════════════════════
```

---

## Estrutura final do project folder

Após pipeline completo:

```
summer-launch-campaign/
├── project-brief.md       # master document com todas as fases
├── images/                # outputs Phase 4
│   ├── frame-01-hero-shot.png
│   ├── frame-02-product-detail.png
│   ├── ...
│   └── frame-N-cta.png
├── videos/                # outputs Phase 5
│   ├── frame-01-hero-shot.mp4
│   ├── frame-02-product-detail.mp4
│   ├── ...
│   └── frame-N-cta.mp4
└── prompts.md             # all prompts used (pra reproducibility)
```

---

## Approval gates — comportamento

Entre cada phase, **sempre** apresenta resumo + pede aprovação. Razões:

1. **Custo de erro acumula.** Phase 4 errada gasta tokens fal.ai. Melhor parar em Phase 3 que descobrir em Phase 5.
2. **Iteração é normal.** Phase 1 pode precisar 2-3 rounds antes de aprovado.
3. **Usuário controla.** Não roda em autopilot — usuário deve estar engajado.

Approval gate format:

```
═══════════════════════════════════════
PHASE [N] — [Nome] (concluída)
═══════════════════════════════════════

[Sumário do output]

Aprovado?
- ✓ Sim, seguir pra Phase [N+1]
- ✗ Não, ajustar: [explica especificamente]
- ⏸ Pausar aqui (volto depois)
```

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Phase 1 (Concept) mais curta — pula seção de "messaging"
- Phase 2 (Creative Direction) mais robusta — visual é tudo
- Phase 3 (Storyboard) sem texto overlay obrigatório
- Phase 4 + 5 com Photography/Videography Signature aplicadas pesado

### VISUAL+COPY

Padrão. Todas as 5 fases balanceadas.

### COPY-HEAVY

- Phase 1 mais robusta (messaging detalhado)
- Phase 3 com texto overlay obrigatório em cada frame
- Phases 4 + 5 ainda usam visuals, mas com headline space reservado

---

## Cenários típicos

### Cenário A — Ad simples 1 imagem

User: "Ad pra Aurora Sérum, formato 1:1, post Instagram"

Pipeline:
- Phase 1 — Concept: define target, CTA, plataforma
- Phase 2 — Creative Direction: aplica brand visual
- Phase 3 — Storyboard: 1 frame
- Phase 4 — Gera 1 imagem (talvez 3 variations)
- Phase 5 — SKIP (deliverable = static)

Tempo: 30-45 min.

### Cenário B — Reel completo

User: "Reel de 15s pra lançamento Aurora"

Pipeline:
- Phase 1 — Concept: video, 15s, Reel platform
- Phase 2 — Creative direction: visual + pacing + mood
- Phase 3 — Storyboard: 5-6 frames
- Phase 4 — Gera 5-6 imagens master
- Phase 5 — Anima cada em vídeo clip (Kling)

Tempo: 1.5-2h.

### Cenário C — Carrossel 8 slides

User: "Carrossel educativo Aurora 8 slides"

Pipeline:
- Phase 1 — Concept: educational, 8 slides
- Phase 2 — Creative direction
- Phase 3 — Storyboard 8 frames
- Phase 4 — Gera 8 imagens
- Phase 5 — SKIP (static carrossel)

Tempo: 1-1.5h.

---

## Tratamento de erros

### Erro em Phase X

Se sub-skill falha:

```
⚠️ Phase [X] encontrou erro:
[descrição do erro]

Opções:
A) Re-tentar com ajuste
B) Pular phase (não recomendado)
C) Pausar projeto e investigar
```

### fal.ai sem FAL_KEY

```
⚠️ FAL_KEY não configurada no environment.

Pra Phase 4 e 5, configure:
export FAL_KEY="your-key-here"

Por enquanto, completo Phases 1-3 em Cowork. 
Você roda Phases 4-5 em Claude Code depois.
```

### companion.md vazio

```
⚠️ brand-guideline-companion.md sem Photography Signature.

Pipeline vai usar defaults genéricos pra geração.
Resultado pode não ficar 100% on-brand.

Recomendo rodar primeiro:
form-brand-visual-ia-photography-signature
form-brand-visual-ia-brand-guideline-builder

Continuar mesmo assim?
```

---

## Quando NÃO usar Content Pipeline

- **Peça única simples** sem narrativa → usa `form-brand-visual-ia-fal-image-gen` direto
- **Ad replica template existente** → usa `form-brand-visual-ia-brand-ad-replicator`
- **Localização** → usa `form-brand-visual-ia-figma-localize`
- **Pacote semanal de várias peças** → usa `form-brand-visual-ia-pacote-semanal`

Content Pipeline é pra **conteúdo único de qualidade** com fases bem feitas.

---

## Armadilhas a evitar

- **Não pular approval gates.** Roda em autopilot quebra qualidade.
- **Não pular Phase 2 (Creative Direction).** Phase 4 depende disso.
- **Não esquecer companion.md.** Sem ele, output genérico.
- **Não rodar Phase 5 se concept é static.** Verifica deliverable type.
- **Não esquecer handoff Cowork → Claude Code.** Phase 4 e 5 precisam Claude Code.

---

## Output esperado

✅ Project folder organizada com todos outputs
✅ project-brief.md completo (master doc)
✅ Imagens em /images/
✅ Vídeos em /videos/ (se aplicável)
✅ Approval em cada phase passou
✅ Próximos passos claros (edição, publicação, etc.)
