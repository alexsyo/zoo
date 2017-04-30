import soundReducer from './soundReducer';
import { fetchStart } from '../actions/soundActions';

describe('soundReducer', () => {

  it('should start to fetch data', () => {
    const previousState = {
      fetching: false, 
      error: true, 
      playing: true };
    const state = soundReducer(previousState, fetchStart());
    const nextState =  {
      fetching: true, 
      error: false, 
      playing: false };

    expect(state).toEqual(nextState);
  });

});
