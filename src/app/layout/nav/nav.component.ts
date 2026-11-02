import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { NAV_LINKS } from '../../core/constants/portfolio.data';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'nav[appNav]',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-label': 'Seções' },
})
export class NavComponent {
  protected readonly links = NAV_LINKS;
  protected readonly theme = inject(ThemeService);
}
