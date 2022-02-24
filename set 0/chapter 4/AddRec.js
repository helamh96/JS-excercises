function addRec(array, i=0, sum=0){
    sum += array[i];
    if (array.length -1 === i){
        return sum;
    }
    return addRec(array, i+1, sum);
}


let nArray=[1,2,3];
let nSum = addRec(nArray);
console.log(nSum);   //sum is 6
console.log(nArray);    //the original array is not destroyed
