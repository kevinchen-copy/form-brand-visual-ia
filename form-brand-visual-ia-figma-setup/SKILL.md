---
name: form-brand-visual-ia-figma-setup
description: Cria estúdio Figma da marca seguindo padrão LIMPO de 5 páginas (Brand Guidelines, Templates, Assets, Styleguide, Ads). NÃO 12 páginas. Usa Figma MCP pra criar arquivo + páginas + Variable Collection inicial + Text Styles default. Salva file key no CLAUDE.md. Output - arquivo Figma estruturado pronto pra próximas skills (logo-system, typography, color-palette, etc.) adicionarem conteúdo. Use SEMPRE como primeira skill do Bloco Identidade Visual, depois das pesquisas. Triggers - "figma-setup", "criar estúdio Figma", "montar arquivo Figma da marca", "inicializar Figma", "estúdio da marca", "preparar Figma".
---

# Figma Setup — Estúdio inicial da marca

Cria estúdio Figma da marca seguindo **padrão limpo de 5 páginas** (não 12). Estrutura previsível, profissional, fácil de navegar.

Esta é a primeira skill do Bloco Identidade Visual. Sem este setup, outras skills (logo-system, typography, etc.) não têm onde escrever.

---

## Pre-requisitos

- `CLAUDE.md` da marca preenchido
- Figma MCP server conectado e autenticado no Claude Desktop
- Conta Figma com permissão de criar arquivos

## Próximas skills no workflow

Após figma-setup, em qualquer ordem:
- `form-brand-visual-ia-moodboard`
- `form-brand-visual-ia-logo-system`
- `form-brand-visual-ia-typography`
- `form-brand-visual-ia-color-palette`
- `form-brand-visual-ia-brand-faces`

---

## Estrutura de 5 páginas

```
ARQUIVO: [Marca]-[Ano].fig

├── 1. Brand Guidelines (página estática — livro de marca)
│   Frames serão adicionados por:
│   - moodboard (frames "Moodboard")
│   - logo-system (frames "Logo usage")
│   - typography (frames "Tipografia")
│   - color-palette (frames "Paleta")
│   - voice-tone (frames "Voice & Tone")
│   - photography-signature (frames)
│   - videography-signature (frames)
│   - motion-design (frames)
│   - brand-guideline-builder (consolidação final + capa)
│
├── 2. Templates (templates reutilizáveis)
│   Sections vazias prontas pra preencher:
│   - "Reel Cover" (1080×1920)
│   - "Feed Post" (1080×1350 + 1080×1080)
│   - "Story" (1080×1920)
│   - "Carrossel" (1080×1350 multi-slide)
│   - "Ad Static T1" (1:1 + 9:16 + landscape)
│   - "Ad Static T2" (variação)
│   - "Email Header" (600×300)
│   - "Pinterest Pin" (1080×1620)
│
├── 3. Assets (recursos da marca)
│   Sections vazias:
│   - "Brand Faces" (será preenchida por brand-faces skill)
│   - "Brand Patterns/Textures"
│   - Sections por produto serão criadas conforme necessidade
│
├── 4. Styleguide (system core)
│   Vazia inicialmente. Será preenchida por:
│   - logo-system (Components Logo White, Logo Dark, etc.)
│   - typography (Text Styles)
│   - color-palette (Color Variables — "Brand Tokens" collection)
│
└── 5. Ads (output)
    Vazia. Será preenchida por:
    - figma-ad-builder (cria sections aqui)
    - figma-localize (clona pra outras línguas aqui)
```

---

## Step 0 — Read brand context

Lê `CLAUDE.md`:
- Nome da marca
- Modo da marca
- Setor

---

## Step 1 — Confirma com usuário

```
═══════════════════════════════════════
FIGMA SETUP — Confirmação
═══════════════════════════════════════

Vou criar arquivo Figma estruturado pra [Marca].

Arquivo: "[Marca]-2026"
Localização: Figma team [pergunta qual team]

Estrutura de 5 páginas:
1. Brand Guidelines
2. Templates
3. Assets
4. Styleguide  
5. Ads

Variable Collection inicial: "Brand Tokens"
Text Styles default: 5 estilos básicos

Confirma criação?
```

