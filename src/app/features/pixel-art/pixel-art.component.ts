import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SPRITES, UI_TEXT } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SpriteViewerComponent } from './sprite-viewer/sprite-viewer.component';

@Component({
  selector: 'app-pixel-art',
  imports: [SectionComponent, SpriteViewerComponent, TranslatePipe],
  templateUrl: './pixel-art.component.html',
  styleUrl: './pixel-art.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixelArtComponent {
  protected readonly sprites = SPRITES;
  protected readonly ui = UI_TEXT;
}
