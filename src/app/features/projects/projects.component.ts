import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROJECTS, UI_TEXT } from '../../core/constants/portfolio.data';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [SectionComponent, ProjectCardComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
  protected readonly ui = UI_TEXT;
}
