// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y) {
  if (x > y) {
    return x;
}
  else {
    return y;
  }
}
console.log(max(10,25));


// function max(x, y) {
//   return Math.max(x, y);
// }
//
// console.log(Math.max);



// if (max(x > y) === true) || (max(y > x) === true) {
//   console.log(x);
// }
//
// else {
//   console.log("false");
// }




// max (10, 12);
// console.log("Greatest number is ");

// function greatest(num1, num2){
//     return Math.max(num1, num2);// Your answer here
// }
//
// if greatest(Math.max(num1, num2) == true {
//   console.log(Math.max);
// }

// if max(num1)===true{
//   console.log(num1);
// }

// else if (max(num1>num2) === false){
//     console.log("Number 1 is not greater than number 2");
//   }

  // let num1 = 15;
  // let num2 = 0;

//
//   console.log("The greatest number is" + num1);
// }
//
// else if (max(num1 > num2) === false){
//   console.log("The greatest number is" + "number2" num2);
// }

// else if (max(num1 < num2) === false){
//   console.log (num1);
// }


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
    if (x > y && x > z){
      return x;
    }

    else if (y > x && y > z){
      return y;
    }

    else if (z > x && z > y){
      return z;
    }
};

console.log(maxOfThree(10, 25, 20));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    return true;
  }

  else{
    return false;
  }
};

console.log(isVowel("o"));
console.log(isVowel("j"));

// if (isVowel(a) === true) {
//   console.log("char is a vowel")
// }
//
// else if (isVowel(x) === false){
//   console.log("char is not a vowel");
// }
//
//  a, e, i, o, u;
// notVowel = x, y, z;


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x,y){
  return x + y;
}

console.log(sum(10,2));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x,y,z){
  return ((x + y + z)/3);
}

console.log(avg(5,5,5));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength (str){
  return str.length;
}

console.log(getLength("Output should be a number for the length of my string"));



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x,y){
  if (y>x){
    return true}

  else
    return false;
  }
console.log(greaterThan(10,5));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return ("Hello " + name + "!")
}

console.log(greet("jackie"));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.



function madlib(name,love,you,javascript){
  return ("Hello" + name + "I" + love + you + javascript)
}

console.log(madlib("quick", "fox", "fence"));
