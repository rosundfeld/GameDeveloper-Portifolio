import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { Sprite } from '../../../core/models/portfolio.models';

const SPRITE_ZOOM_LEVELS = [1, 4, 8] as const;
const DEFAULT_ZOOM: ZoomLevel = 8;

type ZoomLevel = (typeof SPRITE_ZOOM_LEVELS)[number];

@Component({
  selector: 'app-sprite-viewer',
  templateUrl: './sprite-viewer.component.html',
  styleUrl: './sprite-viewer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpriteViewerComponent {
  readonly sprite = input.required<Sprite>();

  protected readonly zoomLevels = SPRITE_ZOOM_LEVELS;
  protected readonly zoom = signal<ZoomLevel>(DEFAULT_ZOOM);
  protected readonly showGrid = signal(false);

  protected toggleGrid(): void {
    this.showGrid.update((visible) => !visible);
  }
}
