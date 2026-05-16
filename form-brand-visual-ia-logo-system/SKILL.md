---
name: form-brand-visual-ia-logo-system
description: Constrói SISTEMA de logo da marca (não apenas 1 logo) como Components vivos no Figma — primário + variações (horizontal, vertical, monograma, invertido, monocromático) + clear space + tamanhos mínimos + contextos aprovados + usos proibidos. Cria Components reutilizáveis no Styleguide page (criado pelo figma-setup). Lê CLAUDE.md pra entender modo da marca. Output - 5-7 Components de logo no Figma + frames "Logo usage" na Brand Guidelines + entrada no companion.md. Use SEMPRE depois do figma-setup + moodboard. Triggers - "logo", "sistema de logo", "logotipo", "monograma", "variações de logo", "clear space", "usos do logo", "logo novo", "redesenhar logo".
---

# Logo System — Sistema de Logo vivo no Figma

Constrói SISTEMA de logo da marca como Components vivos no Figma — não apenas 1 logo. Inclui:

- Logo primário
- Variações (horizontal, vertical, monograma, invertido, monocromático)
- Clear space definido
- Tamanhos mínimos (digital + print)
- Contextos aprovados
- Usos proibidos

---

## Pre-requisitos

- `figma-setup` rodou (file Figma com 5 páginas)
- `moodboard` rodou (sabe mood + paleta emergente)
- `positioning` finalizado (sabe estética desejada)
- Figma MCP conectado
- File key salvo no CLAUDE.md

## Próxima skill no workflow

- `form-brand-visual-ia-typography` (define tipografia que casa com logo)
- `form-brand-visual-ia-color-palette` (define cores definitivas)

---

## Step 0 — Read brand context

Lê CLAUDE.md + moodboard + positioning:
- Nome da marca
- Big Idea (informa mood do logo)
- Marcas-símbolo admiradas (referência visual)
- Síntese do moodboard (palavras-chave estéticas)

---

## Step 1 — Decisão fundamental: tem logo OU vamos criar?

Pergunta:

```
═══════════════════════════════════════
LOGO SYSTEM — Status atual
═══════════════════════════════════════

A marca já tem logo desenhado?

A) SIM — tenho arquivos vetoriais (.svg, .ai, .pdf)
   → Skill organiza Components + define sistema de uso

B) SIM — mas só raster (.png, .jpg)
   → Skill organiza + sugere vectorização externa

C) NÃO — vou criar agora
   → Skill ajuda definir conceito de logo + sugere caminhos:
     1. Designer humano (recomendado pra logo definitivo)
     2. Wordmark simples via tipografia (criável aqui)
     3. Logo via IA (Looka, Brandmark — qualidade variável)

Qual seu caso?
```

---

## Cenário A — Logo existe (vetorial)

### Step 2A — Coleta arquivos

```
Onde estão arquivos do logo?
- Drive folder
- Computer local
- Brand folder existente
- Outro

Aponta path/URLs dos arquivos:
- Logo primário (.svg ou .ai)
- Variações se houver
```

### Step 3A — Importar Figma

Via Figma MCP:

```javascript
// Pra cada arquivo SVG
const logoComponent = await figma.importSVG({
  fileKey: FIGMA_FILE_KEY,
  pageId: "4. Styleguide",
  svgUrl: logoUrl,
  name: logoName
});

// Converte em Component reutilizável
await figma.makeComponent(logoComponent.id);
```

### Step 4A — Criar variações se não existem

Se a marca só tem 1 versão (ex: full color), pede ao usuário OR cria automaticamente:

**Variações típicas:**

```
1. Logo Primary (full color)
2. Logo White (todo branco — pra fundo escuro)
3. Logo Dark (todo preto/charcoal — pra fundo claro)
4. Logo Monogram (símbolo isolado — sem wordmark)
5. Logo Horizontal (deitado)
6. Logo Vertical (em pé)
7. Logo Monochromatic (1 cor da paleta)
```

Cria como Components separados no Styleguide page.

---

## Cenário B — Logo só raster

### Step 2B — Avaliar qualidade

```
Logo só em .png/.jpg pode ser usado mas não é ideal:
- Não escala (pixel-based)
- Difícil mudar cor sem editar
- Não vira Component flexível

Opções:
A) Vetorizar (recomendado)
   - Designer profissional: melhor qualidade
   - Adobe Illustrator Image Trace (auto)
   - Vectorizer.io (online tool)
   - Inkscape (free)

B) Usar raster temporariamente
   - Ok pra começar produzir
   - Substitui por vector em 1-2 meses

C) Reimaginar do zero
   - Volta pra Cenário C abaixo
```

