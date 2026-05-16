---
name: form-brand-visual-ia-system-audit
description: Auditoria trimestral completa do sistema da marca em 6 pontos - Brand Guidelines, Skills, Outputs (galeria visual), Métricas, Ferramentas, Processos. Detecta drift visual/textual + skills desatualizadas + workflows quebrados. Sugere action items priorizados. Output - audit-report-Q[N]-[ano].md + updates pro companion.md. Use a cada 3 meses (trimestral). Triggers - "audit trimestral", "auditoria do sistema", "revisar sistema", "saúde da marca", "quarterly review".
---

# System Audit — Auditoria trimestral

Auditoria completa do sistema da marca. 3-5 horas a cada 3 meses = sistema sempre saudável.

---

## Pre-requisitos

- Sistema rodando há 3+ meses
- Métricas coletadas
- Peças publicadas pra galeria visual

## Próxima skill no workflow

Action items implementados → re-rodar audit em 3 meses.

---

## Os 6 pontos de auditoria

```
1. BRAND GUIDELINES (CLAUDE.md + companion.md)
2. SKILLS (status de cada)
3. OUTPUTS (qualidade real)
4. MÉTRICAS (tendências)
5. FERRAMENTAS (stack atual)
6. PROCESSOS (workflows ainda servem?)
```

---

## Step 1 — Coletar dados

```
═══════════════════════════════════════
SYSTEM AUDIT — Coleta de dados (1h)
═══════════════════════════════════════

ANTES DE INICIAR:

✓ Compila métricas dos últimos 3 meses (planilha)
✓ Lista de peças publicadas (galeria)
✓ Custos das ferramentas (extratos)
✓ Tempo gasto por workflow (estimativa)
✓ Skills custom criadas/atualizadas no período
✓ Brand Guidelines: versão atual

Período auditado:
[Q2 2026 — abril/maio/junho]
```

---

## Step 2 — Ponto 1: Brand Guidelines

```
═══════════════════════════════════════
PONTO 1 — BRAND GUIDELINES
═══════════════════════════════════════

QUESTÕES:
1. CLAUDE.md atualizado?
2. brand-guideline-companion.md reflete realidade atual?
3. Brand Voice ainda funciona pra audiência atual?
4. Paleta ainda serve?
5. Photography Signature ainda alinhada?
6. Brand Faces ainda atendem?

CHECKLIST:
- [ ] Companion.md sem seções vazias
- [ ] Voice descrita reflete tom real das peças
- [ ] Paleta sem cores não-utilizadas há 3 meses
- [ ] Photography signature ainda produz output desejado
- [ ] Pilares de conteúdo bate com volume real produzido

SINAIS DE PROBLEMA:
⚠️ Companion.md não atualizou em 3 meses (drift latente)
⚠️ Brand Voice em peças varia muito (incoerência)
⚠️ Paleta tem cores nunca usadas (purge)
⚠️ Brand Faces ficaram desatualizadas (re-gen?)

ACTION ITEMS DESTE PONTO:
- [ ] Refresh companion.md com aprendizados
- [ ] Remove cor "amber accent" da paleta (uso < 5% em 3 meses)
- [ ] Update Photography Signature pra tom warmer (peças melhores)
```

---

## Step 3 — Ponto 2: Skills

```
═══════════════════════════════════════
PONTO 2 — SKILLS
═══════════════════════════════════════

PRA CADA SKILL DA BIBLIOTECA:

| Pergunta | Action se "não" |
|---|---|
| Ainda invoco esta skill regularmente? | Pode arquivar |
| Output ainda satisfaz? | Refatora |
| Trigger phrases capturam intentions reais? | Atualiza description |
| Workflow ainda eficiente? | Otimiza |
| Defaults da marca atualizados? | Sync com companion.md |

SKILLS "ZOMBIES" (existem mas nunca usa):
- [skill X — usada 0x em 3 meses]
- [skill Y — usada 1x]

DECISÃO: archive OR delete OR reativa

SKILLS "STRETCHED" (tentam fazer muito):
- [skill Z faz 5 coisas — quebra em 2]

SKILLS AUSENTES (workflows manuais que viraram repetitivos):
- "Análise semanal de DMs" — fizemos manualmente 12x — virar skill?

ACTION ITEMS:
- [ ] Archive form-brand-visual-ia-email-flows (não usamos — modo visual-only)
- [ ] Refatora form-brand-visual-ia-organico-diario (output ruim em últimos meses)
- [ ] Criar nova skill: "weekly-dm-analysis"
```

---

## Step 4 — Ponto 3: Outputs (galeria visual)

