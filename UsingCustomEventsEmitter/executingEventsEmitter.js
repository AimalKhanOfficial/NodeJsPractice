var eventsEmit = require('./EventsEmitter');

var event = new eventsEmit();
event.on('helloworld1', function(){
    console.log('helloworld1');
});

event.on('helloworld2', function(){
    console.log('asdasjdnaskjdnkjasndkjasndkjanskjdn');
});

event.emit('helloworld1');
event.emit('helloworld2');