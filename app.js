
//~ Exercise 1:
//  Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console. Call the function with different names.

function greet(name) {
    console.log("hello " +name+ " how are u");
    
}
greet("bunny")

//~ Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.
function sumNumbers(numbers) {
    return numbers.reduce((e, c) => e + c, 0);
  }
  console.log(sumNumbers([1, 2, 3, 4, 5]));     
