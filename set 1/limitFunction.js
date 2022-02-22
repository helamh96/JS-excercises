const fun = (a,b) => a+b;

function limitFunc(fn, num){
    let counter = 0;
    let r;
    function limiting(...input){
        if (counter< num){
            counter++;
            r = fn(...input)
            return r;
        }
    }
    return limiting;
}


var limited = limitFunc(fun, 3);

limited(1,3);
limited(1,3);
limited(1,3);
limited(1,3);
