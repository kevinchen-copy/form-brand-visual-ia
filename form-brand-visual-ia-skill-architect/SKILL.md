---
name: form-brand-visual-ia-skill-architect
description: Meta-skill que CRIA outras skills custom seguindo anatomia de SKILL.md. Recebe ideia de skill nova + ajuda definir trigger phrases + workflow + output + handoff. Output - pasta da skill nova com SKILL.md completo pronto pra instalar. Use quando workflow recorrente vira candidato a skill OU quer skill custom específica da sua marca. Triggers - "criar skill nova", "gerar SKILL.md", "quero automatizar workflow", "skill pra", "nova habilidade", "meta-skill".
---

# Skill Architect — Meta-skill que cria skills

Cria SKILL.md de nova skill seguindo padrão do sistema form-brand-visual-ia.

---

## Pre-requisitos

- Workflow recorrente identificado (candidato a skill)
- 5-10 minutos pra definir specs

## Próxima skill no workflow

Após SKILL.md criado → instala no Claude Desktop → testa.

---

## Step 1 — Define função da nova skill

```
═══════════════════════════════════════
SKILL ARCHITECT — Setup
═══════════════════════════════════════

1. Função da skill (1-2 frases):
   ex: "Analisa DMs do Instagram recebidos na última semana 
        e agrupa por tema, gerando insights pra próximo conteúdo"

2. Quando deve disparar:
   - Workflow weekly (toda segunda)?
   - On-demand (quando usuário pede)?
   - Trigger específico?

3. Nome proposto:
   form-brand-visual-ia-[nome]
   ex: form-brand-visual-ia-weekly-dm-analysis

4. Categoria (qual bloco):
   - Brand Foundation
   - Tese
   - Identidade Visual
   - Brand Guideline
   - Produção
   - Edição
   - Sistema Operacional
   - Meta
   - Outro

5. Pre-requisitos (quais skills devem rodar antes):
   ex: "brand-guideline-builder rodou + Instagram conectado"

6. Próxima skill no workflow (handoff):
   ex: "content-pipeline pra produzir peça baseada em insights"
```

---

## Step 2 — Define trigger phrases

```
═══════════════════════════════════════
TRIGGER PHRASES — Quando ativar
═══════════════════════════════════════

Liste palavras-chave que ativam a skill:

ex pra weekly-dm-analysis:
- "analisa DMs"
- "weekly DM review"
- "o que recebi essa semana"
- "insights dos DMs"
- "DM analysis"
- "feedback dos clientes"

Crítico: TRIGGER PHRASES claras = skill dispara corretamente.
Vague triggers = skill esquecida.
```

---

## Step 3 — Define inputs obrigatórios

```
═══════════════════════════════════════
INPUTS — O que skill precisa pra rodar
═══════════════════════════════════════

ex:
1. Período de análise (esta semana / mês passado / específico)
2. Plataforma (Instagram / TikTok / multi)
3. Como acessar DMs (Instagram MCP? Export manual?)
4. Foco de análise (objeções? perguntas? compliments?)
```

---

## Step 4 — Define workflow

```
═══════════════════════════════════════
WORKFLOW — Passos da skill
═══════════════════════════════════════

Step 1: [descreve]
Step 2: [descreve]
...
Step N: Output final

ex pra weekly-dm-analysis:

Step 0 — Read brand context
Step 1 — Acessa DMs do período (via MCP OR upload manual)
Step 2 — Categoriza por tema (5 categorias automáticas)
Step 3 — Identifica top 5 perguntas/objeções
Step 4 — Mapeia sentimento dominante
Step 5 — Gera insights pra próximo conteúdo
Step 6 — Documenta em dm-analysis-[data].md
Step 7 — Recomenda próxima skill (content-pipeline com 
         tema baseado em insight)
```

---

## Step 5 — Define output esperado

```
═══════════════════════════════════════
OUTPUT — O que a skill entrega
═══════════════════════════════════════

Output tangível obrigatório:

ex:
- Arquivo dm-analysis-[data].md no vault
- 5 categorias de DMs identificadas
- Top 5 perguntas listadas
- 3 ideias de conteúdo derivadas
- Próxima skill recomendada

NUNCA termina com "Agora você sabe que...". 
SEMPRE termina com output tangível.
```

---

## Step 6 — Define armadilhas

Lista 5-7 armadilhas específicas dessa skill:

