function add(){
    var sum=0;
    for(var i=0; i<arguments.length; i++){
        sum=arguments[i]+sum;
    }
    return sum;
}

var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);

console.log(answer);
