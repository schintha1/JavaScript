/*
# arr1 = "17g 12 25 6"
# arr2 = "175 echo dot"
# arr3 = "17f 12 25 6"
# arr4= "176 echo dot"
# arr5 = "174 echo dot"
# arr6 = "180 echo aot"
# arr7 = "182 echo eot"
# arr8 = "181 echo fot"

*/

/*var arr = [];

var mapAlpha = new Map();
var alpha = [];
var nonalpha = [];


for(i=0;i<arr.length;i++){
    var key = arr[i].substr(0,arr[i].indexOf(' '));
    var value = arr[i].substr(arr[i].indexOf(' ')+1);
    if(value.match(/[a-z]/i)){
        mapAlpha.set(key,value);
    } else {
        nonalpha.push(arr[i]);
    }
}

mapAlpha [Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => a[1] > b[1]);
}


console.log(mapAlpha);

for(let [k,v] of mapAlpha){

}*/
/*
var result = alpha.concat(nonalpha);
console.log(result);
var mySet = new Set();
for(var i =0; i<result.length-1;i++){
    if(result[i].substr(result[i].indexOf(' ')+1) == result[i+1].substr(result[i+1].indexOf(' ')+1)){
        start = i;
        mySet.add(result[i].substr(0,result[i].indexOf(' ')));
        mySet.add(result[i].substr(0,result[i].indexOf(' ')));
    }
    (Array.from(mySet).sort());
}
console.log(mySet.entries());
*/


/*
Front-end process time and Back-end process time given find the most efficient processes which fits in the computer processing time
 */

/*
var deviceCapacity = 10;
forGroundAppList = [[1,3],[2,5],[3,7],[4,10]];
backGroundAppList = [[1,2],[2,3],[3,4],[4,5]];

function procesesTime( deviceCapacity, forGroundAppList=[], backGroundAppList=[]) {
    var result = [];
    for (var i = 0; i < forGroundAppList.length; i++) {
        for(var j=0;j < backGroundAppList.length;j++){
                if ((forGroundAppList[i][1] + backGroundAppList[j][1]) <= deviceCapacity) {
                    result.push([[forGroundAppList[i][0],forGroundAppList[i][1]],[backGroundAppList[j][0],backGroundAppList[j][1]],forGroundAppList[i][1] + backGroundAppList[j][1]]);
                }
        }
    }
    return result;
}
console.log(procesesTime(10, [[1,3],[2,5],[3,7],[4,10]], [[1,2],[2,3],[3,4],[4,5]]));
*/



//Check if  a string is the substring ob the another string
//s1: "abcdef"'
//s2 = ["ad","cd","af","eg"];
//Output = [false,true,false,false];
/*function stringContains(s1, s2){
    let result = [];
    let arrayString = s2.split(" ")
    for(let i=0; i< arrayString.length;i++){
        result[i] = "false";
        let j= 0;
        let k= 0;
        while(arrayString[i][j] && s1[k]){
            console.log("i"+i);
            console.log("j"+j);
            console.log("k"+k);

            if(arrayString[i][j] == s1[k]){
                if(j == arrayString[i].length-1){
                    result[i] = "true";
                }
                j++;
                k++;
            }
            else if(arrayString[i][j] != s1[k] ){
                k++;
                j=0;
            }

        }
    }
    return result;
}

console.log(stringContains("adcdef", "ad cd af eg"));

s1 = ["ad", "cd", "af", "eg"];
console.log(s1[0][0]);*/


































