import { Query, Select } from './';

test('Empty Query', () => {
  expect(new Query().toString()).toBe('');
});

test('Query Select', () => {
  expect(new Query(new Select(['id'])).toString()).toBe('$select=id');
});
