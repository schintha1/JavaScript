function mergeSort(arr){
    let divide = arr.map(num => [num]);
    while (divide.length > 1){
        let temp = [];
        for(let i=0; i< divide.length;i+=2){
            if(divide.length%2 !== 0 && i=== divide.length - 1){
                temp.push(divide[i]);
            }
            else{
                temp.push(merge(divide[i], divide[i+1]));
            }
        }
        divide = temp;
    }
    return divide;
}

/*function merge(arrA, arrB){
    let l=0;
    let r=0;
    const sortArray =[];
    while(sortArray.length !== (arrA.length + arrB.length)){
        if(arrA[l]===undefined || arrB[r] < arrA[l]){
            sortArray.push(arrB[r]);
            r++;
        }
        else if(arrB[r]===undefined || arrA[l] < arrB[r]){
            sortArray.push(arrA[l]);
            l++;
        }
    }
    return sortArray;
}*/

function merge (arrA, arrB) {
    const merged = [];
    let j = 0;
    let k = 0;

    while (merged.length !== (arrA.length + arrB.length)) {
         if (arrA[j] === undefined || arrA[j] > arrB[k]) {
            merged.push(arrB[k]);
            k++;
        }
        else if (arrB[k] === undefined || arrA[j] <= arrB[k]) {
            merged.push(arrA[j]);
            j++;
        }
    }
    return merged;
}





//console.log(merge([4,3], [1,3]))

console.log(mergeSort([9,90,87,2,1,5,4,9876,987654,9878]))