import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { WfEffects } from './effects/wf.effects';
import { wfReducer } from './reducers/wf.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('wf', wfReducer),
    EffectsModule.forRoot([WfEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [StoreModule]
})
export class StorageModule { }
