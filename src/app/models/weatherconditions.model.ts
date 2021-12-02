import { GeoLocation } from "./geolocation.model";
import { Period } from "./period.model";
import { TimeZone } from "./timezone.model";


export interface WeatherConditions {
  geoLocation: GeoLocation;
  timeZone: TimeZone;
  period: Period[];
}
