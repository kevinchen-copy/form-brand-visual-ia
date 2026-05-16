---
name: form-brand-visual-ia-moodboard
description: Cria moodboard DENTRO da página Brand Guidelines do Figma já criado pelo figma-setup. Não é pasta MD nem Pinterest — é frames vivos no estúdio Figma. 3 fontes de imagens (referências culturais, Pinterest curado, fotos próprias). Ensina extrair de cada referência O QUE serve a marca - uma palavra, uma cor, um gestual, uma luz. Output - 12-16 imagens com legenda "extract pra esta marca" em cada, organizadas como frames no Figma. Use SEMPRE depois do figma-setup. Triggers - "moodboard", "coleção de referências", "inspirações visuais", "referências culturais", "pinterest da marca", "fotos da minha loja", "referências visuais".
---

# Moodboard — Frames vivos no Figma

Cria moodboard da marca **DENTRO da página Brand Guidelines do Figma** (já criada pela skill figma-setup). NÃO é Pinterest separado nem pasta de imagens — são frames vivos consolidados no estúdio da marca.

3 fontes de imagens:
1. **Referências culturais** (filmes, arte, livros, arquitetura)
2. **Pinterest curado** (boards específicos pra inspiração)
3. **Fotos próprias** (loja, estúdio, processo)

Cada imagem tem **legenda explícita do que extrair**: uma palavra, uma cor, um gestual, uma luz. Não é "pin bonito" — é referência operacional.

---

## Pre-requisitos

- `figma-setup` rodou (arquivo Figma existe com 5 páginas)
- `positioning.md` e `big-idea.md` feitos (sabe a direção)
- File key do Figma salvo no `CLAUDE.md`
- Figma MCP conectado

## Próxima skill no workflow

`form-brand-visual-ia-color-palette` (define paleta baseado em moodboard)
OU `form-brand-visual-ia-logo-system`

---

## Step 0 — Read brand context

Lê CLAUDE.md + big-idea + positioning:
- Big Idea, slogan
- Reenquadramento (categoria que marca quer ocupar)
- Marcas-símbolo que audience admira (do audience-research F1)
- Modo da marca

---

## Step 1 — Define o universo visual a explorar

Pergunta:

```
═══════════════════════════════════════
MOODBOARD — Direção
═══════════════════════════════════════

Baseado no que já temos:
- Big Idea: "[frase]"
- Reenquadramento: [categoria]
- Marcas-símbolo audience admira: [lista]

Vamos buscar 12-16 imagens em 3 categorias:

A) Referências culturais (5 imagens)
   Filmes, arte, livros, arquitetura que tenham mood similar
   
   Sugestões pra essa marca:
   - Filme: [Wes Anderson / Sofia Coppola / etc.]
   - Pintura: [Hopper / Vermeer / etc.]
   - Arquitetura: [arquiteto contemporâneo]
   - Outra mídia: [livros, fotografia, design]

B) Pinterest / web curado (5 imagens)
   Boards de marcas-símbolo e referências
   
   Recomendo pesquisar:
   - Boards de [marca admirada A]
   - Pesquisa "[mood]" + "[categoria]"
   - Pinterest de [estética relacionada]

C) Fotos próprias da marca (5-6 imagens)
   Fotos reais que vocês têm:
   - Espaço da marca / estúdio / loja
   - Processo de criação
   - Founder / time em ambiente real
   - Produtos em uso real
   
   Tem fotos próprias? Onde estão (Drive, dispositivo, Dropbox)?

Confirma a direção + lista referências específicas pra eu trabalhar.
```

---

## Step 2 — Coleta referências

### A. Referências culturais

Usuário fornece OR skill busca via WebSearch:

Pra cada referência cultural:
- Nome (filme/quadro/edifício)
- Ano + autor
- URL imagem (se possível)
- O que dessa referência conecta com a marca

Salva 5 referências culturais.

### B. Pinterest/Web

Usuário fornece links ou pede skill buscar:
- Pinterest boards URLs
- Web search por estética específica

Skill pode usar WebSearch pra encontrar imagens em hostes públicas.

Salva 5 imagens web/Pinterest.

### C. Fotos próprias

Usuário aponta:
- Pasta no computer
- Drive folder
- Dropbox
- Aponta arquivos específicos

Skill copia ou aponta URLs.

Salva 5-6 fotos próprias.

---

