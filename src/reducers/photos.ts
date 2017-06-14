import { Action, handleActions } from 'redux-actions';

import { IPhoto, IPhotos } from 'reducers';

const initialState: IPhotos = {
    1:
      {
        id: 1,
        url: 'https://static.pexels.com/photos/2946/dawn-nature-sunset-trees.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    2:
      {
        id: 2,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    3:
      {
        id: 3,
        url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    4:
      {
        id: 4,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    5:
      {
        id: 5,
        url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    6:
      {
        id: 6,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    7:
      {
        id: 7,
        url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    8:
      {
        id: 8,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    9:
      {
        id: 9,
        url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
    10:
      {
        id: 10,
        url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
        like: {
          count: 1,
          isLiked: false,
        },
        date: '1.06.17',
      },
  };

export default handleActions<IPhotos>({
  LOAD_INIT_DATA:
    (state: IPhotos, action: Action<IPhoto>): IPhotos => state,
  TOGGLE_LIKE:
    (state: IPhotos, action: Action<IPhoto>): IPhotos => {
      const id = action.payload.id;
      const photo = state[id];
      if (photo.like.isLiked) {
        --photo.like.count;
      } else {
        ++photo.like.count;
      }
      photo.like.isLiked = !photo.like.isLiked;
      return {
        ...state, [id]: photo
      };
    },
}, initialState);
