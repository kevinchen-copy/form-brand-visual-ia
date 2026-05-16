---
name: form-brand-visual-ia-email-flows
description: Gera 3 email flows fundamentais de e-commerce em modos selecionáveis - Welcome Series (5 emails pós-cadastro), Abandoned Cart (3 emails pós-abandono), Post-purchase + Win-back (5 emails pós-compra + 3 emails pra cliente sumido). Aplica voice-tone da marca + 4 padrões de subject line + microcopy + estrutura específica de cada flow. Output em Markdown pronto pra colar em Klaviyo/Mailchimp/RD Station com subject + pré-header + corpo HTML simplificado + microcopy de CTA. SKILL OPCIONAL no modo VISUAL-ONLY (geralmente pula). Use pra setup de email automation. Triggers - "email flow", "email marketing", "welcome series", "abandoned cart", "post purchase", "win back", "klaviyo", "flow de email".
---

# Email Flows — 3 flows fundamentais

Gera os 3 email flows essenciais pra e-commerce + marca:

1. **Welcome Series** (5 emails pós-cadastro/primeira compra)
2. **Abandoned Cart** (3 emails pós-abandono)
3. **Post-purchase + Win-back** (5 emails pós-compra + 3 pra sumido)

Total: 13 emails em sequência automatizada.

---

## Pre-requisitos

- `brand-guideline-companion.md`
- Modo da marca **NÃO seja VISUAL-ONLY** (pula automaticamente)
- ESP definido (Klaviyo, Mailchimp, RD Station, etc.)

## Próxima skill no workflow

Setup direto na ESP (Klaviyo etc.) — fora da Claude.

---

## Step 0 — Verifica se aplica

```
═══════════════════════════════════════
EMAIL FLOWS — Aplica?
═══════════════════════════════════════

Modo da marca: [visual-only / v+c / copy-heavy]

Se VISUAL-ONLY: skill geralmente PULA.
   Visual brands raramente fazem email-heavy.
   Confirma se quer rodar mesmo assim?

Se V+C ou COPY-HEAVY: skill roda.

ESP em uso:
- Klaviyo (recomendado pra ecommerce)
- Mailchimp
- RD Station (Brasil)
- ActiveCampaign
- Outro

Volume atual de subscribers:
- Em construção (<100)
- Ativa (100-1000)
- Estabelecida (1000+)
```

---

## Flow 1 — WELCOME SERIES (5 emails)

Após cliente cadastrar email (newsletter signup OU primeira compra).

```
EMAIL 1 — IMEDIATO (welcome)
Subject: "Oi. Bem-vinda à Aurora."
Pre-header: "5 minutos por dia. Pele real em 30."

Corpo:
- Boas-vindas suave (alinhado com voice calm)
- Conta a Big Idea em 1 parágrafo
- Apresenta founder
- O que esperar dos próximos emails
- Sem CTA agressivo

EMAIL 2 — DIA 2 (educational #1)
Subject: "Por que skincare ficou complicado?"
Tema: educa sobre a indústria, mas sem reclamar
Body: storytelling — a frustração que levou Aurora a existir
CTA suave: "Conheça Aurora Sérum" (link na bio do email)

EMAIL 3 — DIA 5 (product reveal)
Subject: "5 ingredientes contra 30."
Tema: mostra o produto detalhadamente
Body: mecanismo único do produto (do product-research)
CTA: "Garante o seu lote 2" + 10% off código bem-vinda

EMAIL 4 — DIA 7 (social proof)
Subject: "Mariana, 38, 6 meses."
Tema: case real (com permissão)
Body: depoimento + resultado
CTA: "Veja outros depoimentos"

EMAIL 5 — DIA 10 (final pitch)
Subject: "Última chance — 10% off"
Tema: oferta válida X horas
Body: resumo do que viu nos emails + CTA forte
CTA: "Compre com 10% off" + countdown
```

---

## Flow 2 — ABANDONED CART (3 emails)

Quando cliente adiciona ao carrinho mas não compra.

```
EMAIL 1 — 1h DEPOIS (gentle reminder)
Subject: "Você esqueceu algo?"
Pre-header: "Aurora Sérum está esperando."

Body:
- Tom amigável (não pushy)
- Mostra produto + preço
- Resumo do beneficio
- "Volta quando quiser" (sem urgência)
- CTA: "Voltar ao carrinho"

EMAIL 2 — 24h DEPOIS (objection handling)
Subject: "Tem dúvida sobre o Aurora?"
Body:
- FAQ — 5 perguntas mais comuns
- Garantia 30 dias destacada
- CTA: "Voltar" + "Tirar dúvidas no DM"

EMAIL 3 — 48h DEPOIS (last chance)
Subject: "Antes que esgote..."
Body:
- Scarcity REAL (não fake) — quantas unidades restam
- 5% off como gesto (pra dar último push)
- Garantia destacada
- CTA forte: "Garantir agora"
```

