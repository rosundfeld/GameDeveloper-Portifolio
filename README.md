# Portfólio · Game Developer (Angular)

## Rodar no seu computador
Precisa do Node.js 22 ou mais novo.

    npm install
    npm start

Abra http://localhost:4200

## Atualizar o conteúdo
Quase tudo se edita em um só arquivo: `src/app/core/constants/portfolio.data.ts`

- Novo jogo: copie um item de `PROJECTS`
- Nova arte: coloque a imagem em `public/images/` e adicione um item em `SPRITES`
  (informe `pixelSize: { width, height }` em pixels para ativar zoom e grade)
- Novo GDD: coloque o PDF em `public/gdds/` e adicione um item em `GDDS`
- Textos em dois idiomas usam `{ pt: '...', en: '...' }`; uma string simples vale para os dois.
  Títulos de seção e botões ficam em `UI_TEXT`, no fim do mesmo arquivo.

Cores, fontes e espaçamentos ficam em `src/styles.css`; o estilo de cada parte fica no `.css` ao lado do componente.

## Publicar no GitHub Pages (automático)
1. Crie um repositório no GitHub e envie esta pasta para a branch `main`.
2. No repositório: Settings > Pages > Source: **GitHub Actions**.
3. Pronto. A cada push na `main`, o site é gerado e publicado sozinho.

## Publicar no Netlify
Conecte o repositório no Netlify com:
- Build command: `npm run build`
- Publish directory: `dist/portfolio/browser`
