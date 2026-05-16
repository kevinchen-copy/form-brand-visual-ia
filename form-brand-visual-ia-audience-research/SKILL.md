---
name: form-brand-visual-ia-audience-research
description: Pesquisa profunda de audiência aplicando 3 níveis de dor (externo/interno/filosófico) + Voice of Customer (linguagem real do público) + Mapa de Consciência de Eugene Schwartz + perfil F1∩F2 (interseção simbólico+rentável) + Disciplina do NÃO. Usa WebSearch pra encontrar reviews reais, comentários YouTube, grupos Facebook, Reclame Aqui. Output - dossiê completo audience.md no vault da marca + entrada estruturada no brand-guideline-companion.md. Use SEMPRE no início de marca nova (Fase 1) ou quando usuário disser "pesquisa de audiência", "mapeamento de público", "persona", "cliente ideal", "voz do cliente", "ICP", "F1 F2", "mapa de dores", "nível de consciência da audiência", "perfil psicográfico". Esta skill substitui ideal-client (consolidada aqui).
---

# Audience Research — Pesquisa profunda

Esta skill faz pesquisa profunda de audiência aplicando 3 metodologias unidas:

1. **3 níveis de dor** (externo, interno, filosófico)
2. **Voice of Customer** (linguagem real, não inferida)
3. **Mapa de Consciência** Eugene Schwartz (5 níveis)
4. **Perfil F1∩F2** (interseção entre quem se sente em casa + quem é rentável)
5. **Disciplina do NÃO** (quem afastar deliberadamente)

Output: dossiê estruturado + atualização do `brand-guideline-companion.md`.

---

## Pre-requisitos

- `CLAUDE.md` da marca preenchido (skill `brand-readiness` rodou antes)
- Hipóteses do dono sobre audiência capturadas no CLAUDE.md
- Acesso a WebSearch/WebFetch pra pesquisa real

## Próxima skill no workflow

- `form-brand-visual-ia-market-mapping` (mapeamento de concorrentes)
- OU `form-brand-visual-ia-big-idea` (se pesquisas suficientes pra firmar tese)

---

## Step 0 — Read brand context

Lê `CLAUDE.md` da marca pra puxar:
- Nome da marca, setor, produto
- Hipóteses do dono sobre audiência
- Modo da marca
- Idioma de operação

---

## Step 1 — Define escopo da pesquisa

Pergunta ao usuário:

```
═══════════════════════════════════════
AUDIENCE RESEARCH — Escopo
═══════════════════════════════════════

Antes de começar pesquisa profunda, confirma:

1. Audience-alvo aproximada (do que sabemos via CLAUDE.md):
   [resumo das hipóteses do dono]
   
   Está certo? Ajustar?

2. Geografia: [Brasil / específico estado / global / outro]

3. Faixa etária aproximada: [25-35 / 35-45 / 45-55 / outro]

4. Comportamento de consumo: [online heavy / mix / física]

5. Você tem acesso a feedback real?
   - Reviews na Amazon/site
   - DMs/comments da marca
   - Pesquisas qualitativas anteriores
   - Reclame Aqui
   - Grupos Facebook/Telegram
   - Pode anexar links/textos

6. Quanto tempo pra rodar? (rápido ~1h / completo ~3-4h)
```

Aguarda respostas.

---

## Step 2 — Pesquisa primária (WebSearch real)

Roda buscas reais. Não inferência genérica.

### Fontes a investigar

Pra cada hipótese de dor/desejo da audiência, busca:

```
- Reddit threads: site:reddit.com "[problema] [categoria produto]"
- YouTube comments: top reviews da categoria
- Reclame Aqui: marcas concorrentes — leitura de reclamações
- Quora: questions com "[público alvo] [problema]"
- Amazon Reviews: produtos similares — leitura de 4★ e 2★ (mais reveladores)
- Forum/grupos da nichada (Facebook Groups públicos)
- Hashtag de Instagram: TikTok comments
```

**Salva trechos literais** de comentários reais. Esses viram a "Voice of Customer".

### Critério de seleção de trechos

Procura por:
- Frustrações específicas (não vagas)
- Linguagem emocional autêntica
- Vocabulário usado (palavras exatas)
- Comparações com concorrentes
- Razões pra abandono / mudança

---

## Step 3 — Aplicar os 3 níveis de dor

Pra cada dor identificada, classifica em 3 níveis:

### Nível 1 — Dor externa (sintoma visível)

O que se vê: produto funciona mal, demora, é caro, complicado.

Exemplos pra Aurora (skincare):
- "Meu sérum atual é grudento"
- "Tem 12 ingredientes que não entendo"
- "Custa R$ 380 e dura 1 mês"

### Nível 2 — Dor interna (sentimento gerado)

O que se sente: vergonha, frustração, ansiedade, desconfiança, inadequação.

Exemplos:
- "Sinto que estou sendo enganada pela indústria"
- "Frustrada por gastar muito sem resultado"
- "Confusa com tantas opções"

