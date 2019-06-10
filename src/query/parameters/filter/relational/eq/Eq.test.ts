import { Eq } from './Eq';

test('Invalid operands', () => {
  expect(() => {
    const eq = new Eq('', '');
  }).toThrow();

  expect(() => {
    const eq = new Eq(' ', '');
  }).toThrow();

  expect(() => {
    const eq = new Eq('', ' ');
  }).toThrow();

  expect(() => {
    const eq = new Eq('a', '');
  }).toThrow();

  expect(() => {
    const eq = new Eq('', 'a');
  }).toThrow();

  expect(() => {
    const eq = new Eq('a', ' ');
  }).toThrow();

  expect(() => {
    const eq = new Eq('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(
    new Eq('a', 'b').toString()
  ).toBe('a eq b');
});

test('Valid operands with prefix', () => {
  expect(
    new Eq('a', 'b').toString('i')
  ).toBe('i/a eq b');
});
