// Create a loginUser function that checks credentials and then calls success or error callback.

function loginUser(a,b,callback){
console.log("Check the User has been logged in or not ?")
callback(a,b)
}

function check(a,b){
    setTimeout(()=>{
        if(a==true){
        console.log("it has been succed")
        }
        else{
        console.log("Recived Error")
        }
    },2000)
}

loginUser(true,null,check)