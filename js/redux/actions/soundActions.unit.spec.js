import { 
  playPause,
  fetchStart
} from './soundActions';

describe('sound action creators', () => {

  it('should create a playPause action', () => {
    const playPauseAction = {
      type: 'PLAY_PAUSE',
      data: false
    };

    expect(playPause(false)).toEqual(playPauseAction);
  });

});
