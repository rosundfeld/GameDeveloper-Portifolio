export type Lang = 'pt' | 'en';

/** Texto nos dois idiomas. Uma string simples vale para os dois. */
export type Text = string | Record<Lang, string>;

export interface Link {
  label: Text;
  url: string;
}

export interface ImageAsset {
  src: string;
  alt: Text;
}

export interface Profile {
  name: string;
  tagline: Text;
  email: string;
  links: Link[];
}

export interface Role {
  title: Text;
  description: Text;
}

export interface Project {
  title: string;
  description: Text;
  /** Mais de uma imagem vira carrossel. Sem imagem, o card ocupa a largura toda só com o texto. */
  images?: ImageAsset[];
  engine: string;
  role: Text;
  status: Text;
  team: Text;
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
  description: Text;
  /** Tamanho real em pixels. Se informado, o sprite ganha zoom e grade. */
  pixelSize?: PixelSize;
}

export interface Gdd {
  title: string;
  summary: Text;
  url: string;
}

export interface CodeHighlight {
  text: Text;
  githubUrl: string;
}
