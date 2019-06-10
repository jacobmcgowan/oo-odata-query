import { Eq, Expand, Expansion, Order, OrderBy, Query, Select } from './';

test('Empty Query', () => {
  expect(new Query({}).toString()).toBe('');
});

test('Query Select', () => {
  expect(
    new Query({
      select: new Select(['id']),
    }).toString(),
  ).toBe('$select=id');
});

test('Query Expand', () => {
  expect(
    new Query({
      expand: new Expand([new Expansion('address')]),
    }).toString(),
  ).toBe('$expand=address');
});

test('Query OrderBy', () => {
  expect(
    new Query({
      orderBy: new OrderBy([new Order('name')]),
    }).toString(),
  ).toBe('$orderby=name');
});

test('Query Filter', () => {
  expect(
    new Query({
      filter: new Eq('name', '\'John Smith\'')
    }).toString()
  ).toBe('$filter=name eq \'John Smith\'');
});

test('Query multiple', () => {
  expect(
    new Query({
      orderBy: new OrderBy([new Order('name')]),
      select: new Select(['id', 'name']),
    }).toString(),
  ).toBe('$select=id,name&$orderby=name');
});
