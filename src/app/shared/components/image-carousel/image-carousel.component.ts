import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

import { UI_TEXT } from '../../../core/constants/portfolio.data';
import { ImageAsset } from '../../../core/models/portfolio.models';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-image-carousel',
  imports: [TranslatePipe],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCarouselComponent {
  readonly images = input.required<ImageAsset[]>();
  readonly label = input.required<string>();

  protected readonly ui = UI_TEXT;
  protected readonly index = signal(0);
  protected readonly current = computed(() => this.images()[this.index()]);

  /** Avança ou volta, dando a volta nas pontas. */
  protected show(step: number): void {
    const count = this.images().length;
    this.index.update((i) => (i + step + count) % count);
  }
}
