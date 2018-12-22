'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

let testNumOne= faker.random.number();
let testNumTwo = faker.random.number();

// Test for the addition portion

describe('Arithmetic Module - Addition', () => {
  
  it('can add two numbers', () => {
    let expected = testNumOne + testNumTwo;
    let sum = arithmetic.add(testNumOne, testNumTwo);
    expect(sum).toEqual(expected);
  });
});

// TEST FOR THE SUBTRACTION PORTION

describe('Arithmetic Module - Subtraction', () => {
  
  it('can subtract two numbers', () => {
    let expected = testNumOne - testNumTwo;
    let sum = arithmetic.subtract(testNumOne, testNumTwo);
    expect(sum).toEqual(expected);
  });
});

// TEST FOR THE MULTIPLICATION PORTION

describe('Arithmetic Module - Multiplication', () => {
  
  it('can multiply two numbers', () => {
    let expected = testNumOne * testNumTwo;
    let sum = arithmetic.multiply(testNumOne, testNumTwo);
    expect(sum).toEqual(expected);
  });
});

// TEST FOR THE DIVISION PORTION 

describe('Arithmetic Module - Division', () => {
  
  it('can multiply two numbers', () => {
    let expected = testNumOne / testNumTwo;
    let sum = arithmetic.divide(testNumOne, testNumTwo);
    expect(sum).toEqual(expected);
  });
});


