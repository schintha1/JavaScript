/*
First in first out
examples: Waiting queue

 */
function queue() {
    collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function(element) {
        collection.push(element);
    };

    this.dequeue = function() {
        return collection.shift();
    };

    this.front = function () {
        return collection[0];
    };

    this.size = function (){
        return collection.length;
    }

    this.isempty = function(){
        return (collection.length === 0)
    };
};


/*
Creating a queue with a priority queue
In priority queue, the priority is also send along with the element. The priority queue behaves the same as the normal queue when the
priorities are all equal to one. When implementing a priority queue all methods are same as normal queue except "enqueue"
 */
