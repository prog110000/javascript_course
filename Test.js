/*
console.log("Start Operation");

function sleep(milliseconds) {
    let startTime = new Date().getTime();
    console.log("operation is running");
    while(new Date().getTime() < startTime + milliseconds){
        console.log("in progress");
    }
    console.log("operation is done!");
}

sleep(1000);

console.log("do something else..");
*/
/*console.log("Start Operation");

function sleep(milliseconds) {
    console.log("operation is running");
    setTimeout(()=>{
        console.log("operation is done!");
    },milliseconds)
}

sleep(1000);

console.log("do something else..");*/

/*console.log("Task start");
function asyncTask(cb){
    console.log("Task running");
    setTimeout(cb, 0);
}
asyncTask(() => console.log(namee));
console.log("Task End");
const namee = "Dipesh";*/

function asyncTask(cb){
    setTimeout(()=>{
        cb(null, "This is data from server");
    }, 0);
}

asyncTask((err, data) => {
    if (err) {
        throw err;
    } else {
        console.log("data", data);
    }
})