---

## Flow 3 — POST-PURCHASE + WIN-BACK

### Post-purchase (5 emails após compra)

```
EMAIL 1 — IMEDIATO (confirmação)
Subject: "Sua Aurora está sendo preparada."
Pre-header: "Veja o que esperar nas próximas semanas."
Body:
- Confirmação clara
- Tracking number (quando disponível)
- O que esperar (dia 1 vs dia 14 vs dia 30)
- Link pra tutorial de aplicação

EMAIL 2 — DIA DA ENTREGA (welcome ao produto)
Subject: "Aurora chegou. Vamos abrir juntas?"
Body:
- Unboxing guide
- Como aplicar (3 passos)
- O que esperar nos primeiros dias
- Link pra grupo de suporte

EMAIL 3 — DIA 14 (check-in)
Subject: "Como está sendo?"
Body:
- Reconhece que pode estar começando a ver mudança sutil
- Lembra: consistência é tudo
- Convite a postar marcando @aurora
- Sem CTA de venda

EMAIL 4 — DIA 30 (resultado esperado)
Subject: "30 dias com Aurora."
Body:
- Pergunta como tá indo
- Reforça benefício esperado
- Pede review/depoimento (incentivo: 10% off próxima compra)
- Convite a comunidade

EMAIL 5 — DIA 60 (recompra)
Subject: "Hora de repor?"
Body:
- Reconhece que produto deve estar acabando
- Frete grátis pra recompra
- Sugere kit/bundle (se houver)
- CTA: "Reordenar"
```

### Win-back (3 emails pra cliente que sumiu 90+ dias)

```
EMAIL 1 — DIA 90 SEM COMPRA (we miss you)
Subject: "Saudade da gente?"
Body:
- Reconhece tempo passado
- Sem culpa
- Pergunta como pele tá
- 15% off código retorno

EMAIL 2 — 1 SEMANA DEPOIS (storytelling)
Subject: "O que mudou na Aurora desde sua última visita."
Body:
- Updates da marca (novos produtos, melhorias)
- Reinforces brand voice
- 15% off ainda válido

EMAIL 3 — 2 SEMANAS DEPOIS (final)
Subject: "Última oportunidade — 20% off."
Body:
- Oferta final mais agressiva
- CTA: "Voltar" + scarcity (oferta expira)
- "Se não for hora, sem problema — estaremos aqui"
```

---

## Step 0 — Read context

```yaml
voice_permanent: ["Calma", "Honesta", "Natural"]
vocabulary_forbidden: ["incrível", "milagre", "transformador"]
voice_of_customer: ["...", "..."]
mode: "visual-copy"
```

---

## Step 1 — Selecionar flows a gerar

```
═══════════════════════════════════════
EMAIL FLOWS — Quais?
═══════════════════════════════════════

Selecione 1+ flows pra gerar:

[ ] Welcome Series (5 emails) — Essencial pra lista nova
[ ] Abandoned Cart (3 emails) — Essencial pra ecommerce
[ ] Post-purchase (5 emails) — Pra retenção
[ ] Win-back (3 emails) — Pra recuperar churn

Recomendação: TODOS no início.
13 emails ativados protegem todo o funil.

Quais?
```

---

## Step 2 — Pra cada flow selecionado, gera estrutura

Aplicando voice + vocabulary check em cada email:

```
═══════════════════════════════════════
WELCOME SERIES — AURORA
═══════════════════════════════════════

EMAIL 1 — IMEDIATO

Subject (4 padrões testados):
A) Pergunta curiosa
   "Oi. Bem-vinda à Aurora."

B) Promessa direta
   "5 minutos. Pele real em 30 dias."

C) Personal
   "[Founder name] aqui."

D) Soft urgency
   "Comece sua jornada com Aurora hoje."

Recomendado: A (mais on-brand pra Aurora — calma)

Pre-header: "5 minutos por dia. Pele real em 30."

CORPO:
"""
Olá,

Obrigada por estar aqui.

Aurora começou em 2023, na minha cozinha, depois de eu
desistir de 12 produtos diferentes. Aurora é o que eu 
queria que existisse — skincare honesto, em 1 frasco.

Nos próximos 10 dias, vou te mandar 4 emails sobre:
- Por que skincare ficou tão complicado (e como ficar 
  simples de novo)
- O método de 5 ingredientes
- A história das clientes que mudaram suas rotinas
- Uma oportunidade especial só pra você

Sem pressão. Sem urgência. Só conversa real.

Até logo,
[Founder]
Founder, Aurora
"""

VOICE CHECK:
✓ Tom: calmo, honesto, natural ✓
✓ Sem vocabulary forbidden ✓
✓ Sem ! ✓
✓ Frases curtas dominam ✓
✓ Voz ativa ✓

CTA: Nenhum agressivo (alinhado com voice)
Link na bio: "Conheça Aurora" sutil no rodapé

[continua próximos 4 emails do Welcome]
```