## Step 3 — Para cada imagem, define "extract"

O que torna moodboard útil (vs Pinterest aleatório) é a **legenda de extração**.

Pra cada imagem, define: **O QUE especificamente extrair pra essa marca**?

```
EXEMPLO — Imagem: cena de Lost in Translation (Sofia Coppola)

❌ Legenda ruim: "Vibes Sofia Coppola, mood melancólico"

✓ Legenda útil:
"Extract pra Aurora:
- Light naturalista com tons quentes (Tokyo night neon mas warm)
- Composição com generous negative space ao redor da Scarlett
- Atmosfera contemplativa (não vazia, contemplativa)
- Color palette warm muted que vamos aplicar em fotografia
- Pacing: shots longos, parados, deixa respirar
NÃO extract:
- Melancolia / tristeza (Aurora é calma, não triste)
- Ambiente noturno (Aurora é diurna/golden hour)"
```

Cada imagem tem extract específico. Isso transforma moodboard de "bonito" em "operacional".

---

## Step 4 — Cria moodboard no Figma

Via Figma MCP, na page "1. Brand Guidelines":

### Layout do moodboard

Cria section/group chamado "Moodboard":

```
┌──────────────────────────────────────────────┐
│  MOODBOARD                                   │
├──────────────────────────────────────────────┤
│                                              │
│  Subsection A — REFERÊNCIAS CULTURAIS        │
│  [grid 5 imagens em row, cada uma com        │
│   legenda extract abaixo]                    │
│                                              │
│  Subsection B — PINTEREST/WEB CURADO         │
│  [grid 5 imagens]                            │
│                                              │
│  Subsection C — FOTOS PRÓPRIAS               │
│  [grid 5-6 imagens]                          │
│                                              │
└──────────────────────────────────────────────┘
```

### Pra cada imagem (Frame):

```
┌──────────────────────┐
│ [imagem 400x500px]   │
│                      │
├──────────────────────┤
│ TÍTULO              │
│ "Lost in Translation"│
│                      │
│ EXTRACT:             │
│ - Light naturalista  │
│ - Generous neg space │
│ - Contemplativo      │
│                      │
│ NÃO extract:         │
│ - Melancolia         │
│ - Ambiente noturno   │
└──────────────────────┘
```

Cada frame tem:
- Imagem na metade superior
- Texto extract na metade inferior
- Tipografia clara (Text Styles do figma-setup)

---

## Step 5 — Adicionar imagens via Figma MCP

Pra cada referência:

```javascript
// Pseudo-code
const imageNode = await figma.createImage({
  fileKey: FIGMA_FILE_KEY,
  pageId: "1. Brand Guidelines",
  imageUrl: IMAGE_URL,  // OR uploads local file
  x: position_x,
  y: position_y,
  width: 400,
  height: 500
});

const textNode = await figma.createText({
  fileKey: FIGMA_FILE_KEY,
  pageId: "1. Brand Guidelines",
  text: extract_legend,
  x: imageNode.x,
  y: imageNode.y + 500,
  width: 400,
  fontStyle: "Body/Default"
});
```

---

## Step 6 — Síntese final do moodboard

Após adicionar todas as 12-16 imagens, adiciona **frame de síntese**:

```
┌──────────────────────────────────────────────┐
│  SÍNTESE DO MOODBOARD                        │
├──────────────────────────────────────────────┤
│                                              │
│  Palavras-chave do mood (5-7):               │
│  - Contemplativo                             │
│  - Naturalista                               │
│  - Editorial                                 │
│  - Warm                                      │
│  - Quiet                                     │
│  - Premium                                   │
│  - Sensorial                                 │
│                                              │
│  Color palette emergente:                    │
│  - Cream tones                               │
│  - Warm earthy                               │
│  - Soft gold accents                         │
│                                              │
│  Light style dominante:                      │
│  - Soft natural window light                 │
│  - Warm afternoon temperature                │
│  - Diffused, gentle shadows                  │
│                                              │
│  Composição dominante:                       │
│  - Generous negative space                   │
│  - Rule of thirds                            │
│  - Subject offset                            │
│                                              │
│  NÃO INCLUIR em peças futuras:               │
│  - Cores saturadas brilhantes                │
│  - Composições centralizadas + cheias        │
│  - Hard lighting frontal                     │
│  - Mood frio / cyber                         │
│                                              │
└──────────────────────────────────────────────┘
```

