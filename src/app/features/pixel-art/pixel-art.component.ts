import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SPRITES } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';
import { SpriteViewerComponent } from './sprite-viewer/sprite-viewer.component';

@Component({
  selector: 'app-pixel-art',
  imports: [SectionComponent, SpriteViewerComponent],
  templateUrl: './pixel-art.component.html',
  styleUrl: './pixel-art.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixelArtComponent {
  protected readonly sprites = SPRITES;
}
