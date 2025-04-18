
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


  //~ Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

function arraySum(numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    console.log(sum);
  }
  
  arraySum([1, 2, 3, 4, 5]);       

  
//~ Exercise 9: Factorial Without Recursion
// Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. Calculate the factorial without using recursion. Call the function with different numbers.

function factorial(a) {
    if (a < 0) {
        console.log("not defined");
        return
    }
    let result = 1
    for (let i = 2 ; i <= a ; i++){
        result *= i 
    }
    console.log(result);
    
}
factorial(0)
factorial(5)
factorial(9)

//~ Exercise 10: Vowel Checker
// Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. Call the function with different characters.
function isVowel(n) {

    n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u' ?  console.log(n +" vowel"):
    console.log(n + " not a vowel");
    }
    isVowel('A'); 
    isVowel('b'); 
    

//~ Exercise 11: Largest in Array
// Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. Use the Math.max function. Call the function with different arrays.
function largestInArray(numbers) {
    let x = Math.max(...numbers)
    console.log(x);
    
}
largestInArray([5, 12, 8, 21, 7])

function isPrime(number) {
    if (number <= 1) {

        console.log(number + " is not a prime");
        return
    }
    let i = true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            i = false
        }
    }
   
    i ?  console.log(number + " is a prime ") : console.log(number + " is not a prime ")
}
isPrime(1);
isPrime(2);

//~ Exercise 13: Sum of Digits
// Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.

function sumOfDigits(number){
    if (number < 0 || !Number.isInteger(number)) {
        console.log("Please enter a positive integer.");
        return;
      } 
    let sum = 0
    let num = number.toString(); 
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
      }
      console.log(sum);
}

sumOfDigits(123)

//~ 14 Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.
function arrayIntersection(first , second) {
    let intersection = first.filter(element => second.includes(element));
    return intersection;
  }
  
  console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
  console.log(arrayIntersection([10, 20], [30, 40]));


  //~ 15 fibonacci sequence

function fibonacci(n) {
    let b = [0, 1]; 

    for (let i = 2; i <= n; i++) { 
      b.push(b[i - 1] + b[i - 2]);  
    }
  console.log(b);
    return b;  
  }

  console.table(fibonacci(8));