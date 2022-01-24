let numHolder ={};

function verifyNum(x){
    if(typeof x == "number"){
        numHolder.a=x;
    }
    else{
        console.log("this is not a number");
    }
}

num=1;
verifyNum(num);
console.log(numHolder);
