import { Order } from './';

test('Empty Order', () => {
  expect(
    new Order('').toString()
  ).toBe('');

  expect(
    new Order('', false).toString()
  ).toBe('');
});

test('Ascending Order', () => {
  expect(
    new Order('name').toString()
  ).toBe('name');
});

test('Descending Order', () => {
  expect(
    new Order('name', false).toString()
  ).toBe('name desc');
});
