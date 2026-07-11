// Write a function greet that takes a callback and calls it after printing "Hello".

function greet (callback=()=>{}){
  console.log("Hello")
  callback();
}

function second(){
    setTimeout(() => {
        console.log("Hey listen")
    }, 2000);
}

greet(second);