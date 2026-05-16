---
name: form-brand-visual-ia-troubleshooting
description: Diagnostica + corrige outputs problemáticos automaticamente. Tabela diagnóstica baseada em 10+ padrões conhecidos de falha (mãos com dedos errados, texto distorcido, escala errada, Brand Face inconsistente, logo errado, imagem "AI-generated", composição ruim, etc.). Recebe output problemático + prompt original e propõe diagnóstico + fix imediato + fix alternativo. Output - correção pronta pra aplicar. Use quando algo deu errado. Triggers - "deu errado", "corrige esse output", "por que isso falhou", "debug", "imagem ruim", "vídeo problema", "fix".
---

# Troubleshooting — Debug + correção

Diagnóstica problemas em outputs de IA e propõe fixes específicos.

10+ padrões de falha conhecidos com soluções testadas.

---

## Pre-requisitos

- Output problemático identificado
- Prompt original usado (idealmente)

## Próxima skill no workflow

Aplica fix → tenta de novo → loop até resolver.

---

## Step 1 — Coletar inputs

```
═══════════════════════════════════════
TROUBLESHOOTING — Setup
═══════════════════════════════════════

1. Tipo de output problemático:
   - Imagem
   - Vídeo
   - Caption / texto
   - Outro

2. Descreve o problema:
   ex: "Mão da modelo está com 6 dedos"
   ex: "Logo está distorcido"
   ex: "Texto on-screen ilegível"

3. Prompt original usado (cola):
   [prompt completo]

4. Ferramenta usada:
   - Midjourney
   - Nano Banana 2 (fal.ai)
   - Kling V3 Pro
   - GPT Image 2
   - DALL-E
   - Outro

5. Quantas tentativas?
   - 1 (primeira vez)
   - 2-3 (já tentou)
   - 4+ (persistente)
```

---

## Step 2 — Aplicar tabela diagnóstica

```
═══════════════════════════════════════
TABELA DIAGNÓSTICA — 10+ PADRÕES
═══════════════════════════════════════
```

### Padrão 1 — Mãos com dedos errados

**Sintoma:** 6-7 dedos, dedos fundidos, mãos grudadas no objeto.

**Causa:** IA falha em anatomia detalhada de mãos.

**Fixes:**
- **Fix A — Esconder mãos:** adiciona ao prompt "hands not visible in frame"
- **Fix B — Ângulo que esconde:** "hands shown from behind"
- **Fix C — Pose simples:** "hands relaxed at sides" em vez de "fingers interlaced"
- **Fix D — Variations:** Vary Subtle no Midjourney várias vezes
- **Fix E — Edit Region:** Midjourney V7 Edit > Region pra regenerar só mão
- **Fix F — Pós-produção:** Photoshop fix se tudo falha

### Padrão 2 — Texto distorcido na imagem

**Sintoma:** "AURRA" em vez de "AURORA", letras embaralhadas.

**Causa:** IA representa imperfeitamente tipografia em imagens.

**Fixes:**
- **Fix A — Migra pra GPT Image 2:** treinado em texto especificamente
- **Fix B — Use Ideogram:** especializada em texto on-image
- **Fix C — Mantém texto curto:** 1-3 palavras tem chance alta
- **Fix D — Pós-produção:** gera sem texto, adiciona em Figma/Photoshop
- **Fix E — Especifica fonte:** "clean serif typeface, sharp letterforms, well-spaced kerning"

### Padrão 3 — Escala errada (produto gigante)

**Sintoma:** Anel sai tamanho de prato. Brinco gigante.

**Causa:** IA sem noção de escala intrínseca.

**Fixes:**
- **Fix A — Especificar mm/cm:** "delicate 18mm wide gold ring"
- **Fix B — Adicionar referência humana:** "held in hand with fingers visible for scale"
- **Fix C — Contexto sugestivo:** "ring next to thimble for scale reference"
- **Fix D — Macro vocabulário:** "extreme close-up showing ring at near actual size in proportion to fingertip"

### Padrão 4 — Brand Face mudando entre imagens

**Sintoma:** "Mesma modelo" mas rosto ligeiramente diferente.

**Causa:** Sem reference, IA gera diferente toda vez.

**Fixes:**
- **Fix A — Midjourney --cref:** `--cref [URL master] --cw 100`
- **Fix B — Nano Banana upload master:** sobe imagem master + descreve novo contexto
- **Fix C — Flux LoRA:** treina LoRA da Brand Face ($10-20 one-time)
- **Fix D — Higgsfield Brand Face profile:** feature nativa

### Padrão 5 — Logo errado / ausente

**Sintoma:** Pediu logo, saiu logo qualquer OR sem logo.

