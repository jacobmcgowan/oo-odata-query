import { Lt } from './Lt';

test('Invalid operands', () => {
  expect(() => {
    const lt = new Lt('', '');
  }).toThrow();

  expect(() => {
    const lt = new Lt(' ', '');
  }).toThrow();

  expect(() => {
    const lt = new Lt('', ' ');
  }).toThrow();

  expect(() => {
    const lt = new Lt('a', '');
  }).toThrow();

  expect(() => {
    const lt = new Lt('', 'a');
  }).toThrow();

  expect(() => {
    const lt = new Lt('a', ' ');
  }).toThrow();

  expect(() => {
    const lt = new Lt('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(
    new Lt('a', 'b').toString()
  ).toBe('a lt b');
});

test('Valid operands with prefix', () => {
  expect(
    new Lt('a', 'b').toString('i')
  ).toBe('i/a lt b');
});
