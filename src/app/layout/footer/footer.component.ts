import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE } from '../../core/constants/portfolio.data';

@Component({
  selector: 'footer[appFooter]',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { id: 'contato' },
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly mailto = `mailto:${PROFILE.email}`;
}
