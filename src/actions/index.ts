import { Action, Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import { IState } from 'reducers';

export const loadData = () =>
  (dispatch: Dispatch<IState>) => dispatch(createAction('LOAD_DATA')());
