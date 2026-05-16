---
name: form-brand-visual-ia-brand-faces
description: Conduz definição das Brand Faces da marca (rostos humanos visíveis no conteúdo) — 4 caminhos - A) fundadora real é rosto, B) 1-3 Brand Faces criadas via IA, C) múltiplas por contexto, D) sem rosto humano (só produto/cenários). Pra caminhos IA, conduz descrição em 10 dimensões (idade, traços físicos sem etnia explícita, cabelo, olhos, pele, expressão default, estilo, postura, gestual, contexto) + URL master gerada via Higgsfield/fal.ai. Estrutura 3 Brand Faces (Core/Adjacente/Diversidade). Inclui regras de uso. Output - Brand Faces documentadas + URLs master + Components no Figma. SKILL OPCIONAL no modo COPY-HEAVY (founder real geralmente). Use depois de color-palette. Triggers - "brand faces", "rosto da marca", "modelo da marca", "avatar IA", "character consistency", "fundadora aparece", "sem rosto humano".
---

# Brand Faces — Rostos humanos da marca

Define quem aparece visualmente no conteúdo. 4 caminhos possíveis:

- **A) Fundadora/pessoa real é o rosto** (Glossier, Patagonia founders)
- **B) 1-3 Brand Faces criadas via IA** (modelos consistentes — fal.ai/Higgsfield)
- **C) Múltiplas Brand Faces por contexto** (Core + Adjacente + Diversidade)
- **D) Sem rosto humano** (foco em produto/cenários — Aesop store often)

---

## Pre-requisitos

- `figma-setup` + `moodboard` + `color-palette` rodaram
- `positioning` finalizado
- Decisão sobre modo da marca (visual-only/v+c/copy-heavy)
- fal.ai key OR Higgsfield acesso (se caminho B/C)

## Próxima skill no workflow

`form-brand-visual-ia-photography-signature` (define lighting/camera que envolve as Faces)
OU `form-brand-visual-ia-voice-tone`

---

## Step 0 — Verifica se aplica

```
═══════════════════════════════════════
BRAND FACES — Quem aparece?
═══════════════════════════════════════

A marca quer ter rostos humanos visíveis em conteúdo?

4 caminhos:

A) FUNDADORA / PESSOA REAL
   Você (ou fundador real) aparece no conteúdo.
   Exemplos: founder-led brands (Patagonia, Glossier early)
   Pros: autenticidade real
   Contras: dependência de você gravar/fotografar

B) BRAND FACE(S) IA — 1 a 3 modelos consistentes
   Define modelo(s) via descrição + gera via fal.ai/Higgsfield.
   Exemplos: marcas que precisam consistência sem expor founder
   Pros: controle visual total, gera quando precisa
   Contras: ética IA (disclose se necessário), generations imperfeitas

C) MÚLTIPLAS BRAND FACES POR CONTEXTO
   Core (aparece 60%+) + Adjacente (20-30%) + Diversidade (10-20%)
   Pros: representação ampla, contextos variados
   Contras: complexidade de manter consistência

D) SEM ROSTO HUMANO
   Foco em produto, cenários, mãos, partes do corpo.
   Exemplos: Aesop product shots, food editorials, joalherias
   Pros: foco no produto, mood elevado
   Contras: menos conexão emocional direta

Qual caminho escolhe?
```

---

## Caminho A — Fundadora real

Se A:

### Step 1A — Setup founder presence

```
Decisões:

1. Quão presente founder aparece?
   - Em todos posts (founder-led 100%)
   - Em posts BTS apenas (founder em momento específico)
   - Em peças especiais (manifesto, anúncios)

2. Estilo de aparição:
   - Sempre no contexto da marca (estúdio, processo)
   - Lifestyle (em vida real)
   - Editorial (poses deliberadas)

3. Tem fotos profissionais de você?
   - Sim, em ótima qualidade — usamos
   - Sim, mas raster low-res — pedimos sessão
   - Não — agendar sessão fotográfica

4. Roupa / estilo padrão da founder em peças?
   - Define armário consistente (linen tones, etc.)
```

### Step 2A — Captura referências

Coleta 5-10 fotos da founder que servem como reference master pra IA gerar variações:
- Frontal limpo (pra Brand Face Core)
- Profile (lateral)
- 3/4 view
- Lifestyle real (sorrindo, sério, neutro)
- Em context da marca (estúdio)

### Step 3A — Documenta no Figma + companion.md

```yaml
brand_faces:
  mode: "founder_real"
  
  founder:
    name: "[Nome]"
    role: "Founder + Brand Face"
    appearance_frequency: "100% (founder-led) OR 30% (BTS apenas)"
    reference_photos:
      - "URL foto 1"
      - "URL foto 2"
    style_guide:
      typical_clothing: "linen tones, neutral"
      typical_setting: "estúdio + outdoor natural"
      typical_expression: "calm, slight smile"
```

Cria Section "Brand Faces / Founder" na Assets page do Figma com fotos master.

---

## Caminho B — Brand Face IA

Se B:

### Step 1B — Define quantas