```
═══════════════════════════════════════
ARMADILHAS A EVITAR
═══════════════════════════════════════

ex pra weekly-dm-analysis:
- Não analisar DMs antigos demais (>2 semanas perde context)
- Não generalizar 1 DM = padrão
- Sem privacidade — DMs específicos não viram conteúdo público sem permissão
- Sem voice check — insights devem alinhar com Brand Voice
- Não inventar respostas — DMs reais só
```

---

## Step 7 — Define adaptação por modo

```
═══════════════════════════════════════
ADAPTAÇÃO POR MODO DA MARCA
═══════════════════════════════════════

VISUAL-ONLY:
- [como skill se ajusta]

VISUAL+COPY (padrão):
- [padrão]

COPY-HEAVY:
- [expansão se aplicável]
```

---

## Step 8 — Gerar SKILL.md

Skill compila tudo em SKILL.md formatado:

```yaml
---
name: form-brand-visual-ia-[nome]
description: [descrição completa com triggers]
---

# [Nome da Skill]

[1-2 parágrafos de intro]

---

## Pre-requisitos
[lista]

## Próxima skill no workflow
[handoff]

---

## Step 0 — Read brand context
[detalhes]

## Step 1 — [primeira ação]
[detalhes]

## Step N — [última ação]
[detalhes]

---

## Adaptação por modo
[específicas]

## Armadilhas a evitar
[lista]

## Output esperado
[lista de outputs tangíveis]
```

---

## Step 9 — Cria pasta + salva

```
═══════════════════════════════════════
CRIAÇÃO DA SKILL
═══════════════════════════════════════

Pasta criada:
/Formacao-Brand-Visual-IA/skills/form-brand-visual-ia-[nome]/

Arquivo:
/Formacao-Brand-Visual-IA/skills/form-brand-visual-ia-[nome]/SKILL.md

Documento gerado, X palavras, Y caracteres.

Voice check no SKILL.md:
✓ Frontmatter completo
✓ Trigger phrases claras
✓ Pre-requisitos listados
✓ Steps detalhados
✓ Output tangível definido
✓ Armadilhas explícitas

═══════════════════════════════════════

PRÓXIMOS PASSOS:

1. Lê SKILL.md gerado
2. Ajustes se necessário (editar manualmente)
3. Compacta pasta em .zip (se quer)
4. Instala no Claude Desktop:
   Settings → Customize → Habilidades → +
5. Testa skill com 3-5 inputs reais
6. Refinar SKILL.md se necessário após testar

TEMPO TOTAL pra criar + testar nova skill: 1-2 horas
```

---

## Exemplos de skills que podem ser criadas

### Skill custom: weekly-dm-analysis

Workflow recorrente: análise semanal de DMs → insights pra conteúdo.

### Skill custom: hashtag-performance

Track performance de hashtags semanalmente.

### Skill custom: competitive-radar

Monitora 3-5 concorrentes semanalmente.

### Skill custom: testimonial-extractor

Extrai depoimentos de DMs/comments + formata pra peças.

### Skill custom: brand-photoshoot-brief

Quando você contrata fotógrafo, brief detalhado em formato profissional.

### Skill custom: launch-debrief

Pós-lançamento — análise estruturada do que funcionou/não.

### Skill custom: trend-spotter

Análise de trending audios + topics + formats semanalmente.

---

## Quando criar skill custom vs usar skills existentes

```
USAR EXISTENTE SE:
- 90%+ do workflow já existe em skill atual
- Workflow é variação leve

CRIAR CUSTOM SE:
- Workflow recorrente único (5+ vezes/mês)
- Skills existentes não cobrem
- Vai economizar 30+ min cada vez que rodar
```

---

## Validação da skill criada

```
═══════════════════════════════════════
VALIDATION CHECKLIST
═══════════════════════════════════════

Antes de instalar e usar:

✓ Trigger phrases testáveis (você consegue invocar?)
✓ Output tangível definido
✓ Workflow tem 5-10 steps claros
✓ Pre-requisitos listados
✓ Handoff pra próxima skill
✓ Armadilhas específicas
✓ Adaptação por modo se aplicável

Se algum check falha, refina SKILL.md.

Skill pronta = todos os checks ✓
```

---

## Armadilhas a evitar

- **Skill genérica.** Função mal definida = output vago.
- **Trigger phrases vagas.** Skill nunca dispara.
- **Sem output tangível.** "Pensamento" não é output.
- **Workflow vago.** Steps "faça X conforme necessário" — sem precisão.
- **Sem armadilhas.** Skill repete erros conhecidos.

---

## Output esperado

✅ Pasta nova com SKILL.md completo
✅ ~2000-3000 palavras de SKILL.md
✅ Validation checklist passou
✅ Próximo passo: instalar + testar
