---
name: form-brand-visual-ia-figma-ad-builder
description: Gera múltiplas variantes de ads estáticos direto dentro de arquivo Figma a partir de template de ad existente. Lê brand-guideline-companion.md pra aplicar paleta, tipografia, logos automaticamente. Duplica template, swap background com visual de campanha correto, atualiza headline + body copy, tematiza versões light/dark, organiza em section nomeada pronta pra export. Output final fica dentro do Figma — nunca escreve PNGs locais. Use SEMPRE quando usuário disser "create ads from template", "duplicate ad template", "multiply ad template", "build ad variants in Figma", "generate ads from T1/T2/T3", "create light and dark versions", "turn one ad into many", "make 9:16 + 1:1 + landscape versions", ou variações. Também acione quando usuário der Figma link + asset names + ad copy e quiser multi-format ad outputs entregues dentro do file.
---

# Figma Ad Builder — form-brand-visual-ia

Esta skill gera múltiplas variantes de ads estáticos direto dentro de arquivo Figma. Duplica template de ad existente, troca background com visual de campanha correto, atualiza headline e body copy, tematiza light/dark versions corretamente, e organiza output em section nomeada pronta pra export.

**Output final vive dentro do Figma.** A skill nunca escreve PNGs no computador do usuário.

Esta é a skill clonada do Brand AI Claude Course (`figma-ad-builder`), refinada pra usar Brand Voice, Color Palette e Typography do `brand-guideline-companion.md`.

---

## Pre-requisitos

- Figma MCP server conectado
- Arquivo Figma com estrutura **mínima de 4 páginas** (padrão form-brand-visual-ia):
  - **Templates** — page com templates de ad (com 9:16, 1:1, Landscape frames)
  - **Assets** — page com visuais de campanha por produto (sections em múltiplos aspect ratios)
  - **Styleguide** — page com `Logo white` e `Logo dark` components
  - **Ads** — page onde output final vai aparecer
- `brand-guideline-companion.md` (recomendado)

## Próximas skills no workflow

- `form-brand-visual-ia-figma-localize` (se quer versões multi-idioma)
- Export manual do Figma → publicação direta
- `form-brand-visual-ia-platform-adaptation` (se quer adaptações cross-channel)

---

## Quando usar

- Usuário quer múltiplas variações de ad construídas a partir de 1 template Figma
- Output deve ficar dentro do Figma pro usuário exportar manualmente
- Versões light/dark do mesmo layout
- Múltiplas variantes de conteúdo (V1, V2, V3) em múltiplos aspect ratios
- Imagens de campanha já moram no Figma

## Quando NÃO usar

- Usuário explicitamente quer PNGs salvos locais → usa workflow Python ad-replicator
- Figma file não tem template reutilizável
- Imagens de produto vivem fora do Figma → primeiro upload pro Figma

---

## Estrutura Figma obrigatória

Antes de rodar, o Figma file deve ter:

```
1. Page "Brand Guidelines" (estática — só leitura)
   
2. Page "Templates" 
   Sections como "AD Template 1", "AD Template 2", "AD Template 3"
   Cada section contém:
     - Frame "9:16" (1080×1920)
     - Frame "1:1" (1080×1080)
     - Frame "Landscape" (1080×566)

3. Page "Assets"
   Sections nomeadas por produto/campanha:
   - "[Produto X] - Stone Shot" (com 1:1 + 9:16 + Landscape variants)
   - "[Produto X] - Lifestyle" (idem)
   - "Brand Faces"

4. Page "Styleguide"
   Components:
   - "Logo White" (white version pra fundo dark/colored)
   - "Logo Dark" (dark version pra fundo light)
   - Color Variables collection ("Brand Tokens")
   - Text Styles

5. Page "Ads" (output)
   Sections geradas por essa skill, nomeadas por campanha
```

Se algo falta, **pergunta ao usuário** onde estão os equivalentes ANTES de construir.

---

## Inputs a coletar

Pergunte qualquer coisa faltante:

- [ ] Figma file URL ou file key
- [ ] Template a usar (ex: "AD Template 3")
- [ ] Asset a usar (ex: "Aurora Spring Collection - Lifestyle Shot")
- [ ] Headline copy(s) (ex: ["New season is here.", "Discover the new collection."])
- [ ] Body copy(s) (ex: ["Spring 2026 just dropped.", "Hand-picked by our designers."])
- [ ] Aspect ratios desejados (ex: ["9:16", "1:1", "Landscape"])
- [ ] Variantes light + dark? (yes/no)
- [ ] Quantas variantes de conteúdo? (V1, V2, V3...)
- [ ] Nome da campanha (pra nomear o output section)

