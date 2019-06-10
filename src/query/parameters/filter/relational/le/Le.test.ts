import { Le } from './Le';

test('Invalid operands', () => {
  expect(() => {
    const le = new Le('', '');
  }).toThrow();

  expect(() => {
    const le = new Le(' ', '');
  }).toThrow();

  expect(() => {
    const le = new Le('', ' ');
  }).toThrow();

  expect(() => {
    const le = new Le('a', '');
  }).toThrow();

  expect(() => {
    const le = new Le('', 'a');
  }).toThrow();

  expect(() => {
    const le = new Le('a', ' ');
  }).toThrow();

  expect(() => {
    const le = new Le('  ', 'a');
  }).toThrow();
});

test('Valid operands', () => {
  expect(new Le('a', 'b').toString()).toBe('a le b');
});

test('Valid operands with prefix', () => {
  expect(new Le('a', 'b').toString('i')).toBe('i/a le b');
});
