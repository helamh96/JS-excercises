
function verifyarray(x,y){
    if (Array.isArray(x)){
        if(Array.isArray(y)){
            if(x.length == y.length){
                return true;
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

function distofarray(x,y){
    var sum=0;
    let arr1= [... x];
    let arr2= [... y];
    for(let i=0; i<=arr1.length - 1; i++){
       sum+=Math.pow(arr1[i]-arr2[i],2);
    }
    return Math.sqrt(sum);
}

function dist(){
    let sum=0;
    for(let i=0; i<(arguments.length/2) ; i++){
        var foo=0;
        foo=(arguments[i]-arguments[i+arguments.length/2])*(arguments[i]-arguments[i+arguments.length/2]);
        sum=foo+sum;
        }
        return Math.sqrt(sum);
}

function distance(){
    switch(true){
        case (arguments.length<=2):
            if(verifyarray(arguments[0],arguments[1])==true)
            {return distofarray(arguments[0],arguments[1])}
            else{return "error:incompatible point data"}
            break;
        case(arguments.length%2==1):
            return console.log("insufficient parameters");
            break;
        case (arguments.length>6):
            return console.log("error: exceed the parameters");
            break;
        case (arguments.length==4 || arguments.length==6):
            return dist(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
            break;
    }
    return "";
}

console.log(distance([1,2,3],[1,2,2]));
