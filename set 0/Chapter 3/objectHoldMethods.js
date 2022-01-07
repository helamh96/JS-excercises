let myMath={
    add: function add(){
        var sum=0;
    for(var i=0; i<arguments.length; i++){
        sum=arguments[i]+sum;
    }
    return sum;
    },
    
    mul: function mul(){
        var mul=1;
    for(var i=0; i<arguments.length; i++){
        mul=arguments[i]*mul;
    }
    return mul;
    },
    
    fact: function fact(x){
        var fact=1;
    for(x; x>0; x--){
        fact=x*fact;
    }
    return fact;
    },
}

var a = myMath.add (1, 2, 3);
var b = myMath.mul (1, 2, 3); 
var c = myMath.fact (3); 


console.log(a);
console.log(b);
console.log(c);
