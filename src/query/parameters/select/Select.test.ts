import { Select } from './Select';

test('Empty Select', () => {
  expect(new Select([]).toString()).toBe('');
});

test('Select one field', () => {
  expect(new Select(['id']).toString()).toBe('id');
});

test('Select multiple fields', () => {
  expect(new Select(['id', 'name']).toString()).toBe('id,name');
});
