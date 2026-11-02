import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CODE_HIGHLIGHT } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';

@Component({
  selector: 'app-code',
  imports: [SectionComponent],
  templateUrl: './code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  protected readonly code = CODE_HIGHLIGHT;
}