Aguarda confirmação.

---

## Step 2 — Pergunta team Figma

```
Em qual Figma team criar o arquivo?

Opções:
- Personal (sua conta)
- Team específico (cole nome)
- Workspace específico
```

Salva resposta.

---

## Step 3 — Criar arquivo via Figma MCP

Via Figma MCP, executa:

```javascript
// Pseudo-code do que MCP faz internamente

const file = await figma.createFile({
  name: "[Marca]-2026",
  team: chosen_team
});

const fileKey = file.key;
const fileUrl = file.url;
```

Confirma sucesso ou trata erro.

---

## Step 4 — Criar 5 páginas

Pra cada nome, cria página vazia:

```javascript
const pages = [
  "1. Brand Guidelines",
  "2. Templates",
  "3. Assets",
  "4. Styleguide",
  "5. Ads"
];

for (const pageName of pages) {
  await figma.createPage(fileKey, pageName);
}
```

---

## Step 5 — Criar Variable Collection "Brand Tokens"

Na page "Styleguide":

```javascript
const tokensCollection = await figma.createVariableCollection({
  fileKey: fileKey,
  pageId: "4. Styleguide",
  name: "Brand Tokens"
});

// Cria modos default
await figma.addCollectionMode(tokensCollection.id, "Light");
await figma.addCollectionMode(tokensCollection.id, "Dark");
```

Collection vazia pronta — color-palette skill vai preencher com variables.

---

## Step 6 — Criar Text Styles default (5)

Na page "Styleguide", cria placeholders básicos:

```javascript
const textStylesDefault = [
  { name: "Heading/H1", size: 80, weight: 700, font: "Inter" },
  { name: "Heading/H2", size: 48, weight: 600, font: "Inter" },
  { name: "Heading/H3", size: 32, weight: 500, font: "Inter" },
  { name: "Body/Large", size: 18, weight: 400, font: "Inter" },
  { name: "Body/Default", size: 14, weight: 400, font: "Inter" }
];
```

Estilos básicos placeholder. Skill `typography` vai customizar conforme brand fonts reais.

---

## Step 7 — Criar Sections vazias em "Templates"

Na page "Templates", cria frames container vazios:

```javascript
const templateSections = [
  { name: "Reel Cover", width: 1080, height: 1920 },
  { name: "Feed Post 4:5", width: 1080, height: 1350 },
  { name: "Feed Post 1:1", width: 1080, height: 1080 },
  { name: "Story", width: 1080, height: 1920 },
  { name: "Carrossel Slide", width: 1080, height: 1350 },
  { name: "Ad T1 — 9:16", width: 1080, height: 1920 },
  { name: "Ad T1 — 1:1", width: 1080, height: 1080 },
  { name: "Ad T1 — Landscape", width: 1080, height: 566 },
  { name: "Email Header", width: 600, height: 300 },
  { name: "Pinterest Pin", width: 1080, height: 1620 }
];
```

Containers vazios. Próximas skills (carrossel-feed, figma-ad-builder, etc.) vão adicionar content dentro.

---

## Step 8 — Criar Sections em "Assets"

Page "Assets" recebe sections placeholder:

```javascript
const assetSections = [
  { name: "Brand Faces", note: "Will be filled by brand-faces skill" },
  { name: "Brand Patterns/Textures", note: "Optional patterns" },
  { name: "Product Shots", note: "By product, by skill brand-ad-replicator" }
];
```

---

## Step 9 — Salvar file key + URL

Atualiza `CLAUDE.md` da marca:

```markdown
## Figma

- **File:** [Marca]-2026
- **File key:** [fileKey real]
- **URL:** https://www.figma.com/design/[fileKey]/[Marca]-2026
- **Team:** [team escolhido]
- **Setup date:** [data]

### Estrutura (não modificar):
1. Brand Guidelines
2. Templates
3. Assets
4. Styleguide (Variable Collection "Brand Tokens" + Text Styles)
5. Ads

### Atualizações:
[Skills vão registrar aqui o que adicionaram]
```

---

