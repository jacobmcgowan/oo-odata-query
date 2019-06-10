import { Gt } from './Gt';

test('Invalid operands', () => {
  expect(() => {
    const gt = new Gt('', '');
  }).toThrow();

  expect(() => {
    const gt = new Gt(' ', '');
  }).toThrow();

  expect(() => {
    const gt = new Gt('', ' ');
  }).toThrow();

  expect(() => {
    const gt = new Gt('a', '');
  }).toThrow();

  expect(() => {
    const gt = new Gt('', 'a');
  }).toThrow();

  expect(() => {
    const gt = new Gt('a', ' ');
  }).toThrow();

  expect(() => {
    const gt = new Gt('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(new Gt('a', 'b').toString()).toBe('a gt b');
});

test('Valid operands with prefix', () => {
  expect(new Gt('a', 'b').toString('i')).toBe('i/a gt b');
});
