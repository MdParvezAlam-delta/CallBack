what is callback ?

-> CallBack is a function that passed into another function as an arguments so it can be runs later after 
the first task fininshes.CallBack.CallBack.


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