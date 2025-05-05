// src/calculator.js

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
  
  function modulus(a, b) {
    return a % b;
  }
  
  function power(a, b) {
    return Math.pow(a, b);
  }
  
  function sqrt(a) {
    if (a < 0) throw new Error("Cannot take square root of a negative number");

    return Math.sqrt(a);
  }
  
  module.exports = { add, subtract, multiply, divide, modulus, power, sqrt };
  