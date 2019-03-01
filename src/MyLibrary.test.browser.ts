import {Environment, getEnvironment} from './MyLibrary';

describe('getEnvironment', () => {
  it('returns a name for the current runtime', () => {
    expect(getEnvironment()).toBe(Environment.BROWSER);
  });
});
