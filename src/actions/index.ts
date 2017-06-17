import { Action, Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { IFilter, IPagination, IPhoto, IPhotos } from 'reducers';

export const loadData = () =>
  (dispatch: Dispatch<IPhotos>) => {
    dispatch(createAction('LOAD_INIT_DATA')());
    dispatch(createAction('SORT')());
  };

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

const setFilterAction = createAction<IFilter, IFilter>(
  'SET_FILTER',
  (filters: IFilter) => filters
);

export const setFilter = (filters: IFilter) =>
  (dispatch: Dispatch<IPhotos>) => dispatch(
    setFilterAction(filters)
  );

const setDescriptionAction = createAction<
  {description: string; id: number},
  string,
  number
>('SET_DESCRIPTION',
  (description: string, id: number) => ({description, id})
);

export const setDescription = (description: string, id: number) =>
  (dispatch: Dispatch<IPhotos>) => dispatch(
    setDescriptionAction(description, id)
  );

const addPhotoAction = createAction<IPhoto['url'], IPhoto['url']>(
  'ADD_PHOTO',
  (url: IPhoto['url']) => url
);

export const addPhoto = (url: IPhoto['url']) =>
  (dispatch: Dispatch<IPhotos>) => dispatch(
    addPhotoAction(url)
  );
