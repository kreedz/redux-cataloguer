import { Action, handleActions } from 'redux-actions';

import { IState } from 'reducers';

const initialState: IState = {
  urls: ['imgurl1', 'imgurl2'],
};

export default handleActions<IState>({
  LOAD_DATA: (state: IState, action: Action<void>): IState => state,
}, initialState);
