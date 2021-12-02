import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WeatherConditions } from 'src/app/models/weatherconditions.model';

export interface WfState extends EntityState<WeatherConditions> {
  error: boolean;
  loading: boolean;
}

export const wfAdapter: EntityAdapter<WeatherConditions> = createEntityAdapter<WeatherConditions>({
  selectId: (wc: WeatherConditions) => `${wc.searchParams.mode}-${wc.searchParams.cityName}`
});

export const initialWfState: WfState = wfAdapter.getInitialState({
  error: false,
  loading: true
});
