// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacciSequence", () => {
  it("returns an array containing the Fibonacci sequence.", () => {
    const fibonacciLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibonacciLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  })
});


// b) Create the function that makes the test pass.
const fibonacciSequence = (numLength) => {
  const arr = [1, 1];
  for (let i = 2; i < numLength; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}


// Pseudo code:
/*
input: function expression that takes in an input of a single number and sets the arguments of that numbers to be the length of the array.
output: a new array with a mathematical number series that starts with a fixed set of numbers from 0 and 1. Known as the Fibonacci sequence,
these numbers are generated using the sum of the last two numbers.
process: Use an arrow function expression that holds a two starting number elements. Then, loop over the input length and push the new numbers into the array variable.
In additon to this, the push method argument will add and subtract both i iteartions from the for loop before being pushed to the array.
*/

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("sortKeyValues", () => {
  it("returns an array of the values sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(sortKeyValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(sortKeyValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  })
});


// b) Create the function that makes the test pass.
const sortKeyValues = (obj) => {
   return Object.values(obj).sort((firstValue, secondValue) => firstValue - secondValue);
}


// Pseudo code:
/*
input: object with week day key value pairs that hold numbers as values
output: All the numbers values must be organized in exact order from the lowest number to the highest number. These numbers will also be placed inside an array.
process: function expression that takes in an object and uses a built in static method to transform the object into an array. Next, the new array of numbered 
elements will be need to be placed in the correct number order which will be done using the built in number method, .sort(). To make sure that both objects 
numbers are sorted correctly, the sort method must take two paramters that connect to each objects value and subtract them.
*/

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("accumulateSum", () => {
  it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    
    const accountTransactions3 = []
    // Expected output: []
    expect(accumulateSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(accumulateSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(accumulateSum(accountTransactions3)).toEqual([]);
  })
});


// b) Create the function that makes the test pass.
const accumulateSum = (arr) => {
  return arr.map((sum => value => sum += value)(0));
}
 

// Pseudo code:
/*
input: array of postive and negative number elements
output: An array with each number accumulated by each other from one number to the next number. Each result of the accumulated number will be stored inside of a 
new array.
process: Arrow function expression that returns a high order map method to output the new array of the accumulated sum. The The inner function will take two values that 
takes a single argument value and updates the sum by adding the value to it. The sum is set to 0. For the first element in the input array, 
the inner function adds the first element's value to sum (0) and returns the new value of sum.
*/