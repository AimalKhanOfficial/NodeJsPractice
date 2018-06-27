
function EventsEmitterClass(){
    this.eventsObj = {};
}

EventsEmitterClass.prototype.on = function(eventName, associatedFunction){
    this.eventsObj[eventName] = associatedFunction;
}

EventsEmitterClass.prototype.emit = function(eventName){
    this.eventsObj[eventName]();
}
    
module.exports = EventsEmitterClass;