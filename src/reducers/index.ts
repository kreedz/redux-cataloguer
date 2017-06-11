import { combineReducers } from 'redux';

import photos from './photos';

export interface IState {
  urls: string[];
  filter?: number;
  search?: string;
}

export default combineReducers({photos});
