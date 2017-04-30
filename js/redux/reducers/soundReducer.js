const initialState = {
  fetching: false,
  error: false,
  sound: undefined,
  playing: false
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOUND':
      state = { 
        ...state, 
        fetching: false, 
        error: false,
        sound: action.data };
      break;
    case 'FETCH_START':
      state = {
        ...state,
        fetching: true,
        error: false,
        playing: false };
      break;
    case 'FETCH_ERROR':
      state = { 
        ...state,
        fetching: false,
        error: true,
        sound: undefined };
      break;
    case 'PLAY_PAUSE':
      state = {
        ...state,
        playing: action.data };
      break;
  }

  return state;
};

export default soundReducer;