```
Quantas Brand Faces IA queremos?

1 Brand Face (Core)
   - Aparece em 100% das peças com pessoa
   - Mais simples manter consistência
   - Risco: pode parecer repetitivo

2 Brand Faces (Core + Adjacente)
   - Core 70% + Adjacente 30%
   - Rotação saudável
   - Recomendado pra marcas com volume médio

3 Brand Faces (Core + Adjacente + Diversidade)
   - Core 60% + Adjacente 25% + Diversidade 15%
   - Representação ampla
   - Recomendado pra marcas com audience diversa OR alto volume
```

### Step 2B — Pra cada Brand Face, define em 10 dimensões

```
BRAND FACE CORE — Definição detalhada

1. IDADE
   ex: "Início dos 40s" / "Mid 30s" / "Late 20s"

2. TRAÇOS FÍSICOS (sem etnia explícita)
   Importante: descreve TRAÇOS visíveis, não rótulo étnico
   (rótulos étnicos causam content restrictions em Midjourney)
   
   ✓ "Cabelo castanho ondulado shoulder-length"
   ✓ "Pele clara com sardas leves"
   ✓ "Traços europeus"
   ✗ "Mulher branca" (vago)
   ✗ "Mulher latina" (pode bloquear)

3. CABELO
   - Cor: castanho médio, loiro escuro, preto, ruivo
   - Tipo: liso, ondulado, cacheado, crespo
   - Comprimento: shoulder-length, long, short, pixie
   - Style typical: solto natural, low bun, pigtail

4. OLHOS
   Cor: warm hazel, brown, blue, green
   Shape: almond, round, hooded

5. PELE
   Tone: light, medium, olive, dark
   Texture: clear, with subtle freckles, neutral

6. EXPRESSÃO DEFAULT
   "Calm with subtle smile" / "Confident neutral" / "Warm and inviting"

7. ESTILO DE ROUPA
   Paleta: neutros (linen, cream, off-white)
   Style: minimalist editorial, oversized natural fabrics
   ex: "Linen shirts, cream tones, no jewelry"

8. POSTURA
   "Ereta natural, mãos relaxadas, ombros baixos"
   "Slight forward lean, engaged"

9. GESTUAL
   "Movimentos lentos deliberados"
   "Gestos calmos, mãos visíveis"

10. CONTEXTO TYPICAL
    Ambiente onde a Face aparece geralmente
    ex: "Interior natural com window light"
    ex: "Outdoor warm tones, golden hour"
```

### Step 3B — Gerar Master Image via IA

Roda `form-brand-visual-ia-fal-image-gen` com prompt detalhado:

```
Prompt pra Brand Face Core (Aurora exemplo):

"Editorial portrait of a woman in her early 40s, wavy brown 
shoulder-length hair, light freckled skin, warm hazel eyes, 
calm confident expression with subtle smile, wearing cream linen 
shirt with no jewelry, ereta natural posture, hands relaxed, 
interior natural environment with soft window light from upper-left,
warm afternoon temperature 3500K, naturalistic color grading,
85mm portrait lens at f/2.0, eye-level, medium shot from shoulders 
up, contemplative mood, no logos or text"
```

Gera 4-6 variações. Escolhe a melhor.

**Salva URL master image.** Essa é referência pra TODAS as gerações futuras (via cref no Midjourney ou reference image no fal.ai edit endpoint).

### Step 4B — Cria Components no Figma

Na page "Assets", section "Brand Faces":

- Component "Brand Face Core" (com imagem)
- Component "Brand Face Adjacente" (se houver)
- Component "Brand Face Diversidade" (se houver)

Cada Component tem:
- Master image
- Descrição 10 dimensões
- URL no companion.md

### Step 5B — Define regras de uso

```
REGRAS DE USO

Brand Face Core (60-70% das peças com pessoa):
- Peças âncora do mês (lançamento, big stories)
- Aparições standalone (não em group)
- Sempre olha pra câmera OR off-frame, nunca pra outro modelo

Brand Face Adjacente (20-30%):
- Variações pra evitar saturação
- Mesma marca visual, traços ligeiramente diferentes
- Pode aparecer junto com Core (group shots)

Brand Face Diversidade (10-20%):
- Garante representação ampla
- Traços diferentes (idade, etnia visual, body type)
- Aparições em contextos comunitários
```

---

## Caminho C — Múltiplas Brand Faces

Combinação de B com 3 faces.

Mesmo processo, repete pra 3 personas. Cada uma com 10 dimensões + master URL.

---

## Caminho D — Sem rosto humano

Se D:

### Step 1D — Define foco visual

```
Marca SEM rosto humano. Foco visual em:
- Produto isolado (Aesop-style)
- Hands only (mãos manipulando produto)
- Cenários da marca (estúdio, loja, processo)
- Texturas / materiais
- Detalhes (close-ups arquiteturais)

Style references:
- [marca admirada A] — só produto
- [marca admirada B] — partes do corpo (mãos, costas)
```

### Step 2D — Documenta decisão

