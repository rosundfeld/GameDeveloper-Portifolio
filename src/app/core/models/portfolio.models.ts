export interface Link {
  label: string;
  url: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  links: Link[];
}

export interface Role {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  /** Sem imagem, o card ocupa a largura toda só com o texto. */
  image?: ImageAsset;
  engine: string;
  role: string;
  status: string;
  team: string;
  playUrl?: string;
  gddUrl?: string;
  repoUrl?: string;
}

export interface PixelSize {
  width: number;
  height: number;
}

export interface Sprite extends ImageAsset {
  name: string;
  description: string;
  /** Tamanho real em pixels. Se informado, o sprite ganha zoom e grade. */
  pixelSize?: PixelSize;
}

export interface Gdd {
  title: string;
  summary: string;
  url: string;
}

export interface CodeHighlight {
  text: string;
  githubUrl: string;
}
