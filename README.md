# form-brand-visual-ia

> **Sistema completo de 48 skills do Claude pra construir e operar marca visual com IA**
> Workflow ponta-a-ponta: do diagnóstico inicial à operação semanal de conteúdo.

![Status](https://img.shields.io/badge/status-v1.0.0-brightgreen)
![Skills](https://img.shields.io/badge/skills-48-blue)
![License](https://img.shields.io/badge/license-MIT-orange)
![Claude](https://img.shields.io/badge/Claude-Desktop-purple)

---

## 🎯 O que é

Conjunto de **48 skills custom do Claude Desktop** que aplicam os 3 cursos unificados (Branded AI Guide + Mobile Editing Club Course + Brand AI Claude Course) numa marca real. Cada skill gera **output tangível** (arquivo, frame no Figma, imagem, vídeo, JSON) — nunca termina em texto solto.

**Modos adaptáveis:**
- 🎨 **visual-only** — fotografia/vídeo protagonista (joalheria, fashion, food)
- 🎨📝 **visual-copy** — balanceado (skincare, lifestyle, design)
- 📝 **copy-heavy** — texto protagonista (consultoria, mentoria, educação)

**Stack:** Claude + Obsidian + Figma + fal.ai + Higgsfield + CapCut + DaVinci + ElevenLabs

---

## 📦 Instalação rápida

### Opção A — Clonar este repo

```bash
git clone https://github.com/[seu-usuario]/form-brand-visual-ia.git
cd form-brand-visual-ia
```

### Opção B — Download zip

Baixa o `.zip` da release mais recente em [Releases](../../releases).

### Instalar cada skill no Claude Desktop

Para cada pasta `form-brand-visual-ia-[nome]/`:

1. Abre **Claude Desktop**
2. **Settings → Customize → Habilidades → +**
3. Seleciona a pasta da skill
4. Confirma

> 💡 **Recomendação:** instala primeiro as **12 skills da Onda 1** (ver tabela abaixo). Testa por 1 semana antes de instalar o restante.

---

## 🗺️ Workflow geral

```
FASE 0 — DIAGNÓSTICO
  brand-readiness  →  define modo da marca
       ↓
FASE 1 — BRAND FOUNDATION
  audience-research → market-mapping → product-research
       ↓
FASE 2 — TESE DA MARCA
  big-idea → positioning → tribe-enemy → ideal-client
       ↓
FASE 3 — IDENTIDADE VISUAL (5-page Figma)
  figma-setup → moodboard → logo-system → typography
  → color-palette → brand-faces → voice-tone
  → photography-signature → videography-signature → motion-design
       ↓
FASE 4 — BRAND GUIDELINE CONSOLIDADO ⭐
  brand-guideline-builder
  → gera Página Figma + companion.md + PDF (sincronizados)
       ↓
FASE 5 — PRODUÇÃO
  Peça única     →  content-pipeline (concept → direction → storyboard → image → video)
  Por canal      →  organico-diario | carrossel-feed | static-ads | ad-video | email-flows
  Suporte        →  fal-image-gen | figma-ad-builder | brand-ad-replicator | figma-localize
  Edição final   →  edicao-capcut | edicao-davinci | voiceover
       ↓
FASE 6 — SISTEMA OPERACIONAL
  calendario-editorial | banco-ideias | pacote-semanal
  campaign-launcher | platform-adaptation | monthly-orchestrator
       ↓
FASE 7 — MANUTENÇÃO
  system-audit (trimestral) | troubleshooting (under demand)
       ↓
META
  maestro (orquestrador) | skill-architect (cria novas skills)
```

Ver fluxo detalhado em [`WORKFLOW.md`](./WORKFLOW.md).

---

## 🧱 Princípios arquiteturais

Todas as 48 skills seguem **3 princípios** não-negociáveis:

### 1️⃣ Output tangível obrigatório

Cada skill termina com algo concreto:
- Arquivo no vault (`.md`, `.pdf`)
- Frame no Figma (via MCP)
- Imagem (`.png`) ou Vídeo (`.mp4`)
- JSON pronto pra colar em Higgsfield/Veo/Kling
- Component ou Variable criados no Figma

❌ **Nunca termina com:** "agora você sabe que..."

### 2️⃣ Trabalho sequencial

Cada skill declara:
- **Pre-requisitos** — quais skills devem ter rodado antes
- **Handoff** — qual skill vem depois

### 3️⃣ Adapta por modo da marca

Toda skill lê `brand-guideline-companion.md` da marca e se ajusta ao modo (visual-only / visual-copy / copy-heavy). Marcas visuais não são forçadas a produzir copy pesada.

---

## 📐 Padrão Figma — 5 páginas

```
1. Brand Guidelines   →  manual visual diagramado vivo
2. Templates          →  Reel/Post/Story/Carrossel/Ad reutilizáveis
3. Assets             →  product shots + Brand Faces
4. Styleguide         →  Logo + Components + Variables
5. Ads                →  output final das peças geradas
```

**Regra:** skills adicionam Sections nas páginas existentes — **nunca** criam páginas novas nem reorganizam a estrutura.

---

## 📄 Documentos centrais

### `CLAUDE.md` (por marca)
Vive na raiz do projeto da marca. Contém o modo, atalhos pro companion.md e notas de operação.
**Template:** [`templates/claude-md-template.md`](./templates/claude-md-template.md)

### `brand-guideline-companion.md` ⭐ (peça central)
Gerado pela skill `brand-guideline-builder`. **Lido automaticamente por todas as outras skills.** Contém brand essence, voice & tone, paleta, tipografia, photography signature, videography signature, motion design, Brand Faces, pilares de conteúdo.
**Template:** [`templates/brand-guideline-companion-template.md`](./templates/brand-guideline-companion-template.md)

### `project-brief.md` (por projeto/campanha)
Gerado pela skill `concept` (Fase 1 do content-pipeline). Documento master lido por todas as skills da campanha/projeto.

---

## 📚 Lista das 48 skills

### 🌊 Onda 1 — Começa por aqui (12 skills)

Diagnóstico + skills clonadas do Brand AI Claude Course:

| # | Skill | Função |
|---|---|---|
| 1 | `brand-readiness` | Diagnóstico AI-Readiness (score 0-60) |
| 2 | `prompt-rewriter` | Rewrites com framework BRIEF |
| 3 | `fal-image-gen` | fal.ai Nano Banana 2 |
| 4 | `figma-localize` | Localização multi-idioma |
| 5 | `figma-ad-builder` | Multi-variantes de ad no Figma |
| 6 | `brand-ad-replicator` | Replica templates com novo copy |
| 7 | `content-pipeline` | Pipeline brief→peça |
| 8 | `concept` | Define ideia central |
| 9 | `creative-direction` | Define visual style |
| 10 | `storyboarding` | Frame-by-frame |
| 11 | `image-generation` | Higgsfield + Nano Banana + Midjourney |
| 12 | `video-generation` | Image-to-video |

### 🌊 Onda 2 — Brand Foundation + Tese (12 skills)

| # | Skill | Função |
|---|---|---|
| 13 | `audience-research` | 3 níveis de dor + VoC |
| 14 | `market-mapping` | Concorrentes + oceano azul |
| 15 | `product-research` | Matriz Deep Dive + Provas |
| 16 | `big-idea` | Tese emocional central |
| 17 | `positioning` | Frase em 4 peças |
| 18 | `tribe-enemy` | Inimigo simbólico + tribo |
| 19 | `figma-setup` | Estúdio Figma 5 páginas |
| 20 | `moodboard` | Referências vivas no Figma |
| 21 | `logo-system` | Sistema de logo com variações |
| 22 | `typography` | Famílias + Text Styles |
| 23 | `color-palette` | Color Variables AA/AAA |
| 24 | `brand-faces` | Rostos da marca |

### 🌊 Onda 3 — Identidade + Brand Guideline + Produção (12 skills)

| # | Skill | Função |
|---|---|---|
| 25 | `voice-tone` | Voz + tom + vocabulário |
| 26 | `photography-signature` | Lighting + Camera ready-to-prompt |
| 27 | `videography-signature` | Pacing + grading ready-to-JSON |
| 28 | `motion-design` | Regra 80/20 + safe zones |
| 29 | `brand-guideline-builder` ⭐ | Consolida tudo em 3 ativos |
| 30 | `organico-diario` | Regra 60-30-10 (16 posts/mês) |
| 31 | `carrossel-feed` | Carrossel estático 8 slides |
| 32 | `static-ads` | Copy de ads estáticos |
| 33 | `ad-video` | Ad de vídeo Meta cold |
| 34 | `email-flows` | Welcome + Cart + Post-purchase |
| 35 | `edicao-capcut` | CapCut workflow |
| 36 | `edicao-davinci` | DaVinci + color grading |

### 🌊 Onda 4 — Sistema + Meta (12 skills)

| # | Skill | Função |
|---|---|---|
| 37 | `voiceover` | ElevenLabs + sound design |
| 38 | `rapid-prototyping` | Claude Design pra pitch/site |
| 39 | `calendario-editorial` | Calendário mensal |
| 40 | `banco-ideias` | Backlog vivo |
| 41 | `pacote-semanal` | 5 peças em 1 sessão |
| 42 | `campaign-launcher` | Campanha 4 fases |
| 43 | `platform-adaptation` | CORE × EXECUTION |
| 44 | `monthly-orchestrator` | Mês inteiro em 1 invocação |
| 45 | `system-audit` | Audit trimestral |
| 46 | `troubleshooting` | Debug outputs |
| 47 | `maestro` | Orquestrador geral |
| 48 | `skill-architect` | Cria skills novas |

---

## 🛠️ Stack de ferramentas

| Ferramenta | Função | Uso |
|---|---|---|
| **Claude Desktop** | Cérebro orquestrador | Skills custom + MCPs |
| **Claude Design** (claude.ai/design) | Prototipagem rápida | Pitch deck + landing |
| **Obsidian** | Knowledge base | Vault da marca |
| **Figma** (MCP) | Identidade + templates | 5-page pattern |
| **fal.ai** | Nano Banana 2 + Kling V3 | Imagem + vídeo |
| **Higgsfield** | Multi-modelo IA | Geração agregada |
| **CapCut** | Edição mobile | Reels rápidos |
| **DaVinci Resolve** | Edição pro | Color grading |
| **Canva** | Design casual | Pitch backup |
| **ElevenLabs** | Voiceover IA | Narração |
| **Suno / Udio** | Música IA | Trilhas |
| **Epidemic Sound** | Música licenciada | Comercial |

---

## 🚀 Quick start (3 passos)

```bash
# 1. Clone o repo
git clone https://github.com/[seu-usuario]/form-brand-visual-ia.git

# 2. Instala Onda 1 no Claude Desktop
#    Settings → Customize → Habilidades → + → seleciona cada pasta

# 3. No Claude, invoca a primeira skill:
"Roda form-brand-visual-ia-brand-readiness pra [Sua Marca]"
```

A partir daí, **`maestro`** (skill 47) te aponta a próxima skill a qualquer momento. Basta perguntar:
> "Qual a próxima skill que devo rodar pra [Sua Marca]?"

---

## 📖 Documentação

- 📘 [`README.md`](./README.md) — este arquivo
- 📗 [`WORKFLOW.md`](./WORKFLOW.md) — diagrama detalhado end-to-end
- 📕 [`INSTALL-INSTRUCTIONS.md`](./INSTALL-INSTRUCTIONS.md) — instalação passo-a-passo
- 📙 [`CHANGELOG.md`](./CHANGELOG.md) — histórico de versões
- 📓 [`templates/`](./templates/) — templates de CLAUDE.md e companion.md

---

## 🤝 Como contribuir

Encontrou bug, tem sugestão ou criou nova skill? Abra uma [Issue](../../issues) ou Pull Request.

Para criar skills novas seguindo o padrão do sistema, use a meta-skill **`skill-architect`** (skill 48).

---

## 📜 Licença

MIT — ver [`LICENSE`](./LICENSE).

---

## 🙏 Créditos

Sistema fruto de **3 cursos unificados**:
- Branded AI Guide
- Mobile Editing Club Course
- Brand AI Claude Course

Mais **11 skills oficiais** clonadas do Brand AI Claude Course.

Construído pra ser usado por marcas reais — não como exercício teórico.

---

> 💡 **Dica:** após instalar a Onda 1, a skill `brand-readiness` decide se sua marca precisa do sistema completo ou de um subset. Não instale tudo de cara — instala em ondas conforme avança.
