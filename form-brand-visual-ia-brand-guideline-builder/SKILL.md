---
name: form-brand-visual-ia-brand-guideline-builder
description: PEÇA CENTRAL do sistema. Consolida TODAS as decisões anteriores (Blocos A, B, C de pesquisas + tese + identidade visual) em 3 ativos sincronizados — (1) Página Brand Guidelines no Figma diagramada + (2) brand-guideline-companion.md machine-readable lido por TODAS as skills de produção + (3) brand-guideline.pdf A4 portrait exportado do Figma. Sem esta skill, sistema não opera coerente. Use depois de TODAS as skills da Onda 2 + voice-tone + photography-signature + videography-signature + motion-design. Triggers - "brand guideline", "consolidar marca", "livro de marca", "brand book", "guideline final", "PDF da marca", "design system".
---

# Brand Guideline Builder ⭐ PEÇA CENTRAL

Esta é a skill que **fecha** Bloco Identidade Visual. Consolida tudo em 3 ativos sincronizados que viram **fonte única de verdade** da marca.

**Sem esta skill rodada, skills de produção operam sem brand context.**

---

## Os 3 ativos

```
1. PÁGINA BRAND GUIDELINES NO FIGMA
   Visual diagramado vivo da marca, ~18 seções
   Pra apresentação a clientes, time, parceiros
   
2. brand-guideline-companion.md
   Machine-readable, YAML estruturado
   LIDO AUTOMATICAMENTE por TODAS as skills de produção
   Sources of truth pra prompts, voice, visual
   
3. brand-guideline.pdf
   A4 portrait, exportado do Figma via MCP
   Sempre sincronizado com a página Figma
   Pra distribuição offline / handoff
```

---

## Pre-requisitos

Skills que devem ter rodado antes:

**Bloco A — Pesquisas:**
- audience-research
- market-mapping
- product-research (se tem produto)

**Bloco B — Tese:**
- big-idea
- positioning
- tribe-enemy (se modo aplica)

**Bloco C — Identidade Visual:**
- figma-setup
- moodboard
- logo-system
- typography
- color-palette
- brand-faces (se modo aplica)
- voice-tone
- photography-signature
- videography-signature
- motion-design

Sem isso tudo, skill avisa quais skills rodar primeiro.

## Próxima skill no workflow

Sistema agora pronto pra **PRODUÇÃO**. Próximas skills:
- `form-brand-visual-ia-content-pipeline` (peça única)
- `form-brand-visual-ia-organico-diario` (Reels regulares)
- `form-brand-visual-ia-carrossel-feed`
- Qualquer skill de Bloco E (Produção)

---

## Step 0 — Verificar pre-requisitos

Lê arquivos do vault da marca:

```
✓ audience-research.md existe
✓ market-mapping.md existe
✓ product-research.md existe (opcional)
✓ big-idea.md existe
✓ positioning.md existe
✓ tribe-enemy.md existe (se modo aplica)
✓ Figma file existe (file key no CLAUDE.md)
✓ moodboard adicionado na Brand Guidelines page
✓ Color Variables criadas em Brand Tokens collection
✓ Text Styles criados no Styleguide
✓ Components de logo no Styleguide
✓ Brand Faces na Assets page (se aplicável)
✓ voice-tone documentada
✓ photography-signature definida (ready-to-prompt)
✓ videography-signature definida (ready-to-JSON)
✓ motion-design definido
```

Se algo falta:

```
⚠️ Pre-requisitos faltantes:
- ❌ photography-signature não rodou
- ❌ motion-design não rodou

Brand Guideline incompleto sem essas. 
Roda essas skills primeiro?
```

---

## Step 1 — Consolidar todas as decisões

Lê de todos os arquivos do vault da marca + Figma:

