var person = function(name){
    this.name = name;
    this.walk = function(){
        console.log(this.name, "is walking!");
    }
}

module.exports = person;