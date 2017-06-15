import { Action, handleActions } from 'redux-actions';

import { IFilter } from 'reducers';

const initialState: IFilter = {};

export default handleActions<IFilter>({
  SET_FILTER:
    (state: IFilter, action: Action<IFilter>): IFilter => {
      return state.year === action.payload.year ? {} :
        {year: action.payload.year};
    }
}, initialState);
