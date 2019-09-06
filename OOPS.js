/*
function vehicle(make,model,color){
    this.make = make;
    this.model = model;
    this.color = color;
    this.getName = function(){
        return this.make+ " " + this.model;
    }
}

var corolla = new vehicle("Toyota", "s", "Black");
vehicle.prototype.year = "2014"

console.log(vehicle.prototype.year);

*/
class vehicle {
    constructor(make,model,color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    get getName(){
        return this.make +" "+ this.model;
    }
    getModel(s){
        return s.model;
    }
    static getColor(v){
        return v.color;
    }

}
var corolla = new vehicle("Toyota", "S", "Black");

/*
vehicle.prototype.getColor= function(){
    return this.color;
}
console.log(vehicle.prototype.getName(corolla));

console.log(vehicle.getColor(corolla));*/
console.log(vehicle.getColor(corolla));

