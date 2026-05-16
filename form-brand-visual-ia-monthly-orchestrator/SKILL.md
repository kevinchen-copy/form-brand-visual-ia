---
name: form-brand-visual-ia-monthly-orchestrator
description: Wrapper MASTER que produz mês inteiro de conteúdo em 1 invocação (60-90 min). Chama múltiplas skills em sequência - calendário editorial + banco ideias refresh + 4 pacotes semanais + análise mês anterior + ajustes pro próximo. Output - mês inteiro planejado + 25-30 peças mapeadas + action items semanais. Use 1x por mês (último domingo do mês anterior). Triggers - "plano do mês", "junho 2026 completo", "mês inteiro de conteúdo", "orchestrator mensal", "planejamento mensal completo".
---

# Monthly Orchestrator — Mês inteiro em 1 sessão

Wrapper master que produz mês COMPLETO em 1 invocação. Substitui horas de planejamento por 60-90 min de execução.

---

## Pre-requisitos

- Skills downstream instaladas
- Brand sistema rodando (companion.md + Figma + skills)
- Mês anterior com métricas coletadas (pra learning)

## Próxima skill no workflow

Pacote-semanal toda segunda + skills específicas durante o mês.

---

## Workflow do orchestrator

```
═══════════════════════════════════════
MONTHLY ORCHESTRATOR — Workflow
═══════════════════════════════════════

ETAPA 1 — ANÁLISE MÊS ANTERIOR (15 min)

Lê métricas mês anterior:
- Top 5 peças (qual pilar performou?)
- Bottom 5 peças (o que não funcionou?)
- Mix realizado vs planejado
- Crescimento followers/engagement

Gera insights:
- "BTS performou 2x melhor que produto direto"
- "Reels 30s tem mais saves que 15s"
- "Hashtag #aurora gerou maior reach"

ETAPA 2 — DEFINIR TEMA CENTRAL DO MÊS (10 min)

Pergunta:
- Eventos do mês (Dia das Mães? Lançamento?)
- Foco estratégico (growth? retenção? venda?)
- Tema unificador (1 frase)

Sugere baseado em análise:
"Mês foco em BTS + storytelling — funcionou mês anterior"

ETAPA 3 — AJUSTAR MIX DE PILARES (5 min)

Default: 30/25/20/15/10

Ajustes baseados em performance:
- Pilar X performou bem → +5%
- Pilar Y performou mal → -5%
- Mantém soma 100%

ETAPA 4 — CALENDÁRIO MENSAL (15 min)

Roda form-brand-visual-ia-calendario-editorial
- Estrutura 4 semanas
- Mapeia 16-20 peças
- Aplica mix ajustado
- Considera eventos

ETAPA 5 — REFRESH BANCO IDEIAS (10 min)

Roda form-brand-visual-ia-banco-ideias
- Verifica que tem 30+ ideas frescas
- Se baixo, gera mais

ETAPA 6 — PRODUÇÃO PACOTES SEMANAIS (paralelo OU sequencial)

Roda form-brand-visual-ia-pacote-semanal 4 vezes
(1 por semana do mês)

OPÇÃO A — todos de uma vez (intensivo)
- Bloca 1-2 dias inteiros
- Produz 4 pacotes = ~25 horas
- Resto do mês = só publicação

OPÇÃO B — semanal (recomendado)
- Cada domingo OR segunda, próximo pacote
- 6-8h por sessão semanal
- Total 25-30h distribuído

ETAPA 7 — ACTION ITEMS DOCUMENTADOS (5 min)

Pra cada semana, action items específicos:
- Semana 1: pacote produzido, schedule pro Buffer
- Semana 2: pacote produzido, ajustes pós-feedback
- ...
```

---

## Step 0 — Read context

```yaml
brand_guidelines: [companion.md]
calendario_mes_anterior: [maio 2026.md]
metricas: [métricas maio]
banco_ideias: [estado atual]
mode: "visual-copy"
```

---

## Step 1 — Coletar inputs

