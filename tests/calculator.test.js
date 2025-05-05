// tests/calculator.test.js

const { add, subtract, multiply, divide, modulus, power, sqrt } = require('../src/calculator');

describe('Calculator Operations', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 7 to equal 3', () => {
    expect(subtract(10, 7)).toBe(3);
  });

  test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('divides 20 / 4 to equal 5', () => {
    expect(divide(20, 4)).toBe(5);
  });

  test('throws error on divide by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('modulus 10 % 3 to equal 1', () => {
    expect(modulus(10, 3)).toBe(1);
  });

  test('power 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('square root of 16 to equal 4', () => {
    expect(sqrt(16)).toBe(4);
  });

//   test('throws error for sqrt of negative number', () => {
//     expect(() => sqrt(-9)).toThrow('Cannot take square root of a negative number');
//   });
});