---

## Step 0 — Read brand context

Lê `brand-guideline-companion.md`:

- **Color palette** → aplicada via Brand Tokens (Variables) já no Figma
- **Typography** → aplicada via Text Styles já no Figma
- **Voice & tone** → influencia revisão das copies fornecidas
- **Forbidden vocabulary** → checa se copies violam (avisar)
- **Brand mode** → ajusta nível de copy (visual-only = headline mínima)

---

## Step 1 — Validar Figma e estrutura

1. Confirma Figma MCP conectado
2. Carrega o file
3. Verifica páginas existem: Templates, Assets, Styleguide, Ads
4. Lista templates disponíveis pra usuário escolher
5. Lista assets disponíveis (sections) pra usuário escolher

Se algo falta, mostra:

```
⚠️ Estrutura incompleta no Figma:
- ❌ Page "Templates" não encontrada
- ✓ Page "Assets" encontrada (contém 3 sections)
- ✓ Page "Styleguide" encontrada
- ❌ Page "Ads" não encontrada (vou criar se aprovado)

Quer que eu crie as pages faltantes ou prefere fazer manualmente primeiro?
```

---

## Step 2 — Validar copies contra Brand Voice

Se companion.md presente:

Pra cada headline + body fornecidos, checar:
- Vocabulary forbidden? (incrível, transformador, revolucionário, etc.)
- Tom alinhado? (calm vs energetic vs sophisticated)
- Comprimento adequado?

Se algo problemático, sugere ajuste:

```
Headline V1: "Incrível nova coleção!"

⚠️ "Incrível" está no Vocabulary Forbidden da marca.

Sugestão: "Nova coleção. Disponível agora."

Aprovar sugestão ou manter original?
```

---

## Step 3 — Plano de geração

Calcula matriz: 

**N copies × M aspect ratios × (light + dark?)**

Exemplo:
- 3 copies × 3 aspect ratios × 2 (light/dark) = **18 ad variants**

Apresenta plano:

```
PLANO DE GERAÇÃO

Campanha: Aurora Spring 2026
Template: AD Template 3
Asset: Aurora Spring Collection - Lifestyle Shot

Variants a criar:
- V1 Light: 9:16, 1:1, Landscape (3 frames)
- V1 Dark: 9:16, 1:1, Landscape (3 frames)
- V2 Light: 9:16, 1:1, Landscape (3 frames)
- V2 Dark: 9:16, 1:1, Landscape (3 frames)
- V3 Light: 9:16, 1:1, Landscape (3 frames)
- V3 Dark: 9:16, 1:1, Landscape (3 frames)

TOTAL: 18 ad frames

Section output: "Aurora_Spring_2026" na page "Ads"

Confirma plano?
```

Aguarda confirmação.

---

## Step 4 — Gerar variants no Figma

Pra cada variant (loop através da matriz):

1. **Duplica frame template** correspondente ao aspect ratio
2. **Move duplicate** pra page "Ads", dentro da section "[Nome_Campanha]"
3. **Swap background** pelo asset correto (1:1 swap se template 1:1, etc.)
4. **Atualiza headline** com copy da variant
5. **Atualiza body** com copy da variant
6. **Theme light/dark:**
   - Light: Logo Dark component, background claro, texto escuro
   - Dark: Logo White component, background escuro, texto claro
7. **Renomeia frame** descritivamente:
   - `Aurora_Spring_V1_Light_9x16`
   - `Aurora_Spring_V1_Dark_9x16`
   - `Aurora_Spring_V2_Light_1x1`
   - etc.

**Importante:**
- Mantém logo position consistente com template
- Mantém typography (puxa Text Styles, não muda manual)
- Mantém color tokens (usa Brand Variables)

---

## Step 5 — Organizar section

Após gerar todos os frames, organiza:

```
Section "Aurora_Spring_2026" (na page "Ads")
  
  Group "V1 Light"
    - Aurora_Spring_V1_Light_9x16
    - Aurora_Spring_V1_Light_1x1
    - Aurora_Spring_V1_Light_Landscape
  
  Group "V1 Dark"
    - Aurora_Spring_V1_Dark_9x16
    - Aurora_Spring_V1_Dark_1x1
    - Aurora_Spring_V1_Dark_Landscape
  
  Group "V2 Light"
    - ...
  
  Group "V2 Dark"
    - ...
  
  Group "V3 Light"
    - ...
  
  Group "V3 Dark"
    - ...
```

