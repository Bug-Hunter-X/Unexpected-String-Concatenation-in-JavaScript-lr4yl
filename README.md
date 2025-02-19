# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet easily overlooked error in JavaScript: implicit type coercion leading to unexpected string concatenation.

## The Bug

The `bug.js` file contains a function that intends to add two numbers. However, due to JavaScript's loose typing, passing a number and a string will result in string concatenation rather than numerical addition.

## The Solution

The `bugSolution.js` file offers two solutions:

1. Explicit type conversion using `parseInt()` or `Number()` to convert the string to a number before the addition.
2. Input validation to ensure both inputs are numbers.