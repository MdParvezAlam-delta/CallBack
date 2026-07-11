// Create a function calculate that accepts two numbers and a callback, then sends the sum to that callback.

function calculate(num1, num2, callback) {
    console.log(`The numbers are: ${num1} and ${num2}`);
    callback(num1, num2);  // pass the numbers to the callback
}

function sum(a, b) {
setTimeout(()=>{
    let result = a + b;
    console.log("Sum is:", result);
},2000)
}
    

calculate(5, 6, sum);
