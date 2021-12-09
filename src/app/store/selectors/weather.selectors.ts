import { WeatherState } from './../reducers/weather.reducers.ts';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Weather } from "src/app/models/weather-model";

const getWeatherFeatureSelector = createFeatureSelector<WeatherState>('weather');

export const getCurrentWeatherSelector = (s:Weather) => createSelector(
  getWeatherFeatureSelector, state =>
  state.weather.filter(w=> w.mode===s.mode && w.city ===s.city && w.lon ===s.lon && w.lat ===s.lat)
);
