// ============================================================
//  EDITE AQUI: todo o conteúdo do site vem deste arquivo.
//  Para adicionar um jogo, arte ou GDD, copie um item da lista
//  e altere os campos. As imagens ficam em /public/images.
//  Textos com { pt, en } aparecem no idioma escolhido no site;
//  uma string simples vale para os dois idiomas.
// ============================================================

import { CodeHighlight, Gdd, ImageAsset, Link, Profile, Project, Role, Sprite, Text } from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: 'Rodrigo Sundfeld',
  tagline: {
    pt: 'Game developer solo. Desenho em pixel art, programo em C# na Unity e escrevo o design dos meus jogos.',
    en: 'Solo game developer. I draw pixel art, code in C# with Unity and write the design of my games.',
  },
  email: 'mrmidnight.studios@gmail.com',
  links: [
    { label: 'itch.io', url: 'https://mrmldnight.itch.io' },
    { label: 'ArtStation', url: 'https://www.artstation.com/mrmldnight' },
    { label: 'LinkedIn', url: 'https://br.linkedin.com/in/rodrigo-dev-sundfeld' },
    { label: 'GitHub', url: 'https://github.com/rosundfeld' },
  ],
};

export const HERO_IMAGE: ImageAsset = {
  src: 'images/memento-mori-igreja.png',
  alt: {
    pt: 'Cena de Memento Mori: igreja gótica sob um céu vermelho e lua crescente',
    en: 'Scene from Memento Mori: a gothic church under a red sky and a crescent moon',
  },
};

export const NAV_LINKS: Link[] = [
  { label: { pt: 'Jogos', en: 'Games' }, url: '#jogos' },
  { label: 'Pixel art', url: '#arte' },
  { label: 'GDDs', url: '#gdds' },
  { label: { pt: 'Código', en: 'Code' }, url: '#codigo' },
  { label: { pt: 'Contato', en: 'Contact' }, url: '#contato' },
];

export const ROLES: Role[] = [
  {
    title: 'Pixel art',
    description: {
      pt: 'Personagens em 32×32, cenários e animação frame a frame.',
      en: 'Characters at 32×32, environments and frame-by-frame animation.',
    },
  },
  {
    title: { pt: 'Programação', en: 'Programming' },
    description: {
      pt: 'C# e Unity: gameplay, sistemas, IA de inimigos e ferramentas.',
      en: 'C# and Unity: gameplay, systems, enemy AI and tools.',
    },
  },
  {
    title: 'Game design',
    description: {
      pt: 'GDDs completos, mecânicas, progressão e narrativa.',
      en: 'Complete GDDs, mechanics, progression and narrative.',
    },
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Sampa Simulator',
    description: {
      pt: 'Exploração e aventura pelas ruas de São Paulo pelos olhos de quem vem do interior. Câmera billboard que dá efeito 3D a sprites 2D, sistema de diálogo e NPCs com NavMesh.',
      en: 'Exploration and adventure through the streets of São Paulo, seen through the eyes of someone from a small town. A billboard camera gives 2D sprites a 3D look, plus a dialogue system and NavMesh NPCs.',
    },
    image: {
      src: 'images/sampa-simulator.png',
      alt: {
        pt: 'Menu do Sampa Simulator sobre uma rua de São Paulo com prédios, cones, hidrante e um carro vermelho',
        en: 'Sampa Simulator menu over a São Paulo street with buildings, traffic cones, a fire hydrant and a red car',
      },
    },
    engine: 'Unity · C#',
    role: { pt: 'Arte, código e design', en: 'Art, code and design' },
    status: { pt: 'Em desenvolvimento', en: 'In development' },
    team: 'Solo',
    repoUrl: 'https://github.com/rosundfeld/SampaSimulator',
  },
  {
    title: 'Chinese Flappy Bird',
    description: {
      pt: 'Um Flappy Bird com tema inspirado na foto de um amigo. Projeto para praticar mecânicas simples, pontuação, efeitos sonoros e UI/UX.',
      en: "A Flappy Bird themed after a friend's photo. A project to practice simple mechanics, scoring, sound effects and UI/UX.",
    },
    image: {
      src: 'images/chinese-flappy-bird.png',
      alt: {
        pt: 'Tela do Chinese Flappy Bird: personagem voando entre bambus diante da Muralha da China',
        en: 'Chinese Flappy Bird screen: a character flying between bamboo in front of the Great Wall of China',
      },
    },
    engine: 'Unity · C#',
    role: { pt: 'Código e UI/UX', en: 'Code and UI/UX' },
    status: { pt: 'Concluído', en: 'Finished' },
    team: 'Solo',
    repoUrl: 'https://github.com/rosundfeld/ChineseFlappyBird',
  },
  {
    title: 'Murder King',
    description: {
      pt: 'Não é um apocalipse zumbi. É terça-feira na hora do almoço. Jogo cooperativo para 1 a 4 jogadores: administre um carrinho de comida e alimente uma multidão faminta antes que ela destrua o seu negócio. Overcooked encontra tower defense.',
      en: "It's not a zombie apocalypse. It's Tuesday at lunchtime. A co-op game for 1 to 4 players: run a food cart and feed a starving crowd before it wrecks your business. Overcooked meets tower defense.",
    },
    engine: 'Unity · C#',
    role: { pt: 'Código e game design', en: 'Code and game design' },
    status: { pt: 'Em desenvolvimento', en: 'In development' },
    team: 'Solo',
    repoUrl: 'https://github.com/rosundfeld/MurderKing',
  },
  {
    title: 'Memento Mori',
    description: {
      pt: 'Gerenciamento de base 2D com elementos de RTS, ambientado nas cruzadas. Você é um Capelão guiando os sobreviventes depois que os demônios traíram os pagãos: seu poder vem da fé da humanidade e enfraquece com o desespero.',
      en: "A 2D base-management game with RTS elements, set during the Crusades. You play a Chaplain guiding the survivors after the demons betrayed the pagans: your power comes from humanity's faith and weakens with despair.",
    },
    image: {
      src: 'images/memento-mori-igreja.png',
      alt: {
        pt: 'Concept do cenário da igreja em Memento Mori',
        en: 'Concept art of the church setting in Memento Mori',
      },
    },
    engine: 'Unity · C#',
    role: { pt: 'Arte, código e design', en: 'Art, code and design' },
    status: { pt: 'Em desenvolvimento', en: 'In development' },
    team: 'Solo',
    //playUrl: '#',
    gddUrl: 'https://github.com/rosundfeld/Memento-Mori#readme',
    repoUrl: 'https://github.com/rosundfeld/Memento-Mori',
  },
];

