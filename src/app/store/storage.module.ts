import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { WeatherEffects } from './effects/weather.effects';
import { weatherReducer } from './reducers/weather.reducers.ts';


@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [StoreModule]
})
export class StorageModule { }
