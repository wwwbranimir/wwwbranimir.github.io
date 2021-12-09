import { WeatherForecastService } from '../../services/weather-forecast.service';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';




@Injectable()
export class WeatherEffects {
  constructor(private readonly service: WeatherForecastService, private readonly actions$: Actions) { }

  // @Effect()
  // public loadWeather$ = this.actions$
  //   .pipe(ofType<WeatherActions.getWeather>(action=> action.payload),
  //     map(action => action.payload),
  //     switchMap((params: SearchParams) =>
  //       this.service.getWeatherForecast(params).pipe(
  //         map((response: WeatherConditions) => new WfLoadSuccessAction(response)),
  //         catchError(error => of(new WfLoadFailAction(error)))
  //       )
  //     )
  //   );
}
