import Sound from 'react-native-sound';

const setSound = (sound) => {
  return {
    type: 'SET_SOUND',
    data: sound
  };
};

const fetchStart = () => {
  return {
    type: 'FETCH_START'
  };
};

const fetchError = () => {
  return {
    type: 'FETCH_ERROR'
  };
};

export const playPause = (status) => {
  return {
    type: 'PLAY_PAUSE',
    data: status
  };
};

export const fetchSound = (day) => {
  return (dispatch) => {
    const url = `http://scarlet.virtualcms.it/upload/uploadedContent/repliche/zoo/${day}_ZOO.mp3`;
    dispatch(fetchStart());
    
    const sound = new Sound(url, '', (err) => {
      if(err) return dispatch(fetchError());
      dispatch(setSound(sound));
    });
  };
};
