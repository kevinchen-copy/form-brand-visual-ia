---
name: form-brand-visual-ia-maestro
description: Orquestrador GERAL do sistema form-brand-visual-ia. Sabe o estado atual da jornada da marca e recomenda a PRÓXIMA SKILL a invocar. Útil pra navegar entre as 48 skills sem se perder. Use quando estiver confuso sobre por onde começar OR qual skill chamar next OR precisar de visão geral. Triggers - "por onde começo?", "qual skill usar agora?", "estou perdido no workflow", "próximo passo", "me guia", "maestro", "orquestrador".
---

# Maestro — Orquestrador geral

Não FAZ trabalho. RECOMENDA próxima skill conforme estado atual da marca.

Você está perdido em qual das 48 skills usar? Maestro te aponta.

---

## Pre-requisitos

- Acesso a CLAUDE.md OR brand-guideline-companion.md da marca (pra saber estado)

## Próxima skill no workflow

A skill que Maestro recomendar :)

---

## Step 1 — Avalia estado atual

Lê arquivos da marca:

```
═══════════════════════════════════════
MAESTRO — Diagnóstico de estado
═══════════════════════════════════════

CHECKLIST AUTOMÁTICO:

1. Tem CLAUDE.md?
   [ ] Sim — qual modo? (visual-only/v+c/copy-heavy)
   [ ] Não — STATE: ZERO

2. Brand Foundation rodou?
   [ ] audience-research.md existe? Sim/Não
   [ ] market-mapping.md existe? Sim/Não
   [ ] product-research.md existe? Sim/Não/N-A
   
3. Tese da marca?
   [ ] big-idea.md? Sim/Não
   [ ] positioning.md? Sim/Não
   [ ] tribe-enemy.md? Sim/Não/N-A

4. Identidade visual?
   [ ] Figma file criado (figma-setup)?
   [ ] Logo system?
   [ ] Typography?
   [ ] Color palette?
   [ ] Brand Faces?
   [ ] Voice & tone?
   [ ] Photography signature?
   [ ] Videography signature?
   [ ] Motion design?

5. Brand Guideline?
   [ ] brand-guideline-companion.md existe?

6. Produção iniciada?
   [ ] Calendário editorial existe?
   [ ] Banco ideias existe?
   [ ] Peças publicadas há quanto tempo?

7. Audit?
   [ ] Último audit? Data?
```

---

## Step 2 — Classifica estado da marca

```
═══════════════════════════════════════
STATES POSSÍVEIS
═══════════════════════════════════════

STATE 0 — ZERO
   Nem CLAUDE.md existe.
   PRIMEIRA SKILL: form-brand-visual-ia-brand-readiness

STATE 1 — CLAUDE.md preenchido
   Mas pesquisas não rodaram.
   PRÓXIMA: form-brand-visual-ia-audience-research

STATE 2 — Pesquisas em andamento
   audience-research rodou, falta market + product
   PRÓXIMA: form-brand-visual-ia-market-mapping OR product-research

STATE 3 — Pesquisas completas
   Pesquisas todas feitas. Falta tese.
   PRÓXIMA: form-brand-visual-ia-big-idea

STATE 4 — Tese em construção
   big-idea OR positioning feita, falta outras
   PRÓXIMA: a próxima da tese

STATE 5 — Tese completa, falta identidade visual
   Tese pronta. Figma não criado.
   PRÓXIMA: form-brand-visual-ia-figma-setup

STATE 6 — Identidade visual em construção
   Figma criado, mas elementos faltam
   (logo OR typography OR color OR brand-faces OR voice-tone 
   OR photography OR videography OR motion não rodou)
   PRÓXIMA: a próxima skill faltante

STATE 7 — Identidade completa, falta consolidação
   Todas skills do bloco identidade rodaram.
   FALTA: form-brand-visual-ia-brand-guideline-builder ⭐

STATE 8 — Brand Guideline pronto
   companion.md existe. PRODUÇÃO PODE COMEÇAR.
   PRÓXIMA: form-brand-visual-ia-content-pipeline 
            OR organico-diario
            OR calendario-editorial (planeja primeiro)

STATE 9 — Produção rodando regularmente
   Sistema operacional.
   PRÓXIMAS:
   - Pacote-semanal toda segunda
   - Skills específicas por peça
   - Audit trimestral

STATE 10 — Audit recente, sistema otimizado
   Sistema rodando + audits trimestrais regulares.
   PRÓXIMAS:
   - Manutenção continua
   - Refinamentos pontuais
   - Campanhas especiais (campaign-launcher)
```

---

## Step 3 — Recomendação clara

Com state identificado, retorna recomendação clara:

```
═══════════════════════════════════════
🎯 RECOMENDAÇÃO MAESTRO
═══════════════════════════════════════

ESTADO ATUAL: STATE 5 — Tese completa, falta identidade visual

PRÓXIMA SKILL A INVOCAR:
👉 form-brand-visual-ia-figma-setup

Por quê:
Tese da marca está pronta (big-idea + positioning + 
tribe-enemy). Agora preciso criar o estúdio Figma onde 
TODA a identidade visual vai morar.

figma-setup cria as 5 páginas mestras + Variable Collection 
+ Text Styles default. É a base estrutural pras próximas 
8 skills (logo, typography, color, brand-faces, etc.) 
adicionarem conteúdo.

Tempo estimado figma-setup: 30 min

JORNADA DAQUI ATÉ PRODUÇÃO:
Etapa atual → 5 mais skills → STATE 8 — PRODUÇÃO

1. figma-setup (30 min)
2. moodboard (1h)
3. logo-system (2h) + typography (1h) + color-palette (1h)
4. brand-faces (2h se aplicável) + voice-tone (1h)
5. photography-signature (1h) + videography-signature (1h) 
   + motion-design (30 min)
6. brand-guideline-builder ⭐ (2-3h consolidação)

TOTAL: 12-15h até sistema rodando

COMANDO PRA INVOCAR:
"Roda form-brand-visual-ia-figma-setup pra Aurora"
═══════════════════════════════════════
```