Este frame **resume** o que próximas skills (color-palette, photography-signature, etc.) vão concretizar.

---

## Step 7 — Atualizar CLAUDE.md

```markdown
## Figma — Atualizações

- [data] form-brand-visual-ia-moodboard
  - Adicionou section "Moodboard" na Brand Guidelines page
  - 16 imagens curadas (5 culturais + 5 Pinterest + 6 próprias)
  - Frame de síntese final com palavras-chave + paleta emergente
```

---

## Step 8 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ MOODBOARD CRIADO NO FIGMA

URL: [link direto pra section Moodboard]

16 imagens adicionadas:
- 5 culturais (Lost in Translation, Hopper, Aesop store, ...)
- 5 Pinterest/web (curado de Le Labo, COS, Kinfolk)
- 6 fotos próprias (estúdio, processo, founder)

Frame de síntese final:
Palavras-chave do mood: Contemplativo, Naturalista, Editorial, 
Warm, Quiet, Premium, Sensorial

Paleta emergente: Cream + warm earthy + soft gold
Light dominante: Soft natural window, warm afternoon
Composição: Generous negative space + rule of thirds

PRÓXIMAS SKILLS RECOMENDADAS:

1. form-brand-visual-ia-color-palette
   → Transforma "paleta emergente" em Color Variables concretas

2. form-brand-visual-ia-photography-signature
   → Transforma "light dominante" em frase ready-to-prompt

3. form-brand-visual-ia-typography
   → Define tipografia que reforça mood "Editorial + Quiet"
═══════════════════════════════════════
```

---

## Tipos de moodboard por modo da marca

### VISUAL-ONLY
- 20+ imagens (mais curadoria visual)
- Maior peso em referências culturais (cinema, arte, fotografia)
- Síntese visual richíssima
- Skill prioriza fotos próprias da marca

### VISUAL+COPY (padrão)
- 12-16 imagens
- Mix equilibrado das 3 fontes

### COPY-HEAVY
- 8-10 imagens (menos visual, mais foco no copy)
- Mais peso em referências de **books, magazines** (mood textual)
- Skill prioriza síntese de palavras-chave

---

## Exemplos de extract bom vs ruim

### Exemplo A — Imagem: Loja Aesop em Tokyo

❌ "Bonita, dá vibe Aesop"

✓ "Extract pra Aurora:
- Paleta: madeira, terra, off-white (cream tones)
- Display dos produtos: line, simétrico
- Luz: morna do teto, indireta
- Ausência de cor de marca forte (só wood + cream)
NÃO extract:
- Localização (não somos store front)
- Volume de produtos (não vamos ter coleção grande)"

### Exemplo B — Imagem: Foto do founder na cozinha

❌ "Mostra o founder real"

✓ "Extract pra Aurora:
- Vestimenta neutra (linen cream) — reflete brand
- Gestual: mão segurando vidro com cuidado
- Ambiente: cozinha simples, sem luxo ostentado
- Atmosphera: manhã, golden hour
NÃO extract:
- Bagunça em volta (cleaning future shots)
- Outras pessoas no fundo"

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Mais imagens (20+)
- Extract mais granular (textura, gesto, atmosfera)
- Section culturais mais robusta

### VISUAL+COPY
- 12-16 padrão

### COPY-HEAVY
- 8-10 minimum, focus em mood que apoia texto
- Síntese verbal richíssima

---

## Armadilhas a evitar

- **Moodboard sem extract.** Pin bonito = inútil. Sempre extract operacional.
- **Imagens sem fonte.** Se for usar referência publicamente (peça final), respeita direitos. Moodboard interno OK.
- **Mood vazio.** "Pretty" não é mood. "Contemplative + warm + quiet" é.
- **Pular fotos próprias.** Marca sem identidade própria visual. Mesmo se imperfeitas, adiciona.
- **Síntese vaga.** Síntese deve ter palavras concretas que próximas skills usam.
- **Esquecer "NÃO incluir".** Saber o que evitar é tão importante quanto saber o que buscar.

---

## Output esperado

✅ Section "Moodboard" criada na page "Brand Guidelines" do Figma
✅ 12-16 imagens adicionadas com legendas extract
✅ Frame de síntese final com palavras-chave + paleta emergente + light style + composição + don'ts
✅ CLAUDE.md atualizado com log
✅ Próxima skill recomendada (color-palette típica)