```
DADOS COLETADOS:

# Identidade essencial
- Nome: [marca]
- Setor: [setor]
- Big Idea: [frase]
- Slogan: [frase]
- Manifesto: [parágrafos]
- Modo: [visual-only / v+c / copy-heavy]

# Posicionamento
- Frase 4 peças: [completa]
- Reenquadramento: [tipo + descrição]
- 12 traits: [afirmados + negados]

# Audience
- F1 (psicográfico): [completo]
- F2 (rentabilidade): [completo]
- Disciplina do NÃO: [lista]
- Voice of Customer: [vocabulário + frases]

# Tribe & Enemy (se aplicável)
- Inimigo simbólico: [declaração]
- Manifesto + 3 peças prontas

# Voice
- 3 adjetivos permanentes
- Tom contextual (5 contextos)
- Vocabulário favorito (15)
- Vocabulário proibido (15)
- Regras de copy (10)

# Visual
- Paleta (HEX completa)
- Tipografia (hierarquia)
- Logo (Components no Figma)
- Brand Faces (URLs master, descrições)

# Photography Signature
- Lighting + Camera + Color + Composition
- Frase mestre ready-to-prompt

# Videography Signature
- 5 decisões + audio direction
- JSON mestre ready-to-paste

# Motion Design
- Animation style + easing + duration
- Safe zones + antipatterns

# Pilares de conteúdo
- Mix percentual (do CLAUDE.md/Bloco A)

# Hashtags
- Anchor + large + medium + small

# Product (se aplicável)
- Mecanismo único + provas + objeções
```

---

## Step 2 — Construir Página Figma "Brand Guidelines"

Via Figma MCP, consolida tudo na page "1. Brand Guidelines".

Estrutura final da página (18 seções):

```
PÁGINA "1. BRAND GUIDELINES" — ORGANIZADA EM:

SEÇÃO 1 — CAPA
  Frame com:
  - Nome da marca
  - Logo primary grande
  - Slogan
  - Tagline "Brand Guidelines 2026"

SEÇÃO 2 — ESSÊNCIA
  - Big Idea (frase central destaque)
  - Manifesto (parágrafos)
  - Slogan

SEÇÃO 3 — POSICIONAMENTO
  - Frase 4 peças
  - Reenquadramento (visualização)
  - 12 traits (tabela sim/não)

SEÇÃO 4 — CLIENTE IDEAL
  - F1 (psicográfico)
  - F2 (rentabilidade)
  - Disciplina do NÃO
  - Voice of Customer (highlight)

SEÇÃO 5 — TRIBE & ENEMY (se aplicável)
  - Declaração inimigo
  - Bandeiras da tribo
  - Manifesto curto

SEÇÃO 6 — VOICE & TONE
  - 3 adjetivos permanentes + exemplos
  - Tom contextual (5 contextos)
  - Vocabulário favorito (15)
  - Vocabulário proibido (15)
  - Regras de copy (10)

SEÇÃO 7 — LOGO SYSTEM
  - Logo Primary
  - 6 variações
  - Clear space visual
  - Tamanhos mínimos
  - Contextos aprovados
  - Don'ts

SEÇÃO 8 — TIPOGRAFIA
  - Heading + Body fonts
  - Hierarquia visual
  - Pairing reasoning
  - Where to get (links)

SEÇÃO 9 — PALETA CROMÁTICA
  - Swatches com HEX/RGB/uso/emoção
  - Combinações permitidas (AAA/AA)
  - Combinações proibidas
  - Forbidden colors

SEÇÃO 10 — BRAND FACES (se aplicável)
  - Brand Face Core (com URL + 10 dimensões)
  - Brand Face Adjacente
  - Brand Face Diversidade
  - Regras de uso

SEÇÃO 11 — MOODBOARD
  - 12-16 imagens curadas
  - Síntese final (palavras-chave)

SEÇÃO 12 — PHOTOGRAPHY SIGNATURE
  - 4 dimensões (lighting/mood/subject/filter)
  - Setups por contexto
  - Frase mestre ready-to-prompt
  - Exemplos visuais

SEÇÃO 13 — VIDEOGRAPHY SIGNATURE
  - 5 decisões
  - Audio direction
  - JSON ready-to-paste
  - Reference tracks

SEÇÃO 14 — MOTION DESIGN
  - Animation style
  - Hierarquia animação
  - Safe zones (4 aspect ratios)
  - Antipatterns

SEÇÃO 15 — PILARES DE CONTEÚDO
  - Mix percentual (educativo/produto/BTS/social proof/lifestyle)
  - Frequência por plataforma
  - Plataformas prioritárias

SEÇÃO 16 — HASHTAGS & SEO
  - Anchor hashtag
  - Hashtags large/medium/small
  - Mix per post recomendado

SEÇÃO 17 — PRODUCT (se aplicável)
  - Mecanismo único
  - Mapa de provas
  - Headlines candidatas

SEÇÃO 18 — DON'TS GLOBAIS
  - O que a marca NUNCA faz
  - Anti-marketing
  - Antipatterns visuais
  - Anti-vocabulary

CAPA FINAL — CRÉDITOS
  Data de criação, versão, autor
```

