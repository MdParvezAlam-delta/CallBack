// Write a function processData that accepts a callback and passes "success" to it.

function processData(success){
    console.log("Check the data is there ?")
    
        success("succeed")
    
}

function success(data){
    setTimeout(()=>{
        console.log(`Yes data has been succeed . the data is : ${data}`)
    },2000)
}

processData(success)