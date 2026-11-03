import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GDDS, UI_TEXT } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-gdds',
  imports: [SectionComponent, TranslatePipe],
  templateUrl: './gdds.component.html',
  styleUrl: './gdds.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GddsComponent {
  protected readonly gdds = GDDS;
  protected readonly ui = UI_TEXT;
}
