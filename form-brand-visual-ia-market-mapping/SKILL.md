---
name: form-brand-visual-ia-market-mapping
description: Mapeia mercado e concorrentes do nicho usando WebSearch real (sites, Instagram, Biblioteca de Anúncios Meta, Reclame Aqui). Identifica concorrentes em tiers, promessas saturadas a evitar, ângulos de copy esgotados, lacunas (oceano azul) e white space narrativo. Não é inferência — é pesquisa real. Output - dossiê market-mapping.md no vault + análise de 3 caminhos de diferenciação possíveis. Use SEMPRE após audience-research (sequência natural) OU quando usuário disser "mapeamento de mercado", "análise de concorrentes", "pesquisar nicho", "oceano azul", "lacunas de mercado", "diferenciação", "benchmarking", "meu mercado", "concorrência".
---

# Market Mapping — Pesquisa real de mercado

Mapeia mercado e concorrentes pra encontrar **oceano azul defensável** e gap emocional não tratado. Usa WebSearch + WebFetch pra pesquisa real (não inferência).

---

## Pre-requisitos

- `CLAUDE.md` da marca preenchido
- Preferencialmente `audience-research.md` já feito (informa quem é a audience)

## Próxima skill no workflow

`form-brand-visual-ia-product-research` (analisa produto próprio profundamente)
OU `form-brand-visual-ia-big-idea` (se pesquisas suficientes)

---

## Step 0 — Read brand context

Lê CLAUDE.md + audience-research.md (se existe):
- Categoria de produto
- Audience-alvo
- Marcas-símbolo que audience admira (do F1)
- Modo da marca

---

## Step 1 — Definir escopo

Pergunta:

```
═══════════════════════════════════════
MARKET MAPPING — Escopo
═══════════════════════════════════════

1. Categoria/nicho exato a mapear:
   [da CLAUDE.md, confirma]

2. Geografia da pesquisa:
   - Brasil
   - LATAM
   - Global
   - Mercado específico

3. Você já tem nomes de concorrentes diretos?
   Lista 3-5 que vê como similar:
   [aguarda]

4. Profundidade:
   - Rápido (5 concorrentes, 1h)
   - Médio (10 concorrentes + biblioteca Meta, 2-3h)
   - Completo (15+ concorrentes + Reclame Aqui + análise visual, 4-6h)
```

---

## Step 2 — Mapeamento por tiers

Concorrentes não são todos iguais. Classifica em 4 tiers:

### Tier 1 — Diretos premium
Mesmo posicionamento, mesma audience, preço similar.
Eles são sua **comparação direta**.

### Tier 2 — Diretos populares
Mesmo segmento, preço menor.
Mostram que existe **mercado de massa** na categoria.

### Tier 3 — Indiretos
Resolvem mesmo problema com **abordagem diferente**.
Ex: pra skincare premium, indiretos = derma estético, supplementação.

### Tier 4 — Aspiracionais (top global)
Marcas que sua marca aspira a se aproximar.
Ex: Aesop, Le Labo pra Aurora.

---

## Step 3 — Pesquisa real por concorrente

Pra cada concorrente identificado, coleta via WebSearch/WebFetch:

### A. Site oficial
- Página inicial (hero + proposta)
- Sobre (manifesto, founders)
- Produtos (catálogo + preços)
- Linguagem visual (paleta, tipografia)

### B. Instagram
- Bio (proposta resumida)
- Últimos 30 posts (estética + frequência)
- Stories highlights (categorias)
- Followers (escala)
- Engagement rate aprox

### C. Biblioteca de Anúncios Meta
URL: `https://www.facebook.com/ads/library/`

Pesquisa pelo nome da marca:
- Ads ativos
- Headlines recorrentes (ângulos testados)
- Visual de cada ad
- CTAs usados
- Duração de cada campanha

### D. Reclame Aqui
URL: `https://www.reclameaqui.com.br/`

Pesquisa pela marca:
- Volume de reclamações
- Tipos mais comuns (atendimento, produto, entrega)
- Tempo médio de resposta
- Reputação

**Reclamações revelam gaps que sua marca pode atacar.**

### E. Reviews (Trustpilot, Amazon, Yelp)
- Reviews 4★ e 2★ (mais reveladoras que 5★ ou 1★)

---

## Step 4 — Análise de promessas saturadas

Lista TODAS as promessas que concorrentes fazem:

```
SATURADAS (todos prometem isso — você NÃO pode usar):
- "Transformação em 30 dias"
- "Tecnologia exclusiva"
- "Premium quality"
- "Para você que merece o melhor"
- "Sem ruído"
- "Skincare honesto"

ÂNGULOS ESGOTADOS:
- "Founder mom started in kitchen"
- "Resultados reais de clientes"
- "Antes e depois"

LACUNAS (ninguém ataca):
- [gap 1]
- [gap 2]
- [gap 3]
```

**Sua Big Idea (próxima skill) vai mirar nas lacunas.**

