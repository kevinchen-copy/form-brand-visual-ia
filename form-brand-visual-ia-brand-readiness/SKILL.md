---
name: form-brand-visual-ia-brand-readiness
description: Skill de entrada do sistema form-brand-visual-ia. Conduz Brand AI-Readiness Assessment em 20 perguntas (5 dimensões) + entrevista de briefing inicial + define modo da marca (visual-only / visual-copy / copy-heavy). Outputs concretos - score 0-60, diagnóstico em 4 níveis, CLAUDE.md inicial preenchido, e recomendação clara da próxima skill a invocar. Use SEMPRE no primeiro contato com uma marca nova ou quando o usuário disser "começar marca nova", "diagnosticar marca", "brand readiness", "por onde começo", "qual modo da minha marca", "criar CLAUDE.md", "fundação da marca". Esta é a primeira skill da jornada — todas as outras dependem do output desta.
---

# Brand Readiness — Skill de Entrada

Conduz diagnóstico inicial completo de uma marca pra preparar terreno antes de qualquer outra skill rodar. Faz 3 coisas concretas em sequência:

1. **Brand AI-Readiness Assessment** — 20 perguntas em 5 dimensões, score 0-60
2. **Briefing inicial** — captura hipóteses do dono sobre a própria marca
3. **Decisão de modo** — visual-only / visual-copy / copy-heavy

Output final: CLAUDE.md preenchido + diagnóstico em .md + próxima skill recomendada.

---

## Pre-requisitos

- Nenhum. Esta é a skill de entrada.

## Próximas skills no workflow

Após esta skill, conforme score + modo, recomendar:

```
Score 0-20 (Starting Line):
  → form-brand-visual-ia-audience-research
  → form-brand-visual-ia-positioning
  → form-brand-visual-ia-big-idea
  (Bloco A + B completo antes de partir pra visual)

Score 21-35 (Foundation First):
  → form-brand-visual-ia-audience-research
  → form-brand-visual-ia-figma-setup (paralelo)

Score 36-50 (Almost There):
  → form-brand-visual-ia-figma-setup
  → form-brand-visual-ia-photography-signature
  → form-brand-visual-ia-brand-guideline-builder

Score 51-60 (AI-Ready Champion):
  → form-brand-visual-ia-brand-guideline-builder direto
  → form-brand-visual-ia-content-pipeline pra produção
```

---

## Step 1 — Apresentação inicial

Antes de qualquer pergunta, apresenta o que vai acontecer:

> "Vamos fazer 3 coisas em sequência:
>
> 1. **Assessment de 20 perguntas** (~15 min) — diagnóstica em que ponto sua marca está pra produção com IA.
>
> 2. **Briefing inicial** (~20 min) — capturo suas hipóteses sobre a marca, audiência, produto. Útil mesmo se você não tem certeza de nada ainda.
>
> 3. **Definição de modo** (~5 min) — visual-only, visual+copy ou copy-heavy. Define quais skills você vai usar daqui pra frente.
>
> Ao final, gero um CLAUDE.md da marca + diagnóstico em .md + recomendação clara da próxima skill.
>
> Pronto pra começar?"

Aguarda confirmação.

---

## Step 2 — Brand AI-Readiness Assessment (20 perguntas)

Pergunta uma de cada vez. Cada resposta é 0-3 pontos:

```
0 = Não / Não sei
1 = Parcialmente
2 = Sim, mas não documentado
3 = Sim, documentado e claro
```

### Dimensão A — Brand Foundation (5 perguntas, max 15 pontos)

**A1.** Você consegue resumir sua marca em 1 frase que diferencia ela das concorrentes?

**A2.** Sua audiência-alvo está definida (não "todo mundo")?

**A3.** Você tem clareza sobre 3 adjetivos que descrevem a voz da sua marca?

**A4.** Existe paleta cromática definida (3-5 cores específicas com HEX)?

**A5.** Você tem tipografia definida (fonte de heading + fonte de body)?

### Dimensão B — Content Creation (4 perguntas, max 12 pontos)

**B1.** Você produz conteúdo de marca pelo menos semanalmente?

**B2.** Existe calendário editorial estruturado (não improvisado)?

**B3.** Você consegue identificar o tipo de cada peça (educativo / produto / BTS / social proof / etc.)?

**B4.** Existem templates reutilizáveis (Figma, CapCut, ou similar)?

### Dimensão C — Technical Readiness (4 perguntas, max 12 pontos)

**C1.** Você tem conta ativa em pelo menos 1 ferramenta de geração de imagem IA (Midjourney, fal.ai, Nano Banana, Higgsfield)?

**C2.** Você já gerou pelo menos 10 imagens com IA pra essa marca?

**C3.** Você tem familiaridade com prompts em 6 camadas (Conceito, Sujeito, Cores, Composição, Iluminação, Câmera)?

**C4.** Sabe operar Figma com nível básico (criar frames, mover elementos, exportar)?

### Dimensão D — Market Positioning (4 perguntas, max 12 pontos)

**D1.** Você consegue nomear 3-5 concorrentes diretos?

**D2.** Sabe articular por que sua marca é diferente em 1-2 frases?

