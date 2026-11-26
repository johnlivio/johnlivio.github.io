# Portfolio — johnlivio.github.io

## Projeto
Portfolio pessoal de John Medeiros (Product Designer). React 18 + Vite + TypeScript + Tailwind, com i18n (en/pt).
Hospedado no GitHub Pages: https://johnlivio.github.io/

## Branches
- `main` — única branch canônica. Todo trabalho acontece nela.
- `archive/retro-design` — design retrô antigo, arquivado (não usar como base).
- `gh-pages` — legado obsoleto do deploy manual; o deploy atual usa GitHub Actions.

## Comandos
- `npm install` — instalar dependências (sempre npm, nunca yarn — yarn.lock foi removido)
- `npm run dev` — dev server local
- `npm run build` — build de produção em `dist/`
- `npm run lint` — eslint

## Deploy
Automático via `.github/workflows/deploy.yml`: todo push na `main` builda e publica no Pages
(build_type=workflow). NÃO existe mais deploy manual — basta commitar e dar push.

## Armadilhas conhecidas
- Imagens devem ficar em `public/imagens/` e ser referenciadas como `/imagens/nome.jpg`.
  NUNCA usar URLs `github.com/.../blob/...?raw=true` — lentas, frágeis e já causaram imagem quebrada em produção.
- Nunca commitar artefatos de build (`dist/`, `assets/`, `.vite/`) na raiz — uma vez isso fez o
  vite build ignorar todo o código-fonte silenciosamente.

## Preferências do usuário
- Idioma: português (PT-BR).
- Ao finalizar uma tarefa, sempre listar os pontos/pendências restantes.
