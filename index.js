// Success Rate 

var successRate = Math.random() *100;
var successRate = Math.floor(successRate);
console.log("Your success Rate is "+ successRate + "%");

// Incorporating Conditional Statements to Success Rate

var successRate = Math.random() *100;

var successRate = Math.floor(successRate);

console.log("Your success Rate is "+ successRate + "%");

if(successRate > 50)
{
    console.log("You Will Crack the Challange");
}
else
{
    console.log("Try Harder You can do it");
}

//FizzBuzz Problem

var number = prompt("Enter the Number: ");

if(number % 3 === 0 & number % 5 === 0)
{
    console.log("FizzBuzz");
}
else if(number % 3 === 0)
{
    console.log("Fizz");
}
else(number % 5 === 0)
{
    console.log("Buzz");
}

function* fibonacciGenerator(num) {
    let num1 = 0;
    let num2 = 1;
    yield num1;
    yield num2;
    for (let i = 3; i <= num; i++) {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        yield num2;
    }
}

function fibonacci(num) {
    let result;
    const iterator = fibonacciGenerator(num);
    for (let i = 0; i < num; i++) {
        result = iterator.next().value;
    }
    return result;
}
