import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE, UI_TEXT } from '../../core/constants/portfolio.data';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'footer[appFooter]',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { id: 'contato' },
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly ui = UI_TEXT;
  protected readonly mailto = `mailto:${PROFILE.email}`;
}
