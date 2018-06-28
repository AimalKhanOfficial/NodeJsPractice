const longOperation = function(){
    let sum = 0;
    for(let i = 0; i < 1e9; i++){
        sum += i;
    }
    return sum;
}

process.on('message', function(msg){
    const sum = longOperation();
    process.send(sum);
});