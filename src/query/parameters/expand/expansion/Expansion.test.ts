import {
  Expand,
  Expansion,
  Query,
  Select
} from '../../../';

test('Empty Expansion', () => {
  expect(new Expansion('').toString()).toBe('');
});

test('Expansion only', () => {
  expect(new Expansion('address').toString()).toBe('address');
});

test('Expansion with empty parameter', () => {
  expect(
    new Expansion(
      'address',
      new Query(
        new Select([])
      )
    ).toString()
  ).toBe('address');
});

test('Expansion with one parameter', () => {
  expect(
    new Expansion(
      'address',
      new Query(
        new Select([
          'id',
          'name'
        ])
      )
    ).toString()
  ).toBe('address($select=id,name)');
});

test('Expansion with multiple parameters', () => {
  expect(
    new Expansion(
      'contacts',
      new Query(
        new Select([
          'id',
          'name'
        ]),
        new Expand([
          new Expansion('manager')
        ])
      )
    ).toString()
  ).toBe('contacts($select=id,name;$expand=manager)');
});
