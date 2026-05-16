---
name: form-brand-visual-ia-figma-localize
description: Localiza qualquer design do Figma em uma ou mais línguas alvo. Clona o frame/section da origem in-place, renomeia cada cópia com sufixo de locale (FR, ES, DE, PT-BR, etc.) e substitui cada layer de texto pela tradução correta. Lê brand-guideline-companion.md pra preservar voice & tone na tradução (não traduz literal — adapta pra brand voice em cada idioma). Use SEMPRE que usuário quiser traduzir, localizar ou criar versão multi-idioma de campanha Figma, ad set, poster, social post, banner, landing page. Triggers - "translate this Figma", "localize", "make a [language] version", "in French", "in Spanish", "add German", "criar versão em [idioma]". Sempre acione quando Figma + idioma alvo estão envolvidos, mesmo sem o usuário dizer "localize" explicitamente.
---

# Figma Localize — form-brand-visual-ia

Clona um design do Figma e substitui cada layer de texto pela tradução, em um ou mais idiomas, sem quebrar o layout ou colocar as cópias na página errada.

Esta é a skill clonada do Brand AI Claude Course (`figma-localize`), refinada pra aplicar Brand Voice & Tone do `brand-guideline-companion.md` em cada idioma.

---

## Pre-requisitos

- Figma MCP server conectado e autenticado
- File key + node ID do design fonte
- `brand-guideline-companion.md` (recomendado — pra preservar voice & tone)

## Próximas skills no workflow

- `form-brand-visual-ia-figma-ad-builder` (se for pra montar ads localizados em mais aspect ratios)
- Publicação direta nas plataformas locais

---

## Quando usar (triggers)

Use esta skill sempre que o usuário quer criar versão não-original de um design Figma. Sinais típicos:

- Link do Figma + nome de idioma ou código ISO (FR, DE, ES, IT, PT, NL, PL, JA, ZH, EN-US, PT-BR, etc.)
- Frases como "translate this", "localize this", "make a [language] version", "in French", "in Spanish", "in German", "versão em [idioma]"
- Pedido pra duplicar design pra outro mercado/região

Se usuário deu link Figma mas não disse idioma alvo, pergunte antes de começar.

---

## O que a skill faz

Dado um node Figma (section, frame ou component instance) + um ou mais idiomas alvo:

1. **Inspeciona** o node fonte, coleta cada layer de texto
2. **Traduz** cada string única preservando casing e brand feel
3. **Clona** o node fonte uma vez por idioma alvo
4. **Parenta** cada clone na mesma página da fonte (essa é a parte que erra fácil)
5. **Posiciona** os clones em row horizontal à direita da fonte
6. **Renomeia** cada clone com sufixo de locale (ex: `Summer_Ad_C1_FR`)
7. **Substitui** cada layer de texto no clone pela tradução, carregando fonts safely
8. **Screenshot** de cada clone pra usuário verificar resultado

---

## Inputs necessários

Pergunte qualquer coisa faltante. Não chuta:

- **URL do Figma ou node ID** do design fonte. De URL como `https://www.figma.com/design/<fileKey>/<name>?node-id=<nodeId>`, extrair `fileKey` e `nodeId`.
- **Idioma(s) alvo** — código(s) ISO (FR, DE, ES, PT-BR, etc.). Se múltiplos, lista separada por vírgula.
- **Mantém Brand Voice?** (recomendado: sim — não traduz literal)
- **Termos a NÃO traduzir** (nome da marca, slogans específicos, etc.)

---

## Step 0 — Read brand context

Se `brand-guideline-companion.md` existe:

Extrair:
- **Brand name** (NÃO traduzir nunca)
- **Vocabulary favorite** (preservar quando possível no idioma alvo)
- **Vocabulary forbidden** (NÃO usar — buscar alternativas no idioma alvo)
- **Voice adjectives** (tradução deve manter mesmo tom)
- **Slogans/taglines oficiais** (NÃO traduzir literalmente — adaptação criativa)

