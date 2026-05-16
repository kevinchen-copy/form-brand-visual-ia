---
name: form-brand-visual-ia-fal-image-gen
description: Gera imagens via fal.ai (Nano Banana 2) usando dois endpoints — text-to-image (sem refs) ou image-to-image edit (com refs). Lê brand-guideline-companion.md primeiro pra puxar Photography Signature + paleta + Brand Face URLs. Output - PNG salvo no vault com naming descritivo. Use SEMPRE quando o usuário disser "generate an image", "create an image", "Nano Banana", "fal.ai image", "make me a picture", ou der prompt e quer virar visual. Também acione quando há prompt + reference image (product shot, model). Esta skill é a única forma de gerar imagens via fal.ai no sistema.
---

# fal.ai Image Generation — Nano Banana 2

Esta é a skill clonada do Brand AI Claude Course (`fal-image-gen`), refinada pra ler `brand-guideline-companion.md` da marca automaticamente e aplicar Photography Signature.

Você gera imagens usando fal.ai Nano Banana 2. O usuário dá um prompt — você cuida do resto. Uploads, CDN URLs, model calls, downloads, file naming. Tudo roda em background. Usuário recebe só a imagem final.

---

## Pre-requisitos

- `FAL_KEY` configurada como variável de ambiente
- `brand-guideline-companion.md` da marca (opcional mas altamente recomendado)
- Diretório `outputs/` ou similar no vault da marca

## Próxima skill no workflow

Depois de gerar imagens:
- `form-brand-visual-ia-figma-ad-builder` (se for pra montar ads no Figma)
- `form-brand-visual-ia-video-generation` (se vai animar imagem)
- `form-brand-visual-ia-edicao-capcut` (se vai compor com texto/áudio)

---

## Step 0 — Read brand context

Antes de gerar, ler `brand-guideline-companion.md`:

```
Procura em:
1. ./brand-guideline-companion.md
2. ../brand-guideline-companion.md
3. Pasta da marca atual
```

Extrai:
- **Photography Signature** (lighting + camera + grading + composition)
- **Color palette** (HEX codes)
- **Brand Faces URLs** (se houver pessoa na imagem)
- **Mode** (visual-only / visual-copy / copy-heavy)
- **Forbidden vocabulary visual** (se documentado)

Se companion.md existe, **aplica automaticamente** sem perguntar ao usuário.

---

## Context técnico — endpoints fal.ai

Esta skill usa 2 endpoints:

### 1. Text-to-Image
```
fal-ai/nano-banana-2
```
Use quando: prompt apenas, sem imagens de referência.

### 2. Image-to-Image (Edit)
```
fal-ai/nano-banana-2/edit
```
Use quando: usuário fornece imagens (product shots, modelo, scenes).

**Como decidir:**
- Só prompt → `nano-banana-2`
- Tem arquivo local OU "use this image" OU "edit this" → `nano-banana-2/edit`

---

## Rules (regras invioláveis)

- **Nunca assumir resolução.** Sempre perguntar: "1K, 2K ou 4K?" — exceto se usuário já disse.
- **Default format:** PNG. Só pergunta formato se usuário parece se importar.
- **Default num_images:** 1. Gera mais só se pedido.
- **Sempre salvar com nomes descritivos em kebab-case.** Baseado no conteúdo, não genérico. 
  - ✓ `aurora-serum-hero-shot-warm-tones.png`
  - ✗ `output-1.png`
- **Nunca pula CDN upload.** Arquivos locais devem ir por `fal_client.upload_file()` antes de virar input do modelo.
- **FAL_KEY obrigatória.** Se não estiver no env, instruir usuário a configurar:
  ```bash
  export FAL_KEY="your-key-here"
  ```
- **Prompts específicos e técnicos.** Inclui lighting, camera, lens, composição. Sem poesia vaga.

---

## Workflow completo

### Step 1 — Determinar endpoint

Pergunta-se internamente:
- Há arquivo/imagem fornecido? → `edit`
- Apenas texto? → `nano-banana-2`

### Step 2 — Coletar inputs faltantes

Inputs obrigatórios:
- **Prompt** (do usuário, já dado)
- **Resolução** (perguntar se não disse)
- **Num imagens** (default 1)
- **Imagens de referência** (se endpoint = edit)

### Step 3 — Aplicar Brand Photography Signature

Se companion.md existe e prompt do usuário **não contradiz**, automaticamente prepend:

```
[Photography Signature do companion.md], [prompt do usuário]
```

Exemplo:
- Usuário: "perfume bottle on wooden surface"
- Companion: "Editorial photography, warm muted palette, soft window light from upper-left..."
- Final: "Editorial photography, warm muted palette (terracotta, sand, cream), soft window light from upper-left diffused through sheer linen, 100mm macro at f/4, slight high angle, perfume bottle on wooden surface"

**Confirma com usuário** antes de rodar:

> "Vou rodar este prompt enriquecido com Photography Signature da marca:
> [prompt enriquecido]
> Resolução: [X]
> 
> Confirma?"

### Step 4 — Upload de references (se edit endpoint)

Pra cada arquivo de referência local:

