import { Weather } from './../../models/weather-model';
import { createAction, props } from '@ngrx/store';

export const addWeather = createAction(
  '[Weather] Add state for city',
  props<{ weather: Weather }>()
);

export const getWeather = createAction(
  '[Weather] Add state for city',
  props<{ weather: Weather }>()
);

export const setCurrentWeather = createAction(
  '[Weather] Set current weather',
  props<{ weather: Weather }>()
);
