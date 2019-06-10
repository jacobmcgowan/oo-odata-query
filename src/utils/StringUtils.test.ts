import { StringUtils } from './';

test('Empty string', () => {
  expect(StringUtils.isEmptyOrWhitespace('')).toBeTruthy();
});

test('Whitespace', () => {
  expect(StringUtils.isEmptyOrWhitespace(' ')).toBeTruthy();
  expect(StringUtils.isEmptyOrWhitespace('   ')).toBeTruthy();
});

test('Non-empty string', () => {
  expect(StringUtils.isEmptyOrWhitespace('test')).toBeFalsy();
});
