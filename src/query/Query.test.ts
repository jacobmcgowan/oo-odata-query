import { Expand, Expansion, Order, OrderBy, Query, Select } from './';

test('Empty Query', () => {
  expect(new Query().toString()).toBe('');
});

test('Query Select', () => {
  expect(new Query(new Select(['id'])).toString()).toBe('$select=id');
});

test('Query Expand', () => {
  expect(new Query(undefined, new Expand([new Expansion('address')])).toString()).toBe('$expand=address');
});

test('Query OrderBy', () => {
  expect(new Query(undefined, undefined, new OrderBy([new Order('name')])).toString()).toBe('$orderby=name');
});

test('Query multiple', () => {
  expect(new Query(new Select(['id', 'name']), undefined, new OrderBy([new Order('name')])).toString()).toBe(
    '$select=id,name&$orderby=name',
  );
});