---

## Step 5 — Análise visual cross-marcas

Cria tabela comparativa:

| Marca | Paleta dominante | Tipografia | Mood | Posicionamento visual |
|-------|------------------|------------|------|----------------------|
| Concorrente A | Warm muted | Serif | Premium quiet | Aesop-like |
| Concorrente B | Bright pastel | Sans modern | Playful | Glossier-like |
| Concorrente C | Monochrome | Industrial sans | Apothecary | Le Labo-like |
| ... | ... | ... | ... | ... |

**Identifica clusters visuais.** Sua marca quer estar em cluster único OU criar próprio.

---

## Step 6 — Identificar oceano azul

Cruza 3 análises:
- Promessas (verbal/messaging)
- Visuais (estética)
- Audience targeting (quem cada um foca)

Pergunta:

```
ONDE NINGUÉM ESTÁ?

Combinações possíveis:
- Promessa X + visual Y = território vazio?
- Audience subatendida + abordagem nova = oportunidade?
- Categoria adjacente + nosso ângulo = white space?
```

Lista 3 caminhos potenciais de diferenciação:

```
CAMINHO 1: [Nome do território]
Promessa: "..."
Visual: [descrição]
Audience: [perfil]
Por que vazio: [razão]
Risco: [se há risco]

CAMINHO 2: ...

CAMINHO 3: ...
```

Esses 3 caminhos viram **input da skill big-idea** (que vai escolher o vencedor).

---

## Step 7 — Documentar tudo

### Output: `[marca]/pesquisas/market-mapping.md`

```markdown
# Market Mapping — [Marca]
Data: [data]

## Resumo executivo
- Tamanho do mercado: [estimativa]
- N° de concorrentes mapeados: [N]
- Distribuição por tier: [breakdown]
- Oceano azul identificado: [resumo]

## Concorrentes — Tier 1 (Diretos premium)

### [Nome A]
- Site: [URL]
- Instagram: @handle (X followers)
- Posicionamento: "..."
- Promessas centrais: ["...", "..."]
- Linguagem visual: [descrição]
- Pontos fortes: [...]
- Vulnerabilidades: [...]
- Reclame Aqui: [resumo]

### [Nome B]
...

## Concorrentes — Tier 2 (Diretos populares)
...

## Concorrentes — Tier 3 (Indiretos)
...

## Concorrentes — Tier 4 (Aspiracionais)
...

## Promessas saturadas (não usar)
- "..."
- "..."

## Ângulos de copy esgotados
- "..."

## Lacunas identificadas (oceano azul)
- [gap 1]
- [gap 2]
- [gap 3]

## 3 Caminhos de diferenciação possíveis
### Caminho 1: [nome]
[detalhes]

### Caminho 2: [nome]
[detalhes]

### Caminho 3: [nome]
[detalhes]

## Análise visual cross-marcas
[Tabela comparativa]

## Implicações pra marca
- Posicionamento sugerido: [...]
- Visual a evitar: [cluster X, Y]
- Visual a explorar: [...]
- Tom diferenciador: [...]

## Fontes consultadas
- [link 1]
- [link 2]
```

### Update no `brand-guideline-companion.md`

Adiciona section:

```yaml
market_context:
  promessas_saturadas:
    - "Transformação em 30 dias"
    - "Premium quality"
    # NUNCA usar essas
  
  visual_clusters_to_avoid:
    - "Glossier pastel"
    - "Aesop minimal" # se já tem 5 marcas nesse cluster
  
  oceanic_blue_paths:
    - nome: "Caminho 1"
      promessa: "..."
      visual: "..."
  
  competitors_direct:
    - [marca A]
    - [marca B]
```

---

## Adaptação por modo

### VISUAL-ONLY
Análise visual cross-marcas é o **foco principal**. Promessas verbais menos importantes. Identifica clusters visuais saturados.

### VISUAL+COPY (padrão)
Análise balanceada — visual + verbal igualmente importantes.

### COPY-HEAVY
Análise verbal (promessas, manifestos, headlines) é o **foco principal**. Visual secundário.

---

## Armadilhas a evitar

- **Inferir concorrentes.** Pesquisa REAL via WebSearch.
- **Pular Reclame Aqui.** Reclamações = ouro pra encontrar gaps.
- **Pular biblioteca de ads Meta.** Mostra o que concorrentes realmente investem.
- **Confundir tier 1 com tier 4.** Aspiracional ≠ direct competitor.
- **Ignorar análise visual.** Cluster visual saturado = vermelho mar.
- **Não documentar fontes.** Pesquisa não-citável vira invenção.

---

## Output esperado

✅ `[marca]/pesquisas/market-mapping.md` completo
✅ Section `market_context` no `brand-guideline-companion.md`
✅ 3 caminhos de diferenciação prontos pra `big-idea`
✅ Lista de promessas saturadas (a evitar)
✅ Próxima skill: `product-research` OU `big-idea`
