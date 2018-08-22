import { MyPipe } from './my.pipe';

describe('MyPipe', () => {
  let pipe: MyPipe;
  
  beforeEach(() => {
    pipe = new MyPipe();
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('','http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });
});
