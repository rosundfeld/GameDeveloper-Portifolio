import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { NAV_LINKS, UI_TEXT } from '../../core/constants/portfolio.data';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'nav[appNav]',
  imports: [TranslatePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[attr.aria-label]': 'language.translate(ui.nav.label)' },
})
export class NavComponent {
  protected readonly links = NAV_LINKS;
  protected readonly ui = UI_TEXT;
  protected readonly theme = inject(ThemeService);
  protected readonly language = inject(LanguageService);
}
