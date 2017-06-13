import { Action, Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { IPagination, IPhoto } from 'reducers';

export const loadData = () =>
  (dispatch: Dispatch<IPhoto[]>) => dispatch(createAction('LOAD_INIT_DATA')());

const setCurrentPageAction = createAction<{current: number}, number>(
  'SET_PAGINATION_PAGE',
  (current: number) => ({current})
);

export const setCurrentPage = (current: number) =>
  (dispatch: Dispatch<IPagination>) => dispatch(
    setCurrentPageAction(current)
  );
