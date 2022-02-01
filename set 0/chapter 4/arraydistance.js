function verifyarray(x,y){
    return (Array.isArray(x) && Array.isArray(y) && x.length === y.length)
}

function distofarray(x,y){
    var sum=0;
    let arr1= [... x];
    let arr2= [... y];
    for(let i=0; i<arr1.length ; i++){
       sum+=Math.pow(arr1[i]-arr2[i],2);
    }
    return Math.sqrt(sum);
}

function dist(){
    let sum=0;
    for(let i=0; i<(arguments.length/2) ; i++){
        var foo=0;
        foo=Math.pow(arguments[i]-arguments[i+arguments.length/2],2)
        sum=foo+sum;
        }
        return Math.sqrt(sum);
}

function distance(){
    switch(true){
        case (arguments.length<=2):
            if(verifyarray(arguments[0],arguments[1]))
            {return distofarray(arguments[0],arguments[1])}
            else{console.error("Incompatible point data")}
            break;
        case(arguments.length%2==1&&arguments.length<6):
            console.error("insufficient parameters");
            break;
        case (arguments.length>6):
            console.error("exceed the parameters");
            break;
        case (arguments.length===4):
            return dist(arguments[0],arguments[1],arguments[2],arguments[3]);
            break;
        case (arguments.length===6):
            return dist(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
            break;
    }
}

console.log(distance([1,2,3],[1,2,2]));
