function distance(){
    if(arguments.length>6){return "exceed the cuantity of parameters";}
    if(arguments.length<=2 || arguments.length % 2 == 1)
    {return "Insufficient parameters";}
    else{
        let sum=0;
        for(let i=0; i<(arguments.length/2) ; i++){
            var foo=0;
            foo=(arguments[i]-arguments[i+arguments.length/2])*(arguments[i]-arguments[i+arguments.length/2]);
            sum=foo+sum;
        }
        return Math.sqrt(sum);
    }
}

console.log(distance(1,2,2,3,3,4));
