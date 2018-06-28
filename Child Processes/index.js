var http = require('http');
const { fork } = require('child_process');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "application/json"});
    
    const childProcess = fork('longOperation.js');
    childProcess.send('start');
    childProcess.on('message', (sum) => {
        res.end(`sum: ${sum}`);
    });

}).listen(9001, () => {
    console.log("Started Listening on port 1001");
});