---

## Step 4 — Visão geral opcional

Se usuário quer ver TODA a jornada:

```
═══════════════════════════════════════
VISÃO GERAL — JORNADA AURORA
═══════════════════════════════════════

DIAGNÓSTICO  ✅ STATE 0 → 1
   Skill: form-brand-visual-ia-brand-readiness

PESQUISAS    ✅ STATE 1 → 4
   Skills: audience-research + market-mapping + product-research

TESE         ✅ STATE 4 → 5
   Skills: big-idea + positioning + tribe-enemy

IDENTIDADE   👉 STATE 5 → 7 (VOCÊ ESTÁ AQUI)
   Skills: figma-setup + moodboard + logo + typography + 
           color + brand-faces + voice-tone + photo-sig + 
           video-sig + motion-design

BRAND GUIDELINE ⏳ STATE 7 → 8
   Skill: brand-guideline-builder ⭐

PRODUÇÃO   ⏳ STATE 8 → 9
   Skills: content-pipeline, organico-diario, etc.

OPERAÇÃO   ⏳ STATE 9 → 10
   Skills: calendario-editorial, pacote-semanal, etc.

MANUTENÇÃO ⏳ STATE 10
   Skills: system-audit (trimestral), troubleshooting (under demand)

CAMPANHAS ⏳ Especial
   Skill: campaign-launcher (lançamento, sazonal, eventos)
═══════════════════════════════════════
```

---

## Step 5 — Adaptações por contexto

### Se usuário diz "Quero criar conteúdo agora"

```
Antes de criar conteúdo, sistema precisa estar montado.

STATE atual: [N] / 10

Se STATE < 8 (Brand Guideline pronto):
   "Você ainda não tem Brand Guideline. Conteúdo gerado 
   agora não será on-brand. Recomendo construir base 
   primeiro (5-15h).
   
   Próxima skill: [específica conforme state]"

Se STATE = 8+ (pronto pra produção):
   "Sistema pronto. Posso recomendar:
   
   - Peça única detalhada: form-brand-visual-ia-content-pipeline
   - Calendário mensal: form-brand-visual-ia-calendario-editorial
   - Carrossel rápido: form-brand-visual-ia-carrossel-feed
   - Reel rápido: form-brand-visual-ia-organico-diario
   - Ad pago: form-brand-visual-ia-ad-video
   
   Qual quer?"
```

### Se usuário diz "Estou no meio do mês, quero plano da semana"

```
STATE: pacote semanal

RECOMENDADA: form-brand-visual-ia-pacote-semanal

Antes:
1. Tem calendário do mês? (calendario-editorial)
2. Tem banco de ideias? (banco-ideias)

Se SIM ambos → roda pacote-semanal
Se algum falta → primeiro recupera (calendario-editorial primeiro)
```

### Se usuário diz "Saiu errado, deu ruim"

```
Não precisa esperar audit trimestral pra debugar.

PRÓXIMA SKILL: form-brand-visual-ia-troubleshooting

Descreva o problema:
- Output específico (imagem/vídeo/texto)
- Prompt original
- Ferramenta usada
```

### Se usuário diz "Vou fazer lançamento mês que vem"

```
STATE: produção ok, vai entrar campanha

PRÓXIMA SKILL: form-brand-visual-ia-campaign-launcher

Plano 8-12 semanas mapeado.
Inicia 4 semanas antes do Day 0.
```

---

## Step 6 — Output

```
═══════════════════════════════════════
🎯 MAESTRO RECOMENDA

STATE DETECTADO: [N]

PRÓXIMA SKILL: form-brand-visual-ia-[X]

POR QUÊ:
[explicação clara em 2-3 frases]

TEMPO ESTIMADO:
[X minutos/horas]

COMANDO:
"Roda form-brand-visual-ia-[X] pra [marca]"

ALTERNATIVAS POSSÍVEIS:
- Skill A (se prefere foco em X)
- Skill B (se prefere foco em Y)
- Skill C (se está em situação Z)

═══════════════════════════════════════

Confirma a recomendação ou prefere alternativa?
```

---

## Quando Maestro NÃO sabe responder

```
Se estado da marca é ambíguo:

"Não consigo identificar precisamente onde você está 
na jornada. Pra eu te guiar bem, me ajuda:

1. Tem CLAUDE.md da marca? Onde?
2. Brand Guideline (companion.md) existe?
3. Pesquisas (audience-research.md) já feitas?
4. Já publicou algo desta marca?
5. Qual sua frustração principal AGORA?

Com essas info, vou apontar próxima skill exata."
```

---

## Frequência de uso

```
QUANDO USAR MAESTRO:
- Início de cada sessão (não sabe por onde começar)
- Quando termina uma skill (precisa próxima)
- Quando confuso entre 48 skills
- Quando quer visão geral da jornada

QUANDO NÃO USAR:
- Quando já sabe exatamente qual skill rodar
- Tarefa muito específica (rodar skill direto)
- Manutenção rotineira (pacote-semanal por padrão)
```

---

## Output esperado

✅ Estado atual da marca diagnosticado
✅ Próxima skill recomendada com clareza
✅ Razão da recomendação
✅ Tempo estimado
✅ Comando de invocação pronto
✅ Alternativas listadas (se aplicável)
