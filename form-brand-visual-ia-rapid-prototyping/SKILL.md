---
name: form-brand-visual-ia-rapid-prototyping
description: Cria pitch decks, prototypes web, one-pagers via Claude Design (claude.ai/design) + Canva + GPT Image 2 (quando texto na imagem importa). Lê brand-guideline-companion.md pra aplicar paleta + tipografia + voice. Output - design pronto pra apresentar (PDF/HTML/PNG) em 30-60 min. Use pra casos onde Figma é overkill - pitch deck cliente, landing prototype, presentation interna, mockup rápido. Triggers - "pitch deck", "apresentação", "prototype web", "Claude Design", "one-pager", "landing page mock", "mockup rápido", "Canva".
---

# Rapid Prototyping — Pitch decks + prototypes rápidos

Pra casos onde **Figma é overkill** e você precisa entregar algo bonito em 30-60 min:

- Pitch deck pra cliente
- Prototype de landing page
- One-pager institucional
- Mockup pra demonstrar conceito
- Presentation interna

3 ferramentas: **Claude Design** + **Canva** + **GPT Image 2**.

---

## Pre-requisitos

- `brand-guideline-companion.md`
- Conta em pelo menos 1 das 3 ferramentas

## Próxima skill no workflow

Pode ser final OR handoff pra Figma se quer levar pra próximo nível.

---

## Os 3 casos onde rapid-prototyping ganha

### Caso 1 — Pitch deck (cliente / investidor)

```
QUANDO USAR:
- Apresentar conceito de campanha
- Pitch pra investidor
- Apresentação interna
- One-pager institucional

FERRAMENTA: Claude Design (claude.ai/design)

QUANDO NÃO: produção repetitiva (use Figma com templates)
```

### Caso 2 — Prototype de site/landing

```
QUANDO USAR:
- Mostrar como ficará landing antes de codar
- Iterar visualmente com cliente
- Explorar 3 versões diferentes rapidamente

FERRAMENTA: Claude Design

QUANDO NÃO: produção final (Figma + dev handoff)
```

### Caso 3 — Mock visual rápido

```
QUANDO USAR:
- Mockup de embalagem
- Visualização de conceito
- Quick-test ideias visuais

FERRAMENTA: Canva + GPT Image 2 + Claude Design
```

---

## Step 0 — Read context

```yaml
visual:
  palette: {...}
  typography:
    heading: "Cormorant"
    body: "Inter"
  logo: {...}
voice:
  permanent_adjectives: ["Calma", "Honesta", "Natural"]
```

---

## Step 1 — Define o que entregar

```
═══════════════════════════════════════
RAPID PROTOTYPING — Setup
═══════════════════════════════════════

1. O que precisa entregar?
   A) Pitch deck (apresentação)
   B) Prototype landing page
   C) One-pager institucional
   D) Mockup conceitual
   E) Outro

2. Audience da entrega:
   - Cliente externo
   - Investidor
   - Time interno
   - Imprensa

3. Tempo disponível:
   - 30 min (urgência)
   - 1-2h (médio)
   - 4-6h (caso queira polish)

4. Formato final:
   - PDF (pitch)
   - PNG slides (apresentação digital)
   - HTML (live preview de site)
   - PDF + HTML

5. Quantos slides/sections:
   - Pitch típico: 10-15 slides
   - One-pager: 1 página
   - Landing: 5-8 seções
```

---

## Caminho A — Pitch Deck via Claude Design

### Setup

```
═══════════════════════════════════════
CLAUDE DESIGN — Setup pitch deck
═══════════════════════════════════════

1. Acessa claude.ai/design (ou Claude Desktop com Design module)

2. Forneça brand context (1 vez por sessão):
   - Cola companion.md inteiro
   - Brand guidelines PDF se houver

3. Brief detalhado:
   "Cria pitch deck de [N] slides pra apresentar [contexto] 
   pra [audience].
   
   Brand context:
   [companion.md key sections]
   
   Tom: alinhado com brand voice [calma/honesta/natural]
   Paleta: [cores HEX]
   Tipografia: heading Cormorant + body Inter
   
   Estrutura desejada:
   1. Capa
   2. Sobre [marca]
   3. Insight
   4. Big Idea da proposta
   5. Conceito visual
   6. Storyboard (se aplicável)
   7. Calendário (se aplicável)
   8. Investimento
   9. Cronograma
   10. Próximos passos
   
   Layout: vertical 16:9, dark theme OR light theme conforme brand"

4. Claude Design gera proposta inicial (1-3 min)

5. Iteração:
   - "Slide 3 está confuso — simplifica"
   - "Cores do slide 5 não batem com brand"
   - "Adiciona slide entre 7 e 8 sobre métricas"
   - Até satisfeito

6. Export:
   - PDF (pra envio)
   - PNG por slide (pra apresentar)
   - Figma file (pra refinar)
```

### Template de pitch deck