Via Figma MCP, monta seção por seção:

```javascript
// Pseudo-code
for (const section of sections) {
  await figma.createFrame({
    pageId: "1. Brand Guidelines",
    name: section.name,
    width: section.layout.width,
    height: section.layout.height,
    children: section.children  // textos, swatches, imagens
  });
  
  // Apply Text Styles + Color Variables
  // (já criados pelas skills anteriores)
}
```

---

## Step 3 — Construir brand-guideline-companion.md

Esse é o arquivo **machine-readable** que skills de produção leem.

Cria em `[marca]/brand-guideline-companion.md`:

```yaml
# brand-guideline-companion.md
# Auto-generated by form-brand-visual-ia-brand-guideline-builder
# Versão: 1.0 — [data]

brand:
  name: "Aurora"
  setor: "Premium skincare"
  produto_principal: "Aurora Sérum"
  mode: "visual-copy"
  big_idea: "Cuidado real, sem ruído"
  manifesto: |
    [Manifesto completo]
  slogan: "Sem ruído"

positioning:
  para_quem: "Mulheres 35-45 que rejeitam complexidade artificial"
  o_que: "Aurora Sérum"
  como: "Niacinamida + bakuchiol em fórmula limpa fabricada no Brasil"
  para_que: "Pele radiante sem rotina ruidosa"
  reenquadramento:
    tipo: "categoria"
    de: "marca de skincare premium"
    para: "marca de ritual minimalista"
  traits_afirmados: ["calmos", "honestos", "editoriais", "minimalistas", ...]
  traits_negados: ["excitados", "sedutores", "comerciais", "maximalistas", ...]

ideal_client:
  f1_psicografico:
    auto_imagem_aspiracional: "Elegante sem esforço"
    auto_imagem_evitada: "Tentando demais"
    vocabulario_interno: ["qualidade", "ritual", "respeito"]
    marcas_simbolo: ["Aesop", "Le Labo", "COS"]
  f2_rentabilidade:
    ticket_medio_alvo: "R$ 250-400"
    recorrencia: "Trimestral"
    ltv_estimado: "R$ 1500-3000"
  disciplina_nao:
    - "Cliente brigando por preço"
    - "Quem quer milagre"

tribe_enemy:
  inimigo: "Indústria que vende complexidade artificial"
  manifesto_curto: "Cuidado real, sem ruído"

voice:
  permanent_adjectives: ["Calma", "Honesta", "Natural"]
  vocabulary_favorite: ["ritual", "honesto", "primeira gota", ...]
  vocabulary_forbidden: ["incrível", "transformador", "revolucionário", ...]
  tom_contextual:
    educativo: "Mais didático, paciente"
    produto: "Entusiasmado contido"
    bts: "Íntimo, vulnerável"
  copy_rules:
    - "Frases curtas dominam"
    - "Pausa entre ideias"
    - "Sem ! (90%)"
    # ... 10 total

visual:
  palette:
    primary:
      - {name: "Terracotta", hex: "#C5664A", use: "CTAs"}
      - {name: "Warm Sand", hex: "#E8D4B8", use: "BG suaves"}
      - {name: "Cream", hex: "#F5F0E8", use: "BG principal"}
    # ... completa
  
  typography:
    heading: "Cormorant"
    body: "Inter"
    hierarchy: [...]
  
  logo:
    primary_component_url: "[URL Figma]"
    variations: ["White", "Dark", "Monogram", ...]
    clear_space: "30px (em logo 100px tall)"
    min_size: "32px digital, 10mm print"

photography_signature:
  ready_to_prompt: |
    Editorial photography, soft natural window light from 
    upper-left diffused through sheer linen curtains, warm 
    afternoon temperature 3500K, rule of thirds composition 
    with generous negative space, naturalistic warm muted 
    color grading, slight underexposure, 85mm portrait lens 
    at f/2.0 eye-level, shot on Hasselblad medium format

videography_signature:
  ready_to_json: |
    {
      "camera": {"movement": "static OR slow push-in"},
      "pacing": "very slow contemplative",
      "color_grading": "warm muted naturalistic",
      "audio": {"music": "minimal acoustic", "voiceover_quality": "warm intimate female"}
    }

motion_design:
  animation_style: "smooth"
  easing_default: "ease-in-out"
  duration_default: 0.6
  safe_zones: {9_16: "840x1320 safe", ...}
  antipatterns: ["bounce exagerado", "rotation aleatória", ...]

brand_faces:
  mode: "core_adjacent_diversity"
  core:
    master_url: "https://..."
    description: "Mulher 40s, cabelo castanho ondulado..."
    use_percentage: 60
  # ... adjacente + diversidade

pilares_conteudo:
  mix:
    educativo: 30
    produto: 25
    bts: 20
    social_proof: 15
    lifestyle: 10

hashtags:
  anchor: "#aurora"
  large: ["#skincare", "#beauty"]
  medium: ["#peleboa", "#autocuidado", ...]
  small: ["#foundedbymom", "#skincarehonesto"]

product:
  nome: "Aurora Sérum"
  mecanismo_unico: [...]
  provas: [...]
  headlines_candidatas: [...]

forbidden_universal:
  vocabulary: [...]
  visual_patterns: [...]
  marketing_tactics: ["Black Friday agressiva", ...]
```

