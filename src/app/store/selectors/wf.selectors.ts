import { WfState } from './../states/wf.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { wfAdapter } from '../states/wf.state';

export const {
  selectIds: _selectWfDataIds,
  selectEntities: _selectWfEntities,
  selectAll: _selectAllWf
} = wfAdapter.getSelectors();

export const selectWfState = createFeatureSelector<WfState>('wf');

export const selectWfIds = createSelector(
  selectWfState,
  _selectWfDataIds
);

export const selectWfEntities = createSelector(
  selectWfState,
  _selectWfEntities
);

export const selectAllWf = createSelector(
  selectWfState,
  _selectAllWf
);

export const selectWfError = createSelector(
  selectWfState,
  (state: WfState): boolean => state.error
);

export const selectWfLoading = createSelector(
  selectWfState,
  (state: WfState): boolean => state.loading
);
