import { Action, handleActions } from 'redux-actions';

import { IFilter } from 'reducers';

const initialState: IFilter = {};

export default handleActions<IFilter>({
  SET_FILTER:
    (state: IFilter, action: Action<IFilter>): IFilter => {
      let year = typeof action.payload.year === 'undefined' ? state.year :
        action.payload.year;
      year = state.year === action.payload.year ? undefined :
        action.payload.year;
      const description = typeof action.payload.description === 'undefined' ?
        state.description : action.payload.description;
      return {description, year};
    }
}, initialState);
