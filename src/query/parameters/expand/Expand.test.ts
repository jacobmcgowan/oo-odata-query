import {
  Expand,
  Expansion,
  Query,
  Select
} from '../../../';

test('Empty Expand', () => {
  expect(new Expand([]).toString()).toBe('');
});

test('Expand one child', () => {
  expect(
    new Expand([
      new Expansion('address')
    ]).toString()
  ).toBe('address');
});

test('Expand one child with a parameter', () => {
  expect(
    new Expand([
      new Expansion(
        'contacts',
        new Query(
          undefined,
          new Expand([
            new Expansion('address')
          ])
        )
      )
    ]).toString()
  ).toBe('contacts($expand=address)');
});

test('Expand multiple children', () => {
  expect(
    new Expand([
      new Expansion('contacts'),
      new Expansion('address')
    ]).toString()
  ).toBe('contacts,address');
});

test('Expand multiple children with a parameter', () => {
  expect(
    new Expand([
      new Expansion(
        'contacts',
        new Query(
          undefined,
          new Expand([
            new Expansion('manager')
          ])
        )
      ),
      new Expansion(
        'address',
        new Query(
          new Select([
            'city',
            'state',
            'country'
          ])
        )
      )
    ]).toString()
  ).toBe('contacts($expand=manager),address($select=city,state,country)');
});