Layout em grid (X colunas, Y rows) pra fácil visualização.

---

## Step 6 — Apresentar ao usuário

Screenshot da section gerada + link direto:

```
═══════════════════════════════════════
✅ ADS GERADOS

Campanha: Aurora Spring 2026
Total: 18 ad frames

Localização Figma:
[link direto pra section "Aurora_Spring_2026"]

Preview:
[screenshot da section]

Status:
✓ Light theme aplicada (6 frames)
✓ Dark theme aplicada (6 frames)
✓ Logo White e Logo Dark trocados corretamente
✓ Typography via Text Styles
✓ Colors via Brand Tokens

Próximos passos:
1. Revisa as 18 variantes no Figma
2. Aprova / ajusta copy / muda template se necessário
3. Export manual quando satisfeito
4. Opcional: Roda form-brand-visual-ia-figma-localize pra outras línguas
═══════════════════════════════════════
```

---

## Padrões de templates típicos

### Template tipo 1 — "Hero Visual Centered"
Logo top, headline center top, visual fullwidth, body+CTA bottom.

### Template tipo 2 — "Split Layout"
Visual à esquerda, texto à direita (ou vice-versa).

### Template tipo 3 — "Minimal Frame"
Visual full bleed, logo + 1 frase no canto.

Skill detecta tipo do template e adapta swap de copy adequadamente.

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Headlines ultra-curtas (1-3 palavras max)
- Body opcional (pode pular)
- Foco no visual + logo
- 1 versão (light OR dark) basta, raramente ambas

### VISUAL+COPY

- Headlines moderadas (5-10 palavras)
- Body 1-2 frases
- Light + Dark padrão

### COPY-HEAVY

- Headlines podem ser maiores
- Body mais elaborado
- Múltiplas variants de copy testáveis

---

## Lista de checks finais

Antes de finalizar, valida:

- [ ] Todos frames têm copy correta (sem placeholder)
- [ ] Logo correto pra cada tema (White / Dark)
- [ ] Background asset aplicado corretamente em cada aspect ratio
- [ ] Naming descritivo em todos frames
- [ ] Section organizada por groups
- [ ] Nada na page errada (tudo na "Ads")

---

## Exemplos

### Exemplo 1 — 3 variants Aurora

**Usuário:** "Cria ads pra Aurora Spring 2026. Template 3. Asset 'Aurora Spring Collection - Lifestyle'. 3 copies, light + dark, todos 3 aspect ratios."

**Skill:**
1. Lê companion.md → Aurora voice "calm, sophisticated"
2. Pergunta copies (3 headlines + 3 bodies)
3. Valida contra forbidden words
4. Plano: 18 frames
5. Gera tudo no Figma
6. Apresenta section "Aurora_Spring_2026" com screenshot

### Exemplo 2 — Só 1:1 + 9:16

**Usuário:** "Mesma campanha mas só Instagram — 1:1 e 9:16, sem landscape"

**Skill:**
1. Adapta plano: 3 × 2 × 2 = 12 frames
2. Pula Landscape frame template
3. Gera 12 frames

### Exemplo 3 — Só light

**Usuário:** "Aurora não usa dark theme, só light"

**Skill:**
1. Pula geração dark
2. Adapta plano: 3 × 3 × 1 = 9 frames

---

## Armadilhas a evitar

- **Não copiar texto manualmente.** Usa Text Styles do Styleguide.
- **Não hardcode color.** Usa Brand Variables (Tokens).
- **Não pular validação de copy.** Forbidden words quebram brand voice.
- **Não esquecer light/dark logo swap.** Logo White em fundo escuro, Logo Dark em fundo claro.
- **Não criar variants em página errada.** Sempre page "Ads".
- **Não criar variants gigante.** 30+ frames vira inviável de revisar. Limite ~20 por section.

---

## Output esperado

✅ Section "[Nome_Campanha]" criada na page "Ads"
✅ N frames gerados conforme plano
✅ Light + Dark themes aplicadas corretamente
✅ Brand Tokens + Text Styles aplicados
✅ Naming descritivo
✅ Screenshot pra usuário revisar
✅ Pronto pra export manual ou próxima skill (localize, etc.)
