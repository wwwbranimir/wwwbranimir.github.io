import { SearchParams } from 'src/app/models/search-params.model';
import { GeoLocation } from './geolocation.model';
import { Mode } from './mode.model';
import { TimeZone } from './timezone.model';

export interface WeatherConditions {
  params: SearchParams;
  geoLocation: GeoLocation;
  timeZone: TimeZone;
  mode: Mode;
}