---

## Step 1 — Validar Figma access

Confirma:
- Figma MCP está conectado
- Você tem permissão de edição no arquivo
- node ID válido

Se algo errado, instrui o usuário a corrigir antes de prosseguir.

---

## Step 2 — Coletar textos do node fonte

Usa Figma MCP pra navegar o tree do node e coletar:
- Todos os layers de texto (TEXT type)
- Conteúdo de cada um
- Fonte (font family) usada
- Casing (UPPERCASE / lowercase / Title Case)

Cria mapa:
```
{
  "node_id_1": {"text": "Spring Collection 2026", "font": "Cormorant", "case": "Title"},
  "node_id_2": {"text": "Shop now", "font": "Inter", "case": "UPPERCASE"},
  ...
}
```

---

## Step 3 — Gerar traduções respeitando Brand Voice

Pra cada string única, traduzir:

### Princípios de tradução

1. **Brand voice prevalece sobre tradução literal**
   - Se voice é "calm, sophisticated, natural", tradução deve preservar essa vibe no idioma alvo
   - Não traduz palavra por palavra — adapta meaning + feel

2. **Termos da brand vocabulary**
   - Vocabulary favorite → busca equivalente que preserva essência
   - Vocabulary forbidden → evita mesmo no novo idioma

3. **Preserva casing**
   - UPPERCASE em fonte → UPPERCASE em tradução
   - Title Case → Title Case
   - lowercase → lowercase

4. **Comprimento**
   - Traduções podem ser mais longas (espanhol, português) ou mais curtas (alemão composto)
   - Mantém o **espírito** do tamanho — não estica desnecessariamente

5. **Mantém placeholders / variáveis**
   - {{nome}}, [data], etc. — preserva intactos

### Termos a NUNCA traduzir

- Nome da marca
- Nomes de produtos próprios
- Hashtags
- URLs
- Slogans oficiais (a menos que adaptação esteja aprovada)

### Termos a ADAPTAR (não traduzir literal)

- Slogans não-oficiais
- CTAs (call-to-action)
- Tags emocionais

Apresenta tradução em formato comparativo antes de aplicar:

```
TEXTO FONTE → TRADUÇÃO

"Spring Collection 2026" → "Coleção Primavera 2026"
"Shop now" → "Compre agora"
"The simplest things are the most beautiful" → 
  "As coisas mais simples são as mais belas"
```

Aguarda confirmação do usuário antes de aplicar no Figma.

---

## Step 4 — Clonar node fonte

Pra cada idioma alvo:

1. **Duplica** o node fonte completo (mantendo estrutura)
2. **Parenta** o clone na **mesma página** que a fonte (não em página nova)
3. **Posiciona** à direita da fonte (com gap de 100-200px entre clones)
4. **Renomeia** com sufixo do locale:
   - Fonte: `Summer_Ad_Campaign`
   - Clones: `Summer_Ad_Campaign_FR`, `Summer_Ad_Campaign_ES`, etc.

**Importante:** se você criar em página errada, fica difícil de achar. Mesma página da fonte.

---

## Step 5 — Substituir textos no clone

Pra cada layer de texto no clone:

1. Carrega a fonte certa (se diferente da default)
2. Substitui texto pelo traduzido
3. Aplica casing original
4. Mantém estilo (cor, weight, size)
5. **Verifica overflow** — se texto novo é maior que box, alerta

Pseudo-código (Figma plugin context):

```javascript
for (const layer of clone.descendants) {
  if (layer.type === 'TEXT') {
    await figma.loadFontAsync(layer.fontName);
    layer.characters = translations[layer.id] || layer.characters;
  }
}
```

---

## Step 6 — Screenshot e apresenta

Pra cada clone localizado:

