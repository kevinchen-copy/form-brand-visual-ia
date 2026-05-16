---
name: form-brand-visual-ia-brand-ad-replicator
description: Gera novos ads estáticos replicando templates de design existentes do brand folder. Funciona com qualquer marca seguindo folder structure padrão. Mede designs de referência pixel-a-pixel, swap nos product photos e new copy correta, depois exporta PNGs finalizados em dimensões Instagram + social exatas. Produz Feed (1:1), Story (9:16), Landscape (16:9). Lê brand-guideline-companion.md pra preservar voice. Use SEMPRE quando cliente quiser gerar novos ads replicando templates de design existentes do brand folder. Triggers - "create new ads from my templates", "generate ads from my brand folder", "replicate my ad design with new copy", "make new ads for [brand]", "use my design-examples to build ads", ou variações. Também acione quando usuário upload reference designs ou mencionar brand folder structure com design-examples dentro.
---

# Brand Ad Replicator — form-brand-visual-ia

Esta skill gera novos ads estáticos replicando templates de design existentes do brand folder do cliente. Mede os reference designs pixel-by-pixel, troca pelos product photos corretos e novas copies, depois exporta PNGs finalizados nas dimensões exatas de Instagram e social.

A skill trabalha com qualquer brand que siga a folder structure padrão. Produz formatos Feed (1:1), Story (9:16), e Landscape (16:9).

Esta é a skill clonada do Brand AI Claude Course (`brand-ad-replicator`), refinada pra aplicar Brand Voice do `brand-guideline-companion.md`.

---

## Pre-requisitos

- Brand folder seguindo estrutura padrão (ver abaixo)
- Python disponível (rodar via Bash)
- `brand-guideline-companion.md` (recomendado pra preservar voice nas copies)

## Próximas skills no workflow

- Publicação direta nas plataformas
- `form-brand-visual-ia-platform-adaptation` (se quer ajustes pra outras plataformas)

---

## Folder structure obrigatória

O brand folder deve seguir esta estrutura:

```
brand-folder/
├── brand-colors/         # hex codes ou color palettes
├── brand-guidelines/     # PDF ou image guidelines
├── design-examples/      # reference ads a replicar, agrupados por Ad Set
│   ├── Ad Set 1/         # one-line campaign templates
│   │   ├── 1_1 Template one line.jpg
│   │   ├── 9_16 T1 one line.jpg
│   │   └── Landscape Template one line.jpg
│   ├── Ad Set 2/         # two-lines campaign, etc.
│   └── Ad Set N/
├── elements/             # gráficos decorativos e ícones
├── fonts/                # brand fonts (.ttf ou .otf)
├── logo/
│   ├── Logo White.png    # white version pra fundos dark/colored
│   └── Logo Dark.png     # dark version pra fundos light
├── product/              # product photography, uma folder por produto
│   ├── [Product Name A]/
│   │   ├── [Product Name A] Stone shot/
│   │   │   ├── 1-1_[Product].jpg          # Feed 1:1 (1080×1080)
│   │   │   ├── 9-16_[Product].jpg         # Story 9:16 (1080×1920)
│   │   │   └── Landscape_[Product].jpg    # Landscape (1080×566)
│   │   └── [Product Name A] Lifestyle shot/
│   │       └── ...
│   └── [Product Name B]/
└── textures/             # background textures
```

Se folder ou file faltando, **para e pede ao cliente upload no Cowork** ou adicionar no folder correto antes de continuar.

---

## Inputs a coletar

Pergunte qualquer coisa faltante:

- [ ] **Brand folder path** (raiz do brand-folder)
- [ ] **Qual Ad Set** usar como template (ex: "Ad Set 1")
- [ ] **Qual produto** featuring (ex: "Arch Ring")
- [ ] **Qual shot variant** (ex: "Stone shot")
- [ ] **Nova copy** — headline + body
- [ ] **Output folder** onde salvar PNGs

---

## Workflow

### Step 1 — Validar brand folder

Scan da folder conectada e verifica:

```
✓ design-examples/[Ad Set X]/ existe
✓ 1_1, 9_16, Landscape templates presentes
✓ product/[Product Name]/[Shot variant]/ existe
✓ 1-1_, 9-16_, Landscape_ PNGs/JPGs presentes
✓ logo/Logo White.png + logo/Logo Dark.png
✓ fonts/ tem .ttf ou .otf
✓ brand-colors/ definidos
```

