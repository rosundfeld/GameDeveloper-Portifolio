import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { Project } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();

  protected readonly facts = computed(() => {
    const { engine, role, status, team } = this.project();
    return [
      { label: 'Engine', value: engine },
      { label: 'Meu papel', value: role },
      { label: 'Status', value: status },
      { label: 'Equipe', value: team },
    ];
  });
}
