import { Has } from './Has';

test('Invalid operands', () => {
  expect(() => {
    const has = new Has('', '');
  }).toThrow();

  expect(() => {
    const has = new Has(' ', '');
  }).toThrow();

  expect(() => {
    const has = new Has('', ' ');
  }).toThrow();

  expect(() => {
    const has = new Has('a', '');
  }).toThrow();

  expect(() => {
    const has = new Has('', 'a');
  }).toThrow();

  expect(() => {
    const has = new Has('a', ' ');
  }).toThrow();

  expect(() => {
    const has = new Has('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(new Has('a', 'b').toString()).toBe('a has b');
});

test('Valid operands with prefix', () => {
  expect(new Has('a', 'b').toString('i')).toBe('i/a has b');
});