Se algo faltando:

```
⚠️ Brand folder incompleta:
- ❌ design-examples/Ad Set 2/ não encontrada
- ✓ design-examples/Ad Set 1/ OK
- ❌ product/Arch Ring/Stone shot/Landscape_ArchRing.jpg faltando

Por favor adiciona arquivos faltantes ou aponta caminho correto.
```

### Step 2 — Medir templates de referência pixel-by-pixel

Pra cada template (1:1, 9:16, Landscape) do Ad Set escolhido:

```python
from PIL import Image

template = Image.open("design-examples/Ad Set 1/1_1 Template one line.jpg")
width, height = template.size

# Identifica posições:
# - Logo position (canto superior, geralmente)
# - Headline text area (centro ou topo)
# - Body text area (se houver)
# - Product image area (centro ou full bleed)
# - Background color
```

Lê:
- Cor de background
- Posicionamento do logo
- Posicionamento das text areas
- Font size aproximado
- Padding/margins

### Step 3 — Validar copy contra Brand Voice

Se companion.md presente, valida headline + body:

- Forbidden words? (incrível, transformador, etc.)
- Comprimento adequado pra template (one-line vs two-line)
- Tom alinhado?

Sugere ajustes se necessário.

### Step 4 — Decidir light vs dark theme

Baseado no template de referência:
- Background claro → usa Logo Dark + texto escuro
- Background escuro → usa Logo White + texto claro

Ou se cliente especificou explicitamente.

### Step 5 — Construir ad

Pra cada aspect ratio (1:1, 9:16, Landscape):

```python
from PIL import Image, ImageDraw, ImageFont

# 1. Carregar product image correto pra esse aspect ratio
product = Image.open(f"product/{product_name}/{shot}/{ratio}_{product_name}.jpg")

# 2. Carregar logo correto (white ou dark)
logo = Image.open(f"logo/Logo {theme}.png")

# 3. Carregar font
font_path = "fonts/brand-font.ttf"
font = ImageFont.truetype(font_path, size_calculated)

# 4. Compor:
#    a. Background (cor ou textura)
#    b. Product (em posição medida)
#    c. Logo (em posição medida)
#    d. Headline (em posição medida com font correta)
#    e. Body (se houver)
#    f. Elements decorativos (se template usar)

# 5. Save no output folder
final.save(f"{output_folder}/{product_name}-{ratio}-{campaign}.png")
```

### Step 6 — Apresentar resultados

```
═══════════════════════════════════════
✅ ADS REPLICADOS

Template usado: Ad Set 1 (one-line)
Produto: Arch Ring (Stone shot variant)
Theme: Light
Copies aplicadas:
  - Headline: "Crafted to last."
  - Body: (none — one-line template)

PNGs gerados:
- output/arch-ring-1-1-spring-campaign.png (1080×1080)
- output/arch-ring-9-16-spring-campaign.png (1080×1920)
- output/arch-ring-landscape-spring-campaign.png (1080×566)

Localização: [path absoluto]

Próximos passos:
1. Revisa os 3 PNGs
2. Aprova ou pede ajuste (font size, posição, copy)
3. Publica nas plataformas
4. Opcional: Roda form-brand-visual-ia-platform-adaptation pra outras adaptações
═══════════════════════════════════════
```

---

## Naming convention

Output PNGs nomeados como:

```
[product-name-kebab]-[aspect-ratio]-[campaign-name].png

Exemplos:
- arch-ring-1-1-spring-campaign.png
- arch-ring-9-16-spring-campaign.png
- arch-ring-landscape-spring-campaign.png
```

Consistente, descritivo, fácil de filtrar.

---

## Dimensões exatas

- **Feed 1:1** → 1080 × 1080
- **Story 9:16** → 1080 × 1920
- **Landscape 16:9** → 1080 × 566 (alt: 1920 × 1080 se cliente preferir)

Outros aspect ratios se cliente pedir:
- **Pinterest 2:3** → 1080 × 1620
- **Email header** → 600 × 300

---

