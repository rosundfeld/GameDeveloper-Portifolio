import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutComponent } from './features/about/about.component';
import { CodeComponent } from './features/code/code.component';
import { GddsComponent } from './features/gdds/gdds.component';
import { PixelArtComponent } from './features/pixel-art/pixel-art.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    PixelArtComponent,
    GddsComponent,
    CodeComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
