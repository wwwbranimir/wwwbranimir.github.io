import { Action } from '@ngrx/store';
import { SearchParams } from 'src/app/models/search-params.model';
import { WeatherConditions } from 'src/app/models/weatherconditions.model';

export enum WfActionType {
  Loading = '[Weather forecast] Loading',
  LoadSuccess = '[Weather forecast] LoadSuccess',
  LoadFailure = '[Weather forecast] LoadFailure'
}

export class WfLoadAction implements Action {
  public readonly type = WfActionType.Loading;
  constructor(public payload: SearchParams) {}
}

export class WfLoadSuccessAction implements Action {
  public readonly type = WfActionType.LoadSuccess;
  constructor(public payload: WeatherConditions) {}
}

export class WfLoadFailAction implements Action {
  public readonly type = WfActionType.LoadFailure;
  constructor(public error: any) {}
}

export type WfAction = WfLoadAction | WfLoadSuccessAction | WfLoadFailAction;
