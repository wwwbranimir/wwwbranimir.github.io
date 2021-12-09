import { GeoLocation } from './../models/geolocation.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  mergeMap,
} from 'rxjs/operators';
import { Weather } from '../models/weather-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {

  constructor(private readonly http: HttpClient) {}

  getWeatherForecast(params: Weather): Observable<Weather> {
    const dailyExclude = ['current','minutely','hourly','alerts'].join(',').toString();
    const hourlyExclude = ['current,minutely,daily,alerts'].join(',').toString();
    const exclude = params.mode ==='daily'?dailyExclude:hourlyExclude;

    return this.http.get<GeoLocation>(`${environment.geoLocationUrl}?q=${params.city.trim()}&limit=1&appid=${environment.appId}`)
      .pipe(
        mergeMap(g =>
          this.http.get<Weather>(`${environment.baseUrl}?lat=${g[0].lat}&lon=${g[0].lon}&exclude=${exclude}&appid=${environment.appId}`)));
  }
}
