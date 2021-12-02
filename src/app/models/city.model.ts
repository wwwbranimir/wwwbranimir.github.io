import { GeoLocation } from "./geolocation.model";

export interface City {
  name: string;
  geoLocation: GeoLocation;
  country: string;
}
