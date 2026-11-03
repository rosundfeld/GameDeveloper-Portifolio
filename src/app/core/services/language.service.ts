import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

import { Lang, Text } from '../models/portfolio.models';

const LANG_STORAGE_KEY = 'lang';
const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly #document = inject(DOCUMENT);
  readonly #lang = signal<Lang>(this.#readStoredLang() ?? 'pt');
  readonly lang = this.#lang.asReadonly();

  constructor() {
    this.#apply();
  }

  toggle(): void {
    this.#lang.update((lang) => (lang === 'pt' ? 'en' : 'pt'));
    this.#apply();
    try {
      localStorage.setItem(LANG_STORAGE_KEY, this.#lang());
    } catch {
      // storage bloqueado: o idioma vale só até recarregar a página
    }
  }

  translate(text: Text): string {
    return typeof text === 'string' ? text : text[this.#lang()];
  }

  #apply(): void {
    this.#document.documentElement.lang = HTML_LANG[this.#lang()];
  }

  #readStoredLang(): Lang | null {
    try {
      const value = localStorage.getItem(LANG_STORAGE_KEY);
      return value === 'pt' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }
}
