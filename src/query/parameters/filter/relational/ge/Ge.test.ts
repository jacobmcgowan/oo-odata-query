import { Ge } from './Ge';

test('Invalid operands', () => {
  expect(() => {
    const ge = new Ge('', '');
  }).toThrow();

  expect(() => {
    const ge = new Ge(' ', '');
  }).toThrow();

  expect(() => {
    const ge = new Ge('', ' ');
  }).toThrow();

  expect(() => {
    const ge = new Ge('a', '');
  }).toThrow();

  expect(() => {
    const ge = new Ge('', 'a');
  }).toThrow();

  expect(() => {
    const ge = new Ge('a', ' ');
  }).toThrow();

  expect(() => {
    const ge = new Ge('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(
    new Ge('a', 'b').toString()
  ).toBe('a ge b');
});

test('Valid operands with prefix', () => {
  expect(
    new Ge('a', 'b').toString('i')
  ).toBe('i/a ge b');
});
