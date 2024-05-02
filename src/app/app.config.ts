import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, TitleStrategy } from '@angular/router';
import { JSON_PLACEHOLDER_API } from '@app/constants';
import { AppActions, appProviders } from '@app/states/app';
import { environment } from '@environments/environment';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore, Store } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { albumsProviders } from '@states/albums';
import { postsProviders } from '@states/posts';
import { usersProviders } from '@states/users';

import { routes } from './app.routes';
import { PlatformTitleStrategyService } from './services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouterStore(),
    provideStore(),
    provideStoreDevtools({
      name: 'Basic Social Grid',
      trace: false,
      traceLimit: 25,
    }),
    ...appProviders,
    ...postsProviders,
    ...usersProviders,
    ...albumsProviders,
    {
      provide: APP_INITIALIZER,
      useFactory: (store = inject(Store)) => () => {
        store.dispatch(AppActions.initialize());
      },
      multi: true,
    },
    { provide: TitleStrategy, useClass: PlatformTitleStrategyService },
    { provide: JSON_PLACEHOLDER_API, useValue: environment.apiBaseUrl }
  ]
};