**D3.** Tem clareza do problema específico que sua marca resolve?

**D4.** Conhece o "inimigo simbólico" da marca (cultura/ideia que combate)?

### Dimensão E — Mindset (3 perguntas, max 9 pontos)

**E1.** Você está disposto a iterar 3-5 vezes em cada peça antes de publicar?

**E2.** Aceita que IA é ferramenta, não substituto de estratégia?

**E3.** Tem 5-10 horas/semana pra dedicar à produção?

---

## Step 3 — Calcular score + classificar

```
TOTAL = soma das 20 respostas (max 60)

Classificação:
  0-20    → "Starting Line" — fundação ainda em construção
  21-35   → "Foundation First" — precisa firmar bases antes de IA
  36-50   → "Almost There" — pronto pra começar com supervisão
  51-60   → "AI-Ready Champion" — pronto pra produção em escala
```

Apresenta resultado:

```
═══════════════════════════════════════
DIAGNÓSTICO — [Nome da Marca]
═══════════════════════════════════════

Score: [N]/60
Nível: [Starting Line / Foundation First / Almost There / Champion]

Pontos fortes:
- Dimensão [X]: [N]/[max] ✓
- ...

Áreas a desenvolver:
- Dimensão [Y]: [N]/[max] ↓
- ...

═══════════════════════════════════════
```

---

## Step 4 — Briefing inicial

Agora coleta hipóteses do dono. Pergunte uma por vez:

### Hipóteses sobre a marca (5 perguntas)

1. "Em 1-3 frases, **o que sua marca É**? (não o que vende — quem ela é)"
2. "Por que você começou essa marca? Qual a motivação real?"
3. "Que problema do mundo ela resolve?"
4. "Daqui a 3 anos, você quer que ela seja conhecida por quê?"
5. "Qual sua maior frustração com marcas concorrentes hoje?"

### Hipóteses sobre audiência (3 perguntas)

6. "Descreva em detalhes UM cliente ideal (real ou imaginado): idade, contexto, frustrações"
7. "Que pessoas você QUER que sua marca afaste? Quem não cabe?"
8. "Como seu cliente ideal chegaria até sua marca? Que canal?"

### Hipóteses sobre produto (3 perguntas)

9. "Em 1-2 frases, **o que torna seu produto/serviço único**?"
10. "Que prova você tem de que ele funciona? (resultados, depoimentos, números)"
11. "Qual é o preço atual e o preço que você gostaria de praticar?"

### Restrições e aspirações (3 perguntas)

12. "Quanto tempo/semana você (ou seu time) pode dedicar à produção?"
13. "Qual o orçamento aproximado pra ferramentas/mês? (R$ X)"
14. "Que marcas você admira visualmente (referências)?"

Anota tudo. Não julga. Captura como o dono pensa hoje.

---

## Step 5 — Definição de modo

Apresenta as 3 opções claramente:

```
═══════════════════════════════════════
MODO DA MARCA — Decisão estratégica
═══════════════════════════════════════

Qual perfil melhor representa sua marca?

A) VISUAL-ONLY
   • Fotografia/vídeo são protagonistas
   • Copy é minimal (só CTAs e descrições)
   • Exemplos: joalheria editorial, fashion 
     premium, food editorial, architecture
   • Skills pesadas em texto serão PULADAS
     (manifesto longo, email-flows, etc.)

B) VISUAL+COPY (padrão)
   • Balanceado entre visual e texto
   • Captions moderadas, storytelling presente
   • Exemplos: skincare, lifestyle, design,
     ecommerce, beauty
   • Todas as skills disponíveis

C) COPY-HEAVY
   • Texto é protagonista
   • Carrosséis educativos longos, 
     newsletters elaboradas, VSL
   • Exemplos: consultoria, mentoria,
     educação, infoprodutos, coaching
   • Skills de copy expandidas
```

Aguarda resposta + breve justificativa.

---

## Step 6 — Gerar outputs concretos

Cria 3 arquivos no vault da marca:

### Output 1: `[marca]/CLAUDE.md`

```markdown
# CLAUDE.md

## Marca
- **Nome:** [nome]
- **Setor:** [setor]
- **Produto principal:** [produto]
- **Modo da marca:** [visual-only | visual-copy | copy-heavy]

## Hipóteses do dono (capturadas em [data])

### Identidade percebida
- O que a marca É: [resposta]
- Motivação real: [resposta]
- Problema resolvido: [resposta]
- Aspiração 3 anos: [resposta]
- Frustração com concorrentes: [resposta]

### Audiência percebida
- Cliente ideal: [resposta detalhada]
- Quem afastar: [resposta]
- Canal de chegada: [resposta]

### Produto
- Único porque: [resposta]
- Provas existentes: [resposta]
- Preço atual / ambicionado: [resposta]

### Restrições operacionais
- Tempo/semana: [resposta]
- Orçamento ferramentas: [resposta]
- Referências visuais admiradas: [resposta]

## Atalhos

- **Brand Guideline completo:** `brand-guideline-companion.md` (a gerar)
- **Calendário editorial:** `calendario-editorial.md` (a gerar)
- **Banco de ideias:** `banco-ideias.md` (a gerar)

## Workflow

Para iniciar próxima etapa: invocar [skill recomendada baseado no score]

## Notas operacionais

[Adicionar aqui conforme evolução]
```

