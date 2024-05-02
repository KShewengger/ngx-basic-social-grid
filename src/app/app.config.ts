import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, TitleStrategy } from '@angular/router';
import { JSON_PLACEHOLDER_API } from '@app/constants';
import { environment } from '@environments/environment';

import { routes } from './app.routes';
import { PlatformTitleStrategyService } from './services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: TitleStrategy, useClass: PlatformTitleStrategyService },
    { provide: JSON_PLACEHOLDER_API, useValue: environment.apiBaseUrl }
  ]
};