```
═══════════════════════════════════════
PONTO 3 — OUTPUTS / GALERIA VISUAL
═══════════════════════════════════════

EXERCÍCIO:
- Junta 30 últimas peças publicadas em grid
- Olha conjunto
- Compara com 30 peças de 3 meses atrás

PERGUNTAS:
1. Parecem da mesma marca?
2. Qualidade visual mantém / melhora / piora?
3. Brand voice consistente cross-peças?
4. Composição on-brand?
5. Brand Face consistente quando aparece?

DRIFT DETECTION:

VISUAL DRIFT:
- Saturação aumentou ao longo dos meses? (sim/não)
- Brand Face mudou levemente? (sim/não)
- Composição ficou mais centralizada? (sim/não)

TEXTUAL DRIFT:
- Tone mais formal / informal? (sim/não)
- Vocabulary forbidden começou a aparecer? (verifica)
- CTAs mais agressivos? (sim/não)

DECISÃO: 
- Drift saudável (evolução deliberada)?
- OR drift tóxico (perda silenciosa)?

ACTION ITEMS:
- [ ] Saturação subiu 8% gradualmente — volta pra warm muted
- [ ] Brand Face Core "envelheceu" levemente — regen versão atualizada
- [ ] CTA "Compre agora" apareceu em 3 peças — ALERT
```

---

## Step 5 — Ponto 4: Métricas

```
═══════════════════════════════════════
PONTO 4 — MÉTRICAS (3 meses)
═══════════════════════════════════════

COMPARATIVO Q2 vs Q1 2026:

| Métrica | Q1 | Q2 | Δ |
|---|---|---|---|
| Reach médio | 8000 | 11000 | +37% ↑ |
| Saves médio | 120 | 180 | +50% ↑ |
| Engagement rate | 4.2% | 5.1% | +0.9pp ↑ |
| Followers gain | 500 | 800 | +60% ↑ |
| Conversion (vendas) | 50 | 80 | +60% ↑ |

INTERPRETAÇÃO:
✓ Crescimento sólido em todas métricas-chave
✓ Sistema rodando bem
✓ Vale duplicar esforço

PADRÕES IDENTIFICADOS:
- BTS posts 2.3x mais saves que produto direto
- Reels 25-30s outperform 15s (completion)
- Carrosséis 8 slides > 5 slides (saves)
- Hashtag #aurora gerou top 5 peças

SINAIS DE ALERTA:
- Nenhum sinal crítico (sistema saudável)

ACTION ITEMS:
- [ ] Triplica volume BTS no Q3
- [ ] Default Reel duração: 25-30s
- [ ] Padronizar carrosséis em 8 slides
```

---

## Step 6 — Ponto 5: Ferramentas

```
═══════════════════════════════════════
PONTO 5 — FERRAMENTAS
═══════════════════════════════════════

STACK ATUAL:

| Ferramenta | Custo/mês | Uso | Decisão |
|---|---|---|---|
| Claude Desktop Pro | R$ 100 | Daily | ✓ keep |
| ElevenLabs Creator | R$ 110 | Daily | ✓ keep |
| Higgsfield Pro | R$ 150 | Daily | ✓ keep |
| Figma Professional | R$ 75 | Daily | ✓ keep |
| Musicbed | R$ 100 | Weekly | ⚠ avaliar — Artlist mais barato? |
| Epidemic Sound | R$ 75 | Daily | ✓ keep |
| DaVinci Studio | R$ 0 (already paid) | Monthly | ✓ keep |
| Buffer | R$ 60 | Daily | ✓ keep |
| CapCut Pro | R$ 40 | Daily | ✓ keep |

TOTAL: R$ 710/mês

ATUALIZAÇÕES IMPORTANTES?
- Midjourney V8 lançou em maio (testar)
- Kling V4 rumor (acompanhar)
- Higgsfield agregou Veo 3 (verificar acesso)

OPORTUNIDADES:
- Trocar Musicbed por Artlist (R$ 50 economia/mês)
- Testar Suno premium pra music IA original

ACTION ITEMS:
- [ ] Test Artlist por 1 mês — comparar com Musicbed
- [ ] Avaliar Midjourney V8 vs Nano Banana 2 — Kling Q3 produção
- [ ] Atualizar tier de Higgsfield se Veo 3 chega
```

---

## Step 7 — Ponto 6: Processos

