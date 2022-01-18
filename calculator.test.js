const { it, describe } = require('eslint/lib/rule-tester/rule-tester');
const Calculator = require('./calculator.js');
const result = new Calculator();

describe('Add numbers', () => {
  test('Add an Odd and an Even number', () => {
    expect(result.add(4,5)).toBe(9);
  });
  test('Add two Odd or two Even numbers', () => {
    expect(result.add(3,5)).toBe(8);
    expect(result.add(2,4)).toBe(6);
  });
  test('Add two -ve numbers', () => {
    expect(result.add(-3,-5)).toBe(-8);
  });
});

describe('Subtract numbers', () => {
  test('Subtract two +ve numbers', () => {
    expect(result.subtract(7,5)).toBe(2);
  });
  test('Subtract one +ve number and one +ve', () => {
    expect(result.subtract(3,-5)).toBe(8);
  });
  test('Subtract two -ve numbers', () => {
    expect(result.subtract(-3,-5)).toBe(2);
  });
});

describe('Multiply numbers', () => {
  test('Multiply a -ve number by a +ve number', () => {
    expect(result.multiply(-4,5)).toBe(-20);
  });
  test('Multiply a number by one', () => {
    expect(result.multiply(8,1)).toBe(8);
  });
  test('Multiply two -ve numbers', () => {
    expect(result.multiply(-3,-5)).toBe(15);
  });
});

describe('Divide numbers', () => {
  test('Divide a -ve number by a +ve number', () => {
    expect(result.divide(-40,5)).toBe(-8);
  });
  test('Divide a number by one', () => {
    expect(result.divide(5,1)).toBe(5);
  });
  test('Divide two +ve numbers', () => {
    expect(result.divide(30,5)).toBe(6);
  });
  test('Divide a number by 0', () => {
    expect(() => result.divide(34,0)).toThrow("It can't be divided by zero");
  });
});
