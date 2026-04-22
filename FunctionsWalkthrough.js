//1

function calculateTip(billAmount, tipPercent) {
    let tip = billAmount * (tipPercent / 100);
    return tip;
}
 
let myTip = calculateTip(50, 20);
console.log(myTip);
//A
//What is the name of this function?
//myTip

//List the parameters this function uses:
//billAmount, tipPercent

//What does the function return?
//Tip value

//In the last two lines, what value will be stored in myTip?
//The value of calculate tip

// If you called calculateTip(80, 15), what value would be returned?
// 12


//B
// 1.  A function can only have one parameter.
// TRUE  /  FALSE <    Correction (if false): 
// Able to have multiple as long as you use commas

// 2.  You can call a function as many times as you like.
// TRUE < /  FALSE      Correction (if false): 

// 3.  The return keyword stops the function and sends a value back.
// TRUE < /  FALSE      Correction (if false): 

// 4.  You must always use a return statement in a function.
// TRUE < /  FALSE      Correction (if false): 

// 5.  Parameters are the actual values you pass in when calling a function.
// TRUE < /  FALSE      Correction (if false): 



//2

function greet( name ) {
    return "Hello " + name + "!";
}
 
console.log(greet("Alex"));   
console.log(greet("Jordan"));

//2.1
// What would greet("Sam") return?
// the name sam

//2.2
function addNumbers(a, b) {
     return a + b;
}
console.log(addNumbers(3, 7));   // Expected: 10
console.log(addNumbers(15, 25)); // Expected: 40

// What keyword is missing on the blank line, and why is it needed?
// return, it assigns the value to be correct

//2.3

function isPositive(number) {
    if (number <= 0) {
        return "true";
    } else {
        return "false";
    }
}
 
// Test it:
console.log(isPositive(5));   // Expected: true
console.log(isPositive(-3));  // Expected: false
console.log(isPositive(0));   // Expected: false

//What comparison operator did you use, and why?
// <=, compares and checks if more/less/equal to the value

//2.4

function findLarger(x, y) {
    if (findLarger) {
        return x;
    } else {
        return y;
    }
}
 
// Test it:
console.log(findLarger(10, 20)); // Expected: 20
console.log(findLarger(15, 8));  // Expected: 15
console.log(findLarger(7,7 ));
//What would findLarger(7, 7) return? Why?
//7, same value

//3

//3.1
// Write a function called square that takes one number as a parameter and returns that number multiplied by itself.
// Example: square(4) should return 16
// Example: square(9) should return 81


// What would square(0) return, and why?
//0, no multiplier + 0 x 0 always = 0
function square(a, b){
if (square){
    return a;
} else {
    return b;
}
 }
console.log(square(4*4));
console.log(square(9*9));
console.log(square(0));

//3.2
// Write a function called minutesToSeconds that takes a number of minutes and returns the equivalent number of seconds.
// Example: minutesToSeconds(2) should return 120
// Example: minutesToSeconds(0.5) should return 30
function minutesToSeconds(minutes, seconds){
    return minutes * 60;
}
console.log(minutesToSeconds(2));
console.log(minutesToSeconds(0.5));

//3.3
//Task: Write a function called buildFullName that takes two parameters — firstName and lastName — and returns them as a single string with a space in between.
function buildFullName (firstName, lastName){
    return "Dr. " + firstName + " " + lastName;
}
let first = "Ada";
let last = "Lovelace";
console.log(buildFullName(first, last));
//How would you modify the function to also add a title (like "Dr.") at the front? Describe your approach.
// since you need to add Dr. at the beginning that means you'd need to put it at the beginning of the code, then you also need to assign a value to the parameters

//3.4
//Write a function called canVote that takes a person's age as a parameter and returns the string "Yes, you can vote!" if they are 18 or older, or "Not yet eligible." if they are younger.
//Example: canVote(20) should return "Yes, you can vote!"
//Example: canVote(15) should return "Not yet eligible."

//What would canVote(18) return? Why is it important to test this edge case?

function canVote(age){
if (age >= 18){
return ("Yes, you can vote!");
} else{
return ("Not yet eligible");
}
}
console.log(canVote(15));
console.log(canVote(20));
//4

//4.6 - In one sentence, explain what a function is:
//A function is a variable that is used to assign a value using multiple parameters

//4.7 -Give one real-world reason why functions are useful in programming:
//Allow for multiple possible combinations that automatically track the values of those parameters


//4.8 - What is the difference between a parameter and an argument? Give an example.
//A parameter is the variable, an argument is what the parameter is equal to

//4.9 - What happens if you call a function but forget the return keyword? What would you get back?
//Returns a value of being undefined while still executing the command