### Output 2: `[marca]/diagnostico-readiness.md`

```markdown
# Diagnóstico Brand AI-Readiness

**Data:** [data]
**Score:** [N]/60
**Nível:** [classificação]

## Detalhamento por dimensão

### A — Brand Foundation: [N]/15
[Pontos fortes e fracos]

### B — Content Creation: [N]/12
[...]

### C — Technical Readiness: [N]/12
[...]

### D — Market Positioning: [N]/12
[...]

### E — Mindset: [N]/9
[...]

## Próximas skills recomendadas (em ordem)

1. [skill A]
2. [skill B]
3. [skill C]

Justificativa: [explica por que essa ordem]

## Avisos importantes

- [Pontos críticos a melhorar antes de produção em escala]
```

### Output 3: Mensagem final ao usuário

```
═══════════════════════════════════════
✅ ONBOARDING CONCLUÍDO

Marca: [nome]
Modo: [modo]
Score: [N]/60 — [nível]

Arquivos gerados:
- [marca]/CLAUDE.md
- [marca]/diagnostico-readiness.md

═══════════════════════════════════════
PRÓXIMA SKILL: [skill X]

[Por que invocar essa próxima]

Quando estiver pronto, invoque:
"Roda [skill X] pra [nome marca]"
═══════════════════════════════════════
```

---

## Recomendação de próximas skills por cenário

### Cenário 1: Score 0-20 (Starting Line)

Marca em construção. Não pula direto pra visual. Construir base primeiro.

Sequência:
1. `form-brand-visual-ia-audience-research`
2. `form-brand-visual-ia-market-mapping`
3. `form-brand-visual-ia-product-research`
4. `form-brand-visual-ia-big-idea`
5. `form-brand-visual-ia-positioning`

Tempo estimado: 2-3 semanas.

### Cenário 2: Score 21-35 (Foundation First)

Tem algumas bases mas não consolidadas.

Sequência:
1. `form-brand-visual-ia-audience-research` (refinar)
2. `form-brand-visual-ia-positioning` (refinar)
3. `form-brand-visual-ia-figma-setup` (começar visual em paralelo)

Tempo estimado: 1-2 semanas.

### Cenário 3: Score 36-50 (Almost There)

Bases sólidas, pronto pra começar visual estruturado.

Sequência:
1. `form-brand-visual-ia-figma-setup`
2. `form-brand-visual-ia-color-palette` + `typography` + `logo-system`
3. `form-brand-visual-ia-photography-signature`
4. `form-brand-visual-ia-brand-guideline-builder`

Tempo estimado: 1-2 semanas.

### Cenário 4: Score 51-60 (AI-Ready Champion)

Marca madura. Pula direto pra brand guideline + produção.

Sequência:
1. `form-brand-visual-ia-brand-guideline-builder` direto
2. `form-brand-visual-ia-content-pipeline` pra primeira peça

Tempo estimado: 3-5 dias.

---

## Adaptação por modo da marca

### Se modo = VISUAL-ONLY

Mensagem adicional ao final:

> "Modo VISUAL-ONLY ativado. Daqui pra frente, skills pesadas em copy serão PULADAS:
> - form-brand-visual-ia-tribe-enemy (opcional)
> - form-brand-visual-ia-email-flows (opcional)
> - form-brand-visual-ia-voiceover (opcional)
>
> Skills de fotografia/vídeo serão priorizadas. Voice & Tone será gerada em versão minimalista (3 adjetivos + vocabulário curto)."

### Se modo = COPY-HEAVY

Mensagem adicional:

> "Modo COPY-HEAVY ativado. Skills de copy serão expandidas:
> - voice-tone completo + 5 contextos de tom
> - tribe-enemy obrigatório (peça central)
> - email-flows completo
> - carrosséis educativos longos priorizados
>
> Fotografia/vídeo ainda essencial, mas balanceado com texto rico."

---

## Armadilhas a evitar

- **Não julgar respostas baixas.** Score baixo é diagnóstico, não fracasso.
- **Não pular Step 2 (Briefing).** Score sozinho não basta — precisa hipóteses do dono pra futuras skills.
- **Não decidir modo pelo usuário.** Apresenta opções, ele escolhe. Apenas sugere baseado nas respostas.
- **Não pular outputs concretos.** Os 3 arquivos (CLAUDE.md, diagnóstico, mensagem) são essenciais — outras skills dependem deles.
- **Não recomendar skill errada pra o score.** Score 15 → não pode ir direto pra brand-guideline-builder. Sempre fundação primeiro.

---

## Output esperado ao final

✅ `[marca]/CLAUDE.md` preenchido
✅ `[marca]/diagnostico-readiness.md` gerado
✅ Modo da marca definido e salvo
✅ Próxima skill recomendada com justificativa
✅ Usuário sabe exatamente o que invocar a seguir

Tempo total estimado: 40-60 minutos.
