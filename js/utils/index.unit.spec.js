import { getWeek } from './';
import sinon from 'sinon';

describe('utils', () => {

  beforeEach(() => {
    this.clock = sinon.useFakeTimers(new Date('2017-04-11'));
  });

  it('should return 5 day objects', () => {
    const week = getWeek();
    expect(week.length).toBe(5);
  });

  it('should format the date', () => {
    const week = getWeek();
    expect(week[4].episode).toBe('mar_04042017');
    expect(week[0].episode).toBe('lun_10042017');
  });

});
