import { Action, handleActions } from 'redux-actions';

import { IPhoto } from 'reducers';

const initialState: IPhoto[] =
  [
    {
      id: 1,
      url: 'https://s-media-cache-ak0.pinimg.com/736x/3e/3a/de/3e3adeff192f019738419858f4f998c2.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 2,
      url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 3,
      url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 4,
      url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 5,
      url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 6,
      url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 7,
      url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 8,
      url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 9,
      url: 'https://pbs.twimg.com/profile_images/634919225480626176/vftXgTc9.jpg',
      like: 1,
      date: '1.06.17',
    },
    {
      id: 10,
      url: 'http://leanature.com/wp-content/uploads/2015/09/Slide_g%C3%A9n%C3%A9rique_Groupe.jpg',
      like: 1,
      date: '1.06.17',
    },
  ];

export default handleActions<IPhoto[]>({
  LOAD_INIT_DATA:
    (state: IPhoto[], action: Action<void>): IPhoto[] => state,
}, initialState);