### Nível 3 — Dor filosófica (crença sobre o mundo)

O que se acredita: o sistema é injusto, ninguém é honesto, qualidade morreu.

Exemplos:
- "Beleza virou comércio sem alma"
- "Marcas grandes não se importam com a gente"
- "Skincare bom é privilégio de quem entende ciência"

**Marca premium ganha quando ataca dor filosófica.**

---

## Step 4 — Voice of Customer (linguagem real)

Extrai do que coletou:

### Palavras frequentes (vocabulário real)

Que palavras a audience usa pra descrever:
- O problema atual
- O resultado desejado
- A marca ideal
- Os concorrentes

### Frases recorrentes

Frases EXATAS (entre aspas) que aparecem múltiplas vezes em fontes diferentes.

### Tom emocional dominante

Reclamação? Resignação? Esperança? Cinismo? Curiosidade?

Esse tom **informa a Brand Voice** (skill voice-tone vai puxar isso).

---

## Step 5 — Mapa de Consciência Eugene Schwartz

5 níveis de consciência:

```
1. UNAWARE
   Não sabe que tem o problema.
   "Skincare? Uso só sabonete."

2. PROBLEM-AWARE
   Sabe que tem problema, não sabe solução.
   "Minha pele tá ressecada, não sei o que fazer."

3. SOLUTION-AWARE
   Sabe que existe solução, não conhece sua marca.
   "Sei que sérum facial ajuda, mas qual?"

4. PRODUCT-AWARE
   Conhece tipos de produto, talvez sua marca, mas não decidiu.
   "Aurora ou marca X? Qual escolher?"

5. MOST-AWARE
   Decidiu — só precisa de gatilho final.
   "Quero o Aurora. Só preciso ver quando lança."
```

**Distribuição da audience-alvo** entre os 5 níveis: estimar % em cada.

Aurora exemplo:
```
1. Unaware: 30% (mulheres que não tratam pele)
2. Problem-aware: 35%
3. Solution-aware: 20%
4. Product-aware: 10%
5. Most-aware: 5% (lista de espera)
```

**Diferentes conteúdos pra diferentes níveis:**
- Unaware: educativo de "por que importa"
- Problem-aware: educativo de "qual solução"
- Solution-aware: comparativo + diferencial
- Product-aware: prova social + objeções
- Most-aware: scarcity + CTA direto

---

## Step 6 — Perfil F1∩F2 (Ideal Client)

### F1 — Filtro simbólico/psicográfico

Quem **se sente em casa** com a marca? (não demografia)

Mapeamento em 5 dimensões:

```
1. Auto-imagem aspiracional
   Como ela quer ser percebida?
   ex: "elegante sem esforço", "consciente", "inteligente"

2. Auto-imagem evitada
   Como ela NÃO quer ser percebida?
   ex: "tentando demais", "vaidosa", "ingênua"

3. Vocabulário interno
   Que palavras ela usa quando fala consigo?
   ex: "qualidade", "ritual", "respeito ao tempo"

4. Marcas-símbolo (que admira)
   Quais marcas ela ostenta/admira?
   ex: Aesop, COS, The Row, Bottega

5. Rituais de consumo
   Como ela compra/consome?
   ex: pesquisa antes, prefere marcas pequenas, valoriza embalagem
```

### F2 — Filtro de rentabilidade

Quem é **rentável** pra marca?

```
1. Ticket médio alvo
   Quanto ela paga sem hesitar?
   ex: R$ 200-400 por produto skincare

2. Frequência de compra
   Recompra em quanto tempo?
   ex: a cada 2 meses (consumo natural)

3. LTV potencial
   Quanto gasta na marca ao longo de 1-2 anos?
   ex: R$ 1.500-3.000

4. Resistência a aumento de preço
   Aceita aumento de 10-20%?
   ex: sim, se justificado por valor

5. Resistência a churn
   Estável ou volátil?
   ex: estável quando satisfeita (não troca por moda)
```

### Interseção F1∩F2

Cliente ideal = atende AMBOS os filtros simultâneos.

```
Cliente Aurora ideal:
- F1: mulher 35-45, "elegante sem esforço", admira Aesop/COS,
  pesquisa ingredientes
- F2: ticket R$ 250-400, recompra trimestral, LTV R$ 1500+

INTERSEÇÃO = cliente alvo.

Quem está fora:
- F1 sim, F2 não → "elegante mas não tem dinheiro" — afasta
- F1 não, F2 sim → "rica mas vai dar oitão de likes" — afasta
- Nenhum → fora completamente
```

---

## Step 7 — Disciplina do NÃO

Lista deliberada de quem **afastar**:

```
1. [Perfil 1] — características
   Por que afastar: [razão]
   Como afastar: [tom, estética, comunicação]

2. [Perfil 2]
   ...

3. [Perfil 3]
   ...

4. [Perfil 4]
   ...

5. [Perfil 5]
   ...
```

