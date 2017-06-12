import { combineReducers } from 'redux';

import photos from './photos';

export interface IPhoto {
  url: string;
  like?: number;
  date?: Date;
}

export interface IState {
  photos: IPhoto[];
  filter?: number;
  search?: string;
}

export default combineReducers({photos});
