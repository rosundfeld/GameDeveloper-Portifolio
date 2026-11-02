import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HERO_IMAGE, PROFILE } from '../../core/constants/portfolio.data';

@Component({
  selector: 'header[appHeader]',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly profile = PROFILE;
  protected readonly image = HERO_IMAGE;
}
