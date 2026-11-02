import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Moldura padrão das seções: título, texto de abertura e conteúdo projetado. */
@Component({
  selector: 'section[appSection]',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  readonly heading = input.required<string>();
  readonly lede = input.required<string>();
}
