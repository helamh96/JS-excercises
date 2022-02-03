function doSomething(){
    console.log("hi, i'm doing something");
}

function limitFunc(fn, num){
    let c = 0;
    function lim(){
        if (c<num){
            c++;
            return fn();
        }
        console.log("you exceed the amount of times the function can be excecuted");
    }
    return lim;
}

var limited = limitFunc(doSomething,2);

limited();
limited();
limited();
