import { provideEffects } from '@ngrx/effects';

import { AppActions } from './actions';
import * as effects from './effects';

const appProviders = [provideEffects(effects)];

export { AppActions, appProviders };
