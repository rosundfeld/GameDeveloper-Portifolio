import { inject, provideAppInitializer, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { ThemeService } from './app/core/services/theme.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    // aplica o tema salvo antes da primeira renderização
    provideAppInitializer(() => void inject(ThemeService)),
  ],
}).catch((err) => console.error(err));
