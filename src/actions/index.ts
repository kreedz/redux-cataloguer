import { Action, Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { IPagination, IPhotos } from 'reducers';

export const loadData = () =>
  (dispatch: Dispatch<IPhotos>) => dispatch(createAction('LOAD_INIT_DATA')());

const setCurrentPageAction = createAction<{current: number}, number>(
  'SET_PAGINATION_PAGE',
  (current: number) => ({current})
);

export const setCurrentPage = (current: number) =>
  (dispatch: Dispatch<IPagination>) => dispatch(
    setCurrentPageAction(current)
  );

const toggleLikeAction = createAction<{id: number}, number>(
  'TOGGLE_LIKE',
  (id: number) => ({id})
);

export const toggleLike = (id: number) =>
  (dispatch: Dispatch<IPhotos>) => dispatch(
    toggleLikeAction(id)
  );
