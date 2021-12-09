import { createAction, props } from '@ngrx/store';
import { Weather } from 'src/app/models/weather-model';

export const loadWeatherSuccess = createAction(
  '[Weather] Load weather success',
  props<{ weather: Weather }>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Load weather failure',
  props<{error:string}>()
);


