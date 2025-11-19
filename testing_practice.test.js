//const { capitalize, reverseString, calculator, caesarChipher, analyzeArray } = require("./testing_practice");

import {capitalize, reverseString, calculator, caesarChipher, analyzeArray} from './testing_practice'

test('Capitalize first letter', ()=>{
  expect(capitalize("hola")).toBe("Hola")
});

test('Reverse hola',()=>{
  expect(reverseString("hola")).toBe("aloh")
});

test('Reverse hola',()=>{
  expect(reverseString("hola")).not.toBe("hola")
});

test('Add 5 and 4 equal 9',()=>{
  expect(calculator.add(5,4)).toBe(9)
});

test('Subtract 5 and 4 equal 1',()=>{
  expect(calculator.subtract(5,4)).toBe(1)
});

test('Divide 10 and 3 equal 3.33',()=>{
  expect(calculator.divide(10,3)).toBeCloseTo(3.33)
});

test('Multiply 5 and 4 equal 20',()=>{
  expect(calculator.multiply(5,4)).toBe(20)
});

test('Cipher is abc',()=>{
  expect(caesarChipher('xyz', 3)).toBe('abc');
});

test('Original lettercase',()=>{
  expect(caesarChipher('HeLLo', 3)).toBe('KhOOr');
});

test('Original lettercase',()=>{
  expect(caesarChipher('HeLLo', 3)).toBe('KhOOr');
});

test('Non-alphabetical remain unchanged',()=>{
  expect(caesarChipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Convert array to Object',()=>{
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
})
});