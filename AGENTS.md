# Portfolio — johnlivio.github.io

## Projeto
Portfolio pessoal de John Medeiros (Product Designer). React 18 + Vite + TypeScript + Tailwind, com i18n (en/pt).
Hospedado no GitHub Pages: https://johnlivio.github.io/

## Branches
- `main` — única branch canônica. Todo trabalho acontece nela.
- `archive/retro-design` — design retrô antigo, arquivado (não usar como base).

## Comandos
- `npm install` — instalar dependências (sempre npm, nunca yarn — yarn.lock foi removido)
- `npm run dev` — dev server local
- `npm run build` — build de produção em `dist/`
- `npm run lint` — eslint

## Deploy
Automático via `.github/workflows/deploy.yml`: todo push na `main` builda e publica no Pages
(build_type=workflow). NÃO existe mais deploy manual — basta commitar e dar push.

## Armadilhas conhecidas
- Imagens ficam em `public/imagens/` no formato WebP, referenciadas como `/imagens/nome.webp`.
  Exceção: `yo.jpg` permanece JPEG porque og:image precisa de compatibilidade com crawlers.
  NUNCA usar URLs `github.com/.../blob/...?raw=true` — lentas, frágeis e já causaram imagem quebrada em produção.
- Nunca commitar artefatos de build (`dist/`, `assets/`, `.vite/`) na raiz — uma vez isso fez o
  vite build ignorar todo o código-fonte silenciosamente.
- i18n: sempre usar `const { t } = useTranslation()` nos componentes — nunca `i18n.t()` direto
  (não é reativo). O `I18nextProvider` explícito no main.tsx é necessário; sem ele as chaves
  aparecem crus na UI.

## Preferências do usuário
- Idioma: português (PT-BR).
- Ao finalizar uma tarefa, sempre listar os pontos/pendências restantes.

## Asset generation scripts

- scripts/generate-santander-assets.cjs regenerates the Santander case images (SVG -> sharp -> webp into public/imagens/). Run from repo root: node scripts/generate-santander-assets.cjs. sharp is a devDependency for this.
- scripts/add-santander-translations.cjs was a one-off key insertion (already applied — do not re-run, would duplicate keys).
