# Changelog

Todas as mudanças notáveis deste sistema são documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
Versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

---

## [1.0.0] — 2026-05-16

### 🚀 Lançamento inicial — Sistema completo de 48 skills

Primeira versão pública do sistema **form-brand-visual-ia** — workflow ponta-a-ponta para construção e operação de marca usando Claude + Figma + fal.ai + Higgsfield + CapCut/DaVinci + ferramentas de áudio.

### ✨ Added

#### Diagnóstico e Setup (2 skills)
- `form-brand-visual-ia-brand-readiness` — Diagnóstico AI-Readiness (5 dimensões, score 0-60)
- `form-brand-visual-ia-maestro` — Orquestrador geral (recomenda próxima skill)

#### Pesquisas (3 skills)
- `form-brand-visual-ia-audience-research` — 3 níveis de dor + Voice of Customer
- `form-brand-visual-ia-market-mapping` — Concorrentes + oceano azul defensável
- `form-brand-visual-ia-product-research` — Matriz Deep Dive + Mapa de Provas

#### Tese da Marca (3 skills)
- `form-brand-visual-ia-big-idea` — Tese emocional central (5 elementos)
- `form-brand-visual-ia-positioning` — Frase de posicionamento em 4 peças
- `form-brand-visual-ia-tribe-enemy` — Inimigo simbólico + tribo

#### Cliente Ideal (1 skill)
- `form-brand-visual-ia-ideal-client` — F1∩F2 (psicografia × rentabilidade)

#### Identidade Visual — 5-page Figma (9 skills)
- `form-brand-visual-ia-figma-setup` — Cria estúdio Figma com 5 páginas mestras
- `form-brand-visual-ia-moodboard` — Coleção de referências viva no Figma
- `form-brand-visual-ia-logo-system` — Sistema de logo com variações + components
- `form-brand-visual-ia-typography` — Famílias + hierarquia + Text Styles vivos
- `form-brand-visual-ia-color-palette` — Color Variables com acessibilidade AA/AAA
- `form-brand-visual-ia-brand-faces` — Rostos da marca (real/IA/sem rosto)
- `form-brand-visual-ia-voice-tone` — Voz permanente + tom por contexto + vocabulário
- `form-brand-visual-ia-photography-signature` — Lighting + Camera ready-to-prompt
- `form-brand-visual-ia-videography-signature` — Pacing + grading ready-to-JSON
- `form-brand-visual-ia-motion-design` — Regra 80/20 + safe zones + antipatterns

#### Brand Guideline ⭐ (1 skill central)
- `form-brand-visual-ia-brand-guideline-builder` — Consolida tudo em 3 ativos sincronizados (Figma + companion.md + PDF)

#### Produção Visual — Prompts e Geração (5 skills)
- `form-brand-visual-ia-prompt-builder` — Wizard 6 camadas
- `form-brand-visual-ia-image-generation` — Higgsfield + Nano Banana + Midjourney
- `form-brand-visual-ia-fal-image-gen` — fal.ai endpoint nano-banana-2
- `form-brand-visual-ia-video-prompts` — JSON image-to-video (Kling/Veo/Higgsfield)
- `form-brand-visual-ia-storyboard` — Frame-by-frame com 5 elementos obrigatórios

#### Produção — Peças (8 skills)
- `form-brand-visual-ia-content-pipeline` — Pipeline completo brief→peça
- `form-brand-visual-ia-concept` — Define ideia central
- `form-brand-visual-ia-creative-direction` — Define visual style/tone
- `form-brand-visual-ia-organico-diario` — Regra 60-30-10 (16 posts/mês)
- `form-brand-visual-ia-carrossel-feed` — Carrossel estático 8 slides
- `form-brand-visual-ia-ad-video` — Ad de vídeo Meta cold (15-30s)
- `form-brand-visual-ia-email-flows` — Welcome + Abandoned Cart + Post-purchase
- `form-brand-visual-ia-static-ads` — Copy de ads estáticos e-commerce

#### Figma — Operação (3 skills)
- `form-brand-visual-ia-figma-ad-builder` — Multi-variantes de ad no Figma
- `form-brand-visual-ia-figma-localize` — Localização multi-idioma
- `form-brand-visual-ia-brand-ad-replicator` — Replica templates com novo copy

#### Edição Final (3 skills)
- `form-brand-visual-ia-edicao-capcut` — Workflow CapCut com motion design
- `form-brand-visual-ia-edicao-davinci` — Workflow DaVinci com color grading
- `form-brand-visual-ia-voiceover` — Scripts ElevenLabs + sound design

#### Catálogo e Plataformas (2 skills)
- `form-brand-visual-ia-catalog-coherence` — Coerência multi-produto (família visual)
- `form-brand-visual-ia-platform-adaptation` — CORE × EXECUTION (IG/TT/LI/YT)

#### Sistema Operacional (5 skills)
- `form-brand-visual-ia-calendario-editorial` — Calendário mensal 4 semanas
- `form-brand-visual-ia-banco-ideias` — Backlog vivo de ideias
- `form-brand-visual-ia-pacote-semanal` — 5 peças prontas em 1 sessão
- `form-brand-visual-ia-monthly-orchestrator` — Mês inteiro em 1 invocação
- `form-brand-visual-ia-campaign-launcher` — Campanha 4 fases (8-12 semanas)

#### Manutenção (3 skills)
- `form-brand-visual-ia-system-audit` — Audit trimestral do sistema
- `form-brand-visual-ia-troubleshooting` — Debug outputs com problema
- `form-brand-visual-ia-skill-architect` — Meta-skill (cria novas skills)

### 🎯 Princípios arquiteturais

- **3 modos adaptáveis**: visual-only / visual-copy / copy-heavy (cada skill se ajusta)
- **Output tangível obrigatório**: nenhuma skill termina sem gerar arquivo/frame/asset
- **Trabalho sequencial**: cada skill aponta a próxima no workflow
- **5-page Figma pattern**: Brand Guidelines / Templates / Assets / Styleguide / Ads
- **Brand Guideline Builder central**: gera 3 ativos sincronizados lidos por todas as outras

### 📦 Estrutura distribuída

Cada skill é uma pasta independente — instalada via Claude Desktop:
**Settings → Customize → Habilidades → +**

Permite instalação seletiva (algumas skills vs sistema completo) e refinamentos individuais sem quebrar o todo.

---

## [Unreleased]

### Em planejamento
- v1.1.0: Skills custom específicas (weekly-dm-analysis, hashtag-performance, etc.)
- v1.2.0: Integração com novas ferramentas (Sora 2, Veo 3 final, etc.)
- v2.0.0: Refactor baseado em feedback de 90 dias de uso real
