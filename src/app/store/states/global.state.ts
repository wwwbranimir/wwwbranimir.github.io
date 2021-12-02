import {  initialWfState, WfState } from './wf.state';

export interface GlobalState {
  weatherForecast: WfState;
}

export const initialGlobalState: GlobalState = {
  weatherForecast: initialWfState
};
