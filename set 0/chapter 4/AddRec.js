function sum(array){
    if(array.length===0){return 0}
    else{
        return array[0]+sum(array.slice(1));
    }
}

let nArray=[1,2,3];
let nSum = sum(nArray);
console.log(nSum);   //sum is 6
console.log(nArray);    //the original array is not destroyed
