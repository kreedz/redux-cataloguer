import { combineReducers } from 'redux';

import filter from './filter';
import pagination from './pagination';
import photos from './photos';

export interface IPhoto {
  id: number;
  url: string;
  like: {
    count: number;
    isLiked: boolean;
  };
  date?: string;
  description?: string;
}

export interface IPhotos {
  [key: string]: IPhoto
}

export interface IPagination {
  current: number;
  readonly imagesCountOnPage: number;
}

export interface IFilter {
  year?: number;
  description?: string;
}

export default combineReducers({photos, pagination, filter});