**Causa:** IA não tem acesso a logos reais (proteção copyright) + raramente acerta texto.

**Fixes:**
- **Fix A — Gera sem logo + adiciona em editor:**
  - Workflow padrão pra brand
  - Gera produto/cena limpa
  - Adiciona logo real em Figma/Photoshop
- **Fix B — GPT Image 2 pra mockup com texto:** se logo é só texto
- **Fix C — Nano Banana Logo Fix:** upload do produto + "Add the logo 'AURORA' to the front"

### Padrão 6 — Imagem "AI-generated óbvio"

**Sintoma:** Plastic-look face, vidrados olhos, textura inumana.

**Causa:** Estética default IA "polido demais".

**Fixes:**
- **Fix A — Pro Realism Layer:** adiciona "subtle imperfections, natural skin texture with visible pores and slight blemishes, fine wrinkles around eyes"
- **Fix B — Midjourney --style raw:** desativa polimento
- **Fix C — Referência analógica:** "shot on 35mm Kodak Portra 400 film, characteristic grain"
- **Fix D — Subexposição:** "slightly underexposed for moody premium feel"
- **Fix E — Ambient imperfections:** "wrinkled linen, slightly worn wooden surface"

### Padrão 7 — Content restriction (prompt travou)

**Sintoma:** Midjourney/fal.ai rejeita prompt.

**Causa:** Bateu em filtro de policy.

**Fixes:**
- **Fix A — Identifica palavra-gatilho + reformula:**
  - "Black woman" → "woman with dark brown skin"
  - "Apple logo" → "minimalist tech logo in similar style"
- **Fix B — Outra ferramenta:** restrictions diferentes por plataforma
- **Fix C — Limpa contexto:** começa nova conversa (NB/GPT)
- **Fix D — Suporte:** se conta flagada, contata plataforma

### Padrão 8 — Produto na posição/proporção errada

**Sintoma:** Produto saiu canto quando pediu centralizado.

**Causa:** IA interpreta liberdade quando não especifica posição.

**Fixes:**
- **Fix A — Especifica posição exata:** "Product positioned in lower-left third, occupying approximately 25% of image area"
- **Fix B — Hero Object Placeholder (NB):** gera cena vazia primeiro, insere produto na posição
- **Fix C — Referência visual:** anexa imagem com composição desejada

### Padrão 9 — Cores fora da paleta

**Sintoma:** Pediu paleta warm muted, saiu saturada e fria.

**Causa:** Prompt sem paleta especificada, IA aplicou default polish.

**Fixes:**
- **Fix A — Especifica paleta EXATA:**
  "Color palette restricted to: terracotta (#C5664A), warm sand (#E8D4B8), cream (#F5F0E8). Avoid pure saturated colors, avoid cool blues"
- **Fix B — Cita referência:** "Color palette inspired by Aesop campaigns"
- **Fix C — Pede grading:** "Naturalistic color grading with warm cast, low saturation"
- **Fix D — Profile/Moodboard:** treinou Midjourney profile pra paleta automática

### Padrão 10 — Iluminação errada

**Sintoma:** Pediu soft window, saiu hard frontal.

**Causa:** Sem especificação precisa, IA puxa default.

**Fixes:**
- **Fix A — 4 fundamentos:** direção + intensidade + qualidade + temperatura
  "Single soft window light from upper-left, diffused through sheer linen, warm 3500K"
- **Fix B — Cita fonte específica:** "Soft window light"
- **Fix C — Hora do dia:** "Late afternoon golden hour"

### Padrão 11 — Vídeo distorce em movimento (Kling)

**Sintoma:** Sujeito morfa, mãos viram amontoados.

**Causa:** Movimento muito intenso pra IA generation.

**Fixes:**
- **Fix A — Pacing slow:** "very slow contemplative, subject barely moves"
- **Fix B — Movimento simples:** "static camera, single subtle action"
- **Fix C — Reduce strength/cfg_scale:** se ferramenta permite

### Padrão 12 — Skill atualizada não pega (sessão antiga)

**Sintoma:** Editou SKILL.md mas Claude continua usando versão antiga.

**Causa:** Claude carrega skills no início da sessão. Mudanças não aplicam até nova.

**Fix:**
1. Salva SKILL.md atualizada
2. Fecha conversa atual (X)
3. Abre **nova conversa**
4. Skills carregam atualizadas

### Padrão 13 — Pipeline Claude → Figma quebrado

**Sintoma:** Claude pede pra criar no Figma, dá erro de conexão.

