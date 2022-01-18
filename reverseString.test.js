const reverseString  = require ('./reverseString.js');

it('Reverse String', () => {
  expect(reverseString('hello')).toBe('olleh');
});