```bash
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
url = fal_client.upload_file('/path/to/reference.png')
print(url)
"
```

Salva URLs retornadas.

### Step 5 — Rodar geração

#### Text-to-image:

```bash
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
handler = fal_client.submit(
    'fal-ai/nano-banana-2',
    arguments={
        'prompt': 'PROMPT_AQUI',
        'image_size': '4K',  # ou 1K, 2K, 4K
        'num_images': 1
    }
)
result = handler.get()
print(result)
"
```

#### Image-to-image (edit):

```bash
FAL_KEY="$FAL_KEY" python3 -c "
import fal_client
handler = fal_client.submit(
    'fal-ai/nano-banana-2/edit',
    arguments={
        'prompt': 'PROMPT_AQUI',
        'image_urls': ['URL1', 'URL2'],
        'image_size': '4K',
        'num_images': 1
    }
)
result = handler.get()
print(result)
"
```

### Step 6 — Download resultado

URL retornado vira download:

```bash
curl -o /caminho/output/[nome-descritivo].png "[URL_RESULTADO]"
```

### Step 7 — Apresentar ao usuário

```
═══════════════════════════════════════
✅ IMAGEM GERADA

Arquivo: aurora-serum-hero-shot-warm-tones.png
Localização: [caminho completo]
Resolução: [X]
Modelo: Nano Banana 2 (fal.ai)
Endpoint: text-to-image OR edit

[Photography Signature aplicada do companion.md]

Próximos passos sugeridos:
- Aprovou? Posso animar com form-brand-visual-ia-video-generation
- Quer variações? Roda novamente com prompt ajustado
- Vai pra ad? Aciona form-brand-visual-ia-figma-ad-builder
═══════════════════════════════════════
```

---

## Exemplos completos

### Exemplo 1 — Text-to-image básico

**Usuário:** "Cria imagem do meu serum facial na bancada"

**Skill:**

1. Lê companion.md → Photography Signature da Aurora
2. Pergunta resolução: "1K, 2K ou 4K?"
3. Confirma prompt enriquecido:
   ```
   Editorial product photography, warm muted color palette 
   (terracotta, sand, cream), soft window light from upper-left 
   diffused through sheer linen, 100mm macro at f/4, slight 
   high angle, rule of thirds composition, naturalistic color 
   grading: Aurora serum facial bottle (30ml clear glass with 
   amber liquid, brushed gold cap) on unfinished oak surface
   ```
4. Roda nano-banana-2 com resolução 4K
5. Download como `aurora-serum-bench-warm-editorial.png`
6. Apresenta

### Exemplo 2 — Image-to-image com Brand Face

**Usuário:** "Coloca a Brand Face Core da Aurora segurando este perfume [anexa imagem do produto]"

**Skill:**

1. Lê companion.md → pega URL Brand Face Core
2. Upload do anexo (perfume) pra CDN
3. Endpoint = edit
4. Image URLs: [URL Brand Face Core, URL perfume]
5. Pergunta resolução
6. Roda nano-banana-2/edit
7. Download como `aurora-brandface-holding-perfume-editorial.png`

### Exemplo 3 — Multiple references

**Usuário:** "Mistura essas 3 imagens — modelo + cenário + produto"

**Skill:**

1. Upload 3 imagens
2. Endpoint = edit
3. Prompt: "Combine these images coherently: woman from image 1, in the location from image 2, holding the product from image 3. Apply warm muted color grading. Match Brand Photography Signature."
4. Roda
5. Apresenta

---

## Adaptação por modo da marca

### Modo VISUAL-ONLY

Photography Signature aplicada com **força máxima**. Output deve ser editorial premium. Investir em iterações até sair perfeito (3-5 gerações se necessário).

### Modo VISUAL+COPY

Padrão. Aplica Signature mas aceita variações.

### Modo COPY-HEAVY

Imagens são suporte. Não precisa ser editorial premium absoluto — funcionalidade > polish.

---

## Quando NÃO usar esta skill

- Vídeo → `form-brand-visual-ia-video-generation`
- Imagem com TEXTO grande/legível → GPT Image 2 (via Claude direto)
- Logo / vetor → ferramentas vetoriais
- Edição de imagem existente já tirada com câmera → ferramentas raster (Photoshop, Affinity)

---

## Armadilhas a evitar

- **Não esquecer Photography Signature.** Sempre aplica do companion.md.
- **Não rodar sem confirmar prompt enriquecido.** Sempre mostra o que vai mandar.
- **Não usar nome genérico no arquivo.** Sempre descritivo.
- **Não esquecer upload de refs.** Endpoint edit precisa URLs, não paths locais.
- **Não pedir 4K sempre.** 1K ou 2K servem pra rascunhos. 4K só pra final.
- **Não ignorar erros silenciosamente.** Se geração falhar, mostra erro completo + sugere fix.

---

## Output esperado

✅ PNG gerado no caminho correto
✅ Naming descritivo
✅ Photography Signature aplicada (se companion.md existe)
✅ Mensagem clara ao usuário com próximos passos
✅ Arquivo pronto pra próxima skill (Figma, vídeo, ou edição)
