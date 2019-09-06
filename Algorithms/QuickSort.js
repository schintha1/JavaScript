function quickSort(array){
    if(array.length > 1){
        let leftPointer = 0;
        let rightPointer = array.length-1;
        let pivot = array[Math.round(array.length/2) - 1];
        while(leftPointer <= rightPointer){
            if(array[leftPointer] <= pivot){
                leftPointer++;
            }
            else if(array[rightPointer] > pivot){
                rightPointer--;
            }
            else{
                let swap = array[leftPointer];
                array[leftPointer] = array[rightPointer];
                array[rightPointer] = swap;
                leftPointer++;
                rightPointer--;
            }
        }
        console.log((array.slice(0,Math.round(array.length/2) - 1)))
        console.log((array.slice(Math.round(array.length/2) - 1)))
    }
    return array;
}

console.log(quickSort([5,2,3,4,6]));

//https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort