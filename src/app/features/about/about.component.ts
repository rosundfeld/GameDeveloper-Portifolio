import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROLES } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';

@Component({
  selector: 'app-about',
  imports: [SectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly roles = ROLES;
}
