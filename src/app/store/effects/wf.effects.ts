import { WeatherForecastService } from './../../services/weather-forecast.service';
import { SearchParams } from 'src/app/models/search-params.model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

import { WfActionType, WfLoadAction, WfLoadFailAction, WfLoadSuccessAction } from '../actions/wf.actions';
import { WeatherConditions } from 'src/app/models/weatherconditions.model';

@Injectable()
export class WfEffects {
  constructor(private service: WeatherForecastService, private actions$: Actions) { }

  @Effect()
  public loadWeatherConditions$ = this.actions$
    .pipe(ofType<WfLoadAction>(WfActionType.Loading),
      map(action => action.payload),
      switchMap((params: SearchParams) =>
        this.service.getWeatherForecast(params).pipe(
          map((response: WeatherConditions) => new WfLoadSuccessAction(response)),
          catchError(error => of(new WfLoadFailAction(error)))
        )
      )
    );
}
