what is callback ?

-> CallBack is a function that passed into another function as an arguments so it can be runs later after 
the first task fininshes.


Why we need a CallBack?
--> We need call back to maintain the order of the code means one step happens after another esprecially 
when task takes time .

Syntax:

function doWork(callback) {
  const result = "done";
  callback(result);
}

function onDone(value) {
  console.log("Result:", value);
}

doWork(onDone);

explain: doWork(onDone) passes the function onDone into doWork as a callback.
 doWork runs first, then it calls onDone(result), so "Result: done" is printed.

 CallBack have two types of structure :--
 default and non default.

//  1.Default
function greet(callback = () => {}) {
  console.log("Hello");
  callback();
}
function second() {
  console.log("Hey listen");
}
greet();

output: Hello
        Hey listen

// 2.Without Default

function greet(callback) {
  console.log("Hello");
  callback();
}

function second() {
  console.log("Hey listen");
}

greet();

output:Hello
TypeError: callback is not a function


but output will be same when we will pass the functon such as 
greet(second).
the different is only shown between those we will not the pass the function which we will callback.


What is callback hell ???

Callback hell is when callbacks are nested inside each other too deeply, 
so the code becomes hard to read and hard to manage. It often looks like a pyramid of functions.

Why it occurs:--->

It usually happens in asynchronous JavaScript when one task depends on the result of another task, 
so you keep putting one callback inside the next.


Problems caused by Callback hell :--->

1.Code becomes messy and confusing.

2.Debugging becomes difficult.

3.Maintenance becomes harder.

4.The flow of logic is not easy to follow.


How to prevent it:---->

1.Use smaller named functions.

2.Avoid deep nesting.

3.Use Promises instead of many nested callbacks.

4.Use async/await for cleaner async code.