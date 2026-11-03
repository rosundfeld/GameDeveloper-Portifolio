import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CODE_HIGHLIGHT, UI_TEXT } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-code',
  imports: [SectionComponent, TranslatePipe],
  templateUrl: './code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  protected readonly code = CODE_HIGHLIGHT;
  protected readonly ui = UI_TEXT;
}
