let i=0;
let sum=0;

function addRec(arr){
    sum += arr[i];
    if (arr.length -1 === i){
        return sum;
    }
    i++;
    return addRec(arr);
}

var arr = [ 1, 3, 5, 7];
console.log(addRec(arr));