export const SPRITES: Sprite[] = [
  {
    name: 'Chicão',
    description: {
      pt: 'Sprite de personagem, 32×48 pixels. Jogo: Sampa Simulator',
      en: 'Character sprite, 32×48 pixels. Game: Sampa Simulator',
    },
    src: 'images/chicao-social.gif',
    alt: {
      pt: 'Sprite do personagem Chicão: homem de barba e roupa escura',
      en: 'Sprite of the character Chicão: a bearded man in dark clothes',
    },
    pixelSize: { width: 32, height: 48 },
  },
  {
    name: 'Scyfer',
    description: {
      pt: 'Monstro de piche que se apropriou de ferramentas de aldeões como armas. Jogo: Heros of Epharion.',
      en: "A tar monster that took villagers' tools as weapons. Game: Heros of Epharion.",
    },
    src: 'images/scyfer.gif',
    alt: {
      pt: 'Animação de Scyfer, criatura de piche com uma foice, em um salão gótico',
      en: 'Animation of Scyfer, a tar creature with a scythe, in a gothic hall',
    },
  },
  {
    name: 'Mythimon - Boitatin',
    description: { pt: 'Mythimon animado, 36×40 pixels.', en: 'Animated Mythimon, 36×40 pixels.' },
    src: 'images/serpente.gif',
    alt: {
      pt: 'Animação de uma serpente verde com crista vermelha',
      en: 'Animation of a green serpent with a red crest',
    },
    pixelSize: { width: 36, height: 40 },
  },
  {
    name: 'Mythimon - Macaxerin',
    description: { pt: 'Mythimon animado, 32×44 pixels.', en: 'Animated Mythimon, 32×44 pixels.' },
    src: 'images/broto.gif',
    alt: {
      pt: 'Animação de uma criatura marrom em forma de semente com folhas no topo',
      en: 'Animation of a brown seed-shaped creature with leaves on top',
    },
    pixelSize: { width: 32, height: 44 },
  },
];

