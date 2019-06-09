import { Order, OrderBy } from './';

test('Empty OrderBy', () => {
  expect(
    new OrderBy([]).toString()
  ).toBe('');
});

test('OrderBy one ascending', () => {
  expect(
    new OrderBy([new Order('name')]).toString()
  ).toBe('name');
});

test('OrderBy one descending', () => {
  expect(
    new OrderBy([new Order('name', false)]).toString()
  ).toBe('name desc');
});

test('OrderBy multiple', () => {
  expect(
    new OrderBy([new Order('name', false), new Order('age')]).toString()
  ).toBe('name desc,age');
});
