var counter = 0; //doesn't work if declaration removed, unlike JS
var keyToInterval = setInterval(function(){
    counter++;
    console.log(counter+": hey bro");
    if(counter == 10){
        clearInterval(keyToInterval);
    }
}, 1000);



