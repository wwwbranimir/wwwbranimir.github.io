import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SearchParams } from '../models/search-params.model';
import { WeatherConditions } from '../models/weatherconditions.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor() {}

  public getWeatherForecast(
    params: SearchParams
  ): Observable<WeatherConditions> {
    return of(this.getFakeWeatherForecast(params)).pipe(delay(1000));
  }

  getFakeWeatherForecast(params: SearchParams): WeatherConditions {
    let data: WeatherConditions = JSON.parse({"lat":51.085,"lon":-0.1259,"timezone":"Europe/London","timezone_offset":0,"daily":[{"dt":1638442800,"sunrise":1638431017,"sunset":1638460601,"moonrise":1638421080,"moonset":1638456660,"moon_phase":0.93,"temp":{"day":276.29,"min":272.65,"max":277.3,"night":272.65,"eve":274.29,"morn":273.85},"feels_like":{"day":271.04,"night":269.61,"eve":270.07,"morn":269.41},"pressure":1011,"humidity":67,"dew_point":270.84,"wind_speed":7.61,"wind_deg":332,"wind_gust":13.86,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":56,"pop":0.12,"uvi":0.62},{"dt":1638529200,"sunrise":1638517497,"sunset":1638546968,"moonrise":1638512940,"moonset":1638544620,"moon_phase":0.97,"temp":{"day":281.15,"min":273.76,"max":282.44,"night":280.42,"eve":280.86,"morn":276.93},"feels_like":{"day":277.14,"night":278.04,"eve":280.86,"morn":273.3},"pressure":1004,"humidity":98,"dew_point":280.88,"wind_speed":8.59,"wind_deg":199,"wind_gust":14.46,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":1,"rain":7.27,"uvi":0.26},{"dt":1638615600,"sunrise":1638603974,"sunset":1638633338,"moonrise":1638604860,"moonset":1638633240,"moon_phase":0,"temp":{"day":279.21,"min":275.54,"max":280.15,"night":275.87,"eve":276.79,"morn":278.16},"feels_like":{"day":274.82,"night":270.95,"eve":272.65,"morn":275.11},"pressure":1000,"humidity":75,"dew_point":275.19,"wind_speed":7.9,"wind_deg":292,"wind_gust":14.13,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":98,"pop":0.98,"rain":3.25,"uvi":0.29},{"dt":1638702000,"sunrise":1638690449,"sunset":1638719711,"moonrise":1638696360,"moonset":1638722700,"moon_phase":0.05,"temp":{"day":275.92,"min":275.92,"max":277.47,"night":277.47,"eve":277.23,"morn":276.67},"feels_like":{"day":271.14,"night":273.1,"eve":272.54,"morn":271.44},"pressure":1005,"humidity":92,"dew_point":274.84,"wind_speed":8.34,"wind_deg":297,"wind_gust":16.29,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.44,"rain":0.46,"uvi":0.15},{"dt":1638788400,"sunrise":1638776922,"sunset":1638806088,"moonrise":1638786900,"moonset":1638813180,"moon_phase":0.09,"temp":{"day":278.18,"min":274.61,"max":279.51,"night":279.51,"eve":278.05,"morn":274.61},"feels_like":{"day":276.18,"night":276.86,"eve":275.84,"morn":272.83},"pressure":1016,"humidity":82,"dew_point":275.42,"wind_speed":5.07,"wind_deg":349,"wind_gust":11.46,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0.32,"uvi":0.41},{"dt":1638874800,"sunrise":1638863393,"sunset":1638892467,"moonrise":1638876360,"moonset":1638904380,"moon_phase":0.12,"temp":{"day":279.57,"min":279.57,"max":281.62,"night":281.62,"eve":280.89,"morn":280.32},"feels_like":{"day":274.68,"night":277.41,"eve":276.21,"morn":276.88},"pressure":1000,"humidity":88,"dew_point":277.74,"wind_speed":10.67,"wind_deg":162,"wind_gust":18.72,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":1,"rain":16.45,"uvi":0.04},{"dt":1638961200,"sunrise":1638949862,"sunset":1638978850,"moonrise":1638964860,"moonset":1638995760,"moon_phase":0.16,"temp":{"day":281.84,"min":280.31,"max":282.15,"night":281.14,"eve":281.54,"morn":281.41},"feels_like":{"day":276.94,"night":277.52,"eve":277.55,"morn":276.14},"pressure":986,"humidity":81,"dew_point":278.92,"wind_speed":14.81,"wind_deg":166,"wind_gust":24.36,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":97,"pop":1,"rain":4.49,"uvi":1},{"dt":1639047600,"sunrise":1639036328,"sunset":1639065236,"moonrise":1639052760,"moonset":1639087080,"moon_phase":0.2,"temp":{"day":281.59,"min":278.13,"max":281.59,"night":278.7,"eve":278.58,"morn":278.13},"feels_like":{"day":279.88,"night":276.22,"eve":276.59,"morn":276.76},"pressure":1009,"humidity":79,"dew_point":278.34,"wind_speed":3.51,"wind_deg":222,"wind_gust":8.05,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":9,"pop":0.47,"rain":0.27,"uvi":1}]};);
    return data;
  }

}
