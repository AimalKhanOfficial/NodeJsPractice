//Observation: As this is set in timer's queue, so this should run before the set immediate
//Result: WRONG! Set Immediate runs after I/O immediately byppasssing timers queue
setTimeout(function () {
    console.log("Hi, I'm placed in Timers Queue!");
}, 100);

setImmediate(function(){
    console.log("Hey, set Immediate here, placed in Check Queue!");
});

process.nextTick(function(){
    console.log("Sorry guys, VIP coming thru!");
});

console.log("Meeeeeeeeeeee!");

//Result//
// Meeeeeeeeeeee!
// Sorry guys, VIP coming thru!
// Hey, set Immediate here, placed in Check Queue!
// Hi, I'm placed in Timers Queue!
