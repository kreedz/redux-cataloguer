import { Action, handleActions } from 'redux-actions';

import { IPagination } from 'reducers';

const initialState: IPagination = {
  current: 1,
  imagesCountOnPage: 8,
};

export default handleActions<IPagination>({
  SET_PAGINATION_PAGE:
    (state: IPagination, action: Action<IPagination>): IPagination => (
      {
        ...state,
        current: action.payload.current
      }
    ),
}, initialState);
