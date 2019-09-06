/*
Sets are very similar to an array except that there are no duplicates allowed in it and not in any particular order for elements getting stored
Part of the functions of set are implemented in ES6, but not all.
 */

function mySet(){
    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };

    this.values = function(){
        return collection;
    };

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };

    this.size = function(){
        return collection.length;
    };

    this.union = function(otherset){
        var unionset = new mySet();
        var firstset = this.values();
        var secondset = otherset.values();
        firstset.forEach(function(e){
            unionset.add(e);
        });
        secondset.forEach(function(e){
            unionset.add(e);
        });
        return unionset;
    };

    this.intersection = function(otherset){
        var intersectionset = new mySet();
        var firstSet = this.values();
        var secondSet = otherset.values();
        firstSet.forEach(function (e) {
            if(secoundSet.has(e)){
                intersectionset.add(e);
            }
        });
        return intersectionset;
    }

    this.difference = function (otherset) {
        var differenceset = new mySet();
        var firstset = this.values();
        var secoundset = otherset.values();
        firstset.forEach(function (e) {
            if(!secoundset.has(e)){
                differenceset.add(e);
            }
        });
        return differenceset;
    }

    this.subset = function (otherset){
        firstset = this.values();
        secondset = otherset.values();
        firstset.every(function (value) {
            return otherset.has(value);
        });
    }; 

}