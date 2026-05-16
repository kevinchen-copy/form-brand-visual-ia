# Workflow Visual End-to-End

> Como as 48 skills se conectam. Diagrama de fluxo do começo ao fim de uma marca.

---

## Visão macro

```
                  ┌─────────────────────────┐
                  │  Marca nova chegando    │
                  └──────────┬──────────────┘
                             │
                             ▼
                  ┌─────────────────────────┐
                  │  brand-readiness        │ ← Onda 1
                  │  (entrada + diagnostic) │
                  └──────────┬──────────────┘
                             │
                             ▼
            ┌────────────────┴───────────────┐
            ▼                                 ▼
    ┌────────────┐                    ┌─────────────────┐
    │ Brand foundation │              │ Setup técnico   │
    │ (Onda 2)         │              │ (Onda 2)        │
    └────────┬─────────┘              └────────┬────────┘
             │                                  │
             ▼                                  ▼
    audience-research                    figma-setup
    market-mapping                       (paralelo)
    product-research
             │
             ▼
    Tese da marca (Onda 2):
    big-idea
    positioning
    tribe-enemy
             │
             ▼
    Identidade visual (Onda 2 + 3):
    moodboard → logo-system → typography → color-palette
    → brand-faces → voice-tone → photography-signature
    → videography-signature → motion-design
             │
             ▼
    ┌──────────────────────────────────────┐
    │  brand-guideline-builder ⭐ (Onda 3) │
    │  Gera 3 ativos sincronizados:        │
    │  1. Página Figma "Brand Guidelines"  │
    │  2. brand-guideline-companion.md     │
    │  3. brand-guideline.pdf              │
    └──────────────────┬───────────────────┘
                       │
                       ▼
    ╔═══════════════════════════════════════╗
    ║ PRODUÇÃO RECORRENTE (Onda 1 + 3)      ║
    ╠═══════════════════════════════════════╣
    ║                                       ║
    ║  Por peça única — Content Pipeline:   ║
    ║                                       ║
    ║    concept → creative-direction       ║
    ║    → storyboarding → image-generation ║
    ║    → video-generation                 ║
    ║                                       ║
    ║  Por canal específico (Onda 3):       ║
    ║    organico-diario                    ║
    ║    carrossel-feed                     ║
    ║    static-ads                         ║
    ║    ad-video                           ║
    ║    email-flows                        ║
    ║                                       ║
    ║  Suporte (Onda 1):                    ║
    ║    fal-image-gen                      ║
    ║    figma-ad-builder                   ║
    ║    brand-ad-replicator                ║
    ║    figma-localize                     ║
    ║    prompt-rewriter                    ║
    ║                                       ║
    ║  Edição (Onda 3 + 4):                 ║
    ║    edicao-capcut                      ║
    ║    edicao-davinci                     ║
    ║    voiceover                          ║
    ║    rapid-prototyping                  ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
                       │
                       ▼
    ┌──────────────────────────────────────┐
    │  Sistema operacional (Onda 4)        │
    │  calendario-editorial                 │
    │  banco-ideias                         │
    │  pacote-semanal                       │
    │  campaign-launcher                    │
    │  platform-adaptation                  │
    │  monthly-orchestrator                 │
    └──────────────────┬───────────────────┘
                       │
                       ▼
    ┌──────────────────────────────────────┐
    │  Manutenção (Onda 4)                 │
    │  system-audit (trimestral)            │
    │  troubleshooting (sob demanda)        │
    └──────────────────────────────────────┘

           META (Onda 4):
           maestro (orquestrador geral)
           skill-architect (cria skills custom)
```

---

## Fluxo da marca nova (3-5 dias até produzir primeira peça)

```
DIA 1 — Diagnóstico + Briefing
├── form-brand-visual-ia-brand-readiness (1-2h)
│   ↓
│   Output: CLAUDE.md + diagnostico-readiness.md
│   Decisão de modo (visual-only / v+c / copy-heavy)

DIA 2 — Pesquisas
├── form-brand-visual-ia-audience-research (2-3h)
├── form-brand-visual-ia-market-mapping (1-2h)
└── form-brand-visual-ia-product-research (1-2h, opcional)
    ↓
    Output: dossier audience.md + market.md + product.md

DIA 3 — Tese
├── form-brand-visual-ia-big-idea (1-2h)
├── form-brand-visual-ia-positioning (1h)
└── form-brand-visual-ia-tribe-enemy (1h, se aplicável)
    ↓
    Output: tese.md

DIA 4-5 — Identidade visual + Brand Guideline
├── form-brand-visual-ia-figma-setup (30min)
├── form-brand-visual-ia-moodboard (1h)
├── form-brand-visual-ia-logo-system (2h)
├── form-brand-visual-ia-typography (1h)
├── form-brand-visual-ia-color-palette (1h)
├── form-brand-visual-ia-brand-faces (2h, se modo permite)
├── form-brand-visual-ia-voice-tone (1h)
├── form-brand-visual-ia-photography-signature (1h)
├── form-brand-visual-ia-videography-signature (1h)
└── form-brand-visual-ia-motion-design (30min)
    ↓
DIA 5 — Brand Guideline consolidado
└── form-brand-visual-ia-brand-guideline-builder ⭐ (2-3h)
    ↓
    OUTPUTS:
    - Página "Brand Guidelines" no Figma
    - brand-guideline-companion.md
    - brand-guideline.pdf

DIA 6+ — PRODUÇÃO COMEÇA
└── Primeira peça via form-brand-visual-ia-content-pipeline
```

Marca pronta pra produção em ~1 semana de trabalho focado.

---

## Fluxo da produção recorrente (semanal)

