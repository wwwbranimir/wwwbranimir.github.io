import { weatherReducer } from './weather.reducers.ts';
import { ActionReducerMap } from '@ngrx/store';

import { GlobalState } from './states/global.state';


export const reducers: ActionReducerMap<GlobalState> = {
  weatherForecast: weatherReducer
};
