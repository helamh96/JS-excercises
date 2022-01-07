function addRec(x,n) {
    if (n<=0)
        return 0;
    else{
        return(addRec(x,n-1)+x[n-1]);
    }
}

var arr = [ 1, 3, 5, 7];
var sum = addRec (arr, arr.length);