```
═══════════════════════════════════════
MONTHLY ORCHESTRATOR — Setup
═══════════════════════════════════════

1. Mês target: [Junho 2026]

2. Foco estratégico do mês:
   - Crescimento (follower growth)
   - Retenção (engagement com base)
   - Vendas (push conversion)
   - Brand awareness (alcance)
   - Mix

3. Eventos no mês:
   - Lançamento previsto?
   - Datas comemorativas relevantes?
   - Aniversário marca?
   - Outro?

4. Volume desejado:
   - Médio (16 peças)
   - Alto (20-25 peças)
   - Intensivo (lançamento) — 30+ peças

5. Modo de produção:
   - INTENSIVO — 1-2 dias produção tudo
   - DISTRIBUTED — pacote-semanal toda segunda
```

---

## Step 2 — Análise mês anterior

```
═══════════════════════════════════════
ANÁLISE — MAIO 2026
═══════════════════════════════════════

Volume publicado: 17 peças (target era 16)

Top 5 performers:
1. Reel #5 — Dia das Mães (12.3k reach, 543 saves)
2. Carrossel #2 — "5 erros skincare" (8.7k, 421 saves)
3. Reel #1 — Educativo ordem (7.2k, 380 saves)
4. Reel #7 — Hero launch (6.8k, 295 saves)
5. Stories série launch (Day 0, 4.2k cumulative)

Bottom 5:
17. Post feed quote isolada (1.1k, 23 saves)
16. Carrossel comparativo (1.4k, 31 saves)
15. Post feed mood (1.8k, 47 saves)

PADRÕES DETECTADOS:
✓ BTS / Storytelling > Produto direto (2x engagement)
✓ Carrosséis educativos performam saves alto
✓ Reels 25-30s > 15s (completion rate maior)
✓ Posts feed estático sem hook = invisível

RECOMENDAÇÕES PRO PRÓXIMO MÊS:
- Aumentar BTS de 20% pra 25%
- Reduzir posts feed isolados de 10% pra 5%
- Reels default 25-30s
- Hooks visuais mais fortes em capas

MIX AJUSTADO PRO JUNHO:
- Educativo: 30 (mantém)
- Produto: 20 (reduz de 25)
- BTS: 25 (aumenta de 20)
- Social proof: 15 (mantém)
- Lifestyle: 10 (mantém)
```

---

## Step 3 — Calendário mensal

Roda calendario-editorial internamente:

```
═══════════════════════════════════════
CALENDÁRIO JUNHO 2026
═══════════════════════════════════════

Volume: 18 peças (médio-alto pra capitalizar momentum)
Tema central: "Pós-lançamento — sustentação Aurora Sérum"
Mix: 30/20/25/15/10 (BTS ampliada)
Eventos: nenhum grande (mês manutenção)

SEMANA 1 (1-7 junho)
- Reel educativo (puxar best performer May)
- Stories BTS founder week
- Carrossel "perguntas que recebemos"
- Post quote (curto, mood)

SEMANA 2 (8-14 junho)
- Reel social proof — Mariana 7 meses
- Stories produto demos
- Carrossel "ingredientes Aurora deep-dive"
- Reel BTS bancada

SEMANA 3 (15-21 junho)
- Reel manifesto curto
- Stories série learning
- Carrossel "Aurora + outras rotinas"
- Post lifestyle

SEMANA 4 (22-30 junho)
- Reel educativo categoria
- Stories Q&A founder
- Carrossel "30 dias Aurora real"
- Reel produto angle novo
- Post manifesto final do mês

TOTAL: 18 peças
- Reels: 7
- Carrosséis: 5
- Stories séries: 4
- Posts feed: 2
```

---

## Step 4 — Banco ideias refresh

```
═══════════════════════════════════════
BANCO IDEIAS — Status
═══════════════════════════════════════

Atual: 42 ideias (estava 58 mês passado, 18 usadas)
Status: 42 pendentes, 18 publicadas

GAP IDENTIFICADO:
- Pilar BTS: só 8 ideas frescas (precisa +10)
- Pilar Lifestyle: só 5 (precisa +5)

REFRESH BRAINSTORM:
- 15 ideias novas em 30 min
- Foco: BTS + Lifestyle

NOVAS IDEIAS GERADAS:
[15 ideias listadas com score]

BANCO ATUALIZADO: 57 ideias (42 + 15)
```

