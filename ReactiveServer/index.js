var http = require('http');

const { Subject, rxjs, of } = require('rxjs');
const { pipe, map } = require('rxjs/operators');

//Works
// of(1, 2, 3)
//     .pipe(
//         map(a => a)
//     )
//     .subscribe(a => {
//         console.log(a);
//     });

var sub = new Subject();

http.createServer(function(req, res){
    sub.next({
        reqURL : req.url
    });
}).listen(9001);

console.log("Listening on port 1001");


sub.subscribe(function(para){
    console.log("Hit 1", para);
});

sub.subscribe(function(para){
    console.log("Hit 2", para);
});

