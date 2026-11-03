import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HERO_IMAGE, PROFILE } from '../../core/constants/portfolio.data';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'header[appHeader]',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly profile = PROFILE;
  protected readonly image = HERO_IMAGE;
}