Se usuário escolher A, pausa skill aqui e sugere vetorização externa. Volta quando tiver SVG.

Se B, importa PNGs como Components básicos.

---

## Cenário C — Não existe logo

Skill **não cria logo de design**. Logo definitivo requer designer humano. Mas oferece 3 caminhos:

### Caminho C1 — Designer humano (recomendado)

```
Pra logo definitivo, contratar designer.

Custos típicos:
- Designer freelance entry: R$ 500-2000
- Designer médio: R$ 2000-8000
- Estúdio premium: R$ 10k-50k+

Plataformas:
- 99designs (concurso ou direto)
- Workana / GetNinjas (Brasil)
- Behance / Dribbble (busca direta)
- Indicação

Brief que vou gerar pra você passar pro designer:
[Skill gera brief detalhado com Big Idea + positioning + moodboard]
```

Skill gera **brief profissional** pro designer baseado em todo trabalho anterior.

### Caminho C2 — Wordmark simples via tipografia

Pra começar produzir antes do logo definitivo, skill pode criar **wordmark básico**:

```
Wordmark = logo que é só o nome da marca em tipografia específica.

Exemplos:
- "AURORA" em Cormorant SemiBold spacing wide
- "Aesop" em Cormorant
- "COS" em sans grotesque

Limitações:
- Sem símbolo (apenas tipografia)
- Funciona pra marcas que valorizam minimalismo
- Mais difícil reconhecer fora de contexto (sem marca)

Quer wordmark inicial?
```

Se sim, skill cria Component no Figma:

```javascript
const wordmark = await figma.createText({
  pageId: "4. Styleguide",
  text: BRAND_NAME.toUpperCase(),
  font: "Cormorant",
  weight: "SemiBold",
  size: 72,
  letterSpacing: "10%",
  color: "#2C2C2C"  // Charcoal
});

await figma.makeComponent(wordmark.id, "Logo Wordmark");
```

### Caminho C3 — Logo via IA

Skill avisa:

```
Ferramentas de logo IA (Looka, Brandmark, LogoAI):
- Output rápido + barato
- Qualidade VARIÁVEL (frequentemente fraca pra premium)
- Logos genéricos comuns
- Risco de copiar outro logo

Pra marca premium, NÃO recomendo IA.
Pra teste/MVP, pode servir temporariamente.

Quer tentar?
```

Se sim, gera prompt detalhado pra Looka/Brandmark + cliente roda externamente.

---

## Step 5 — Definir clear space + tamanhos mínimos

Pra cada logo Component, define regras de uso:

### Clear space

```
Clear space = espaço mínimo em volta do logo sem nada (texto, imagem).

Regra padrão: espaço = altura do glyph maior do logo (geralmente X-height).

EXEMPLO Aurora:
- X-height = 30px (em logo 100px tall)
- Clear space mínimo = 30px em todos os lados
```

Cria frame no Styleguide mostrando:
- Logo
- Bounding box do logo
- Clear space marcado (linha tracejada)

### Tamanhos mínimos

```
DIGITAL:
- Mobile screens: 32px width mínimo
- Desktop screens: 80px width mínimo
- Favicon: 32x32px (versão monogram)

PRINT:
- Cards / pequeno: 10mm width mínimo
- Documentos / médio: 15mm
- Material grande / outdoor: 30mm+
```

Cria frame "Tamanhos mínimos" no Brand Guidelines com exemplos visuais.

---

## Step 6 — Contextos aprovados + proibidos

### Aprovados

Lista contextos onde logo pode aparecer:

```
✓ Site (header, footer)
✓ Embalagem do produto
✓ Material institucional (cards, signature)
✓ Redes sociais (avatar, posts ocasionais)
✓ Conteúdo educativo (canto sutil)
✓ Press kit
```

### Proibidos / restritos

```
✗ Distorcer (estirar, comprimir, rodar livre)
✗ Aplicar em fundo com baixo contraste
✗ Adicionar sombras ou efeitos artificiais
✗ Mudar cores do logo (sempre usar versões oficiais)
✗ Co-locar com outras marcas sem aprovação
✗ Tamanho menor que mínimos estabelecidos
✗ Em peças trash (descontos agressivos, hype)
```

