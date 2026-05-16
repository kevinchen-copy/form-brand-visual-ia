# Como instalar cada skill no Claude Desktop

> Skills `form-brand-visual-ia-*` são pastas independentes. Você sobe uma por uma no Claude Desktop em **Settings → Customize → Habilidades**.

---

## Passo a passo

### 1. Localiza a pasta da skill

Cada skill está em pasta própria dentro de `Formacao-Brand-Visual-IA/skills/`. Por exemplo:

```
Formacao-Brand-Visual-IA/skills/
├── form-brand-visual-ia-brand-readiness/
│   └── SKILL.md
├── form-brand-visual-ia-prompt-rewriter/
│   └── SKILL.md
└── ...
```

### 2. Compacta cada pasta em .zip (opcional)

Se o Claude Desktop pede .zip, compacta cada pasta individualmente:

**Windows:**
- Click direito na pasta `form-brand-visual-ia-brand-readiness/`
- "Enviar para → Pasta compactada"
- Resultado: `form-brand-visual-ia-brand-readiness.zip`

**Mac:**
- Click direito na pasta
- "Comprimir"
- Resultado: `form-brand-visual-ia-brand-readiness.zip`

### 3. Sobe no Claude Desktop

1. Abre Claude Desktop
2. Settings (engrenagem no canto)
3. Customize → Habilidades
4. Click "Adicionar habilidade" ou "+ Skill"
5. Seleciona a pasta ou .zip da skill
6. Confirma

### 4. Confirma instalação

Após instalar, a skill deve aparecer na lista. Pra testar:

```
"Roda form-brand-visual-ia-brand-readiness pra uma marca de teste"
```

Claude deve reconhecer e ativar.

---

## Ordem de instalação recomendada (Onda 1 — primeiras 12)

Não precisa instalar todas as 48 de uma vez. Comece com **Onda 1**:

```
1. form-brand-visual-ia-brand-readiness          ⭐ ENTRADA
2. form-brand-visual-ia-prompt-rewriter
3. form-brand-visual-ia-fal-image-gen
4. form-brand-visual-ia-figma-localize
5. form-brand-visual-ia-figma-ad-builder
6. form-brand-visual-ia-brand-ad-replicator
7. form-brand-visual-ia-content-pipeline         ⭐ ORQUESTRADOR
8. form-brand-visual-ia-concept
9. form-brand-visual-ia-creative-direction
10. form-brand-visual-ia-storyboarding
11. form-brand-visual-ia-image-generation
12. form-brand-visual-ia-video-generation
```

Com essas 12, você consegue:
- ✓ Diagnosticar marca nova
- ✓ Reescrever prompts vagos
- ✓ Gerar imagens via fal.ai
- ✓ Localizar designs Figma em outros idiomas
- ✓ Construir ads no Figma
- ✓ Replicar templates pra novos products
- ✓ Rodar pipeline completo de conteúdo (5 fases)

Depois de 1-2 semanas testando, sobe Onda 2.

---

## Ondas seguintes

### Onda 2 (12 skills — quando estiver pronto)
Brand Foundation + Tese + Início Identidade Visual

### Onda 3 (12 skills)
Identidade completa + Brand Guideline + Produção por canal

### Onda 4 (12 skills)
Sistema operacional + Meta

---

## Pré-requisitos por skill

Algumas skills precisam de configuração antes:

### `fal-image-gen` + `image-generation` + `video-generation`
- Conta fal.ai criada
- `FAL_KEY` configurada no environment do Claude Desktop:
  ```
  export FAL_KEY="your-fal-key-here"
  ```

### `figma-localize` + `figma-ad-builder` + `figma-setup`, etc.
- Conta Figma
- Figma MCP server conectado no Claude Desktop
- File key + permissions corretos

### `brand-ad-replicator`
- Brand folder seguindo estrutura padrão (ver SKILL.md da skill)

---

## Como testar uma skill

Após instalar:

```
1. Abre nova conversa no Claude Desktop
2. Pergunta direta:
   "Quais skills form-brand-visual-ia eu tenho instaladas?"
   
3. Testa invocação:
   "Roda form-brand-visual-ia-brand-readiness pra marca de teste 
    chamada Aurora, sérum facial"
   
4. Skill deve iniciar com Step 1 (apresentação)
```

Se skill não dispara mesmo com nome correto:
- Verifica se foi instalada (Settings → Customize → Habilidades)
- Verifica se nome no SKILL.md frontmatter está exato
- Reinicia o Claude Desktop

---

## Atualizando uma skill

Se você ajusta uma skill (edita SKILL.md):

1. Desinstala versão antiga no Claude Desktop
2. Recompacta a pasta (se usa .zip)
3. Reinstala
4. Confirma versão nova ativa

---

## Removendo uma skill

Se quer parar de usar uma skill:

1. Settings → Customize → Habilidades
2. Encontra a skill
3. Click "Remover" ou similar

Skill some da lista. Pode reinstalar depois se quiser.

---

## Backup das skills

**IMPORTANTE:** as skills são parte do seu sistema. Manter backup:

1. Pasta `Formacao-Brand-Visual-IA/skills/` já está no OneDrive → backup automático
2. Recomendo também:
   - Periodicamente compactar `skills/` inteira em .zip
   - Salvar zip em disco externo OU outro cloud
   - Versionar via Git (opcional)

---

## FAQ

### Posso usar essas skills sem instalar no Claude Desktop?

Tecnicamente sim — você pode colar conteúdo do SKILL.md como prompt manual. Mas perde:
- Triggering automático por palavra-chave
- Continuidade entre conversas
- Workflow conectado entre skills

**Recomendado: instala no Desktop.**

### Posso editar uma skill?

Sim. Skills são .md — edita à vontade. Mas:
- Cuidado pra não quebrar dependências com outras skills
- Mantém o `name:` no frontmatter sincronizado com nome da pasta
- Re-instala após editar

### As skills funcionam offline?

A skill em si é texto — funciona offline.
Mas tools que ela usa (fal.ai, Figma MCP, ElevenLabs) precisam internet + conexão ativa.

### Posso compartilhar uma skill com outra pessoa?

Sim. Cada pasta é independente. Zipa e manda. Pessoa instala normalmente.

### O que faço se uma skill não dispara?

Provavelmente:
1. Nome no SKILL.md está diferente do nome da pasta
2. Não foi instalada (verifica Settings)
3. Trigger phrases muito específicas (tenta variações)
4. Reinicia Claude Desktop

---

## Suporte

Se uma skill quebrar ou tiver dúvida:

1. Lê o SKILL.md inteiro da skill — geralmente tem armadilhas + troubleshooting
2. Roda `form-brand-visual-ia-troubleshooting` (Onda 4) — skill de debug
3. Edita o SKILL.md ajustando o que não funciona

Se múltiplas skills quebrarem ao mesmo tempo:
- Verifica MCP servers conectados (Figma, etc.)
- Verifica env variables (FAL_KEY, etc.)
- Reinicia Claude Desktop

---

## Próximo passo

Após instalar Onda 1:

1. Lê o `README.md` na raiz da pasta skills/
2. Lê o `WORKFLOW.md` pra ver fluxo end-to-end
3. Cria primeira marca de teste:
   ```
   "Roda form-brand-visual-ia-brand-readiness pra marca de teste"
   ```
4. Testa por 1-2 semanas
5. Volta pra criar Onda 2 quando confortável

---

> Boa sorte, Kevin. Sistema é seu agora.
