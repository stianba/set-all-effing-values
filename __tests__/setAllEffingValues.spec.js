import setAllEffingValues from '../src/setAllEffingValues';

describe('setAllEffingValues', () => {
  it('should change the value of all entries', () => {
    const mockObject = { foo: 'bar', bar: 13 };
    const expectedObject = { foo: 12, bar: 12 };
    expect(setAllEffingValues(mockObject, 12)).toMatchObject(expectedObject);
  });

  it('should not mutate original object', () => {
    const mockObject = { foo: 'bar', bar: 13 };
    setAllEffingValues(mockObject, 'foo');
    expect(mockObject.foo).toBe('bar');
  });

  it('should throw if originalObject is not a plain object', () => {
    expect(() => setAllEffingValues(13, null)).toThrow();
  });
});
