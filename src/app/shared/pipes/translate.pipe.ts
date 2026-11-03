import { Pipe, PipeTransform, inject } from '@angular/core';

import { Text } from '../../core/models/portfolio.models';
import { LanguageService } from '../../core/services/language.service';

/** Impuro de propósito: um pipe puro guardaria o texto antigo, porque a entrada não muda quando só o idioma troca. */
@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform {
  readonly #language = inject(LanguageService);

  transform(text: Text): string {
    return this.#language.translate(text);
  }
}
