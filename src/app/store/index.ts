import { ActionReducerMap } from '@ngrx/store';
import { wfReducer } from './reducers/wf.reducers';
import { GlobalState } from './states/global.state';


export const reducers: ActionReducerMap<GlobalState> = {
  weatherForecast: wfReducer
};
