console.log("Hello World!")

function bubbleSort(arr){
    while (!sorted){
        for(let i=0;i<arr.length;i++){
            var sorted = true;
            for(let j=0;j<arr.length-1;j++){
                if(arr[j]>arr[j+1]){
                    let swap = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = swap;
                    sorted = false;
                }
            }
        }
        return arr;
    }
}

var result = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,44444455,5555555])
console.log(result);