export const GDDS: Gdd[] = [
  {
    title: 'Memento Mori',
    summary: {
      pt: 'Em um multiverso marcado pela Inquisição, a guerra entre os Templários e os chamados pagãos atingiu um ponto crítico. Desesperados para vencer, os pagãos fizeram pactos com entidades demoníacas, vendendo suas próprias almas em troca de poder. No entanto, a traição foi inevitável. As entidades infernais voltaram-se contra seus aliados, desencadeando a queda da humanidade e mergulhando o mundo em caos e condenação.',
      en: 'In a multiverse scarred by the Inquisition, the war between the Templars and the so-called pagans has reached a breaking point. Desperate to win, the pagans made pacts with demonic entities, selling their own souls for power. Betrayal, however, was inevitable. The infernal entities turned on their allies, bringing about the fall of humanity and plunging the world into chaos and damnation.',
    },
    url: 'https://github.com/rosundfeld/Memento-Mori#readme',
  },
  {
    title: 'Heros of Epharion',
    summary: {
      pt: 'Roguelike isométrico de turnos inspirado em D&D e Darkest Dungeon. Tavernas como checkpoints, morte permanente e uma arte que escurece conforme a party se aproxima do necromante.',
      en: 'Isometric turn-based roguelike inspired by D&D and Darkest Dungeon. Taverns as checkpoints, permadeath and an art style that darkens as the party closes in on the necromancer.',
    },
    url: 'gdds/heros-of-epharion.pdf',
  },
  {
    title: 'Gods of Devora',
    summary: {
      pt: 'God of Devora é um FPS, Free-to-Play que se passa num mundo fantasioso inspirado em D&D onde feiticeiros e guerreiros, devotos de diferentes deuses, lutam entre si para estabelecer a vontade de sua divindade.',
      en: "Gods of Devora is a free-to-play FPS set in a fantasy world inspired by D&D, where sorcerers and warriors devoted to different gods fight each other to impose their deity's will.",
    },
    url: 'gdds/gods-of-devora.pdf',
  },
  {
    title: 'When Will Be Summer Again?',
    summary: {
      pt: 'É um jogo de sobrevivência isométrico que se passa na Rússia durante a invasão alemã na segunda guerra, uma família esquecida durante a tática de terra arrasada tenta sobreviver o inverno rigoroso. Yelena precisa atravessar o inverno fazendo escolhas morais: queimar o que tem valor ou passar frio.',
      en: 'An isometric survival game set in Russia during the German invasion in World War II: a family left behind during the scorched-earth tactics tries to survive the harsh winter. Yelena must get through it making moral choices: burn what is valuable or freeze.',
    },
    url: 'gdds/when-will-be-summer-again.pdf',
  },
];

export const CODE_HIGHLIGHT: CodeHighlight = {
  text: '',
  githubUrl: 'https://github.com/rosundfeld',
};

/** Textos fixos da interface: títulos de seção, botões e rótulos. */
export const UI_TEXT = {
  nav: {
    label: { pt: 'Seções', en: 'Sections' },
    theme: { pt: 'Tema', en: 'Theme' },
    themeLabel: { pt: 'Alternar tema claro ou escuro', en: 'Toggle light or dark theme' },
    // o botão mostra o idioma para onde vai trocar
    language: { pt: 'EN', en: 'PT' },
    languageLabel: { pt: 'Switch to English', en: 'Mudar para português' },
    languageCode: { pt: 'en', en: 'pt-BR' },
  },
  about: {
    heading: { pt: 'Do primeiro pixel ao jogo completo', en: 'From the first pixel to the finished game' },
    lede: {
      pt: 'Faço jogos utilizando Unity e Aseprite de ponta a ponta. Cada projeto aqui passou pelas três frentes: arte, código e design.',
      en: 'I make games end to end with Unity and Aseprite. Every project here went through all three fronts: art, code and design.',
    },
  },
  projects: {
    heading: { pt: 'Jogos', en: 'Games' },
    lede: { pt: 'Projetos em que fiz arte, código e design.', en: 'Projects where I did art, code and design.' },
    engine: 'Engine',
    role: { pt: 'Meu papel', en: 'My role' },
    status: 'Status',
    team: { pt: 'Equipe', en: 'Team' },
  },
  pixelArt: {
    heading: 'Pixel art',
    lede: {
      pt: 'Aproxime os sprites para ver cada pixel. Ligue a grade para mostrar a malha original.',
      en: 'Zoom into the sprites to see every pixel. Turn on the grid to show the original pixel grid.',
    },
    zoom: { pt: 'Zoom do sprite', en: 'Sprite zoom' },
    grid: { pt: 'Grade', en: 'Grid' },
  },
  gdds: {
    heading: 'Game design documents',
    lede: { pt: 'Os documentos que guiam os projetos.', en: 'The documents behind the projects.' },
  },
  code: {
    heading: { pt: 'Código', en: 'Code' },
  },
  footer: {
    heading: { pt: 'Vamos fazer um jogo', en: "Let's make a game" },
    text: {
      pt: 'Aberto a vagas, freelas e game jams. Respondo por e-mail.',
      en: 'Open to jobs, freelance work and game jams. I reply by email.',
    },
  },
  actions: {
    play: { pt: 'Jogar no itch.io', en: 'Play on itch.io' },
    gdd: { pt: 'Ver o GDD', en: 'Read the GDD' },
    openGdd: { pt: 'Abrir GDD', en: 'Open GDD' },
    repo: { pt: 'Ver no GitHub', en: 'View on GitHub' },
  },
} satisfies Record<string, Record<string, Text>>;
