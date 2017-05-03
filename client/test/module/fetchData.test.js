import fetchData from '../../src/module/fetchData';

test('fetchData returns correct data', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('data 1');
  });
});
