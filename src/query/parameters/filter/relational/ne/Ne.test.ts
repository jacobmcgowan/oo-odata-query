import { Ne } from './Ne';

test('Invalid operands', () => {
  expect(() => {
    const ne = new Ne('', '');
  }).toThrow();

  expect(() => {
    const ne = new Ne(' ', '');
  }).toThrow();

  expect(() => {
    const ne = new Ne('', ' ');
  }).toThrow();

  expect(() => {
    const ne = new Ne('a', '');
  }).toThrow();

  expect(() => {
    const ne = new Ne('', 'a');
  }).toThrow();

  expect(() => {
    const ne = new Ne('a', ' ');
  }).toThrow();

  expect(() => {
    const ne = new Ne('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(
    new Ne('a', 'b').toString()
  ).toBe('a ne b');
});

test('Valid operands with prefix', () => {
  expect(
    new Ne('a', 'b').toString('i')
  ).toBe('i/a ne b');
});
