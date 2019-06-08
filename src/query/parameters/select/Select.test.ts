import { Select } from './Select';

test('Empty Select', () => {
  expect(new Select([]).toString()).toBe('');
});

test('Select one field', () => {
  expect(new Select(['id']).toString()).toBe('$select=id');
});

test('Select multiple fields', () => {
  expect(new Select(['id', 'name']).toString()).toBe('$select=id,name');
});
