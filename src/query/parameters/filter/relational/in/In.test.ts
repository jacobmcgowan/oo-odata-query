import { In } from './In';

test('Invalid operands', () => {
  expect(() => {
    const filter = new In('', '');
  }).toThrow();

  expect(() => {
    const filter = new In(' ', '');
  }).toThrow();

  expect(() => {
    const filter = new In('', ' ');
  }).toThrow();

  expect(() => {
    const filter = new In('a', '');
  }).toThrow();

  expect(() => {
    const filter = new In('', 'a');
  }).toThrow();

  expect(() => {
    const filter = new In('a', ' ');
  }).toThrow();

  expect(() => {
    const filter = new In('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(new In('a', 'b').toString()).toBe('a in b');
});

test('Valid operands with prefix', () => {
  expect(new In('a', 'b').toString('i')).toBe('i/a in b');
});
