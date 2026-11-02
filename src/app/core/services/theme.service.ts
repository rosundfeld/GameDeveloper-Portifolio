import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

/** Tema escolhido pelo usuário. Sem escolha salva, o CSS segue o tema do sistema. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly #document = inject(DOCUMENT);
  #theme: Theme | null = this.#readStoredTheme();

  constructor() {
    if (this.#theme) this.#apply(this.#theme);
  }

  toggle(): void {
    const next: Theme = this.#effectiveTheme() === 'dark' ? 'light' : 'dark';
    this.#theme = next;
    this.#apply(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // storage bloqueado: o tema vale só até recarregar a página
    }
  }

  #effectiveTheme(): Theme {
    const prefersDark = this.#document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches;
    return this.#theme ?? (prefersDark ? 'dark' : 'light');
  }

  #apply(theme: Theme): void {
    this.#document.documentElement.dataset['theme'] = theme;
  }

  #readStoredTheme(): Theme | null {
    try {
      const value = localStorage.getItem(THEME_STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }
}
