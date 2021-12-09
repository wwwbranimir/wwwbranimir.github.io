import * as App from './../states/app.state';
import { createReducer, on } from '@ngrx/store';
import { Weather } from './../../models/weather-model';
import * as WeatherActions from './../actions/weather.actions';
import * as WeatherApiActions from './../actions/weather.api.actions';

export interface WeatherState extends App.State {
  weather: Weather[];
  currentWeather: Weather;
}

const initialState: WeatherState = {
  weather: [],
  currentWeather: null,
  error: '',
  loading: true,
};

export const weatherReducer = createReducer<WeatherState>(
  initialState,
  on(WeatherActions.setCurrentWeather, (state, action) => {
    {
      return {
        ...state,
        currentWeather: action.weather,
      };
    }
  }),
  on(WeatherActions.addWeather, (state, action) => {
    {
      return {
        ...state,
        weather: state.weather.concat(action.weather),
      };
    }
  }),
  on(WeatherApiActions.loadWeatherSuccess, (state, action): WeatherState => {
    return {
      ...state,
      weather: action.weather[0],
      currentWeather: action.weather,
      error: ''
    };
  }),
  on(WeatherApiActions.loadWeatherFailure, (state, action): WeatherState => {
    {
      return {
        ...state,
        weather: [],
        error: action.error,
      };
    }
  })
);
