import { combineReducers } from 'redux';

import pagination from './pagination';
import photos from './photos';

export interface IPhoto {
  id: number;
  url: string;
  like?: number;
  date?: string;
}

export interface IPagination {
  current: number;
  readonly imagesCountOnPage: number;
}

export default combineReducers({photos, pagination});
