function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]<arr[i]){
            for(let j=i+1; j>=0;j--){
                if(arr[j]<arr[j-1]){
                    swap = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = swap;
                }
            }
        }
    }
    return arr;
}

console.log(insertionSort([2,4,3,12, 11, 9, 5, 6]));