---

## Step 5 — Action items por semana

```
═══════════════════════════════════════
ACTION ITEMS — Junho 2026
═══════════════════════════════════════

SEMANA 1 (1-7 junho)
✓ Domingo 31 maio: roda pacote-semanal
   - 5 peças prontas até segunda manhã
✓ Schedule Buffer
✓ Engajamento toda manhã 15 min
✓ Métricas: track top performer

SEMANA 2 (8-14 junho)
✓ Domingo 7 junho: pacote-semanal
✓ Análise semana 1 → ajustes pequenos
✓ Mariana social proof case (preparar antes)

SEMANA 3 (15-21 junho)
✓ Domingo 14 junho: pacote-semanal
✓ Mid-month check métricas (sem pânico)
✓ Manifesto Reel preparação (peça especial)

SEMANA 4 (22-30 junho)
✓ Domingo 21 junho: pacote-semanal
✓ Final do mês: análise full
✓ Setup julho via monthly-orchestrator

DAILY:
- Stories 3-5/dia
- Engagement comments 15 min
- Métricas track

WEEKLY (toda segunda):
- Pacote-semanal próxima semana
- Métricas review semana anterior
```

---

## Step 6 — Output: julho-2026-plan.md

Documento master do mês:

```markdown
# Plano Junho 2026 — Aurora

## Análise mês anterior
[insights]

## Tema central
"Pós-lançamento — sustentação Aurora Sérum"

## Mix ajustado
30/20/25/15/10

## Calendário 4 semanas
[detalhado peça por peça]

## Banco ideias status
57 ideias (42 antigas + 15 novas refresh)

## Action items semanais
[detalhado]

## Métricas-alvo
- Reach: 45k (+10% vs maio)
- Saves: 2.8k (+15%)
- Engagement: 5.2%
- Followers: +180

## Skills a usar
- pacote-semanal (4x)
- content-pipeline (3x — peças âncora)
- ad-video (1x — refresh ad pré-existente)
- system-audit (uma vez no fim)
```

---

## Step 7 — Apresentar

```
═══════════════════════════════════════
✅ JUNHO 2026 ORQUESTRADO

Documento master: [marca]/months/junho-2026-plan.md

CALENDÁRIO: 18 peças mapeadas em 4 semanas
BANCO: refreshado pra 57 ideias
TEMA: "Sustentação pós-lançamento Aurora"
MIX: ajustado baseado em learning maio

ECONOMIA: ~5-8h de planejamento manual

PRÓXIMOS PASSOS:
1. Revisa plano
2. Toda segunda: roda pacote-semanal
3. Engajamento daily
4. Fim de junho: roda monthly-orchestrator pra julho

═══════════════════════════════════════
```

---

## Frequência de uso

```
QUANDO RODAR:
- 1x por mês (último domingo do mês anterior)
- Tempo: 60-90 min sessão

NÃO RODAR:
- Mid-month (já tem plano rodando)
- Sem métricas mês anterior (a análise vai ser vazia)

CASO DE EXCEÇÃO:
- Pivot estratégico mid-month → re-orchestrate
```

---

## Adaptação por modo

### VISUAL-ONLY
- Análise focada em performance visual
- Mix vira 40/15/30/10/5 (mais visual + BTS)
- Menos posts text-heavy

### VISUAL+COPY
- Padrão

### COPY-HEAVY
- Newsletters semanais incluídas
- Carrosséis educativos longos planejados
- Mix vira 40/20/15/15/10

---

## Armadilhas a evitar

- **Análise sem dados.** Sem métricas, análise = chute.
- **Plano rígido.** Algumas peças vão precisar mudar mid-month. OK.
- **Não atualizar banco.** Banco baixo = burnout próximo mês.
- **Tema central genérico.** "Foco em produto" = vago. Específico.

---

## Output esperado

✅ `months/[mês]-plan.md` completo
✅ Análise mês anterior + insights
✅ Mix ajustado baseado em performance
✅ Calendário 4 semanas com 16-20 peças
✅ Banco refreshado
✅ Action items semanais
✅ Métricas-alvo
✅ Próxima skill recomendada por semana
