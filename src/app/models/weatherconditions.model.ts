import { SearchParams } from 'src/app/models/search-params.model';
import { GeoLocation } from "./geolocation.model";
import { Period } from "./period.model";
import { TimeZone } from "./timezone.model";


export interface WeatherConditions {
  searchParams: SearchParams;
  geoLocation: GeoLocation;
  timeZone: TimeZone;
  period: Period[];
}
