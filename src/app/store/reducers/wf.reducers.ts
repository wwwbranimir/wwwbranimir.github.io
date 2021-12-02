import { wfAdapter, WfState } from './../states/wf.state';
import { WfAction, WfActionType } from '../actions/wf.actions';
import { initialWfState } from '../states/wf.state';

export function wfReducer(state = initialWfState, action: WfAction): WfState {
  switch (action.type) {
    case WfActionType.Loading: {
      return { ...state, loading: true };
    }
    case WfActionType.LoadSuccess: {
      return wfAdapter.addOne(action.payload, {
        ...state,
        error: false,
        loading: false,
      });
    }
    case WfActionType.LoadFailure: {
      return wfAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
      });
    }
    default:
      return state;
  }
}