Cria frame "Logo Don'ts" no Brand Guidelines com 6-8 exemplos visuais de usos proibidos.

---

## Step 7 — Frame "Logo Usage" na Brand Guidelines

Consolida tudo num frame visual da Brand Guidelines page:

```
┌──────────────────────────────────────────────┐
│  LOGO SYSTEM                                 │
├──────────────────────────────────────────────┤
│                                              │
│  Logo Primary                                │
│  [imagem do logo primary em tamanho grande]  │
│                                              │
│  Variações:                                  │
│  [grid 6 variações]                          │
│  - Primary | White | Dark | Monogram         │
│  - Horizontal | Vertical | Monochromatic     │
│                                              │
│  Clear space:                                │
│  [exemplo visual com bounding box]           │
│                                              │
│  Tamanhos mínimos:                           │
│  [exemplos digital + print]                  │
│                                              │
│  Contextos aprovados:                        │
│  [grid com 6 contextos visuais]              │
│                                              │
│  Don'ts:                                     │
│  [grid com 6 usos proibidos com ❌]          │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 8 — Update CLAUDE.md + companion.md

### CLAUDE.md

```markdown
## Figma — Atualizações

- [data] form-brand-visual-ia-logo-system
  - Adicionou 6 Components de logo no Styleguide page
  - Frame "Logo Usage" na Brand Guidelines page
  - Definidos clear space + tamanhos mínimos + contextos
```

### brand-guideline-companion.md

```yaml
visual:
  logo:
    primary_component_url: "[Figma URL component]"
    variations:
      - "Logo White"
      - "Logo Dark"
      - "Logo Monogram"
      - "Logo Horizontal"
      - "Logo Vertical"
      - "Logo Monochromatic"
    
    clear_space: "Igual a X-height do glyph maior (~30px em logo 100px)"
    
    min_size_digital_mobile: "32px"
    min_size_digital_desktop: "80px"
    min_size_print: "10mm"
    favicon_format: "Monogram 32x32px"
    
    approved_contexts:
      - "Site (header/footer)"
      - "Embalagem"
      - "Material institucional"
      - "Redes sociais (avatar)"
    
    forbidden_uses:
      - "Distorcer proporções"
      - "Aplicar em fundo com baixo contraste"
      - "Adicionar sombras artificiais"
      - "Mudar cores do logo"
```

---

## Step 9 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ LOGO SYSTEM COMPLETO

Components criados no Figma (page "Styleguide"):
✓ Logo Primary
✓ Logo White (pra fundos escuros)
✓ Logo Dark (pra fundos claros)
✓ Logo Monogram (símbolo isolado)
✓ Logo Horizontal
✓ Logo Vertical
✓ Logo Monochromatic

Frame "Logo Usage" na Brand Guidelines:
✓ Variações apresentadas
✓ Clear space definido
✓ Tamanhos mínimos (digital + print)
✓ Contextos aprovados
✓ Don'ts visuais

URL: [link direto pra section Logo no Figma]

PRÓXIMAS SKILLS:
1. form-brand-visual-ia-color-palette
   → Define cores definitivas (variables)
   
2. form-brand-visual-ia-typography
   → Define tipografia que casa com logo
═══════════════════════════════════════
```

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Sistema MAIS robusto
- Mais variações (8-10 em vez de 6)
- Pattern + isotype + emblema se aplicável
- Aplicações em multiple touchpoints

### VISUAL+COPY (padrão)
- 6 variações típicas
- Padrão

### COPY-HEAVY
- Logo mais minimalista geralmente (wordmark + monogram)
- Foco em legibilidade em copy headers
- 4-5 variações suficientes

---

## Armadilhas a evitar

- **Logo só raster.** Pra marca séria, vetorize.
- **1 versão só.** Sistema requer 5+ variações.
- **Sem clear space.** Logo grudado em texto vira ilegível.
- **Sem tamanho mínimo.** Logo de 10px é mancha.
- **Sem Don'ts.** Time/freelancer vai violar sem perceber.
- **Logo via IA pra marca premium.** Qualidade geralmente fraca + risco copyright.
- **Skipping logo system.** "Tenho 1 PNG, basta" — não basta pra escala.

---

## Output esperado

✅ 6 Components de logo no Styleguide page do Figma
✅ Frame "Logo Usage" completo na Brand Guidelines page
✅ Section `logo` no `brand-guideline-companion.md`
✅ CLAUDE.md atualizado
✅ Próxima skill: `color-palette` OU `typography`
