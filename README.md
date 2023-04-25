This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.








O que esperamos?
Você deve ser capaz de:

Estruturar o Projeto
Técnicas de estilização com CSS-in-js
Comunicação com API Externa
Manipulação dos dados
Tratamento de formulários
Saber lidar com Mapas (Leaflet)
Componentização
Navegação de Páginas
Estaremos analisando a sua organização de código, a sua perícia em manipular elementos React a nível de estilização e controle de estado por meio de states e props.

Como estaremos analisando esses requisitos deixamos que o design seja decidido por você. Capriche :)

Sobre o desafio 🤯
Aplicação deve permitir que checklists sejam criados ou atualizados;
Aplicação deve conter uma tela inicial, contendo todos os checklists (contendo o nome do fazendeiro, nome e cidade da fazenda, além da data de criação do checklist) já cadastrados na API. Além de conter ícones com call actions para excluir o checklist, atualizar ou visualizar.
Aplicação deve conter uma tela para visualizar todas as informações do checklist selecionado (exceto updated_at e id) e um mini mapa contendo uma marcador na localização da fazenda e nome da fazenda ao clicar no Marker.
Aplicação deve conter uma tela para cadastro do checklist, e por fim, outra tela para atualização dos dados.
Para criação do checklist será necessário fornecer os seguintes dados: Nome do fazendeiro, nome e cidade da fazenda, nome do supervisor, tipo do checklist (BPA, Antibiótico, BPF), quantidade de leite produzida no mês, quantidade de cabeça de gado, um booleano informando se teve supervisão no mês em curso e latitude e longitude da fazenda. A captura da lat. e long. da fazenda deve ser feita através do mapa, onde irá clicar na posição da fazenda e adicionar um Marker no local.
Para atualização do checklist será necessário fornecer os seguintes dados: Nome do fazendeiro, nome e cidade da fazenda, nome do supervisor, quantidade de leite produzida no mês, quantidade de cabeça de gado.
A exclusão do checklist fica a critério do desenvolvedor (usando modal, notificação, etc).
Requisitos 😇
Libraries and patterns
ReactJs/Next
UTILIZE STYLED COMPONENTS
Hooks
ContextAPI
API do desafio
Segue documentação da nossa API. Disponível para envio e consulta de checklists.
Prazo de entrega 🤓
O desafio deve ser realizado em 96 horas a partir da data de envio do desafio.

Caso tenha algum imprevisto avise com antecedência o encarregado do desafio.

Boa sorte!

Inteligência é a capacidade de se adaptar a mudança - Stephen Hawking