**Fixes:**
- **Fix A — Verifica MCP:** Settings → MCPs → Figma conectado?
- **Fix B — Reautenticar:** token Figma pode ter expirado
- **Fix C — Reinicia MCP:** desativa + reativa
- **Fix D — Permissões file:** você tem edit access?
- **Fix E — Fallback manual:** Claude gera especs em texto, você implementa no Figma

---

## Step 3 — Aplicar diagnóstico

Skill cruza problema descrito com tabela e retorna:

```
═══════════════════════════════════════
DIAGNÓSTICO
═══════════════════════════════════════

PROBLEMA: "Mão da modelo com 6 dedos"

PADRÃO IDENTIFICADO: Padrão 1 — Mãos com dedos errados

PROBABILIDADE DA CAUSA:
A IA generativa falha cronicamente em anatomia detalhada 
de mãos, especialmente quando segurando objetos pequenos.
~15-20% das gerações com mãos visíveis apresenta esse 
problema.

FIX IMEDIATO (recomendado):
Workaround composicional — esconde as mãos.

Revisa prompt assim:

ORIGINAL:
"Editorial portrait of woman holding glass perfume bottle..."

REVISADO:
"Editorial portrait of woman in her late 30s, the glass 
perfume bottle resting on the wooden surface beside her 
(not held in her hand), warm muted palette..."

[mantém resto do prompt]

Composição: produto + modelo, separados visualmente.
Funciona pra editorial.

FIX ALTERNATIVO 1 — Region Edit (Midjourney V7):
1. Imagem gerada → Edit → Vary (Region)
2. Seleciona área da mão
3. Regenera só essa região
4. 1-3 tentativas resolve

FIX ALTERNATIVO 2 — Migra pra Nano Banana:
NB tem melhor performance em mãos + objetos.
1. Upload imagem aprovada (sem mãos) no NB
2. Comando: "Make this woman hold the perfume bottle 
   naturally with proper anatomy. Keep face/hair/expression/
   lighting exactly the same."

RECOMENDAÇÃO: começa Fix Imediato. Se não cabe layout, vai 
pro Fix Alternativo 1 (Region Edit).
```

---

## Step 4 — Aprende do fix

Se fix funciona:

```
═══════════════════════════════════════
LEARNING REGISTRADO
═══════════════════════════════════════

Adiciona ao banco de learnings:

DATA: [data]
PROBLEMA: Mãos com dedos errados em editorial portrait
FIX QUE FUNCIONOU: Composicional — esconde mãos, produto separado
PADRÃO IDENTIFICADO: pra Aurora editorial style, esconder 
mãos em peças com produto small é workflow padrão

Próxima vez que o problema surge, esta solução vai 
aparecer no topo da recomendação.
```

---

## Step 5 — Output

```
═══════════════════════════════════════
✅ FIX RECOMENDADO

Aplica fix sugerido:
1. Revisa prompt conforme template acima
2. Gera novamente (1-2 tentativas geralmente resolvem)
3. Se falha, aplica Fix Alternativo

Tempo médio até fix: 5-15 min

LEARNING: registrado pra próxima vez.

PRÓXIMOS PASSOS:
- Aplica fix
- Se resolve → segue produção
- Se não resolve → re-roda troubleshooting com mais info
═══════════════════════════════════════
```

---

## Banco de learnings (cresce com uso)

```
LEARNINGS — Aurora (atualizado conforme uso)

### 2026-04-15
Problema: Brand Face Aurora "envelhecendo" entre Reels
Fix funcionou: NB com URL master image como reference
Padrão: cross-clips, NB sempre

### 2026-05-02
Problema: Logo Aurora distorcido em hero shots
Fix: Gera sem logo, adiciona via Figma overlay
Padrão: nunca tentar IA gerar logo real

### 2026-05-20
Problema: Saturação subindo gradualmente
Fix: Re-aplica color grading "warm muted" + auditoria mensal
Padrão: monitor saturação em audit

[continua acumulando]
```

---

## Adaptação por modo

Toda skill troubleshooting é igual entre modos — problemas técnicos não discriminam por modo.

---

## Armadilhas a evitar

- **Regenerar cegamente.** "Mais 10 tentativas" sem analisar. Para. Diagnóstica.
- **Não documentar fixes.** Mesmo problema da próxima vez = você esquece solution.
- **Esperar fix perfeito 1ª tentativa.** Algumas correções precisam 2-3 tentativas.
- **Culpar a ferramenta.** 99% dos problemas são prompt incompleto.

---

## Output esperado

✅ Diagnóstico claro do problema
✅ Fix imediato + alternativos
✅ Prompt revisado pronto
✅ Learning registrado pra próxima vez
✅ Tempo médio fix: 5-15 min