```
DOMINGO À NOITE — Planejamento (1h)
└── form-brand-visual-ia-pacote-semanal
    Output: 5 captions + 3 prompts + 1 storyboard de Reel

SEGUNDA A SEXTA — Produção (1-2h/dia)
├── Por peça:
│   ├── content-pipeline (peça única)
│   │   └── concept → direction → storyboard → image-gen → video-gen
│   │
│   └── OU por canal específico:
│       ├── organico-diario (Reels regulares)
│       ├── carrossel-feed
│       ├── static-ads
│       ├── ad-video
│       └── email-flows
│
├── Edição:
│   ├── edicao-capcut OU edicao-davinci
│   └── voiceover (se VO)
│
└── Adaptação:
    └── platform-adaptation

PUBLICAÇÃO: manual ou agendada (Buffer/Later)
```

---

## Skills que LEEM e ESCREVEM no Figma

### Apenas escreve (cria/atualiza):

```
figma-setup           → cria 5 páginas iniciais
moodboard             → adiciona frames na Brand Guidelines page
logo-system           → adiciona Components no Styleguide
typography            → adiciona Text Styles + frames Brand Guidelines
color-palette         → adiciona Color Variables + frames Brand Guidelines
brand-faces           → adiciona Section "Brand Faces" na Assets page
photography-signature → adiciona frames na Brand Guidelines page
videography-signature → adiciona frames na Brand Guidelines page
motion-design         → adiciona frames na Brand Guidelines page
brand-guideline-build → consolida + exporta PDF
voice-tone            → adiciona frames Voice & Tone na Brand Guidelines
figma-localize        → clona sections em outras línguas
figma-ad-builder      → adiciona Sections na Ads page
brand-ad-replicator   → (não usa Figma — gera PNGs locais)
```

### Apenas lê:

```
carrossel-feed         → lê Templates page + Assets
static-ads             → usa figma-ad-builder como backbone
ad-video               → lê Assets pra puxar product shots
storyboarding          → opcional — pode visualizar storyboard no Figma
```

---

## Regra de ouro do Figma

```
✅ PERMITIDO:
- Adicionar Sections/Frames em páginas existentes
- Criar/atualizar Components no Styleguide
- Criar/atualizar Variables (Brand Tokens)
- Adicionar Text Styles
- Ler qualquer página via MCP

❌ PROIBIDO:
- Criar páginas novas além das 5 originais
- Reorganizar a estrutura macro
- Deletar Components existentes
- Mudar nomes das páginas mestras
```

Resultado: **Figma sempre organizado, previsível, navegável**.

---

## Brand Guideline Companion — fluxo

```
brand-guideline-builder gera:
                │
                ▼
    brand-guideline-companion.md
                │
    ┌───────────┼────────────┐
    │           │            │
    ▼           ▼            ▼
LEITURA   LEITURA      LEITURA
AUTOMÁTICA AUTOMÁTICA  AUTOMÁTICA
    │           │            │
    ▼           ▼            ▼
prompt-     content-     brand-prompt-
rewriter    pipeline     generator
    │           │            │
    └───────────┴────────────┘
                │
                ▼
         Outputs on-brand
         (sem pedir contexto
         pro usuário)
```

**Companion.md é a fonte única de verdade.** Skills só pedem o que o companion não cobre.

---

## Decision tree — qual skill invocar?

```
PERGUNTA: Tem CLAUDE.md da marca?
│
├── NÃO → form-brand-visual-ia-brand-readiness (entrada)
│
└── SIM
    │
    PERGUNTA: Tem brand-guideline-companion.md?
    │
    ├── NÃO → Continua Bloco A, B, C, depois brand-guideline-builder
    │
    └── SIM
        │
        PERGUNTA: O que quer fazer?
        │
        ├── Peça única → content-pipeline
        ├── Pacote semanal → pacote-semanal
        ├── Campanha lançamento → campaign-launcher
        ├── Pesquisa concorrentes → market-mapping
        ├── Adaptar peça pra outra plataforma → platform-adaptation
        ├── Auditoria sistema → system-audit
        ├── Output ruim → troubleshooting
        ├── Não sei → maestro (orquestrador)
        └── Outra coisa → skill-architect (cria nova skill)
```

---

## Mapeamento ferramentas × skills

| Ferramenta | Skills que usam |
|---|---|
| **Claude (chat)** | TODAS — orchestrator universal |
| **Obsidian** | calendario-editorial, banco-ideias, todos arquivos .md |
| **Figma (MCP)** | figma-setup, moodboard, logo, typography, color, brand-faces, voice-tone, photo-sig, video-sig, motion, brand-guideline-builder, figma-ad-builder, figma-localize |
| **fal.ai** | fal-image-gen, image-generation, video-generation |
| **Higgsfield** | image-generation, video-generation (alternativa fal.ai) |
| **CapCut** | edicao-capcut, ad-video |
| **DaVinci** | edicao-davinci |
| **Canva** | rapid-prototyping (quick mocks) |
| **Claude Design** | rapid-prototyping (pitch decks, landing pages) |
| **GPT Image 2** | rapid-prototyping (quando texto importa na imagem) |
| **ElevenLabs** | voiceover |
| **Suno/Udio** | edicao (música IA) |
| **Epidemic Sound** | edicao (música licenciada) |

---

## Resumo: jornada padrão da marca

```
1. brand-readiness → CLAUDE.md + modo definido
2. Bloco A + B + C → identidade completa (Obsidian + Figma)
3. brand-guideline-builder → companion.md + PDF
4. content-pipeline → primeira peça produzida
5. pacote-semanal → rotina recorrente
6. system-audit → manutenção trimestral
```

Tempo total pra marca rodando: ~1 mês (setup) + ongoing.