---

## Step 3 — Output formato pra colar na ESP

```markdown
# Email Flow: Welcome Series — Aurora

## Email 1 — Welcome (imediato)
**Trigger:** Cadastro newsletter OR primeira compra
**Delay:** 0 minutos
**Subject:** "Oi. Bem-vinda à Aurora."
**Pre-header:** "5 minutos por dia. Pele real em 30."

**HTML simplificado:**
\`\`\`html
<h2>Olá,</h2>
<p>Obrigada por estar aqui.</p>
<p>Aurora começou em 2023, na minha cozinha...</p>
[body completo]
<a href="{{link_produto}}">Conheça Aurora</a>
\`\`\`

**Personalizations:**
- {{first_name}} → nome do subscriber
- {{link_produto}} → link da loja

---

## Email 2 — Educational (dia 2)
**Trigger:** 48h após Email 1
[...]
```

Cada email com:
- Trigger condition
- Delay exato
- Subject (versão escolhida das 4 testadas)
- Pre-header
- HTML simplificado
- Personalizations a aplicar
- Voice check

---

## Step 4 — Microcopy adicional

Skill também gera microcopy padrão:

```
RODAPÉ DE EMAIL (consistente em todos):
"
Aurora Cosméticos
[Endereço se aplicável]

Você está recebendo esse email porque cadastrou-se em 
aurora.com.br.

Quer parar? <a>Descadastrar</a>
"

TYPOGRAPHY (HTML):
- Subject: usa font default da ESP (Helvetica/Arial fallback)
- Body: 14pt, 1.6 line-height
- Heading: 24pt
- CTA button: 16pt, padding 12x24px, brand color #C5664A
```

---

## Step 5 — Setup na ESP

```
═══════════════════════════════════════
SETUP NO KLAVIYO (ou ESP)
═══════════════════════════════════════

Pra cada flow:

1. Crie nova Flow na ESP
2. Configure trigger (signup OR purchase OR cart abandoned OR no purchase X days)
3. Adiciona delay correto (0, 1h, 24h, 48h, etc.)
4. Cola email completo (subject + body)
5. Configura personalizations ({{first_name}}, etc.)
6. Define exit conditions (purchased, unsubscribed, etc.)
7. Ativa flow

TEMPO DE SETUP:
- Welcome Series (5 emails): 1-2h
- Abandoned Cart (3 emails): 1h
- Post-purchase (5 emails): 1-2h
- Win-back (3 emails): 1h

TOTAL: 4-6h pra setup completo dos 3 flows
```

---

## Adaptação por modo

### VISUAL-ONLY
- Skill **pula automaticamente** (geralmente)
- Se rodar mesmo assim: emails mais visuais, menos texto
- 2-3 emails só (não 13)

### VISUAL+COPY (padrão)
- 3 flows completos = 13 emails
- Padrão acima

### COPY-HEAVY
- Flows MUITO mais elaborados
- Welcome Series pode ter 7-10 emails
- Storytelling profundo em cada
- Drip campaigns adicionais

---

## Armadilhas a evitar

- **Emails violando voice.** "Última chance INCRÍVEL!!!" não-Aurora.
- **Spammy frequency.** Welcome 5 emails em 3 dias = unsubscribes.
- **Sem segmentação.** Quem comprou recebe email "compre" = erro.
- **Subjects clickbait.** "Você não vai acreditar..." viola honestidade.
- **CTAs vagos.** "Saiba mais" não converte. "Garantir agora" sim.
- **Esquecer personalization.** {{first_name}} aumenta open rate 20%+.

---

## Output esperado

✅ 3 flows completos (13 emails) escritos
✅ 4 padrões de subject testados em cada
✅ Voice check em cada email
✅ HTML simplificado pronto pra colar
✅ Microcopy + rodapé padrão
✅ Setup guide pra Klaviyo/Mailchimp/RD
