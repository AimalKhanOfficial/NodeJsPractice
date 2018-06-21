var open = false;
setTimeout(function(){
    console.log("TRUE");
    open = true;
}, 1000);

while(!open){
    console.log("Well...");
}

console.log("Opened!");