---

## Step 4 — Exportar Figma → PDF

Via Figma MCP:

```javascript
const pdfFile = await figma.exportPDF({
  fileKey: FIGMA_FILE_KEY,
  pageId: "1. Brand Guidelines",
  format: "A4_PORTRAIT",
  scale: 2.0,  // Quality high
  includeAllFrames: true
});

// Salva em vault
await saveToVault(pdfFile, `[marca]/brand-guideline.pdf`);
```

---

## Step 5 — Validar consistência cross-arquivos

Verifica que Figma + companion.md + PDF estão sincronizados:

```
✓ Color Variables Figma = palette companion.md
✓ Text Styles Figma = typography companion.md
✓ Logo Components Figma = logo companion.md
✓ Brand Faces URLs Figma = brand_faces companion.md
✓ Frase ready-to-prompt photography = companion.md
✓ JSON videography = companion.md
✓ Motion design specs = companion.md
✓ PDF reflete Figma current

Inconsistências detectadas: [N]
[Lista se houver]
```

Se inconsistências, corrige automaticamente OR avisa usuário.

---

## Step 6 — Atualizar CLAUDE.md

```markdown
## Brand Guideline

**Status:** v1.0 — concluído em [data]

**Arquivos:**
- Página Figma: [URL]
- PDF: [path no vault]
- Companion: brand-guideline-companion.md

**Próximas skills disponíveis (todas leem companion.md):**
- form-brand-visual-ia-content-pipeline
- form-brand-visual-ia-organico-diario
- form-brand-visual-ia-carrossel-feed
- ...

**Auditoria:**
- Próxima audit prevista: [data + 3 meses]
```

