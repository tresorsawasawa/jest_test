const { describe } = require('eslint/lib/rule-tester/rule-tester');
const capitalize = require('./capitalize.js');

describe('Capitalize a string', () => {
  test('Capitalize a fully alphabet string', () => {
    expect(capitalize('tresor')).toBe('Tresor');
  });

  test('Capitalize an non aphabet char', () => {
    expect(() => capitalize('')).toThrow("It can't Capitalize an empty srting");
  });

  test('Capitalize an empty string', () => {
    expect(() => capitalize('6tresor4tt')).toThrow("First character is expected to be alphabet");
  });
});
