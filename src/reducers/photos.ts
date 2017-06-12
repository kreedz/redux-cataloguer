import { Action, handleActions } from 'redux-actions';

import { IPhoto } from 'reducers';

const initialState: IPhoto[] =
  [
    {
      url: 'imgurl1',
      like: 1,
      date: new Date('2017-06-17'),
    },
    {
      url: 'imgurl1',
      like: 1,
      date: new Date('2017-06-17'),
    }
  ];

export default handleActions<IPhoto[]>({
  // LOAD_DATA: (state: IState, action: Action<void>): IState => state,
}, initialState);