```
═══════════════════════════════════════
PONTO 6 — PROCESSOS / WORKFLOWS
═══════════════════════════════════════

WORKFLOWS AINDA FLUINDO?

| Workflow | Tempo médio | Status |
|---|---|---|
| Reel production | 2-3h | ✓ Fluindo |
| Story sessions semanais | 1h | ✓ Fluindo |
| Calendário editorial | 30 min/mês | ✓ Fluindo |
| Monthly planning | 90 min/mês | ✓ Fluindo |

BOTTLENECKS:
- Geração Brand Face às vezes precisa 3-4 tries
- Edição CapCut: 30 min retrabalho médio
- Caption writing: às vezes "branco mental"

OPORTUNIDADES:
- Treinar LoRA da Brand Face no Flux pra consistency absoluta
- Banco de capções pré-aprovadas pra acelerar

ACTION ITEMS:
- [ ] Pesquisar treinamento LoRA Brand Face (10 fotos, ~$10)
- [ ] Criar banco de captions templates por pilar
```

---

## Step 8 — Documentar audit + action items

```markdown
# Audit Q2 2026 — Aurora
Data: 30 de junho de 2026
Próxima audit: 30 de setembro de 2026

## RESUMO EXECUTIVO

✅ Sistema saudável geral
✅ Crescimento sólido em métricas-chave (+37-60% across)
✅ 2 skills refatoradas pra performance
✅ 1 nova skill identificada (weekly-dm-analysis)
✅ Custo de produção mantido

## PONTO 1 — BRAND GUIDELINES
[Detalhes + action items]

## PONTO 2 — SKILLS
[Detalhes]

## PONTO 3 — OUTPUTS
[Detalhes]

## PONTO 4 — MÉTRICAS
[Detalhes]

## PONTO 5 — FERRAMENTAS
[Detalhes]

## PONTO 6 — PROCESSOS
[Detalhes]

## ACTION ITEMS PRIORIZADOS

### Próximas 2 semanas (alta prioridade)
1. Update companion.md com aprendizados (3h)
2. Triplica volume BTS no Q3 (1h planning)
3. Refatora skill organico-diario (4-5h)

### Próximo mês
4. Test Artlist vs Musicbed (1 mês trial)
5. Test Midjourney V8 (algumas horas)
6. Criar weekly-dm-analysis skill (3h)

### Q3 entire
7. Treinar Brand Face LoRA (1 dia)
8. Banco caption templates (8-10h)
9. System audit Q3 (3 meses)
```

---

## Step 9 — Apresentar

```
═══════════════════════════════════════
✅ SYSTEM AUDIT Q2 2026 COMPLETO

Documento: [marca]/audits/audit-Q2-2026.md

DIAGNÓSTICO GERAL: Sistema saudável ✓

PRINCIPAIS FINDINGS:
1. Crescimento sólido (+37-60% métricas)
2. BTS pilar performando 2x melhor — ampliar
3. Reels 25-30s outperform 15s — padronizar
4. Drift visual leve (saturação) — corrigir
5. Skills 38 de 48 instaladas — okay
6. Stack ferramentas funcionando bem

ACTION ITEMS PRIORIZADOS:
- 9 items mapeados
- 3 alta prioridade (próximas 2 semanas)
- 3 médio prazo (próximo mês)
- 3 Q3 inteiro

NEXT AUDIT: 30 setembro 2026

═══════════════════════════════════════
```

---

## Adaptação por modo

### VISUAL-ONLY
- Ponto 3 (Galeria visual) é MAIS extenso (visual = tudo)
- Ponto 4 (Métricas) prioriza saves/shares > likes
- Action items focados em visual quality

### VISUAL+COPY (padrão)
- 6 pontos balanceados

### COPY-HEAVY
- Ponto 2 (Skills) incluir análise de skills de copy
- Ponto 4 prioriza email open rate, reading time
- Ponto 3 análise textual cross-peças

---

## Frequência ideal

```
TRIMESTRAL (a cada 3 meses) — RECOMENDADO
   Sweet spot: equilibra overhead vs drift detection

NÃO RODAR:
- Mensal (overhead alto)
- Semestral (drift acumula demais)
- Anual (drift catastrófico)

EXCEÇÕES:
- Pivot estratégico → audit imediato
- Métricas despencaram → audit imediato
- Time mudou (alguém saiu/entrou) → audit imediato
```

---

## Armadilhas a evitar

- **Pular audits.** Drift silencioso. 6 meses sem audit = problemas grandes.
- **Audit sem ação.** Identifica problemas mas não corrige. Audit = teatro.
- **Audit superficial.** 30 min "tá ok" não detecta nada. Mínimo 3h.
- **Não documentar.** Audit verbal vira esquecido. Sempre escrito.
- **Implementar tudo de uma vez.** 30 action items em 1 semana = burnout. Prioriza.

---

## Output esperado

✅ `audits/audit-Q[N]-[ano].md` completo
✅ 6 pontos auditados profundamente
✅ Action items priorizados (alta / médio / longo prazo)
✅ Updates pro companion.md
✅ Próxima audit agendada
