import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GDDS } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';

@Component({
  selector: 'app-gdds',
  imports: [SectionComponent],
  templateUrl: './gdds.component.html',
  styleUrl: './gdds.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GddsComponent {
  protected readonly gdds = GDDS;
}