---

## Step 7 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ BRAND GUIDELINE CONSOLIDADO

3 ATIVOS SINCRONIZADOS:

1. PÁGINA FIGMA "Brand Guidelines"
   URL: [link Figma]
   18 seções diagramadas
   
2. brand-guideline-companion.md
   Localização: [marca]/brand-guideline-companion.md
   ~600 linhas YAML estruturado
   LIDO AUTOMATICAMENTE por TODAS as skills de produção
   
3. brand-guideline.pdf
   Localização: [marca]/brand-guideline.pdf
   A4 portrait, ~30 páginas
   Exportado de Figma — sempre sincroniza

═══════════════════════════════════════

✓ Pre-requisitos validados (todas skills Onda 2 + algumas Onda 3 rodaram)
✓ 18 seções da Brand Guideline construídas no Figma
✓ Companion.md gerado com todas as variáveis
✓ PDF exportado e salvo no vault
✓ Consistency cross-arquivos validada
✓ CLAUDE.md atualizado

═══════════════════════════════════════

MARCA AGORA PRONTA PRA PRODUÇÃO.

Próximas skills disponíveis (todas operam on-brand 
automaticamente):

PRODUÇÃO POR PEÇA:
→ form-brand-visual-ia-content-pipeline
   (peça única — 5 fases)

PRODUÇÃO RECORRENTE:
→ form-brand-visual-ia-organico-diario
→ form-brand-visual-ia-carrossel-feed
→ form-brand-visual-ia-static-ads
→ form-brand-visual-ia-ad-video

EDIÇÃO:
→ form-brand-visual-ia-edicao-capcut
→ form-brand-visual-ia-edicao-davinci

SISTEMA OPERACIONAL (Onda 4 — instalar depois):
→ form-brand-visual-ia-calendario-editorial
→ form-brand-visual-ia-pacote-semanal
→ form-brand-visual-ia-campaign-launcher

═══════════════════════════════════════
```

---

## Versionamento

Brand Guideline pode evoluir. Versões:

```
v1.0 — Initial (após primeira run da skill)
v1.1 — Ajustes pequenos (paleta refinada, voice tone update)
v2.0 — Refresh trimestral (audit + atualizações importantes)
v3.0 — Pivots maiores (reposicionamento, audience nova)
```

Cada nova versão:
- Atualiza companion.md
- Atualiza Figma
- Re-exporta PDF
- Salva versão antiga em /archives/

---

## Adaptação por modo

### VISUAL-ONLY
- 18 seções foco em **visuais**
- Seções 4 (cliente), 5 (tribe), 6 (voice) são minimalistas
- Seções 11 (moodboard), 12 (photography), 13 (videography), 14 (motion) são robustas

### VISUAL+COPY (padrão)
- 18 seções balanceadas

### COPY-HEAVY
- 18 seções foco em **voz + manifesto**
- Seções 2-6 (essência + posicionamento + voice) bem detalhadas
- Visuais funcionais

---

## Armadilhas a evitar

- **Pular validação cross-arquivos.** Figma e companion.md devem bater.
- **Não atualizar quando muda algo.** Brand drift começa aqui. Skill deve rodar de novo após mudanças importantes.
- **PDF desatualizado.** Sempre re-exporta após mudança Figma.
- **Companion.md mal estruturado.** YAML válido + structured pra skills lerem.
- **Pular pre-requisitos.** Se voice-tone não rodou, companion.md fica incompleto.

---

## Output esperado

✅ 18 seções construídas na Brand Guidelines page do Figma
✅ `brand-guideline-companion.md` gerado (~600 linhas YAML)
✅ `brand-guideline.pdf` exportado e salvo
✅ Validação consistency cross-arquivos
✅ CLAUDE.md atualizado com status v1.0
✅ Marca pronta pra produção — todas skills downstream operam on-brand automaticamente
