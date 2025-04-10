
//~ Exercise 1:
//  Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console. Call the function with different names.

function greet(name) {
    console.log("hello " + name + " how are u");

}
greet("bunny")

//~ Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.
function sumNumbers(numbers) {
    return numbers.reduce((e, c) => e + c, 0);
}
console.log(sumNumbers([1, 2, 3, 4, 5]));

//~ Exercise 4: Even or Odd
// Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. Use an if-else statement. Call the function with different numbers.
function isEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}
isEven(6);
isEven(9);

//~ Exercise 6: Palindrome Check
// Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements. Call the function with different strings.
function isPalindrome(string) {

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            console.log("not palindrome");
            return;


        }
    }
    console.log("palindrom");
}

isPalindrome("something")
isPalindrome("radar")



//~ Exercise 7: Maximum of Two Numbers
// Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. Use an if-else statement. Call the function with different numbers.

function maxOfTwo(a, b) {

    a > b ? console.log(a + " is greater") : b > a ? console.log(b + " is greater") : console.log("Both numbers are equal");

}

maxOfTwo(10, 20);
maxOfTwo(50, 30);
maxOfTwo(15, 15);


  // Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

function arraySum(numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    console.log(sum);
  }
  
  arraySum([1, 2, 3, 4, 5]);       

  




