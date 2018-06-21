console.log("hey Outside");

//As per my initial understandings, i've mentioned the use of each in comments!

//Normal person at the queue!
setTimeout(function(){
    console.log("hey interval");
}, 5000);

//Set immediate is when we have some block of code waiting at the end of event queue and we need
//to fire it right away. BUT, this will not fire BEFORE process.nextTick
setImmediate(function(){
    console.log("hey Immediate");
});

//have more preference than the setImmediate! 
process.nextTick(function(){
    console.log("hey Inside");
});