## Step 10 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ FIGMA SETUP COMPLETO

Arquivo: [Marca]-2026
URL: [link Figma]

5 páginas criadas:
✓ 1. Brand Guidelines (vazia — moodboard será primeira a adicionar)
✓ 2. Templates (10 sections placeholder)
✓ 3. Assets (3 sections placeholder)
✓ 4. Styleguide (Variable Collection "Brand Tokens" + 5 Text Styles)
✓ 5. Ads (vazia — figma-ad-builder vai usar)

File key salvo no CLAUDE.md.

PRÓXIMAS SKILLS DISPONÍVEIS (em qualquer ordem):

1. form-brand-visual-ia-moodboard
   → Adiciona moodboard na Brand Guidelines page

2. form-brand-visual-ia-color-palette
   → Cria Color Variables (Brand Tokens) reais

3. form-brand-visual-ia-typography
   → Customiza Text Styles com brand fonts reais

4. form-brand-visual-ia-logo-system
   → Cria Components Logo White + Logo Dark + Mark

5. form-brand-visual-ia-brand-faces
   → Adiciona Brand Faces na Assets page (se modo permite)

Recomendo nessa ordem:
moodboard → color-palette → typography → logo-system → brand-faces
═══════════════════════════════════════
```

---

## Regra de ouro (pra outras skills)

```
✅ PERMITIDO em outras skills:
- Adicionar Sections/Frames nas 5 páginas existentes
- Criar/atualizar Components no Styleguide
- Adicionar Variables na "Brand Tokens" collection
- Adicionar Text Styles
- Ler qualquer página

❌ PROIBIDO em outras skills:
- Criar páginas novas além das 5
- Renomear páginas existentes
- Deletar páginas
- Reorganizar estrutura macro
- Deletar Components existentes (substituir = OK, deletar = NÃO)
```

Essa regra mantém Figma sempre organizado.

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Página "Brand Guidelines" mais robusta (visual = tudo)
- Página "Assets" mais usada
- Página "Templates" foco em peças visuais

### VISUAL+COPY (padrão)
- 5 páginas balanceadas
- Todas vão receber content

### COPY-HEAVY
- Página "Templates" menos crítica
- Página "Brand Guidelines" inclui mais frames sobre voice & tone

Estrutura básica de 5 páginas é a mesma. Apenas peso de uso muda.

---

## Tratamento de erros

### Erro: Figma MCP não conectado

```
⚠️ Figma MCP server não conectado no Claude Desktop.

Pra continuar:
1. Settings → MCPs → Adicionar Figma MCP
2. Autenticar com sua conta Figma
3. Roda essa skill novamente

(Documento configuração detalhada em INSTALL-INSTRUCTIONS.md)
```

### Erro: Sem permissão no team

```
⚠️ Sua conta Figma não tem permissão pra criar arquivos em [team].

Opções:
A) Criar em Personal account (sempre permitido)
B) Pedir admin do team adicionar você
C) Criar em outro team

Qual?
```

### Erro: Quota Figma excedida

```
⚠️ Conta Figma free tem limite de 3 projetos.

Você está em [N]/3.

Opções:
A) Deletar arquivo Figma antigo não usado
B) Upgrade pra Professional ($15/mês)
C) Pausar e voltar quando tiver vaga

Qual?
```

---

## Armadilhas a evitar

- **Não criar páginas adicionais.** 5 páginas é o sistema. Adicionar quebra organização.
- **Não pular Variable Collection.** "Brand Tokens" é fundamental pra color-palette skill.
- **Não pular Text Styles default.** typography skill assume eles existem.
- **Não esquecer de salvar file key no CLAUDE.md.** Outras skills precisam.
- **Não criar em team errado.** Confirma team antes.

---

## Output esperado

✅ Arquivo Figma criado com 5 páginas
✅ Variable Collection "Brand Tokens" vazia + 2 modos (Light/Dark)
✅ 5 Text Styles default (Inter)
✅ 10 sections placeholder em "Templates"
✅ 3 sections placeholder em "Assets"
✅ File key salvo no CLAUDE.md
✅ Próxima skill recomendada