```
SLIDE 1 — CAPA
[Visual: hero shot abstrato da brand]
[Title: Cormorant 80pt]
"Aurora — Spring 2026 Campaign"
[Subtitle: Inter 32pt]
"Proposta de campanha de lançamento"

SLIDE 2 — SOBRE AURORA
[Layout 2 columns]
LEFT: imagem brand
RIGHT:
"Aurora é skincare repensado.
5 ingredientes em 1 produto.
Sem ruído, sem mistério."

SLIDE 3 — INSIGHT
[Layout: 1 statement grande + supporting data]
"83% das mulheres usam 5+ produtos por dia."
"E saem mais cansadas que entraram."

SLIDE 4 — BIG IDEA
[Layout: text grande centralizado]
"Cuidado real, sem ruído."

SLIDE 5 — CONCEITO VISUAL
[Layout: moodboard 6 imagens em grid]
"Warm muted naturalistic"
"Editorial premium minimal"

SLIDE 6 — STORYBOARD (se aplicável)
[Layout: 5 frames horizontalmente]

SLIDE 7 — CALENDÁRIO 4 SEMANAS
[Layout: timeline visual]

SLIDE 8 — INVESTIMENTO
[Layout: 2 columns — itens + valores]

SLIDE 9 — CRONOGRAMA
[Layout: Gantt simplified]

SLIDE 10 — PRÓXIMOS PASSOS
[Layout: 3 bullets grandes]
"1. Aprovação até [data]
 2. Início produção [data]
 3. Lançamento [data]"

SLIDE 11 — OBRIGADA
[Visual: clean, brand logo grande]
```

---

## Caminho B — Prototype landing page via Claude Design

### Brief

```
═══════════════════════════════════════
CLAUDE DESIGN — Landing page prototype
═══════════════════════════════════════

Brief:
"Cria landing page mockup pra lançamento do [produto].

Brand context:
[companion.md]

Estrutura:
1. Hero — image fullbleed + headline + CTA
2. Sobre o produto (3 colunas com ícones)
3. Ingredientes (visual breakdown)
4. Como aplicar (3 passos)
5. Depoimentos (3 cards com foto + texto)
6. FAQ acordeão (5 perguntas)
7. CTA final + formulário inline
8. Footer

Mood: editorial premium
Paleta: [cores HEX]
Typography: Cormorant + Inter
Layout: clean, generous whitespace

Responsivo: desktop + mobile"

Claude Design gera mockup em 3-5 min.
Iteração: ajustes específicos por section.
Export: PNG do desktop + PNG do mobile + HTML (pra demo live).
```

---

## Caminho C — Mockup conceitual via Canva + GPT Image 2

### Setup

```
═══════════════════════════════════════
CANVA + GPT IMAGE 2 — Mockup rápido
═══════════════════════════════════════

USO COMBINADO:

1. GPT IMAGE 2 (via Claude):
   - Gera image base com texto preciso
   - Ex: "Mockup de embalagem com 'Aurora' em letras grandes 
     douradas sobre fundo cream, formato 4:5"
   - Output: PNG 1024×1024 ou 2048×2048

2. CANVA:
   - Importa PNG do GPT
   - Adiciona elementos brand (logo Aurora real, badge, etc.)
   - Mocks composição (produto em mão, em mesa, etc.)
   - Export final PDF/PNG

QUANDO USAR:
- Embalagem mockup
- Quick visual concept
- Material institucional simples

NUNCA SUBSTITUI:
- Trabalho de designer profissional
- Production-ready packaging design
```

---

## Step 2 — Aplicação brand consistente

Pra cada output (pitch deck, landing, mockup):

```
VOICE CHECK:
- Todos os textos no design respeitam Brand Voice?
- Vocabulary forbidden NÃO usado?
- Tom calmo/honesto/natural mantido?

VISUAL CHECK:
- Paleta aplicada conforme companion.md?
- Tipografia: Cormorant heading + Inter body?
- Spacing generoso (não cluttered)?
- Logo posicionado corretamente?

CONSISTENCY CHECK:
- Output coerente com Figma brand guidelines?
- Pitch deck "parece da Aurora"?
- Landing alinha com mood do moodboard?
```

---

## Step 3 — Refinamento iterativo

```
═══════════════════════════════════════
ITERAÇÃO — Pra cada output
═══════════════════════════════════════

Ronda 1 (10 min):
- Gera proposta inicial
- Avalia 60% nivel

Ronda 2 (15 min):
- Ajustes estruturais
- Cores corrigidas
- Tipografia consistente

Ronda 3 (10 min):
- Polish final
- Detalhes
- Approval

TOTAL: 30-45 min pra pitch deck
TOTAL: 45-60 min pra landing prototype
TOTAL: 15-30 min pra mockup conceitual
```

---

## Step 4 — Output: docs por caso

### Pitch deck:
- PDF (envio)
- PNG slides (apresentação)
- Notes pra apresentador

### Landing prototype:
- PNG desktop + mobile
- HTML preview (se Claude Design exporta)
- Brief pra developer (specs)

### Mockup conceitual:
- PNG final
- Composições alternativas se gerou várias

---

## Quando NÃO usar rapid-prototyping

```
USE FIGMA SE:
- Produção repetitiva (templates re-aproveitáveis)
- Design system rigoroso
- Brand consistency cross-projects
- Time grande colaborando
- Production-ready (não só mock)

USE RAPID-PROTOTYPING SE:
- Single use case
- Tempo apertado
- Exploração visual rápida
- Apresentação one-time
```

---

## Adaptação por modo

### VISUAL-ONLY
- Pitch deck MUITO visual (imagens grandes, pouco texto)
- Landing pages com hero imagery dominante

### VISUAL+COPY (padrão)
- Balanceado

### COPY-HEAVY
- Pitch decks com mais frases-chave
- One-pagers com texto denso
- Landing pages com seções educativas

---

## Armadilhas a evitar

- **Esperar trabalho final.** Claude Design é 70-80%. Resto refina manualmente.
- **Prompt vago.** "Faz pitch deck legal" → genérico. Brief detalhado.
- **Sem context.** Cola companion.md primeiro.
- **Não testar consistência.** Verifica visual + voice cross-slides.

---

## Output esperado

✅ Pitch deck / landing / mockup em formato final
✅ Brand consistency verificada
✅ Pronto pra apresentar OR handoff pra produção
✅ Tempo total: 30-60 min
