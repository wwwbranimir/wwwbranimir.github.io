import { WeatherForecastService } from '../../services/weather-forecast.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as WeatherActions from './../actions/weather.actions';
import * as WeatherApiActions from './../actions/weather.api.actions';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';




@Injectable()
export class WeatherEffects {
  constructor(private readonly service: WeatherForecastService, private readonly actions$: Actions) { }

  @Effect()
  public loadWeather$ = this.actions$
    .pipe(
      ofType(WeatherActions.getWeather),
      concatMap(action =>
        this.service.getWeatherForecast(action.weather)
        .pipe(
          map(weather => WeatherApiActions.loadWeatherSuccess({weather}),
          catchError(error => of(WeatherApiActions.loadWeatherFailure({error})))
        )
      )
    ));
}
