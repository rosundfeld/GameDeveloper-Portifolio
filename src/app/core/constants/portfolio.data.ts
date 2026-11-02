// ============================================================
//  EDITE AQUI: todo o conteúdo do site vem deste arquivo.
//  Para adicionar um jogo, arte ou GDD, copie um item da lista
//  e altere os campos. As imagens ficam em /public/images.
// ============================================================

import { CodeHighlight, Gdd, ImageAsset, Link, Profile, Project, Role, Sprite } from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: 'Rodrigo Sundfeld',
  tagline:
    'Game developer solo. Desenho em pixel art, programo em C# na Unity e escrevo o design dos meus jogos.',
  email: 'mrmidnight.studios@gmail.com',
  links: [
    { label: 'itch.io', url: '#' },
    { label: 'ArtStation', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: 'https://github.com/rosundfeld' },
  ],
};

export const HERO_IMAGE: ImageAsset = {
  src: 'images/memento-mori-igreja.png',
  alt: 'Cena de Memento Mori: igreja gótica sob um céu vermelho e lua crescente',
};

export const NAV_LINKS: Link[] = [
  { label: 'Jogos', url: '#jogos' },
  { label: 'Pixel art', url: '#arte' },
  { label: 'GDDs', url: '#gdds' },
  { label: 'Código', url: '#codigo' },
  { label: 'Contato', url: '#contato' },
];

export const ROLES: Role[] = [
  { title: 'Pixel art', description: 'Personagens em 32×32, cenários e animação frame a frame.' },
  { title: 'Programação', description: 'C# e Unity: gameplay, sistemas, IA de inimigos e ferramentas.' },
  { title: 'Game design', description: 'GDDs completos, mecânicas, progressão e narrativa.' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Sampa Simulator',
    description:
      'Exploração e aventura pelas ruas de São Paulo pelos olhos de quem vem do interior. Câmera billboard que dá efeito 3D a sprites 2D, sistema de diálogo e NPCs com NavMesh.',
    image: {
      src: 'images/sampa-simulator.png',
      alt: 'Menu do Sampa Simulator sobre uma rua de São Paulo com prédios, cones, hidrante e um carro vermelho',
    },
    engine: 'Unity · C#',
    role: 'Arte, código e design',
    status: 'Em desenvolvimento',
    team: 'Solo',
    repoUrl: 'https://github.com/rosundfeld/SampaSimulator',
  },
  {
    title: 'Chinese Flappy Bird',
    description:
      'Um Flappy Bird com tema inspirado na foto de um amigo. Projeto para praticar mecânicas simples, pontuação, efeitos sonoros e UI/UX.',
    image: {
      src: 'images/chinese-flappy-bird.png',
      alt: 'Tela do Chinese Flappy Bird: personagem voando entre bambus diante da Muralha da China',
    },
    engine: 'Unity · C#',
    role: 'Código e UI/UX',
    status: 'Concluído',
    team: 'Solo',
    repoUrl: 'https://github.com/rosundfeld/ChineseFlappyBird',
  },
  {
    title: 'Murder King',
    description:
      'Não é um apocalipse zumbi. É terça-feira na hora do almoço. Jogo cooperativo para 1 a 4 jogadores: administre um carrinho de comida e alimente uma multidão faminta antes que ela destrua o seu negócio. Overcooked encontra tower defense.',
    engine: 'Unity · C#',
    role: 'Código e game design',
    status: 'Em desenvolvimento',
    team: 'Solo',
    repoUrl: 'https://github.com/rosundfeld/MurderKing',
  },
  {
    title: 'Memento Mori',
    description:
      'Gerenciamento de base 2D com elementos de RTS, ambientado nas cruzadas. Você é um Capelão guiando os sobreviventes depois que os demônios traíram os pagãos: seu poder vem da fé da humanidade e enfraquece com o desespero.',
    image: {
      src: 'images/memento-mori-igreja.png',
      alt: 'Concept do cenário da igreja em Memento Mori',
    },
    engine: 'Unity · C#',
    role: 'Arte, código e design',
    status: 'Em desenvolvimento',
    team: 'Solo',
    //playUrl: '#',
    gddUrl: 'https://github.com/rosundfeld/Memento-Mori#readme',
    repoUrl: 'https://github.com/rosundfeld/Memento-Mori',
  },
];

export const SPRITES: Sprite[] = [
  {
    name: 'Chicão',
    description: 'Sprite de personagem, 32×48 pixels. Jogo: Sampa Simulator',
    src: 'images/chicao-social.gif',
    alt: 'Sprite do personagem Chicão: homem de barba e roupa escura',
    pixelSize: { width: 32, height: 48 },
  },
  {
    name: 'Scyfer',
    description: 'Monstro de piche que se apropriou de ferramentas de aldeões como armas, Jogo: Heros Of Epharion. ',
    src: 'images/scyfer.gif',
    alt: 'Animação de Scyfer, criatura de piche com uma foice, em um salão gótico',
  },
  {
    name: 'Mythimon - Boitatin',
    description: 'Mythimon animado, 36×40 pixels.',
    src: 'images/serpente.gif',
    alt: 'Animação de uma serpente verde com crista vermelha',
    pixelSize: { width: 36, height: 40 },
  },
  {
    name: 'Mythimon - Macaxerin',
    description: 'Mythimon animado, 32×44 pixels.',
    src: 'images/broto.gif',
    alt: 'Animação de uma criatura marrom em forma de semente com folhas no topo',
    pixelSize: { width: 32, height: 44 },
  },
];

export const GDDS: Gdd[] = [
  {
    title: 'Memento Mori',
    summary:
      'Base building com RTS nas cruzadas. Templários, pagãos e demônios, e um sistema de fé contra desespero que define o poder do jogador.',
    url: 'https://github.com/rosundfeld/Memento-Mori#readme',
  },
  {
    title: 'Heros of Epharion',
    summary:
      'Roguelike isométrico de turnos inspirado em D&D e Darkest Dungeon. Tavernas como checkpoints, morte permanente e uma arte que escurece conforme a party se aproxima do necromante.',
    url: 'gdds/heros-of-epharion.pdf',
  },
  {
    title: 'Gods of Devora',
    summary:
      'FPS tático free-to-play com classes de RPG. Times da Ordem e do Caos disputam um ritual de invocação em partidas de 24 rodadas.',
    url: 'gdds/gods-of-devora.pdf',
  },
  {
    title: 'When Will Be Summer Again?',
    summary:
      'Sobrevivência isométrica na Rússia da Segunda Guerra. Yelena precisa atravessar o inverno fazendo escolhas morais: queimar o que tem valor ou passar frio.',
    url: 'gdds/when-will-be-summer-again.pdf',
  },
];

export const CODE_HIGHLIGHT: CodeHighlight = {
  text: '',
  githubUrl: 'https://github.com/rosundfeld',
};
