import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { UI_TEXT } from '../../../core/constants/portfolio.data';
import { Project } from '../../../core/models/portfolio.models';
import { ImageCarouselComponent } from '../../../shared/components/image-carousel/image-carousel.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-project-card',
  imports: [ImageCarouselComponent, TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();

  protected readonly ui = UI_TEXT;

  protected readonly facts = computed(() => {
    const { engine, role, status, team } = this.project();
    const labels = UI_TEXT.projects;
    return [
      { label: labels.engine, value: engine },
      { label: labels.role, value: role },
      { label: labels.status, value: status },
      { label: labels.team, value: team },
    ];
  });
}
