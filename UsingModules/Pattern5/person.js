var person = function(){
    this.walk = function(name){
        this.name = name;
        console.log(this.name, "is walking!");
    }
}

module.exports = new person().walk;