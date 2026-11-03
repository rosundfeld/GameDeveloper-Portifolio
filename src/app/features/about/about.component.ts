import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROLES, UI_TEXT } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [SectionComponent, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly roles = ROLES;
  protected readonly ui = UI_TEXT;
}