1. Tira screenshot via Figma MCP
2. Apresenta lado a lado com fonte
3. Pergunta se OK ou se precisa ajustar tradução

```
═══════════════════════════════════════
✅ LOCALIZAÇÃO CONCLUÍDA

Arquivo: [URL Figma]
Página: [nome]

Versões geradas:
- Summer_Ad_Campaign (fonte EN)
- Summer_Ad_Campaign_FR ✓
- Summer_Ad_Campaign_ES ✓
- Summer_Ad_Campaign_DE ⚠️ (overflow em 1 layer — texto muito longo)

Screenshots:
[link da fonte] [link FR] [link ES] [link DE]

Ações sugeridas:
- Aprovar tudo
- Ajustar texto DE no layer com overflow
- Adicionar outra língua
═══════════════════════════════════════
```

---

## Tratamento de overflow

Se tradução é mais longa que text box original:

**Opção A — Avisar usuário**
"Texto alemão em layer X está overflowando. Quer ajustar fonte size, font weight, ou reescrever tradução mais curta?"

**Opção B — Auto-ajustar** (só se usuário aprovou pré)
- Reduzir font size 5-10%
- OU buscar tradução mais curta automaticamente

**Não fazer:** truncar texto silenciosamente. Sempre mostra problema.

---

## Idiomas suportados

Skill funciona pra qualquer língua que Claude consiga traduzir:

- Romance: PT-BR, PT-PT, ES, FR, IT
- Germânicas: EN, DE, NL, DA, SV
- Eslavas: PL, RU, CZ
- Asiáticas: JA, ZH (simplified/traditional), KO
- Semitas: AR (cuidado com RTL!), HE

**Cuidado com RTL (right-to-left):** Árabe, Hebraico. Layout precisa flip se design tem leitura LTR forte. Avisar usuário.

---

## Adaptação por modo da marca

### VISUAL-ONLY
Pouco texto pra traduzir. Skill roda rápido. Foco em preservar identidade visual.

### VISUAL+COPY
Padrão. Voice & tone preservada com cuidado.

### COPY-HEAVY
Bastante texto. Skill demora mais. Validação caso-a-caso por trecho importante.

---

## Exemplos

### Exemplo 1 — Ad simples EN → PT-BR

**Usuário:** "Localiza esse ad pro Brasil [Figma URL]"

**Skill:**
1. Confirma fileKey + nodeId
2. Coleta textos: "Spring Collection 2026", "Shop now"
3. Lê companion.md → Brand Voice "calm, sophisticated"
4. Propõe traduções:
   - "Spring Collection 2026" → "Coleção Primavera 2026"
   - "Shop now" → "Conheça"  (mais sofisticado que "Compre agora")
5. Confirma
6. Clona + aplica
7. Screenshot

### Exemplo 2 — Multi-idiomas

**Usuário:** "Faz versão FR, ES, DE desse banner"

**Skill:** clona 3 vezes, traduz cada uma, posiciona em row.

### Exemplo 3 — Brand voice difícil

**Usuário:** Tradução automática soou "comercial demais"

**Skill:** revisa preservando voice "calm" — substitui CTAs agressivos por convites suaves.

---

## Armadilhas a evitar

- **NÃO colocar clones em página errada.** Sempre mesma página da fonte.
- **NÃO traduzir nome da marca.** Lista de termos imutáveis sempre presente.
- **NÃO tradução literal.** Voice & tone primeiro.
- **NÃO ignorar overflow.** Sempre avisa.
- **NÃO pular screenshot.** Usuário precisa ver antes de aprovar.
- **NÃO aplicar Brand Voice diferente do companion.md.** Source of truth.

---

## Output esperado

✅ Clones criados no Figma, mesma página, posicionados corretamente
✅ Textos traduzidos preservando voice & tone
✅ Naming com sufixo locale
✅ Screenshots de cada versão
✅ Overflow flags se houver
✅ Pronto pra usuário aprovar ou ajustar
