import { Action, handleActions } from 'redux-actions';

import { IPhoto, IPhotos } from 'reducers';

const getLastId = (photos: IPhotos) =>
  Math.max(...Object.keys(photos).map(k => photos[k].id));

const getLastKey = (photos: IPhotos) =>
  Math.max(...Object.keys(photos).map(k => +k));

const initialState: IPhotos = {
    1:
      {
        id: 1,
        url: 'https://static.pexels.com/photos/2946/dawn-nature-sunset-trees.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '2.06.16',
        description: 'description1',
      },
    2:
      {
        id: 2,
        url: 'https://static.pexels.com/photos/20974/pexels-photo.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '1.06.17',
      },
    3:
      {
        id: 3,
        url: 'https://static.pexels.com/photos/20974/pexels-photo.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '1.06.17',
      },
    4:
      {
        id: 4,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '12.08.17',
      },
    5:
      {
        id: 5,
        url: 'https://static.pexels.com/photos/20974/pexels-photo.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '5.05.17',
      },
    6:
      {
        id: 6,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '1.06.10',
      },
    7:
      {
        id: 7,
        url: 'https://static.pexels.com/photos/20974/pexels-photo.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '1.06.17',
      },
    8:
      {
        id: 8,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '7.06.17',
      },
    9:
      {
        id: 9,
        url: 'https://static.pexels.com/photos/2946/dawn-nature-sunset-trees.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '5.06.17',
      },
    10:
      {
        id: 10,
        url: 'https://static.pexels.com/photos/2946/dawn-nature-sunset-trees.jpg',
        like: {
          count: 0,
          isLiked: false,
        },
        date: '4.06.18',
      },
  };

function getDateMSFromStr(date: string) {
  const [, day, month, year] = /(\d+)\.(\d+).(\d+)/.exec(date);
  return new Date(2000 + +year, +month - 1, +day).getTime();
}

function compareStrDates(date1: IPhoto, date2: IPhoto) {
  return getDateMSFromStr(date1.date) - getDateMSFromStr(date2.date);
}

export function getPhotoAndKeyById(photos: IPhotos, id: number) {
  for (const photoKey in photos) {
    if (photos[photoKey].id === id) {
      return {
        photo: photos[photoKey],
        photoKey,
      };
    }
  }
}

export default handleActions<IPhotos>({
  LOAD_INIT_DATA:
    (state: IPhotos, action: Action<IPhoto>): IPhotos => state,
  SORT:
    (state: IPhotos, action: Action<IPhoto>): IPhotos => {
      const o = Object.keys(state).map(key => state[key])
                      .sort(compareStrDates)
                      .reverse();
      const sorted: IPhotos = {};
      let i = 0;
      for (const e of o) {
        sorted[i++] = e;
      }
      return sorted;
    },
  TOGGLE_LIKE:
    (state: IPhotos, action: Action<IPhoto>): IPhotos => {
      const id = action.payload.id;
      const { photo, photoKey } = getPhotoAndKeyById(state, id);
      if (photo.like.isLiked) {
        --photo.like.count;
      } else {
        ++photo.like.count;
      }
      photo.like.isLiked = !photo.like.isLiked;
      return {
        ...state, [photoKey]: photo
      };
    },
  SET_DESCRIPTION:
    (state: IPhotos, action: Action<IPhoto>): IPhotos => {
      const { id, description } = action.payload;
      const { photo, photoKey } = getPhotoAndKeyById(state, id);
      photo.description = description;
      return {
        ...state, [photoKey]: photo
      };
    },
  ADD_PHOTO:
    (state: IPhotos, action: Action<IPhoto['url']>): IPhotos => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() % 100;
      const photo: IPhoto = {
        id: getLastId(state) + 1,
        url: action.payload,
        like: {
          count: 0,
          isLiked: false,
        },
        date: `${day}.${month}.${year}`,
      };
      const key: number = getLastKey(state) + 1;

      return {
        ...state, [key]: photo
      };
    },
}, initialState);
