function myFunction(a, b) {
  // Solution 1: Explicit type conversion
  a = parseInt(a);
  b = parseInt(b);
  return a + b; 
}

// or

function myFunction(a, b) {
  //Solution 2: input validation
  if (typeof a !== 'number' || typeof b !== 'number'){
    return "Invalid input. Please provide numbers."
  }
  return a + b; 
}

console.log(myFunction(5, "5")); // Output: 10