```yaml
brand_faces:
  mode: "no_human"
  
  visual_focus:
    - "Product isolated shots"
    - "Hands manipulating product"
    - "Brand spaces (atelier, store)"
    - "Textures and materials close-ups"
  
  style_references:
    - "Aesop product photography"
    - "Le Labo store interiors"
  
  exception_rules:
    - "Brand Face entra em peças especiais (manifesto founder)"
    - "Group shots em eventos"
    - "Caso a caso, mas regra default = no human face"
```

---

## Step 6 — Frame "Brand Faces" na Brand Guidelines

Frame visual mostrando:

```
┌──────────────────────────────────────────────┐
│  BRAND FACES                                 │
├──────────────────────────────────────────────┤
│                                              │
│  Mode: [Founder / Brand Faces IA / Múltiplas]│
│  / No human]                                 │
│                                              │
│  BRAND FACE CORE                             │
│  [imagem master]                             │
│  - Idade: Início dos 40s                     │
│  - Cabelo: castanho ondulado                 │
│  - Expressão: calm with subtle smile         │
│  - Estilo: linen cream tones                 │
│  - Uso: 60-70% das peças com pessoa          │
│                                              │
│  BRAND FACE ADJACENTE                        │
│  [imagem]                                    │
│  - [10 dimensões]                            │
│  - Uso: 20-30%                               │
│                                              │
│  BRAND FACE DIVERSIDADE                      │
│  [imagem]                                    │
│  - [10 dimensões]                            │
│  - Uso: 10-20%                               │
│                                              │
│  REGRAS DE USO                               │
│  - Quando Core aparece                       │
│  - Quando rotacionar                         │
│  - Quando NÃO usar pessoa                    │
│                                              │
│  COMO GERAR CONSISTENTE                      │
│  - URL master image (cref)                   │
│  - Photography Signature aplicada            │
│  - 85mm portrait, f/2.0                      │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Step 7 — Update companion.md

```yaml
brand_faces:
  mode: "core_adjacent_diversity" # OR "founder_real" / "no_human"
  
  core:
    master_url: "https://[URL imagem master Aurora Brand Face Core]"
    description: "..."
    ten_dimensions:
      age: "Início dos 40s"
      physical_traits: "wavy brown shoulder-length hair, light freckled skin"
      eyes: "warm hazel"
      skin: "clear with subtle freckles"
      expression_default: "calm with subtle smile"
      clothing_style: "linen and cotton in neutral tones, no jewelry"
      posture: "ereta natural, mãos relaxadas"
      gestual: "slow deliberate movements"
      context_typical: "interior natural with window light"
    use_percentage: 60-70
  
  adjacent:
    master_url: "..."
    description: "..."
    use_percentage: 20-30
  
  diversity:
    master_url: "..."
    description: "..."
    use_percentage: 10-20
  
  generation_workflow:
    primary_tool: "fal.ai Nano Banana 2 (edit endpoint)"
    reference: "Always use master_url as reference image"
    photography_signature: "Apply from companion.md photography_signature"
  
  usage_rules:
    - "Core para peças âncora do mês"
    - "Adjacent pra variações"
    - "Diversity pra representação"
    - "No human em peças focadas em produto"
```

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Brand Faces detalhadíssimas (todas 10 dimensões + variações de ângulo)
- Recomendado caminho B ou C
- Multiple master images por Face (frontal + profile + 3/4)

### VISUAL+COPY
- Caminho B (2 Faces) ou C (3 Faces) padrão

### COPY-HEAVY
- Caminho A geralmente (founder real)
- Brand Faces IA secundárias
- OR caminho D (sem rosto — texto é protagonista)

---

## Considerações éticas

### Brand Faces IA precisam de cuidado:

1. **Não imitar pessoa real específica.** Use traços genéricos.
2. **Disclose se necessário.** Pra marca premium ética, comunica que modelo é IA em algum momento.
3. **Não use Brand Face IA pra "vender" como real pessoa.** Em depoimentos / testimoniais, usa pessoa real.
4. **Diversidade real.** Brand Face Diversidade não é tokenismo — incluir genuinamente.
5. **Audience consciente.** Hoje audience reconhece IA. Não esconda.

---

## Armadilhas a evitar

- **Etnia explícita no prompt.** Bloqueia Midjourney/fal.ai. Use traços visuais.
- **Brand Face única.** Saturação rapidamente. Mínimo 2 pra rotação.
- **Inconsistência entre gerações.** Sempre use master URL como reference.
- **Disclose ausente em IA.** Tendência futura: regulação exige disclose.
- **Pular Brand Faces.** Marca sem rosto humano OK (caminho D), mas é decisão consciente.

---

## Output esperado

✅ Brand Faces definidas (1, 2, 3 OR explicitly no human)
✅ Master image URLs salvas (se IA)
✅ 10 dimensões documentadas por Face
✅ Components Figma criados na Assets page
✅ Frame "Brand Faces" na Brand Guidelines
✅ Section `brand_faces` no companion.md completa
✅ Regras de uso definidas
✅ Próxima skill: `photography-signature`