Mínimo 5 perfis afastados ativamente.

Aurora exemplo:
```
1. "Quer milagre em 7 dias"
   Por que afastar: marca prega consistência (14-30 dias)
   Como: comunicação enfatiza "30 dias de uso real"

2. "Briga por desconto"
   Por que: marca premium, margem sustenta qualidade
   Como: never promo grande, only lote-limitado

3. "Quer 10 produtos por dia"
   Por que: marca prega skincare mínimo (1-2 produtos)
   Como: comunicação ataca complexidade

4. "Influenciada por hype mensal"
   Por que: marca quer cliente fiel, não trend-chaser
   Como: tom calmo, sem urgency artificial

5. "Não lê ingredientes"
   Por que: marca premia educação
   Como: foco em ingrediente science explicada
```

---

## Step 8 — Documentar tudo

Cria 2 arquivos:

### Output 1: `[marca]/pesquisas/audience-research.md`

```markdown
# Audience Research — [Marca]
Data: [data]

## Resumo executivo
[1 página com principais achados]

## Voice of Customer
### Vocabulário recorrente
- "..." (mencionada N vezes em fontes Y)
- ...

### Frases literais coletadas
- "[frase exata]" — fonte: Reddit r/X, data
- ...

### Tom dominante
[Descrição]

## 3 Níveis de Dor
### Nível 1 — Dor externa
[Lista com 5-10 dores específicas]

### Nível 2 — Dor interna  
[Lista]

### Nível 3 — Dor filosófica
[Lista — esta é a mais importante pra premium]

## Mapa de Consciência
[Distribuição % por nível + conteúdo recomendado pra cada]

## Perfil F1∩F2
### F1 — Simbólico
[5 dimensões preenchidas]

### F2 — Rentabilidade
[5 dimensões preenchidas]

### Interseção
[Descrição do cliente ideal exato]

## Disciplina do NÃO
[5+ perfis afastados]

## Implicações pra marca
- Voice & tone: [recomendações]
- Visual: [recomendações]
- Mensagem central: [recomendações]
- Canais prioritários: [onde a audience real está]

## Fontes consultadas
- [link 1]
- [link 2]
- ...
```

### Output 2: Update no `brand-guideline-companion.md`

Adiciona section `## ideal_client` com YAML estruturado (template usado pelas outras skills):

```yaml
ideal_client:
  f1_psicografico:
    auto_imagem_aspiracional: "..."
    auto_imagem_evitada: "..."
    vocabulario_interno: ["...", "..."]
    marcas_simbolo: ["...", "..."]
    rituais_consumo: ["...", "..."]
  f2_rentabilidade:
    ticket_medio_alvo: "R$ X"
    recorrencia: "..."
    ltv_estimado: "R$ X"
  disciplina_nao:
    - "Cliente brigando por preço"
    - "Quem quer milagre"
    - "..."
  voice_of_customer:
    palavras_chave: ["...", "..."]
    frases_recorrentes: ["...", "..."]
    tom_dominante: "..."
  consciousness_distribution:
    unaware: 30
    problem_aware: 35
    solution_aware: 20
    product_aware: 10
    most_aware: 5
```

---

## Adaptação por modo da marca

### VISUAL-ONLY

- Pesquisa focada em **rituais de consumo visuais** (Instagram, Pinterest)
- Vocabulário menos importante que **estética admirada**
- Marcas-símbolo são mais peso (que paleta admiram)

### VISUAL+COPY (padrão)

- Pesquisa balanceada
- Vocabulário + estética + dores

### COPY-HEAVY

- Pesquisa **bem mais profunda** em vocabulário
- Frases literais são ouro
- Mapa de consciência aprofundado
- Voice of Customer = base da Brand Voice posterior

---

## Tempo estimado por modo

- Rápido (apenas hipóteses + pesquisa rasa): 1-2h
- Médio (pesquisa real básica + 3 fontes): 2-3h
- Completo (10+ fontes + análise profunda): 4-6h

Recomenda médio. Completo só pra lançamento high-stakes.

---

## Armadilhas a evitar

- **Inferir audience.** Pesquisa REAL > hipótese inteligente
- **Generalizar.** "Mulheres 35-45" não é audience — é demografia
- **Pular Voice of Customer.** Linguagem real informa tudo
- **Pular Disciplina do NÃO.** Saber quem afastar = clareza
- **Ignorar dor filosófica.** Premium vence aqui
- **Confundir F1 com F2.** Cliente que admira não é necessariamente cliente que paga

---

## Output esperado

✅ `[marca]/pesquisas/audience-research.md` completo
✅ Section `ideal_client` adicionada ao `brand-guideline-companion.md`
✅ Voice of Customer salva (vai informar `voice-tone`)
✅ Distribuição de consciência (vai informar mix de conteúdo)
✅ Próxima skill recomendada: `market-mapping` OU `big-idea`