## Tratamento de edge cases

### Caso 1 — Product image de aspect ratio errado

Se cliente forneceu apenas 1:1 mas precisamos 9:16:

```
⚠️ Product image 9-16_ArchRing.jpg não encontrado.
Tenho: 1-1_ArchRing.jpg (1080×1080)

Opções:
A) Crop / extend o 1-1 pra fazer 9:16 (perde qualidade)
B) Gerar nova versão via fal.ai com Brand Photography Signature
   (chama form-brand-visual-ia-fal-image-gen)
C) Cliente fornece versão correta

Qual?
```

### Caso 2 — Font não encontrada

Se brand font não está em `fonts/`:

```
⚠️ Brand font não encontrada em fonts/.
Templates de referência sugerem usar [font detected].

Opções:
A) Usa font do sistema mais próxima
B) Cliente fornece .ttf/.otf

Qual?
```

### Caso 3 — Cor não definida

Se template tem background colorido mas brand-colors/ não tem o HEX exato:

```
Background do template tem cor #X.

Brand-colors/ não tem essa cor exata. Mais próxima: #Y.

Usar #X (do template) ou #Y (da brand)?
```

---

## Adaptação por modo da marca

### VISUAL-ONLY
- Copy mínima (1 frase max)
- Foco no product shot premium
- Light + Dark opcional

### VISUAL+COPY
- Padrão
- Headline + body

### COPY-HEAVY
- Headline + body + sub-body se template suporta
- Múltiplas variantes de copy testáveis

---

## Quando combinar com outras skills

### Sequência típica de campanha:

```
1. form-brand-visual-ia-fal-image-gen
   Gera product shots no Brand Photography Signature
   Outputs: product/[Product]/[Shot]/[ratio]_[Product].jpg
   
2. form-brand-visual-ia-brand-ad-replicator
   Replica templates com novos products + copies
   Outputs: PNGs finalizados nos 3 aspect ratios
   
3. form-brand-visual-ia-figma-localize
   (opcional) Cria versões multi-idioma se necessário
   
4. Publicação manual
```

---

## Exemplos completos

### Exemplo 1 — Arch Ring ad

**Usuário:** "Replica meu Ad Set 1 pro Arch Ring Stone shot. Headline 'Crafted to last.', sem body."

**Skill:**
1. Valida brand folder Arch Ring tem Stone shot variant
2. Mede templates Ad Set 1 (1:1 + 9:16 + Landscape)
3. Detecta theme light
4. Gera 3 PNGs com product + logo dark + headline
5. Outputs nomeados

### Exemplo 2 — Multi-product

**Usuário:** "Faz replicator pra Arch Ring + Diamond Pendant + Pearl Necklace, mesma campanha Spring 2026"

**Skill:**
1. Loop pra 3 products
2. Pra cada, gera os 3 aspect ratios
3. Total: 9 PNGs
4. Output nomeados por produto

### Exemplo 3 — Folder incompleta

**Usuário:** "Replica ad pra Watch X"

**Skill:**
1. Detecta product/Watch X/ não existe
2. Avisa:
   ```
   Product folder pra Watch X não encontrada.
   Opções:
   A) Adicionar Watch X photos no brand folder
   B) Gerar Watch X shots via fal.ai com Photography Signature
   C) Cancelar
   ```
3. Aguarda decisão

---

## Armadilhas a evitar

- **NÃO replicar template sem medir pixel-by-pixel.** Posições erradas quebram coesão.
- **NÃO usar font do sistema arbitrária.** Sempre brand font da pasta `fonts/`.
- **NÃO ignorar Logo White vs Dark.** Tema correto pra background correto.
- **NÃO produzir aspect ratio errado.** Dimensões exatas obrigatórias.
- **NÃO usar copy não-validada.** Sempre checa Forbidden Words da brand.
- **NÃO gerar 50 PNGs de uma vez.** Limite ~10-15 por execução. Acima disso, sugere quebrar em batches.

---

## Output esperado

✅ PNGs finalizados no output folder
✅ Dimensões exatas (1080×1080, 1080×1920, 1080×566)
✅ Naming descritivo
✅ Brand voice preservada nas copies
✅ Logo correto pra theme
✅ Mensagem clara com próximos passos
