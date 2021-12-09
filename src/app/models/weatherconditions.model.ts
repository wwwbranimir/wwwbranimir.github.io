import { SearchParams } from 'src/app/models/search-params.model';
import { Daily } from './daily-model';
import { Hourly } from './hourly-model';
export interface WeatherConditions {
  params: SearchParams;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: Daily[];
  hourly: Hourly[];
}
